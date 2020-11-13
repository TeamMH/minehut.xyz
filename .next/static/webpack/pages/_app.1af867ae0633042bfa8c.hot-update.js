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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);




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
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  function mapRoutes(routes, i) {
    var _this = this;

    return Object.keys(routes).map(function (route, index) {
      if (typeof routes[route] === "string") {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
          button: true,
          component: _src_Link__WEBPACK_IMPORTED_MODULE_4__["default"],
          naked: true,
          href: routes[route],
          selected: router.asPath === routes[route],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
            style: {
              marginLeft: "".concat(i * 8, "px")
            },
            children: route
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 7
          }, _this)
        }, routes[route], false, {
          fileName: _jsxFileName,
          lineNumber: 69,
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
              style: {
                marginLeft: "".concat(i * 8, "px")
              },
              children: route
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
            "in": dropdowns[route].open,
            children: mapRoutes(routes[route])
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 97,
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
      lineNumber: 119,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: mapRoutes(routes, 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 111,
    columnNumber: 3
  }, this);
}

_s2(CustomDrawer, "N9ZfWcQJTnUpvGsFEFmCa4dukQ4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"], useStyles];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJyb3V0ZXMiLCJIb21lIiwiQ29udHJpYnV0ZSIsIkZBUSIsIlNrcmlwdCIsImRyb3Bkb3ducyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicm91dGUiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYXBSb3V0ZXMiLCJpIiwibWFwIiwiaW5kZXgiLCJMaW5rIiwiYXNQYXRoIiwiY2xhc3NlcyIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwicGFwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFSixXQURBO0FBRVBLLGNBQVUsRUFBRSxDQUZMO0FBR1BDLGFBQVMsRUFBRSxPQUhKO0FBSVBDLFNBQUssRUFBRTtBQUpBLEdBRG9CO0FBTzVCQyxhQUFXLEVBQUU7QUFDWkosU0FBSyxFQUFFSixXQURLO0FBRVo7QUFDQTtBQUNBUyxtQkFBZSxFQUFFO0FBSkwsR0FQZTtBQWE1QkMsaUJB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QkFiRDtBQUFBLHdCQUREO0FBbUJBO0FBQ0QsS0FyQ00sQ0FBUDtBQXNDQTs7QUFFRCxNQUFNYSxPQUFPLEdBQUd4QyxTQUFTLEVBQXpCOztBQTlEc0MseUJBZ0VJNEIsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FoRUo7QUFBQTtBQUFBLE1BZ0UvQlksYUFoRStCO0FBQUEsTUFnRWhCQyxnQkFoRWdCOztBQWtFdEMsc0JBQ0MscUVBQUMsd0RBQUQ7QUFDQyxhQUFTLEVBQUVGLE9BQU8sQ0FBQ3RDLE1BRHBCO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxXQUFPLEVBQUU7QUFDUnlDLFdBQUssRUFBRUgsT0FBTyxDQUFDakM7QUFEUCxLQUhWO0FBTUMsVUFBTSxFQUFDLE1BTlI7QUFBQSw0QkFRQyxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQsZUFTQztBQUFLLGVBQVMsRUFBRWlDLE9BQU8sQ0FBQy9CLGVBQXhCO0FBQUEsNkJBQ0MscUVBQUMsc0RBQUQ7QUFBTSxhQUFLLE1BQVg7QUFBQSxrQkFBYXlCLFNBQVMsQ0FBQ2hCLE1BQUQsRUFBUyxDQUFUO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFlQTs7SUFqRnVCRCxZO1VBbUJSZ0Isc0QsRUEyQ0NqQyxTOzs7S0E5RE9pQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMWFmODY3YWUwNjMzMDQyYmZhOGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuXHREcmF3ZXIsXHJcblx0VG9vbGJhcixcclxuXHRMaXN0LFxyXG5cdExpc3RJdGVtLFxyXG5cdExpc3RJdGVtSWNvbixcclxuXHRMaXN0SXRlbVRleHQsXHJcblx0Q29sbGFwc2UsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9zcmMvTGlua1wiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9JbmJveFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgRXhwYW5kTGVzcywgRXhwYW5kTW9yZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDM1MDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdGRyYXdlcjoge1xyXG5cdFx0d2lkdGg6IGRyYXdlcldpZHRoLFxyXG5cdFx0ZmxleFNocmluazogMCxcclxuXHRcdHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG5cdFx0Y29sb3I6IFwid2hpdGUgIWltcG9ydGFudFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyUGFwZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdC8vIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiIzMwMzAzMFwiIDogXCIjZWVlZWVlXCIsXHJcblx0XHQvL2JhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzcyODlkYSwgIzY2YTZmZilcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjMmUzMjM4XCIsXHJcblx0fSxcclxuXHRkcmF3ZXJDb250YWluZXI6IHtcclxuXHRcdG92ZXJmbG93WTogXCJhdXRvXCIsXHJcblx0XHRvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXHJcblx0fSxcclxuXHRuZXN0ZWRUZXh0OiB7XHJcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tRHJhd2VyKCkge1xyXG5cdGNvbnN0IHJvdXRlcyA9IHtcclxuXHRcdEhvbWU6IFwiL1wiLFxyXG5cdFx0Q29udHJpYnV0ZTogXCIvY29udHJpYnV0ZVwiLFxyXG5cdFx0RkFROiB7XHJcblx0XHRcdFNrcmlwdDogXCIvZmFxL3NrcmlwdFwiLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkcm9wZG93bnMgPSB7fTtcclxuXHJcblx0T2JqZWN0LmtleXMocm91dGVzKS5mb3JFYWNoKChyb3V0ZSkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiByb3V0ZXNbcm91dGVdICE9PSBcIm9iamVjdFwiKSByZXR1cm47XHJcblx0XHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHRcdGRyb3Bkb3duc1tyb3V0ZV0gPSB7fTtcclxuXHRcdGRyb3Bkb3duc1tyb3V0ZV0ub3BlbiA9IG9wZW47XHJcblx0XHRkcm9wZG93bnNbcm91dGVdLnNldE9wZW4gPSBzZXRPcGVuO1xyXG5cdH0pO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0ZnVuY3Rpb24gbWFwUm91dGVzKHJvdXRlcywgaSkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHJvdXRlcykubWFwKChyb3V0ZSwgaW5kZXgpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVvZiByb3V0ZXNbcm91dGVdID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxMaXN0SXRlbVxyXG5cdFx0XHRcdFx0XHRidXR0b25cclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PXtMaW5rfVxyXG5cdFx0XHRcdFx0XHRuYWtlZFxyXG5cdFx0XHRcdFx0XHRocmVmPXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRrZXk9e3JvdXRlc1tyb3V0ZV19XHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkPXtyb3V0ZXIuYXNQYXRoID09PSByb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IGAke2kgKiA4fXB4YCB9fT5cclxuXHRcdFx0XHRcdFx0XHR7cm91dGV9XHJcblx0XHRcdFx0XHRcdDwvTGlzdEl0ZW1UZXh0PlxyXG5cdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1cclxuXHRcdFx0XHRcdFx0XHRidXR0b25cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRkcm9wZG93bnNbcm91dGVdLnNldE9wZW4oXHJcblx0XHRcdFx0XHRcdFx0XHRcdCFkcm9wZG93bnNbcm91dGVdLm9wZW5cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogYCR7aSAqIDh9cHhgIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3JvdXRlfVxyXG5cdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW1UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8Q29sbGFwc2UgaW49e2Ryb3Bkb3duc1tyb3V0ZV0ub3Blbn0+XHJcblx0XHRcdFx0XHRcdFx0e21hcFJvdXRlcyhyb3V0ZXNbcm91dGVdKX1cclxuXHRcdFx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxEcmF3ZXJcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cclxuXHRcdFx0dmFyaWFudD1cInBlcm1hbmVudFwiXHJcblx0XHRcdGNsYXNzZXM9e3tcclxuXHRcdFx0XHRwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuXHRcdFx0fX1cclxuXHRcdFx0YW5jaG9yPVwibGVmdFwiXHJcblx0XHQ+XHJcblx0XHRcdDxUb29sYmFyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PExpc3QgZGVuc2U+e21hcFJvdXRlcyhyb3V0ZXMsIDApfTwvTGlzdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0RyYXdlcj5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=