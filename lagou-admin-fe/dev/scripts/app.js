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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const homeTpl = __webpack_require__(/*! ./views/home.html */ \"./src/scripts/views/home.html\");\r\nconst positionTpl = __webpack_require__(/*! ./views/position.html */ \"./src/scripts/views/position.html\");\r\n//这里只是做了一个假的路由,给首页和职业两个li标签添加 link自定义属性,用来连接转换渲染页面\r\n$('.sidebar-menu li[link]')//选择ul标签下的 带link属性的li标签\r\n     .on('click', function(){\r\n    //     switch($(this).attr('link')) {\r\n    //         case 'home.html':\r\n    //             $('.content').html(homeTpl);\r\n    //             break;\r\n    //         case 'position.html':\r\n    //             $('.content').html(positionTpl);\r\n    //             break;\r\n    //     }\r\n     /*$('.content').html($(this).attr('link'));*/ //这一句相当于上面代码\r\n    \r\n     let map = new Map();\r\n     map.set('home.html', homeTpl);\r\n     map.set('position.html', positionTpl);\r\n\r\n     $('.content').html(map.get($(this).attr('link')))\r\n            \r\n    })\n\n//# sourceURL=webpack:///./src/scripts/app.js?");

/***/ }),

/***/ "./src/scripts/views/home.html":
/*!*************************************!*\
  !*** ./src/scripts/views/home.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>home</div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/home.html?");

/***/ }),

/***/ "./src/scripts/views/position.html":
/*!*****************************************!*\
  !*** ./src/scripts/views/position.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>position</div>\"\n\n//# sourceURL=webpack:///./src/scripts/views/position.html?");

/***/ })

/******/ });