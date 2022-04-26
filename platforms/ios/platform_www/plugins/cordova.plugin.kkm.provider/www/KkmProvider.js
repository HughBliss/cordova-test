cordova.define("cordova.plugin.kkm.provider.KkmProvider", function(require, exports, module) {
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

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRegistrationInfo\": () => (/* binding */ getRegistrationInfo)\n/* harmony export */ });\n/* harmony import */ var _services_Kkm_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/Kkm.service */ \"./src/js/services/Kkm.service.ts\");\n\r\nfunction getRegistrationInfo(printer) {\r\n    return new _services_Kkm_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"](printer).getRegistrationInfo();\r\n}\r\n\n\n//# sourceURL=webpack://cordova-plugin-atol-provider/./src/js/index.ts?");

/***/ }),

/***/ "./src/js/interfaces/IPrinter.ts":
/*!***************************************!*\
  !*** ./src/js/interfaces/IPrinter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PrinterBrand\": () => (/* binding */ PrinterBrand)\n/* harmony export */ });\nvar PrinterBrand;\r\n(function (PrinterBrand) {\r\n    PrinterBrand[\"ATOL\"] = \"ATOL\";\r\n    PrinterBrand[\"SHTRIH_M\"] = \"SHTRIH_M\";\r\n    PrinterBrand[\"VIKI_PRINT\"] = \"VIKI_PRINT\";\r\n})(PrinterBrand || (PrinterBrand = {}));\r\n\n\n//# sourceURL=webpack://cordova-plugin-atol-provider/./src/js/interfaces/IPrinter.ts?");

/***/ }),

/***/ "./src/js/services/Atol/Atol.service.ts":
/*!**********************************************!*\
  !*** ./src/js/services/Atol/Atol.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_cordova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/cordova */ \"./src/js/utils/cordova.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\nvar AtolService = /** @class */ (function () {\r\n    function AtolService(printer) {\r\n        this.printer = printer;\r\n    }\r\n    AtolService.prototype.getRegistrationInfo = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, (0,_utils_cordova__WEBPACK_IMPORTED_MODULE_0__.cordovaExec)(\"getRegistrationInfo\", [this.printer])];\r\n            });\r\n        });\r\n    };\r\n    AtolService.prototype.openShift = function (name, vatin) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, (0,_utils_cordova__WEBPACK_IMPORTED_MODULE_0__.cordovaExec)(\"getRegistrationInfo\", [])];\r\n            });\r\n        });\r\n    };\r\n    AtolService.prototype.closeShift = function (name, vatin) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, (0,_utils_cordova__WEBPACK_IMPORTED_MODULE_0__.cordovaExec)(\"getRegistrationInfo\", [])];\r\n            });\r\n        });\r\n    };\r\n    AtolService.prototype.reportX = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, (0,_utils_cordova__WEBPACK_IMPORTED_MODULE_0__.cordovaExec)(\"getRegistrationInfo\", [])];\r\n            });\r\n        });\r\n    };\r\n    AtolService.prototype.isSessionOpened = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, (0,_utils_cordova__WEBPACK_IMPORTED_MODULE_0__.cordovaExec)(\"getRegistrationInfo\", [])];\r\n            });\r\n        });\r\n    };\r\n    AtolService.prototype.isSessionExpired = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, (0,_utils_cordova__WEBPACK_IMPORTED_MODULE_0__.cordovaExec)(\"getRegistrationInfo\", [])];\r\n            });\r\n        });\r\n    };\r\n    AtolService.prototype.precheckDocument = function (data) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, (0,_utils_cordova__WEBPACK_IMPORTED_MODULE_0__.cordovaExec)(\"getRegistrationInfo\", [])];\r\n            });\r\n        });\r\n    };\r\n    AtolService.prototype.fiscalDocument = function (data) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, (0,_utils_cordova__WEBPACK_IMPORTED_MODULE_0__.cordovaExec)(\"getRegistrationInfo\", [])];\r\n            });\r\n        });\r\n    };\r\n    AtolService.prototype.depositDocument = function (data) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, (0,_utils_cordova__WEBPACK_IMPORTED_MODULE_0__.cordovaExec)(\"getRegistrationInfo\", [])];\r\n            });\r\n        });\r\n    };\r\n    return AtolService;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AtolService);\r\n\n\n//# sourceURL=webpack://cordova-plugin-atol-provider/./src/js/services/Atol/Atol.service.ts?");

