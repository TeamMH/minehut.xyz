webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/CustomDrawer.js":
/*!*****************************!*\
  !*** ./src/CustomDrawer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomDrawer; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _src_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Link */ "./src/Link.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Mail */ "./node_modules/@material-ui/icons/Mail.js");
/* harmony import */ var _material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Inbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Inbox */ "./node_modules/@material-ui/icons/Inbox.js");
/* harmony import */ var _material_ui_icons_Inbox__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Inbox__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme */ "./src/theme.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");




var _jsxFileName = "C:\\Users\\carri\\Desktop\\Github\\minehut.xyz\\src\\CustomDrawer.js",
    _s2 = $RefreshSig$();










var drawerWidth = 350;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    textAlign: "right",
    color: "white !important"
  },
  drawerPaper: {
    width: drawerWidth,
    // backgroundColor: theme.palette.type === "dark" ? "#303030" : "#eeeeee",
    //background: "linear-gradient(120deg, #7289da, #66a6ff)",
    backgroundColor: "#2e3238"
  },
  drawerContainer: {
    overflowY: "auto",
    overflowX: "hidden",
    marginTop: _theme__WEBPACK_IMPORTED_MODULE_8__["default"].spacing(4)
  },
  nestedText: {
    marginLeft: _theme__WEBPACK_IMPORTED_MODULE_8__["default"].spacing(3)
  }
});
function CustomDrawer() {
  _s2();

  var _s = $RefreshSig$();

  var routes = {
    Home: "/",
    Contribute: "/contribute",
    FAQ: {
      Skript: "/faq/skript"
    }
  };
  var dropdowns = {};
  Object.keys(routes).forEach(_s(function (route) {
    _s();

    if (typeof routes[route] !== "object") return;

    var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
        _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

    dropdowns[route] = {};
    dropdowns[route].open = open;
    dropdowns[route].setOpen = setOpen;
  }, "dVkDIfRb5RN4FjtonjBYYwpg89o="));

  function mapRoutes(routes, i) {
    var _this = this;

    return Object.keys(routes).map(function (route, index) {
      if (typeof routes[route] === "string") {
        console.log(_src_Link__WEBPACK_IMPORTED_MODULE_4__["default"].pathname);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
          button: true,
          component: _src_Link__WEBPACK_IMPORTED_MODULE_4__["default"],
          naked: true,
          href: routes[route],
          selected: _src_Link__WEBPACK_IMPORTED_MODULE_4__["default"].pathname === routes[route],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
            children: route
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 7
          }, _this)
        }, routes[route], false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 6
        }, _this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
            button: true,
            onClick: function onClick() {
              dropdowns[route].setOpen(!dropdowns[route].open);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              children: route
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
            "in": dropdowns[route].open,
            children: mapRoutes(routes[route])
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 7
          }, _this)]
        }, void 0, true);
      }
    });
  }

  var classes = useStyles();

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      selectedIndex = _React$useState4[0],
      setSelectedIndex = _React$useState4[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
    className: classes.drawer,
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    anchor: "left",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: mapRoutes(routes, 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 3
  }, this);
}

_s2(CustomDrawer, "C0gye0bmCHxT9D++3+6E4jw4HaQ=", false, function () {
  return [useStyles];
});

_c = CustomDrawer;

var _c;

