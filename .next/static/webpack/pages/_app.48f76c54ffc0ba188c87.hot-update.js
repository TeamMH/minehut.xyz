webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@material-ui/icons/Menu.js":
false,

/***/ "./node_modules/@material-ui/icons/MoveToInbox.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _src_CustomDrawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/CustomDrawer */ "./src/CustomDrawer.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Brightness7__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Brightness7 */ "./node_modules/@material-ui/icons/Brightness7.js");
/* harmony import */ var _material_ui_icons_Brightness7__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Brightness7__WEBPACK_IMPORTED_MODULE_14__);




var _jsxFileName = "C:\\Users\\carri\\Desktop\\Github\\minehut.xyz\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "#373b42"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    navTheme: {
      marginRight: theme.spacing(1)
    },
    title: {
      flexGrow: 1
    }
  };
});
function MyApp(props) {
  _s();

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(true),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var handleChange = function handleChange(event) {
    setState(!state);
    _src_theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.type = _src_theme__WEBPACK_IMPORTED_MODULE_7__["default"].palette.type === "darK" ? "light" : "dark";
  };

  var Component = props.Component,
      pageProps = props.pageProps;
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: "Minehut"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 5
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["ThemeProvider"], {
      theme: _src_theme__WEBPACK_IMPORTED_MODULE_7__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        className: classes.root,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
          position: "fixed",
          className: classes.appBar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
              variant: "h6",
              className: classes.title,
              children: "Minehut"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 8
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
              onClick: handleChange,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_icons_Brightness7__WEBPACK_IMPORTED_MODULE_14___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 8
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_src_CustomDrawer__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
          className: classes.content,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 7
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 3
  }, this);
}

_s(MyApp, "sQbL11uirFfg84w4Y8zeHyhTNvo=", false, function () {
  return [useStyles];
});

_c = MyApp;
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwiZGlzcGxheSIsImFwcEJhciIsInpJbmRleCIsImRyYXdlciIsImJhY2tncm91bmRDb2xvciIsImNvbnRlbnQiLCJmbGV4R3JvdyIsInBhZGRpbmciLCJzcGFjaW5nIiwibmF2VGhlbWUiLCJtYXJnaW5SaWdodCIsInRpdGxlIiwiTXlBcHAiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImhhbmRsZUNoYW5nZSIsImV2ZW50IiwicGFsZXR0ZSIsInR5cGUiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ1c2VFZmZlY3QiLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN4Q0MsUUFBSSxFQUFFO0FBQ0xDLGFBQU8sRUFBRTtBQURKLEtBRGtDO0FBSXhDQyxVQUFNLEVBQUU7QUFDUEMsWUFBTSxFQUFFSixLQUFLLENBQUNJLE1BQU4sQ0FBYUMsTUFBYixHQUFzQixDQUR2QjtBQUVQQyxxQkFBZSxFQUFFO0FBRlYsS0FKZ0M7QUFReENDLFdBQU8sRUFBRTtBQUNSQyxjQUFRLEVBQUUsQ0FERjtBQUVSQyxhQUFPLEVBQUVULEtBQUssQ0FBQ1UsT0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFnQ0E7O0dBbER1QlosSztVQUNQaEIsUzs7O0tBRE9nQixLO0FBb0R4QkEsS0FBSyxDQUFDbUIsU0FBTixHQUFrQjtBQUNqQlIsV0FBUyxFQUFFUyxpREFBUyxDQUFDQyxXQUFWLENBQXNCQyxVQURoQjtBQUVqQlYsV0FBUyxFQUFFUSxpREFBUyxDQUFDRyxNQUFWLENBQWlCRDtBQUZYLENBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNDhmNzZjNTRmZmMwYmExODhjODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3NyYy90aGVtZVwiO1xuaW1wb3J0IEN1c3RvbURyYXdlciBmcm9tIFwiLi4vc3JjL0N1c3RvbURyYXdlclwiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIjtcblxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XG5pbXBvcnQgQnJpZ2h0bmVzczcgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9CcmlnaHRuZXNzN1wiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcblx0cm9vdDoge1xuXHRcdGRpc3BsYXk6IFwiZmxleFwiLFxuXHR9LFxuXHRhcHBCYXI6IHtcblx0XHR6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjMzczYjQyXCIsXG5cdH0sXG5cdGNvbnRlbnQ6IHtcblx0XHRmbGV4R3JvdzogMSxcblx0XHRwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxuXHR9LFxuXHRuYXZUaGVtZToge1xuXHRcdG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuXHR9LFxuXHR0aXRsZToge1xuXHRcdGZsZXhHcm93OiAxLFxuXHR9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cdGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XG5cblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG5cdFx0c2V0U3RhdGUoIXN0YXRlKTtcblx0XHR0aGVtZS5wYWxldHRlLnR5cGUgPSB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFyS1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XG5cdH07XG5cdGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzO1xuXG5cdFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG5cdFx0Y29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqc3Mtc2VydmVyLXNpZGVcIik7XG5cdFx0aWYgKGpzc1N0eWxlcykge1xuXHRcdFx0anNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcblx0XHR9XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gKFxuXHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+TWluZWh1dDwvdGl0bGU+XG5cdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0bmFtZT1cInZpZXdwb3J0XCJcblx0XHRcdFx0XHRjb250ZW50PVwibWluaW11bS1zY2FsZT0xLCBpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L0hlYWQ+XG5cdFx0XHQ8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cblx0XHRcdFx0XHR7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XG5cdFx0XHRcdFx0PENzc0Jhc2VsaW5lIC8+XG5cdFx0XHRcdFx0PEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEJhcn0+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhcj5cblx0XHRcdFx0XHRcdFx0PFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cblx0XHRcdFx0XHRcdFx0XHRNaW5laHV0XG5cdFx0XHRcdFx0XHRcdDwvVHlwb2dyYXBoeT5cblx0XHRcdFx0XHRcdFx0PEljb25CdXR0b24gb25DbGljaz17aGFuZGxlQ2hhbmdlfT5cblx0XHRcdFx0XHRcdFx0XHQ8QnJpZ2h0bmVzczcgLz5cblx0XHRcdFx0XHRcdFx0PC9JY29uQnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHRcdDwvQXBwQmFyPlxuXHRcdFx0XHRcdDxDdXN0b21EcmF3ZXIgLz5cblx0XHRcdFx0XHQ8bWFpbiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG5cdFx0XHRcdFx0XHQ8VG9vbGJhciAvPlxuXHRcdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuXHRcdFx0XHRcdDwvbWFpbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1RoZW1lUHJvdmlkZXI+XG5cdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0KTtcbn1cblxuTXlBcHAucHJvcFR5cGVzID0ge1xuXHRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxuXHRwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9