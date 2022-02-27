/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/changeBackground.js":
/*!************************************************!*\
  !*** ./public/javascripts/changeBackground.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeBackground\": () => (/* binding */ changeBackground)\n/* harmony export */ });\nconst changeBackground = () => {\n    var btns = Array.from(document.getElementsByClassName(\"colors\"));\n    var clearCs = (cs, def) => {\n        for (let i = 0; i < cs.length; i++) {\n            cs[i].setAttribute('class', def);\n        }\n    };\n\n    for (let i = 0; i < btns.length; i++) {\n        btns[i].onclick = () => {\n            clearCs(btns, 'colors');\n            document.body.style.backgroundColor = btns[i].value;\n            btns[i].setAttribute('class', 'colors this');\n        };\n    }\n};\n\n//# sourceURL=webpack://mindmap/./public/javascripts/changeBackground.js?");

/***/ }),

/***/ "./public/javascripts/clock.js":
/*!*************************************!*\
  !*** ./public/javascripts/clock.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clock\": () => (/* binding */ clock)\n/* harmony export */ });\nconst clock = () => {\n    var d = new Date();\n    const dayname = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];\n    var year = d.getFullYear();\n    var month = d.getMonth() + 1;\n    var date = d.getDate();\n    var dayofweek = d.getDay();\n    var hour = d.getHours();\n    var minute = d.getMinutes();\n    var second = d.getSeconds();\n\n    month = month < 10 ? \"0\" + month : month;\n    date = date < 10 ? \"0\" + date : date;\n    hour = hour < 10 ? \"0\" + hour : hour;\n    minute = minute < 10 ? \"0\" + minute : minute;\n    second = second < 10 ? \"0\" + second : second;\n    document.getElementsByClassName(\"clock\")[0].innerHTML = year + \"/\" + month + \"/\" + date + \"/\" + dayname[dayofweek] + ' ' + hour + \":\" + minute + \":\" + second;\n};\n\n//# sourceURL=webpack://mindmap/./public/javascripts/clock.js?");

/***/ }),

/***/ "./public/javascripts/spmenu.js":
/*!**************************************!*\
  !*** ./public/javascripts/spmenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\n    spmenu.onclick = () => {\n        document.getElementById(\"spNav\").style.display = \"block\";\n        document.getElementById(\"spmenu\").style.display = \"none\";\n        document.getElementById(\"spmenuClose\").style.display = \"block\";\n    };\n\n    spmenuClose.onclick = () => {\n        document.getElementById(\"spNav\").style.display = \"none\";\n        document.getElementById(\"spmenu\").style.display = \"block\";\n        document.getElementById(\"spmenuClose\").style.display = \"none\";\n    };\n};\n\n//# sourceURL=webpack://mindmap/./public/javascripts/spmenu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_javascripts_spmenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/javascripts/spmenu */ \"./public/javascripts/spmenu.js\");\n/* harmony import */ var _public_javascripts_changeBackground__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/javascripts/changeBackground */ \"./public/javascripts/changeBackground.js\");\n/* harmony import */ var _public_javascripts_clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/javascripts/clock */ \"./public/javascripts/clock.js\");\n\n(0,_public_javascripts_spmenu__WEBPACK_IMPORTED_MODULE_0__.menu)();\n\n(0,_public_javascripts_changeBackground__WEBPACK_IMPORTED_MODULE_1__.changeBackground)();\n\n(0,_public_javascripts_clock__WEBPACK_IMPORTED_MODULE_2__.clock)();\nsetInterval(_public_javascripts_clock__WEBPACK_IMPORTED_MODULE_2__.clock, 1000);\n\n//# sourceURL=webpack://mindmap/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;