/***/ }),

/***/ "./src/js/services/Kkm.service.ts":
/*!****************************************!*\
  !*** ./src/js/services/Kkm.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _interfaces_IPrinter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/IPrinter */ \"./src/js/interfaces/IPrinter.ts\");\n/* harmony import */ var _Atol_Atol_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Atol/Atol.service */ \"./src/js/services/Atol/Atol.service.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\n\r\n\r\nvar KkmService = /** @class */ (function () {\r\n    function KkmService(printer) {\r\n        this.printer = printer;\r\n        this.service = this.getServiceByPrinter(printer);\r\n    }\r\n    KkmService.prototype.getServiceByPrinter = function (printer) {\r\n        switch (printer.brand) {\r\n            case _interfaces_IPrinter__WEBPACK_IMPORTED_MODULE_0__.PrinterBrand.ATOL:\r\n                return new _Atol_Atol_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"](printer);\r\n            case _interfaces_IPrinter__WEBPACK_IMPORTED_MODULE_0__.PrinterBrand.SHTRIH_M:\r\n                return new _Atol_Atol_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"](printer);\r\n            case _interfaces_IPrinter__WEBPACK_IMPORTED_MODULE_0__.PrinterBrand.VIKI_PRINT:\r\n                return new _Atol_Atol_service__WEBPACK_IMPORTED_MODULE_1__[\"default\"](printer);\r\n        }\r\n    };\r\n    KkmService.prototype.getRegistrationInfo = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, this.service.getRegistrationInfo()];\r\n            });\r\n        });\r\n    };\r\n    KkmService.prototype.openShift = function (name, vatin) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, this.service.openShift(name, vatin)];\r\n            });\r\n        });\r\n    };\r\n    KkmService.prototype.closeShift = function (name, vatin) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, this.service.closeShift(name, vatin)];\r\n            });\r\n        });\r\n    };\r\n    KkmService.prototype.reportX = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, this.service.reportX()];\r\n            });\r\n        });\r\n    };\r\n    KkmService.prototype.isSessionOpened = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, this.service.isSessionOpened()];\r\n            });\r\n        });\r\n    };\r\n    KkmService.prototype.isSessionExpired = function () {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, this.service.isSessionExpired()];\r\n            });\r\n        });\r\n    };\r\n    KkmService.prototype.precheckDocument = function (data) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, this.service.precheckDocument(data)];\r\n            });\r\n        });\r\n    };\r\n    KkmService.prototype.fiscalDocument = function (data) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, this.service.fiscalDocument(data)];\r\n            });\r\n        });\r\n    };\r\n    KkmService.prototype.depositDocument = function (data) {\r\n        return __awaiter(this, void 0, void 0, function () {\r\n            return __generator(this, function (_a) {\r\n                return [2 /*return*/, this.service.depositDocument(data)];\r\n            });\r\n        });\r\n    };\r\n    return KkmService;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KkmService);\r\n\n\n//# sourceURL=webpack://cordova-plugin-atol-provider/./src/js/services/Kkm.service.ts?");

/***/ }),

/***/ "./src/js/utils/cordova.ts":
/*!*********************************!*\
  !*** ./src/js/utils/cordova.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cordovaExec\": () => (/* binding */ cordovaExec)\n/* harmony export */ });\n/* harmony import */ var cordova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cordova */ \"cordova\");\n/* harmony import */ var cordova__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cordova__WEBPACK_IMPORTED_MODULE_0__);\n\r\nfunction cordovaExec(method, args) {\r\n    return new Promise(function (resolve, reject) {\r\n        cordova__WEBPACK_IMPORTED_MODULE_0__.exec(resolve, reject, \"KkmProvider\", method, args);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://cordova-plugin-atol-provider/./src/js/utils/cordova.ts?");

/***/ }),

/***/ "cordova":
/*!**************************!*\
  !*** external "cordova" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("cordova");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.ts");
/******/ 	exports.getRegistrationInfo = __webpack_exports__.getRegistrationInfo;
/******/ 	Object.defineProperty(exports, "__esModule", { value: true });
/******/ 	
/******/ })()
;
});
