/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createMenu;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__menu_scss__);


function createMenu(arr, className) {
    let newUl = document.createElement('ul');
    newUl.className = className;
    // arr.forEach( (i) => newUl.innerHTML += `<li>${i}</li>`);
    newUl.innerHTML = arr.map( (i) => `<li>${i} + maps </li>`).join(' ');
    return newUl;
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: E:\\webpack\\practice\\1loft_new\\src\\pages\\components\\menu\\menu.scss Unexpected token (1:3)\nYou may need an appropriate loader to handle this file type.\n| ul {\r\n|     display: flex;\r\n|     padding: 5px;\r");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: E:\\webpack\\practice\\1loft_new\\src\\pages\\blog\\blog.scss Unexpected token (1:3)\nYou may need an appropriate loader to handle this file type.\n| h1 {\r\n|     color: blue;\r\n| }");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blog_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blog_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__blog_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_menu_menu__ = __webpack_require__(0);



var menu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__components_menu_menu__["a" /* default */])(['sokol', 'falcon'], 'main-menu')
document.body.appendChild(menu);

console.log('in blog.js');


/***/ })
/******/ ]);