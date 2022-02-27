module.exports = {
    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/index.js`,
  
    // ファイルの出力設定
    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/public/dist`,
      // 出力ファイル名
      filename: "main.js"
    },

    mode: "development"
  };