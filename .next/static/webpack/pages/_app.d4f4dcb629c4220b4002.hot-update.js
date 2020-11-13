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
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/next-server/server/router */ "./node_modules/next/dist/next-server/server/router.js");
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_11__);




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
              marginLeft: "".concat(i * 32, "px")
            },
            children: route
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, _this)
        }, routes[route], false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 6
        }, _this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
            button: true,
            onClick: function onClick() {
              dropdowns[route].setOpen(!dropdowns[route].open);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              style: {
                marginLeft: "".concat(i * 16, "px")
              },
              children: route
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 8
            }, _this), dropdowns[route].open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ExpandLess"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 9
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ExpandMore"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 9
            }, _this)]
          }, route, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
            "in": dropdowns[route].open,
            children: mapRoutes(routes[route], i + 1)
          }, route + "-dropdown", false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 7
          }, _this)]
        }, void 0, true);
      }
    });
  }

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
    className: classes.drawer,
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    anchor: "left",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: mapRoutes(routes, 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 3
  }, this);
}

_s2(CustomDrawer, "udxARlSzUQQ8jg2GSLXYjtUi3ZI=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJyb3V0ZXMiLCJIb21lIiwiQ29udHJpYnV0ZSIsIkZBUSIsIlNrcmlwdCIsImRyb3Bkb3ducyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicm91dGUiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJtYXBSb3V0ZXMiLCJpIiwibWFwIiwiaW5kZXgiLCJMaW5rIiwiYXNQYXRoIiwiY2xhc3NlcyIsInBhcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLFFBQU0sRUFBRTtBQUNQQyxTQUFLLEVBQUVKLFdBREE7QUFFUEssY0FBVSxFQUFFLENBRkw7QUFHUEMsYUFBUyxFQUFFLE9BSEo7QUFJUEMsU0FBSyxFQUFFO0FBSkEsR0FEb0I7QUFPNUJDLGFBQVcsRUFBRTtBQUNaSixTQUFLLEVBQUVKLFdBREs7QUFFWjtBQUNBO0FBQ0FTLG1CQUFlLEVBQUU7QUFKTCxHQVBlO0FBYTVCQyxpQkFBZSxFQUFFO0FBQ2hCQyxhQUFTLEVBQUUsTUFE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O0FBRUMsa0JBQUlKLFNBQVMsQ0FBQ0ksS0FBRCxDQUFULENBQWlCRyxJQUZ0QjtBQUFBLHNCQUlFSSxTQUFTLENBQUNoQixNQUFNLENBQUNTLEtBQUQsQ0FBUCxFQUFnQlEsQ0FBQyxHQUFHLENBQXBCO0FBSlgsYUFDTVIsS0FBSyxHQUFHLFdBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkQ7QUFBQSx3QkFERDtBQTRCQTtBQUNELEtBOUNNLENBQVA7QUErQ0E7O0FBRUQsTUFBTWEsT0FBTyxHQUFHeEMsU0FBUyxFQUF6QjtBQUVBLHNCQUNDLHFFQUFDLHdEQUFEO0FBQ0MsYUFBUyxFQUFFd0MsT0FBTyxDQUFDdEMsTUFEcEI7QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFdBQU8sRUFBRTtBQUNSdUMsV0FBSyxFQUFFRCxPQUFPLENBQUNqQztBQURQLEtBSFY7QUFNQyxVQUFNLEVBQUMsTUFOUjtBQUFBLDRCQVFDLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRCxlQVNDO0FBQUssZUFBUyxFQUFFaUMsT0FBTyxDQUFDL0IsZUFBeEI7QUFBQSw2QkFDQyxxRUFBQyxzREFBRDtBQUFNLGFBQUssTUFBWDtBQUFBLGtCQUFheUIsU0FBUyxDQUFDaEIsTUFBRCxFQUFTLENBQVQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWVBOztJQXhGdUJELFk7VUFtQlJnQixzRCxFQW9EQ2pDLFM7OztLQXZFT2lCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kNGY0ZGNiNjI5YzQyMjBiNDAwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG5cdERyYXdlcixcclxuXHRUb29sYmFyLFxyXG5cdExpc3QsXHJcblx0TGlzdEl0ZW0sXHJcblx0TGlzdEl0ZW1JY29uLFxyXG5cdExpc3RJdGVtVGV4dCxcclxuXHRDb2xsYXBzZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL3NyYy9MaW5rXCI7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luYm94XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBFeHBhbmRMZXNzLCBFeHBhbmRNb3JlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMzUwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0ZHJhd2VyOiB7XHJcblx0XHR3aWR0aDogZHJhd2VyV2lkdGgsXHJcblx0XHRmbGV4U2hyaW5rOiAwLFxyXG5cdFx0dGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcblx0XHRjb2xvcjogXCJ3aGl0ZSAhaW1wb3J0YW50XCIsXHJcblx0fSxcclxuXHRkcmF3ZXJQYXBlcjoge1xyXG5cdFx0d2lkdGg6IGRyYXdlcldpZHRoLFxyXG5cdFx0Ly8gYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjMzAzMDMwXCIgOiBcIiNlZWVlZWVcIixcclxuXHRcdC8vYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjNzI4OWRhLCAjNjZhNmZmKVwiLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiMyZTMyMzhcIixcclxuXHR9LFxyXG5cdGRyYXdlckNvbnRhaW5lcjoge1xyXG5cdFx0b3ZlcmZsb3dZOiBcImF1dG9cIixcclxuXHRcdG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcclxuXHR9LFxyXG5cdG5lc3RlZFRleHQ6IHtcclxuXHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0fSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21EcmF3ZXIoKSB7XHJcblx0Y29uc3Qgcm91dGVzID0ge1xyXG5cdFx0SG9tZTogXCIvXCIsXHJcblx0XHRDb250cmlidXRlOiBcIi9jb250cmlidXRlXCIsXHJcblx0XHRGQVE6IHtcclxuXHRcdFx0U2tyaXB0OiBcIi9mYXEvc2tyaXB0XCIsXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRyb3Bkb3ducyA9IHt9O1xyXG5cclxuXHRPYmplY3Qua2V5cyhyb3V0ZXMpLmZvckVhY2goKHJvdXRlKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIHJvdXRlc1tyb3V0ZV0gIT09IFwib2JqZWN0XCIpIHJldHVybjtcclxuXHRcdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cdFx0ZHJvcGRvd25zW3JvdXRlXSA9IHt9O1xyXG5cdFx0ZHJvcGRvd25zW3JvdXRlXS5vcGVuID0gb3BlbjtcclxuXHRcdGRyb3Bkb3duc1tyb3V0ZV0uc2V0T3BlbiA9IHNldE9wZW47XHJcblx0fSk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRmdW5jdGlvbiBtYXBSb3V0ZXMocm91dGVzLCBpKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMocm91dGVzKS5tYXAoKHJvdXRlLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRpZiAodHlwZW9mIHJvdXRlc1tyb3V0ZV0gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PExpc3RJdGVtXHJcblx0XHRcdFx0XHRcdGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ9e0xpbmt9XHJcblx0XHRcdFx0XHRcdG5ha2VkXHJcblx0XHRcdFx0XHRcdGhyZWY9e3JvdXRlc1tyb3V0ZV19XHJcblx0XHRcdFx0XHRcdGtleT17cm91dGVzW3JvdXRlXX1cclxuXHRcdFx0XHRcdFx0c2VsZWN0ZWQ9e3JvdXRlci5hc1BhdGggPT09IHJvdXRlc1tyb3V0ZV19XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogYCR7aSAqIDMyfXB4YCB9fT5cclxuXHRcdFx0XHRcdFx0XHR7cm91dGV9XHJcblx0XHRcdFx0XHRcdDwvTGlzdEl0ZW1UZXh0PlxyXG5cdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1cclxuXHRcdFx0XHRcdFx0XHRidXR0b25cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRkcm9wZG93bnNbcm91dGVdLnNldE9wZW4oXHJcblx0XHRcdFx0XHRcdFx0XHRcdCFkcm9wZG93bnNbcm91dGVdLm9wZW5cclxuXHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHRrZXk9e3JvdXRlfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PExpc3RJdGVtVGV4dCBzdHlsZT17eyBtYXJnaW5MZWZ0OiBgJHtpICogMTZ9cHhgIH19PlxyXG5cdFx0XHRcdFx0XHRcdFx0e3JvdXRlfVxyXG5cdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW1UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdHtkcm9wZG93bnNbcm91dGVdLm9wZW4gPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8RXhwYW5kTGVzcyAvPlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8RXhwYW5kTW9yZSAvPlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdDxDb2xsYXBzZVxyXG5cdFx0XHRcdFx0XHRcdGtleT17cm91dGUgKyBcIi1kcm9wZG93blwifVxyXG5cdFx0XHRcdFx0XHRcdGluPXtkcm9wZG93bnNbcm91dGVdLm9wZW59XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHR7bWFwUm91dGVzKHJvdXRlc1tyb3V0ZV0sIGkgKyAxKX1cclxuXHRcdFx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PERyYXdlclxyXG5cdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfVxyXG5cdFx0XHR2YXJpYW50PVwicGVybWFuZW50XCJcclxuXHRcdFx0Y2xhc3Nlcz17e1xyXG5cdFx0XHRcdHBhcGVyOiBjbGFzc2VzLmRyYXdlclBhcGVyLFxyXG5cdFx0XHR9fVxyXG5cdFx0XHRhbmNob3I9XCJsZWZ0XCJcclxuXHRcdD5cclxuXHRcdFx0PFRvb2xiYXIgLz5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyQ29udGFpbmVyfT5cclxuXHRcdFx0XHQ8TGlzdCBkZW5zZT57bWFwUm91dGVzKHJvdXRlcywgMCl9PC9MaXN0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvRHJhd2VyPlxyXG5cdCk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==