$RefreshReg$(_c, "CustomDrawer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJyb3V0ZXMiLCJIb21lIiwiQ29udHJpYnV0ZSIsIkZBUSIsIlNrcmlwdCIsImRyb3Bkb3ducyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicm91dGUiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJtYXBSb3V0ZXMiLCJpIiwibWFwIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwicGF0aG5hbWUiLCJMaW5rIiwiY2xhc3NlcyIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwicGFwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxHQUFwQjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsUUFBTSxFQUFFO0FBQ1BDLFNBQUssRUFBRUosV0FEQTtBQUVQSyxjQUFVLEVBQUUsQ0FGTDtBQUdQQyxhQUFTLEVBQUUsT0FISjtBQUlQQyxTQUFLLEVBQUU7QUFKQSxHQURvQjtBQU81QkMsYUFBVyxFQUFFO0FBQ1pKLFNBQUssRUFBRUosV0FESztBQUVaO0FBQ0E7QUFDQVMsbUJBQWUsRUFBRTtBQUpMLEdBUGU7QUFhNUJD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UUFBTixDQUFlLENBQWYsQ0EzREo7QUFBQTtBQUFBLE1BMkQvQmEsYUEzRCtCO0FBQUEsTUEyRGhCQyxnQkEzRGdCOztBQTZEdEMsc0JBQ0MscUVBQUMsd0RBQUQ7QUFDQyxhQUFTLEVBQUVGLE9BQU8sQ0FBQ3ZDLE1BRHBCO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxXQUFPLEVBQUU7QUFDUjBDLFdBQUssRUFBRUgsT0FBTyxDQUFDbEM7QUFEUCxLQUhWO0FBTUMsVUFBTSxFQUFDLE1BTlI7QUFBQSw0QkFRQyxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQsZUFTQztBQUFLLGVBQVMsRUFBRWtDLE9BQU8sQ0FBQ2hDLGVBQXhCO0FBQUEsNkJBQ0MscUVBQUMsc0RBQUQ7QUFBTSxhQUFLLE1BQVg7QUFBQSxrQkFBYXVCLFNBQVMsQ0FBQ2QsTUFBRCxFQUFTLENBQVQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWVBOztJQTVFdUJELFk7VUF5RFBqQixTOzs7S0F6RE9pQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYTlkODdkYWFkNGUyMTBkMmQ1YzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuXHREcmF3ZXIsXHJcblx0VG9vbGJhcixcclxuXHRMaXN0LFxyXG5cdExpc3RJdGVtLFxyXG5cdExpc3RJdGVtSWNvbixcclxuXHRMaXN0SXRlbVRleHQsXHJcblx0Q29sbGFwc2UsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9zcmMvTGlua1wiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9JbmJveFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgRXhwYW5kTGVzcywgRXhwYW5kTW9yZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwiLi9MaW5rXCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDM1MDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdGRyYXdlcjoge1xyXG5cdFx0d2lkdGg6IGRyYXdlcldpZHRoLFxyXG5cdFx0ZmxleFNocmluazogMCxcclxuXHRcdHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG5cdFx0Y29sb3I6IFwid2hpdGUgIWltcG9ydGFudFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyUGFwZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdC8vIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiIzMwMzAzMFwiIDogXCIjZWVlZWVlXCIsXHJcblx0XHQvL2JhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzcyODlkYSwgIzY2YTZmZilcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjMmUzMjM4XCIsXHJcblx0fSxcclxuXHRkcmF3ZXJDb250YWluZXI6IHtcclxuXHRcdG92ZXJmbG93WTogXCJhdXRvXCIsXHJcblx0XHRvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXHJcblx0fSxcclxuXHRuZXN0ZWRUZXh0OiB7XHJcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tRHJhd2VyKCkge1xyXG5cdGNvbnN0IHJvdXRlcyA9IHtcclxuXHRcdEhvbWU6IFwiL1wiLFxyXG5cdFx0Q29udHJpYnV0ZTogXCIvY29udHJpYnV0ZVwiLFxyXG5cdFx0RkFROiB7XHJcblx0XHRcdFNrcmlwdDogXCIvZmFxL3NrcmlwdFwiLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkcm9wZG93bnMgPSB7fTtcclxuXHJcblx0T2JqZWN0LmtleXMocm91dGVzKS5mb3JFYWNoKChyb3V0ZSkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiByb3V0ZXNbcm91dGVdICE9PSBcIm9iamVjdFwiKSByZXR1cm47XHJcblx0XHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHRcdGRyb3Bkb3duc1tyb3V0ZV0gPSB7fTtcclxuXHRcdGRyb3Bkb3duc1tyb3V0ZV0ub3BlbiA9IG9wZW47XHJcblx0XHRkcm9wZG93bnNbcm91dGVdLnNldE9wZW4gPSBzZXRPcGVuO1xyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBtYXBSb3V0ZXMocm91dGVzLCBpKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMocm91dGVzKS5tYXAoKHJvdXRlLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRpZiAodHlwZW9mIHJvdXRlc1tyb3V0ZV0gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhyb3V0ZXIucGF0aG5hbWUpO1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8TGlzdEl0ZW1cclxuXHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudD17TGlua31cclxuXHRcdFx0XHRcdFx0bmFrZWRcclxuXHRcdFx0XHRcdFx0aHJlZj17cm91dGVzW3JvdXRlXX1cclxuXHRcdFx0XHRcdFx0a2V5PXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZD17cm91dGVyLnBhdGhuYW1lID09PSByb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0Pntyb3V0ZX08L0xpc3RJdGVtVGV4dD5cclxuXHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0PExpc3RJdGVtXHJcblx0XHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZHJvcGRvd25zW3JvdXRlXS5zZXRPcGVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQhZHJvcGRvd25zW3JvdXRlXS5vcGVuXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0Pntyb3V0ZX08L0xpc3RJdGVtVGV4dD5cclxuXHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHRcdFx0PENvbGxhcHNlIGluPXtkcm9wZG93bnNbcm91dGVdLm9wZW59PlxyXG5cdFx0XHRcdFx0XHRcdHttYXBSb3V0ZXMocm91dGVzW3JvdXRlXSl9XHJcblx0XHRcdFx0XHRcdDwvQ29sbGFwc2U+XHJcblx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RHJhd2VyXHJcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9XHJcblx0XHRcdHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG5cdFx0XHRjbGFzc2VzPXt7XHJcblx0XHRcdFx0cGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcblx0XHRcdH19XHJcblx0XHRcdGFuY2hvcj1cImxlZnRcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8VG9vbGJhciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJDb250YWluZXJ9PlxyXG5cdFx0XHRcdDxMaXN0IGRlbnNlPnttYXBSb3V0ZXMocm91dGVzLCAwKX08L0xpc3Q+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9EcmF3ZXI+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9