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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _IssueList = _interopRequireDefault(__webpack_require__(/*! ./IssueList.jsx */ \"./src/IssueList.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint linebreak-style: [\"error\", \"windows\"] */\n\n/* globals React ReactDOM  */\n// eslint-disable-next-line react/prefer-stateless-function\nvar element = /*#__PURE__*/React.createElement(_IssueList.default, null);\nReactDOM.render(element, document.getElementById('contents'));\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/IssueAdd.jsx":
/*!**************************!*\
  !*** ./src/IssueAdd.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* globals React PropTypes */\nvar IssueAdd = /*#__PURE__*/function (_React$Component) {\n  _inheritsLoose(IssueAdd, _React$Component);\n\n  function IssueAdd() {\n    var _this;\n\n    _this = _React$Component.call(this) || this;\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  var _proto = IssueAdd.prototype;\n\n  _proto.handleSubmit = function handleSubmit(e) {\n    e.preventDefault();\n    var form = document.forms.issueAdd;\n    var issue = {\n      owner: form.owner.value,\n      title: form.title.value,\n      due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)\n    };\n    var createIssue = this.props.createIssue;\n    createIssue(issue);\n    form.owner.value = '';\n    form.title.value = '';\n  };\n\n  _proto.render = function render() {\n    return /*#__PURE__*/React.createElement(\"form\", {\n      name: \"issueAdd\",\n      onSubmit: this.handleSubmit\n    }, /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"owner\",\n      placeholder: \"Owner\"\n    }), /*#__PURE__*/React.createElement(\"input\", {\n      type: \"text\",\n      name: \"title\",\n      placeholder: \"Title\"\n    }), /*#__PURE__*/React.createElement(\"button\", {\n      type: \"submit\"\n    }, \"Add\"));\n  };\n\n  return IssueAdd;\n}(React.Component);\n\nexports.default = IssueAdd;\nIssueAdd.propTypes = {\n  createIssue: PropTypes.func.isRequired\n};\n\n//# sourceURL=webpack:///./src/IssueAdd.jsx?");

/***/ }),

/***/ "./src/IssueFilter.jsx":
/*!*****************************!*\
  !*** ./src/IssueFilter.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n/* globals React */\n\n/* eslint \"react/prefer-stateless-function\": \"off\" */\nvar IssueFilter = /*#__PURE__*/function (_React$Component) {\n  _inheritsLoose(IssueFilter, _React$Component);\n\n  function IssueFilter() {\n    return _React$Component.apply(this, arguments) || this;\n  }\n\n  var _proto = IssueFilter.prototype;\n\n  _proto.render = function render() {\n    return /*#__PURE__*/React.createElement(\"div\", null, \"This is a placeholder for the issue filter.\");\n  };\n\n  return IssueFilter;\n}(React.Component);\n\nexports.default = IssueFilter;\n\n//# sourceURL=webpack:///./src/IssueFilter.jsx?");

/***/ }),

/***/ "./src/IssueList.jsx":
/*!***************************!*\
  !*** ./src/IssueList.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _IssueFilter = _interopRequireDefault(__webpack_require__(/*! ./IssueFilter.jsx */ \"./src/IssueFilter.jsx\"));\n\nvar _IssueTable = _interopRequireDefault(__webpack_require__(/*! ./IssueTable.jsx */ \"./src/IssueTable.jsx\"));\n\nvar _IssueAdd = _interopRequireDefault(__webpack_require__(/*! ./IssueAdd.jsx */ \"./src/IssueAdd.jsx\"));\n\nvar _graphQLFetch = _interopRequireDefault(__webpack_require__(/*! ./graphQLFetch.js */ \"./src/graphQLFetch.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar IssueList = /*#__PURE__*/function (_React$Component) {\n  _inheritsLoose(IssueList, _React$Component);\n\n  function IssueList() {\n    var _this;\n\n    _this = _React$Component.call(this) || this;\n    _this.state = {\n      issues: []\n    };\n    _this.createIssue = _this.createIssue.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  var _proto = IssueList.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    this.loadData();\n  };\n\n  _proto.loadData = /*#__PURE__*/function () {\n    var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var query, data;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              query = \"query {\\n        issueList {\\n          id title status owner\\n          created effort due\\n        }\\n      }\";\n              _context.next = 3;\n              return (0, _graphQLFetch.default)(query);\n\n            case 3:\n              data = _context.sent;\n\n              if (data) {\n                this.setState({\n                  issues: data.issueList\n                });\n              }\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function loadData() {\n      return _loadData.apply(this, arguments);\n    }\n\n    return loadData;\n  }();\n\n  _proto.createIssue = /*#__PURE__*/function () {\n    var _createIssue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(issue) {\n      var query, data;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              query = \"mutation issueAdd($issue: IssueInputs!) {\\n        issueAdd(issue: $issue) {\\n          id\\n        }\\n      }\";\n              _context2.next = 3;\n              return (0, _graphQLFetch.default)(query, {\n                issue: issue\n              });\n\n            case 3:\n              data = _context2.sent;\n\n              if (data) {\n                this.loadData();\n              }\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, this);\n    }));\n\n    function createIssue(_x) {\n      return _createIssue.apply(this, arguments);\n    }\n\n    return createIssue;\n  }();\n\n  _proto.render = function render() {\n    var issues = this.state.issues;\n    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h1\", null, \"Issue Tracker\"), /*#__PURE__*/React.createElement(_IssueFilter.default, null), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(_IssueTable.default, {\n      issues: issues\n    }), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(_IssueAdd.default, {\n      createIssue: this.createIssue\n    }));\n  };\n\n  return IssueList;\n}(React.Component);\n\nexports.default = IssueList;\n\n//# sourceURL=webpack:///./src/IssueList.jsx?");

/***/ }),

