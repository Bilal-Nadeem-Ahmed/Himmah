module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Footer/index.js":
/*!************************************!*\
  !*** ./Components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap-icons */ \"react-bootstrap-icons\");\n/* harmony import */ var react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/bilal/Documents/github/Himmah/Components/Footer/index.js\";\n\n\nconst Footer = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    id: \"footer\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"footeritems\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"#\",\n        children: \"Contact Us\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"https://www.facebook.com/wearehimmah/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__[\"Facebook\"], {\n          color: \"grey\",\n          size: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 7,\n          columnNumber: 63\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"mailto:info@himmah.org\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__[\"EnvelopeFill\"], {\n          color: \"grey\",\n          size: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 45\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 12\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"tel:01158714426\",\n        children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap_icons__WEBPACK_IMPORTED_MODULE_1__[\"TelephoneFill\"], {\n          color: \"grey\",\n          size: 30\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 41\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 4,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL0Zvb3Rlci9pbmRleC5qcz80NzVhIl0sIm5hbWVzIjpbIkZvb3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBLE1BQU1BLE1BQU0sR0FBRyxNQUFNO0FBQ2pCLHNCQUNJO0FBQUssTUFBRSxFQUFDLFFBQVI7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEsOEJBQ0E7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxlQUVBO0FBQUcsWUFBSSxFQUFHLHVDQUFWO0FBQUEsK0JBQWtELHFFQUFDLDhEQUFEO0FBQVUsZUFBSyxFQUFDLE1BQWhCO0FBQXVCLGNBQUksRUFBRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkEsZUFHRDtBQUFHLFlBQUksRUFBQyx3QkFBUjtBQUFBLCtCQUFpQyxxRUFBQyxrRUFBRDtBQUFjLGVBQUssRUFBQyxNQUFwQjtBQUEyQixjQUFJLEVBQUU7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhDLGVBSUE7QUFBRyxZQUFJLEVBQUUsaUJBQVQ7QUFBQSxxQ0FBNEIscUVBQUMsbUVBQUQ7QUFBZSxlQUFLLEVBQUMsTUFBckI7QUFBNEIsY0FBSSxFQUFFO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFZSCxDQWJEOztBQWVlQSxxRUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGYWNlYm9vayxFbnZlbG9wZUZpbGwsVGVsZXBob25lRmlsbH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwLWljb25zJ1xuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoIFxuICAgICAgICA8ZGl2IGlkPSdmb290ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcml0ZW1zJz5cbiAgICAgICAgICAgIDxhIGhyZWY9JyMnPkNvbnRhY3QgVXM8L2E+XG4gICAgICAgICAgICA8YSBocmVmID0gJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS93ZWFyZWhpbW1haC8nPjxGYWNlYm9vayBjb2xvcj0nZ3JleScgc2l6ZT17MzB9Lz48L2E+XG4gICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86aW5mb0BoaW1tYWgub3JnXCI+PEVudmVsb3BlRmlsbCBjb2xvcj0nZ3JleScgc2l6ZT17MzB9Lz48L2E+XG4gICAgICAgICAgICA8YSBocmVmID0ndGVsOjAxMTU4NzE0NDI2Jz4gPFRlbGVwaG9uZUZpbGwgY29sb3I9J2dyZXknIHNpemU9ezMwfS8+PC9hPlxuICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICApO1xufVxuIFxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Footer/index.js\n");

/***/ }),

