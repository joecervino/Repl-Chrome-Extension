webpackHotUpdate(2,{37:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* global chrome */\n// -> Gives us access to chrome browser methods\n\n\n\nvar Options =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Options, _React$Component);\n\n  function Options() {\n    _classCallCheck(this, Options);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Options).apply(this, arguments));\n  }\n\n  _createClass(Options, [{\n    key: "openTab",\n    value: function openTab() {\n      var tabOptions = {\n        url: "https://repl.it/languages/nodejs"\n      };\n      chrome.tabs.create(tabOptions);\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {\n        onClick: this.openTab,\n        id: "node-button",\n        className: "repl-button"\n      }, "Node.js Repl.it"));\n    }\n  }]);\n\n  return Options;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_1__["hot"])(module)(Options));\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(43)(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvcG9wdXAvb3B0aW9ucy5qc3g/OWMyZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgY2hyb21lICovICAvLyAtPiBHaXZlcyB1cyBhY2Nlc3MgdG8gY2hyb21lIGJyb3dzZXIgbWV0aG9kc1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaG90IH0gZnJvbSBcInJlYWN0LWhvdC1sb2FkZXJcIjtcblxuY2xhc3MgT3B0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIG9wZW5UYWIoKSB7XG4gICAgY29uc3QgdGFiT3B0aW9ucyA9IHtcbiAgICAgIHVybDogXCJodHRwczovL3JlcGwuaXQvbGFuZ3VhZ2VzL25vZGVqc1wiXG4gICAgfTtcblxuICAgIGNocm9tZS50YWJzLmNyZWF0ZSh0YWJPcHRpb25zKTtcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlblRhYn1cbiAgICAgICAgICAgIGlkPVwibm9kZS1idXR0b25cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVwbC1idXR0b25cIlxuICAgICAgICAgID5Ob2RlLmpzIFJlcGwuaXQ8L2J1dHRvbj5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBob3QobW9kdWxlKShPcHRpb25zKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFPQTs7OztBQW5CQTtBQUNBO0FBcUJBO0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///37\n')}});