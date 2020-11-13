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
    },
    Plugins: {
      "Plugin List": "/plugins/plugin-list",
      "Recommended Plugins": "/plugins/recommended-plugins"
    }
  };
  var dropdowns = {};
  Object.keys(routes).forEach(_s(function (route) {
    _s();

    if (typeof routes[route] !== "object") return;

    var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
        _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

    dropdowns[route] = {};
    dropdowns[route].open = open;
    dropdowns[route].setOpen = setOpen;
  }, "xG1TONbKtDWtdOTrXaTAsNhPg/Q="));
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
            lineNumber: 82,
            columnNumber: 7
          }, _this)
        }, routes[route], false, {
          fileName: _jsxFileName,
          lineNumber: 74,
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
              lineNumber: 99,
              columnNumber: 8
            }, _this), dropdowns[route].open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ExpandLess"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 103,
              columnNumber: 9
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ExpandMore"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 9
            }, _this)]
          }, route, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
            "in": dropdowns[route].open,
            children: mapRoutes(routes[route], i + 1)
          }, route + "-dropdown", false, {
            fileName: _jsxFileName,
            lineNumber: 108,
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
      lineNumber: 131,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: mapRoutes(routes, 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJyb3V0ZXMiLCJIb21lIiwiQ29udHJpYnV0ZSIsIkZBUSIsIlNrcmlwdCIsIlBsdWdpbnMiLCJkcm9wZG93bnMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInJvdXRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFwUm91dGVzIiwiaSIsIm1hcCIsImluZGV4IiwiTGluayIsImFzUGF0aCIsImNsYXNzZXMiLCJwYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFSixXQURBO0FBRVBLLGNBQVUsRUFBRSxDQUZMO0FBR1BDLGFBQVMsRUFBRSxPQUhKO0FBSVBDLFNBQUssRUFBRTtBQUpBLEdBRG9CO0FBTzVCQyxhQUFXLEVBQUU7QUFDWkosU0FBSyxFQUFFSixXQURLO0FBRVo7QUFDQTtBQUNBUyxtQkFBZSxFQUFFO0FBSkwsR0FQZTtBQWE1QkMsaUJBQWUsRUFBRTtBQUNoQkMsYUFB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cUJBZkY7QUFBQSxhQU9NSCxLQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFtQkMscUVBQUMsMERBQUQ7QUFFQyxrQkFBSUosU0FBUyxDQUFDSSxLQUFELENBQVQsQ0FBaUJHLElBRnRCO0FBQUEsc0JBSUVJLFNBQVMsQ0FBQ2pCLE1BQU0sQ0FBQ1UsS0FBRCxDQUFQLEVBQWdCUSxDQUFDLEdBQUcsQ0FBcEI7QUFKWCxhQUNNUixLQUFLLEdBQUcsV0FEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQW5CRDtBQUFBLHdCQUREO0FBNEJBO0FBQ0QsS0E5Q00sQ0FBUDtBQStDQTs7QUFFRCxNQUFNYSxPQUFPLEdBQUd6QyxTQUFTLEVBQXpCO0FBRUEsc0JBQ0MscUVBQUMsd0RBQUQ7QUFDQyxhQUFTLEVBQUV5QyxPQUFPLENBQUN2QyxNQURwQjtBQUVDLFdBQU8sRUFBQyxXQUZUO0FBR0MsV0FBTyxFQUFFO0FBQ1J3QyxXQUFLLEVBQUVELE9BQU8sQ0FBQ2xDO0FBRFAsS0FIVjtBQU1DLFVBQU0sRUFBQyxNQU5SO0FBQUEsNEJBUUMscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELGVBU0M7QUFBSyxlQUFTLEVBQUVrQyxPQUFPLENBQUNoQyxlQUF4QjtBQUFBLDZCQUNDLHFFQUFDLHNEQUFEO0FBQU0sYUFBSyxNQUFYO0FBQUEsa0JBQWEwQixTQUFTLENBQUNqQixNQUFELEVBQVMsQ0FBVDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZUE7O0lBNUZ1QkQsWTtVQXVCUmlCLHNELEVBb0RDbEMsUzs7O0tBM0VPaUIsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmM1ZTVlOWM1MDBlODBkMzQyOTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcblx0RHJhd2VyLFxyXG5cdFRvb2xiYXIsXHJcblx0TGlzdCxcclxuXHRMaXN0SXRlbSxcclxuXHRMaXN0SXRlbUljb24sXHJcblx0TGlzdEl0ZW1UZXh0LFxyXG5cdENvbGxhcHNlLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi4vc3JjL0xpbmtcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5ib3hcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lXCI7XHJcbmltcG9ydCB7IEV4cGFuZExlc3MsIEV4cGFuZE1vcmUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3JvdXRlclwiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAzNTA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRkcmF3ZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdGZsZXhTaHJpbms6IDAsXHJcblx0XHR0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuXHRcdGNvbG9yOiBcIndoaXRlICFpbXBvcnRhbnRcIixcclxuXHR9LFxyXG5cdGRyYXdlclBhcGVyOiB7XHJcblx0XHR3aWR0aDogZHJhd2VyV2lkdGgsXHJcblx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiMzMDMwMzBcIiA6IFwiI2VlZWVlZVwiLFxyXG5cdFx0Ly9iYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM3Mjg5ZGEsICM2NmE2ZmYpXCIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzJlMzIzOFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyQ29udGFpbmVyOiB7XHJcblx0XHRvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG5cdFx0b3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG5cdH0sXHJcblx0bmVzdGVkVGV4dDoge1xyXG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbURyYXdlcigpIHtcclxuXHRjb25zdCByb3V0ZXMgPSB7XHJcblx0XHRIb21lOiBcIi9cIixcclxuXHRcdENvbnRyaWJ1dGU6IFwiL2NvbnRyaWJ1dGVcIixcclxuXHRcdEZBUToge1xyXG5cdFx0XHRTa3JpcHQ6IFwiL2ZhcS9za3JpcHRcIixcclxuXHRcdH0sXHJcblx0XHRQbHVnaW5zOiB7XHJcblx0XHRcdFwiUGx1Z2luIExpc3RcIjogXCIvcGx1Z2lucy9wbHVnaW4tbGlzdFwiLFxyXG5cdFx0XHRcIlJlY29tbWVuZGVkIFBsdWdpbnNcIjogXCIvcGx1Z2lucy9yZWNvbW1lbmRlZC1wbHVnaW5zXCIsXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRyb3Bkb3ducyA9IHt9O1xyXG5cclxuXHRPYmplY3Qua2V5cyhyb3V0ZXMpLmZvckVhY2goKHJvdXRlKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIHJvdXRlc1tyb3V0ZV0gIT09IFwib2JqZWN0XCIpIHJldHVybjtcclxuXHRcdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHRcdGRyb3Bkb3duc1tyb3V0ZV0gPSB7fTtcclxuXHRcdGRyb3Bkb3duc1tyb3V0ZV0ub3BlbiA9IG9wZW47XHJcblx0XHRkcm9wZG93bnNbcm91dGVdLnNldE9wZW4gPSBzZXRPcGVuO1xyXG5cdH0pO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0ZnVuY3Rpb24gbWFwUm91dGVzKHJvdXRlcywgaSkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHJvdXRlcykubWFwKChyb3V0ZSwgaW5kZXgpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVvZiByb3V0ZXNbcm91dGVdID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxMaXN0SXRlbVxyXG5cdFx0XHRcdFx0XHRidXR0b25cclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PXtMaW5rfVxyXG5cdFx0XHRcdFx0XHRuYWtlZFxyXG5cdFx0XHRcdFx0XHRocmVmPXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRrZXk9e3JvdXRlc1tyb3V0ZV19XHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkPXtyb3V0ZXIuYXNQYXRoID09PSByb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IGAke2kgKiAzMn1weGAgfX0+XHJcblx0XHRcdFx0XHRcdFx0e3JvdXRlfVxyXG5cdFx0XHRcdFx0XHQ8L0xpc3RJdGVtVGV4dD5cclxuXHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0PExpc3RJdGVtXHJcblx0XHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZHJvcGRvd25zW3JvdXRlXS5zZXRPcGVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQhZHJvcGRvd25zW3JvdXRlXS5vcGVuXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0a2V5PXtyb3V0ZX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogYCR7aSAqIDE2fXB4YCB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdHtyb3V0ZX1cclxuXHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtVGV4dD5cclxuXHRcdFx0XHRcdFx0XHR7ZHJvcGRvd25zW3JvdXRlXS5vcGVuID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEV4cGFuZExlc3MgLz5cclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEV4cGFuZE1vcmUgLz5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8Q29sbGFwc2VcclxuXHRcdFx0XHRcdFx0XHRrZXk9e3JvdXRlICsgXCItZHJvcGRvd25cIn1cclxuXHRcdFx0XHRcdFx0XHRpbj17ZHJvcGRvd25zW3JvdXRlXS5vcGVufVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0e21hcFJvdXRlcyhyb3V0ZXNbcm91dGVdLCBpICsgMSl9XHJcblx0XHRcdFx0XHRcdDwvQ29sbGFwc2U+XHJcblx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxEcmF3ZXJcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cclxuXHRcdFx0dmFyaWFudD1cInBlcm1hbmVudFwiXHJcblx0XHRcdGNsYXNzZXM9e3tcclxuXHRcdFx0XHRwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuXHRcdFx0fX1cclxuXHRcdFx0YW5jaG9yPVwibGVmdFwiXHJcblx0XHQ+XHJcblx0XHRcdDxUb29sYmFyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PExpc3QgZGVuc2U+e21hcFJvdXRlcyhyb3V0ZXMsIDApfTwvTGlzdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0RyYXdlcj5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=