/***/ "./Components/Nav/index.js":
/*!*********************************!*\
  !*** ./Components/Nav/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/bilal/Documents/github/Himmah/Components/Nav/index.js\";\n\n\nconst Navigation = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"], {\n    bg: \"light\",\n    fixed: \"top\",\n    expand: \"lg\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Brand, {\n      href: \"#home\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"https://static1.squarespace.com/static/5d944e82da8bd81bea8ea1b7/t/5ee92f1755fd771bd65a283b/1609511342452/?format=1500w\",\n        width: \"auto\",\n        height: \"auto\",\n        className: \"d-inline-block align-top\",\n        alt: \" logo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Toggle, {\n      \"aria-controls\": \"basic-navbar-nav\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Navbar\"].Collapse, {\n      id: \"basic-navbar-nav\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"], {\n        className: \"mr-auto\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"], {\n          title: \"Donate\",\n          id: \"basic-nav-dropdown\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.1\",\n            children: \"Virtual Food Donation\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Divider, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"https://cafdonate.cafonline.org/3767#!/DonationDetails\",\n            children: \"Donate Now\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n          href: \"#home\",\n          children: \"Home\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n          href: \"#home\",\n          children: \"Himmah Food Bank\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n          href: \"#home\",\n          children: \"Nottingham Peoples Pantry\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n          href: \"#home\",\n          children: \"Covid 19 Chrisis Referral\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"], {\n          title: \"What We Do\",\n          id: \"basic-nav-dropdown\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.1\",\n            children: \"Tackling Poverty\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.1\",\n            children: \"Tackling Hate\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.2\",\n            children: \"Food Bank\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.2\",\n            children: \"Nottingham People's Pantry\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.2\",\n            children: \"Muslim Memory Project\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.2\",\n            children: \"Race & Islamophobia Helpline\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Divider, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.4\",\n            children: \"Salaam Shalom Kitchen\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"NavDropdown\"].Item, {\n            href: \"#action/3.4\",\n            children: \"Community Safety Forum\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 13\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__[\"Nav\"].Link, {\n          href: \"#home\",\n          children: \"Contact Us\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 13\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9Db21wb25lbnRzL05hdi9pbmRleC5qcz9iNTUxIl0sIm5hbWVzIjpbIk5hdmlnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUNyQixzQkFFSSxxRUFBQyxzREFBRDtBQUFRLE1BQUUsRUFBQyxPQUFYO0FBQW1CLFNBQUssRUFBQyxLQUF6QjtBQUErQixVQUFNLEVBQUMsSUFBdEM7QUFBQSw0QkFDQSxxRUFBQyxzREFBRCxDQUFRLEtBQVI7QUFBYyxVQUFJLEVBQUMsT0FBbkI7QUFBQSw2QkFDRTtBQUNGLFdBQUcsRUFBQyx3SEFERjtBQUVGLGFBQUssRUFBQyxNQUZKO0FBR0YsY0FBTSxFQUFDLE1BSEw7QUFJRixpQkFBUyxFQUFDLDBCQUpSO0FBS0YsV0FBRyxFQUFDO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFVQSxxRUFBQyxzREFBRCxDQUFRLE1BQVI7QUFBZSx1QkFBYztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZBLGVBV0EscUVBQUMsc0RBQUQsQ0FBUSxRQUFSO0FBQWlCLFFBQUUsRUFBQyxrQkFBcEI7QUFBQSw2QkFDRSxxRUFBQyxtREFBRDtBQUFLLGlCQUFTLEVBQUMsU0FBZjtBQUFBLGdDQUNBLHFFQUFDLDJEQUFEO0FBQWEsZUFBSyxFQUFDLFFBQW5CO0FBQTRCLFlBQUUsRUFBQyxvQkFBL0I7QUFBQSxrQ0FDSSxxRUFBQywyREFBRCxDQUFhLElBQWI7QUFBa0IsZ0JBQUksRUFBQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJLHFFQUFDLDJEQUFELENBQWEsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0kscUVBQUMsMkRBQUQsQ0FBYSxJQUFiO0FBQWtCLGdCQUFJLEVBQUMsd0RBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEQSxlQU1FLHFFQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLGNBQUksRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5GLGVBT0UscUVBQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsY0FBSSxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEYsZUFRRSxxRUFBQyxtREFBRCxDQUFLLElBQUw7QUFBVSxjQUFJLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVNFLHFFQUFDLG1EQUFELENBQUssSUFBTDtBQUFVLGNBQUksRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRGLGVBVUUscUVBQUMsMkRBQUQ7QUFBYSxlQUFLLEVBQUMsWUFBbkI7QUFBZ0MsWUFBRSxFQUFDLG9CQUFuQztBQUFBLGtDQUNFLHFFQUFDLDJEQUFELENBQWEsSUFBYjtBQUFrQixnQkFBSSxFQUFDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUscUVBQUMsMkRBQUQsQ0FBYSxJQUFiO0FBQWtCLGdCQUFJLEVBQUMsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsZUFHRSxxRUFBQywyREFBRCxDQUFhLElBQWI7QUFBa0IsZ0JBQUksRUFBQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIRixlQUlFLHFFQUFDLDJEQUFELENBQWEsSUFBYjtBQUFrQixnQkFBSSxFQUFDLGFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLGVBS0UscUVBQUMsMkRBQUQsQ0FBYSxJQUFiO0FBQWtCLGdCQUFJLEVBQUMsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEYsZUFNRSxxRUFBQywyREFBRCxDQUFhLElBQWI7QUFBa0IsZ0JBQUksRUFBQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORixlQU9FLHFFQUFDLDJEQUFELENBQWEsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVBGLGVBUUUscUVBQUMsMkRBQUQsQ0FBYSxJQUFiO0FBQWtCLGdCQUFJLEVBQUMsYUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUkYsZUFTRSxxRUFBQywyREFBRCxDQUFhLElBQWI7QUFBa0IsZ0JBQUksRUFBQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkYsZUFzQkUscUVBQUMsbURBQUQsQ0FBSyxJQUFMO0FBQVUsY0FBSSxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUF5Q0gsQ0ExQ0Q7O0FBNENlQSx5RUFBZiIsImZpbGUiOiIuL0NvbXBvbmVudHMvTmF2L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOYXZiYXIsTmF2LE5hdkRyb3Bkb3dufSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICAgIHJldHVybiAoIFxuXG4gICAgICAgIDxOYXZiYXIgYmc9XCJsaWdodFwiIGZpeGVkPSd0b3AnIGV4cGFuZD1cImxnXCI+XG4gICAgICAgIDxOYXZiYXIuQnJhbmQgaHJlZj1cIiNob21lXCI+IFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGF0aWMxLnNxdWFyZXNwYWNlLmNvbS9zdGF0aWMvNWQ5NDRlODJkYThiZDgxYmVhOGVhMWI3L3QvNWVlOTJmMTc1NWZkNzcxYmQ2NWEyODNiLzE2MDk1MTEzNDI0NTIvP2Zvcm1hdD0xNTAwd1wiXG4gICAgICAgIHdpZHRoPVwiYXV0b1wiXG4gICAgICAgIGhlaWdodD1cImF1dG9cIlxuICAgICAgICBjbGFzc05hbWU9XCJkLWlubGluZS1ibG9jayBhbGlnbi10b3BcIlxuICAgICAgICBhbHQ9XCIgbG9nb1wiXG4gICAgICAvPlxuICAgICAgPC9OYXZiYXIuQnJhbmQ+XG4gICAgICAgIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJiYXNpYy1uYXZiYXItbmF2XCIgLz5cbiAgICAgICAgPE5hdmJhci5Db2xsYXBzZSBpZD1cImJhc2ljLW5hdmJhci1uYXZcIj5cbiAgICAgICAgICA8TmF2IGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cbiAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9XCJEb25hdGVcIiBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIj5WaXJ0dWFsIEZvb2QgRG9uYXRpb248L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCJodHRwczovL2NhZmRvbmF0ZS5jYWZvbmxpbmUub3JnLzM3NjcjIS9Eb25hdGlvbkRldGFpbHNcIj5Eb25hdGUgTm93PC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIj5Ib21lPC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIj5IaW1tYWggRm9vZCBCYW5rPC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIj5Ob3R0aW5naGFtIFBlb3BsZXMgUGFudHJ5PC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIj5Db3ZpZCAxOSBDaHJpc2lzIFJlZmVycmFsPC9OYXYuTGluaz5cbiAgICAgICAgICAgIDxOYXZEcm9wZG93biB0aXRsZT1cIldoYXQgV2UgRG9cIiBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIj5UYWNrbGluZyBQb3ZlcnR5PC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjFcIj5UYWNrbGluZyBIYXRlPC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjJcIj5Gb29kIEJhbms8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMlwiPk5vdHRpbmdoYW0gUGVvcGxlJ3MgUGFudHJ5PC9OYXZEcm9wZG93bi5JdGVtPlxuICAgICAgICAgICAgICA8TmF2RHJvcGRvd24uSXRlbSBocmVmPVwiI2FjdGlvbi8zLjJcIj5NdXNsaW0gTWVtb3J5IFByb2plY3Q8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuMlwiPlJhY2UgJiBJc2xhbW9waG9iaWEgSGVscGxpbmU8L05hdkRyb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5EaXZpZGVyIC8+XG4gICAgICAgICAgICAgIDxOYXZEcm9wZG93bi5JdGVtIGhyZWY9XCIjYWN0aW9uLzMuNFwiPlNhbGFhbSBTaGFsb20gS2l0Y2hlbjwvTmF2RHJvcGRvd24uSXRlbT5cbiAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duLkl0ZW0gaHJlZj1cIiNhY3Rpb24vMy40XCI+Q29tbXVuaXR5IFNhZmV0eSBGb3J1bTwvTmF2RHJvcGRvd24uSXRlbT5cblxuICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgIDxOYXYuTGluayBocmVmPVwiI2hvbWVcIj5Db250YWN0IFVzPC9OYXYuTGluaz5cbiAgICAgICAgICA8L05hdj5cbiAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICA8L05hdmJhcj5cbiAgICAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/Nav/index.js\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.min.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Nav */ \"./Components/Nav/index.js\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Footer */ \"./Components/Footer/index.js\");\n\nvar _jsxFileName = \"/home/bilal/Documents/github/Himmah/pages/index.js\";\n\n\n\n\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Create Next App\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css\",\n        integrity: \"sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l\",\n        crossorigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 8\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQ04sV0FBRyxFQUFDLFlBREU7QUFFTixZQUFJLEVBQUMseUVBRkM7QUFHTixpQkFBUyxFQUFDLHlFQUhKO0FBSU4sbUJBQVcsRUFBQztBQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVlFO0FBQU0sZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUFBLDZCQUNBLHFFQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsZUFnQkU7QUFBUSxlQUFTLEVBQUVGLDhEQUFNLENBQUNHLE1BQTFCO0FBQUEsNkJBQ0MscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL0NvbXBvbmVudHMvTmF2J1xuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9Db21wb25lbnRzL0Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gIHJlbD1cInN0eWxlc2hlZXRcIlxuICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC42LjAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICBpbnRlZ3JpdHk9XCJzaGEzODQtQjB2UDV4bUFUdzErSzlLUlFqUUVSSnZUdW1RVzBuUEV6dkY2TC9aNm5yb25KM29VT0ZVRnBDakVVUW91cTIrbFwiXG4gIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbi8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPE5hdmlnYXRpb24vPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgPEZvb3Rlci8+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2M1NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ }),

/***/ "react-bootstrap-icons":
/*!****************************************!*\
  !*** external "react-bootstrap-icons" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap-icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAtaWNvbnNcIj8yOWNkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC1pY29ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC1pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap-icons\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });