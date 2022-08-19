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

/***/ "./src/showtask.js":
/*!*************************!*\
  !*** ./src/showtask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showtasks)\n/* harmony export */ });\nfunction showtasks(task, index) {\n    const newtaskdiv = document.createElement(\"div\");\n    newtaskdiv.id = \"taskdiv\";\n    newtaskdiv.setAttribute(\"data\", index);\n    newtaskdiv.classList.add(\"task\");\n  \n    const tasktitle = document.createElement(\"div\");\n    tasktitle.classList.add(\"tasktitle\");\n    tasktitle.innerText = task.title;\n    newtaskdiv.append(tasktitle);\n  \n    const description = document.createElement(\"div\");\n    description.classList.add(\"taskdetails\");\n    description.innerText = task.description;\n    newtaskdiv.append(description);\n  \n    const duedate = document.createElement(\"div\");\n    duedate.classList.add(\"taskduedate\");\n    duedate.innerText = task.duedate;\n    newtaskdiv.append(duedate);\n  \n    const remove = document.createElement(\"button\");\n    remove.innerText = \"Remove\";\n    remove.classList = \"remove\";\n    remove.id = index;\n    remove.setAttribute(\"data\", index);\n    newtaskdiv.append(remove);\n    taskinfo.append(newtaskdiv);\n  }\n  \n\n//# sourceURL=webpack://todolist/./src/showtask.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/showtask.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;