const bcrypt = require('bcrypt');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const crypto = require('crypto');
const { check, validationResult } = require('express-validator');
const express = require('express');
const flash = require('connect-flash');
const fs = require('fs');
const http = require('http');
const logger = require('morgan');
const nodemailer = require('nodemailer');
const mysql2 = require('mysql2');
const mustacheExpress = require('mustache-express');
const path = require('path');
const passport = require('./auth');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const session = require('express-session');

const User = require('./models').Users;
const IdeaSheets = require('./models').IdeaSheets;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

/*-------------------------------------------------------------*/
// view engine setup of ejs
//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

// view engine setup of jade
//app.set('view engine', 'jade');
//app.set('views', path.join(__dirname, 'views', 'error'));

// view engine setup of mustache
app.engine('mst', mustacheExpress());
app.set('view engine', 'mst');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const httpServer = http.Server(app);
httpServer.listen(80, () => {
  process.setuid(1000);
  console.log('Server Started');
});

/*-------------------------------------------------------------*/
// MySQL
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'developer',
  password: '@Developer000',
  database: 'Mindmap',
  port: '3306'
});

connection.connect((err) => {
  if (err) {
    console.log('error connecting: ' + err.stack);
    return;
  }
  console.log('Server connecting success');
});

/*-------------------------------------------------------------*/
// catch 404 and forward to error handler
/*app.use(function (req, res, next) {
  next(createError(404));
});*/

// error handler
/*app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error.ejs', { str: [{ message: res.locals.message, error: res.locals.error }] });
});*/
/*-------------------------------------------------------------*/
//ログイン機能
// ミドルウェア
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
  secret: 'YOUR-SECRET-STRING',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
// 暗号化につかうキー
const APP_KEY = 'YOUR-SECRET-KEY';

/*-------------------------------------------------------------*/
//ログイン機能
const authMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) { // ログインしてるかチェック
    next();
  } else if (req.cookies.remember_me) {
    const [rememberToken, hash] = req.cookies.remember_me.split('|');

    User.findAll({
      where: {
        rememberToken: rememberToken
      }
    }).then(users => {
      for (let i in users) {
        const user = users[i];
        const verifyingHash = crypto.createHmac('sha256', APP_KEY)
          .update(user.id + '-' + rememberToken)
          .digest('hex');

        if (hash === verifyingHash) {
          return req.login(user, () => {
            // セキュリティ的はここで remember_me を再度更新すべき
            next();
          });
        }
      }
      res.redirect(302, '/login');
    });

  } else {
    res.redirect(302, '/login');
  }
};
/*-------------------------------------------------------------*/
// ログイン実行
app.post('/login',
  passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true,
    badRequestMessage: '「メールアドレス」と「パスワード」は必須入力です。'
  }),
  (req, res, next) => {
    if (!req.body.remember) { // 次回もログインを省略しない場合
      res.clearCookie('remember_me');
      return next();
    }

    const user = req.user;
    const rememberToken = crypto.randomBytes(20).toString('hex'); // ランダムな文字列
    const hash = crypto.createHmac('sha256', APP_KEY)
      .update(user.id + '-' + rememberToken)
      .digest('hex');
    user.rememberToken = rememberToken;
    user.save();

    res.cookie('remember_me', rememberToken + '|' + hash, {
      path: '/',
      maxAge: 5 * 365 * 24 * 60 * 60 * 1000 // 5年
    });

    return next();
  },
  (req, res) => {
    res.redirect('/home');
  }
);
/*-------------------------------------------------------------*/
//ログイン前トップページ
app.get('/mindmap', (req, res) => {
  res.render('pages/MindMap_login.ejs');
});

//ユーザー登録フォーム
app.get('/register', (req, res) => {
  return res.render('auth/register');
});

// ログインフォーム
app.get('/login', (req, res) => {
  const errorMessage = req.flash('error').join('<br>');
  res.render('login/form', {
    errorMessage: errorMessage
  });
});

// ログイン成功後のページ
app.get('/home', authMiddleware, (req, res) => {
  const user = req.user;
  res.render('pages/MindMap_home.ejs');
});

//ログアウト処理
app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/login');
});
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/


module.exports = app;