/***/ "./src/IssueTable.jsx":
/*!****************************!*\
  !*** ./src/IssueTable.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = IssueTable;\n\n/* globals React */\nfunction IssueRow(_ref) {\n  var issue = _ref.issue;\n  return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, issue.id), /*#__PURE__*/React.createElement(\"td\", null, issue.status), /*#__PURE__*/React.createElement(\"td\", null, issue.owner), /*#__PURE__*/React.createElement(\"td\", null, issue.created.toDateString()), /*#__PURE__*/React.createElement(\"td\", null, issue.effort), /*#__PURE__*/React.createElement(\"td\", null, issue.due ? issue.due.toDateString() : ''), /*#__PURE__*/React.createElement(\"td\", null, issue.title));\n}\n\nfunction IssueTable(_ref2) {\n  var issues = _ref2.issues;\n  var issueRows = issues.map(function (issue) {\n    return /*#__PURE__*/React.createElement(IssueRow, {\n      key: issue.id,\n      issue: issue\n    });\n  });\n  return /*#__PURE__*/React.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", null, \"ID\"), /*#__PURE__*/React.createElement(\"th\", null, \"Status\"), /*#__PURE__*/React.createElement(\"th\", null, \"Owner\"), /*#__PURE__*/React.createElement(\"th\", null, \"Created\"), /*#__PURE__*/React.createElement(\"th\", null, \"Effort\"), /*#__PURE__*/React.createElement(\"th\", null, \"Due Date\"), /*#__PURE__*/React.createElement(\"th\", null, \"Title\"))), /*#__PURE__*/React.createElement(\"tbody\", null, issueRows));\n}\n\n//# sourceURL=webpack:///./src/IssueTable.jsx?");

/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = graphQLFetch;\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n/* eslint linebreak-style: [\"error\", \"windows\"] */\n\n/* eslint \"no-alert\": \"off\" */\nvar dateRegex = new RegExp('^\\\\d\\\\d\\\\d\\\\d-\\\\d\\\\d-\\\\d\\\\d');\n\nfunction jsonDateReviver(key, value) {\n  if (dateRegex.test(value)) return new Date(value);\n  return value;\n}\n\nfunction graphQLFetch(_x, _x2) {\n  return _graphQLFetch.apply(this, arguments);\n}\n\nfunction _graphQLFetch() {\n  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query, variables) {\n    var response, body, result, error, details;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (variables === void 0) {\n              variables = {};\n            }\n\n            _context.prev = 1;\n            _context.next = 4;\n            return fetch(window.ENV.UI_API_ENDPOINT, {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify({\n                query: query,\n                variables: variables\n              })\n            });\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.text();\n\n          case 7:\n            body = _context.sent;\n            result = JSON.parse(body, jsonDateReviver);\n\n            if (result.errors) {\n              error = result.errors[0];\n\n              if (error.extensions.code === 'BAD_USER_INPUT') {\n                details = error.extensions.exception.errors.join('\\n ');\n                alert(error.message + \":\\n \" + details);\n              } else {\n                alert(error.extensions.code + \": \" + error.message);\n              }\n            }\n\n            return _context.abrupt(\"return\", result.data);\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](1);\n            alert(\"Error in sending data to server: \" + _context.t0.message);\n            return _context.abrupt(\"return\", null);\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 13]]);\n  }));\n  return _graphQLFetch.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/graphQLFetch.js?");

/***/ })

/******/ });