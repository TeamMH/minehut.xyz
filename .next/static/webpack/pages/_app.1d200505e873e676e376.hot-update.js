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
    _s = $RefreshSig$(),
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

  dropdowns[route].setOpen = function () {
    return setOpen(!open);
  };
}, "dVkDIfRb5RN4FjtonjBYYwpg89o="));
function CustomDrawer() {
  _s2();

  var routes = {
    Home: "/",
    Contribute: "/contribute",
    FAQ: {
      Skript: "/faq/skript"
    }
  };
  console.log(dropdowns);

  function mapRoutes(routes, i) {
    var _this = this;

    return Object.keys(routes).map(function (route, index) {
      if (typeof routes[route] === "string") {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
          button: true,
          component: _src_Link__WEBPACK_IMPORTED_MODULE_4__["default"],
          naked: true,
          href: routes[route],
          selected: i + index === selectedIndex,
          onClick: function onClick(e) {
            return handleListItemClick(e, index + i);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
            children: route
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
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
            onClick: dropdowns[route].setOpen,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              children: route
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
            "in": dropdowns[route],
            children: mapRoutes(routes[route])
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, _this)]
        }, void 0, true);
      }
    });
  }

  var classes = useStyles();

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(1),
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
      lineNumber: 108,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: mapRoutes(routes, 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 3
  }, this);
}

_s2(CustomDrawer, "SZ7qzv4KiU3jS5aDCWf98tgow18=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJkcm9wZG93bnMiLCJPYmplY3QiLCJrZXlzIiwicm91dGVzIiwiZm9yRWFjaCIsInJvdXRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiQ3VzdG9tRHJhd2VyIiwiSG9tZSIsIkNvbnRyaWJ1dGUiLCJGQVEiLCJTa3JpcHQiLCJjb25zb2xlIiwibG9nIiwibWFwUm91dGVzIiwiaSIsIm1hcCIsImluZGV4IiwiTGluayIsInNlbGVjdGVkSW5kZXgiLCJlIiwiaGFuZGxlTGlzdEl0ZW1DbGljayIsImNsYXNzZXMiLCJzZXRTZWxlY3RlZEluZGV4IiwicGFwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFSixXQURBO0FBRVBLLGNBQVUsRUFBRSxDQUZMO0FBR1BDLGFBQVMsRUFBRSxPQUhKO0FBSVBDLFNBQUssRUFBRTtBQUpBLEdBRG9CO0FBTzVCQyxhQUFXLEVBQUU7QUFDWkosU0FBSyxFQUFFSixXQURLO0FBRVo7QUFDQTtBQUNBUyxtQkFBZSxFQUFFO0FBSkwsR0FQZTtBQWE1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O0FBMUNzQyx5QkE0Q0l1Qiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQTVDSjtBQUFBO0FBQUEsTUE0Qy9CZSxhQTVDK0I7QUFBQSxNQTRDaEJJLGdCQTVDZ0I7O0FBOEN0QyxzQkFDQyxxRUFBQyx3REFBRDtBQUNDLGFBQVMsRUFBRUQsT0FBTyxDQUFDeEMsTUFEcEI7QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFdBQU8sRUFBRTtBQUNSMEMsV0FBSyxFQUFFRixPQUFPLENBQUNuQztBQURQLEtBSFY7QUFNQyxVQUFNLEVBQUMsTUFOUjtBQUFBLDRCQVFDLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRCxlQVNDO0FBQUssZUFBUyxFQUFFbUMsT0FBTyxDQUFDakMsZUFBeEI7QUFBQSw2QkFDQyxxRUFBQyxzREFBRDtBQUFNLGFBQUssTUFBWDtBQUFBLGtCQUFheUIsU0FBUyxDQUFDZCxNQUFELEVBQVMsQ0FBVDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZUE7O0lBN0R1Qk8sWTtVQTBDUDNCLFM7OztLQTFDTzJCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xZDIwMDUwNWU4NzNlNjc2ZTM3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG5cdERyYXdlcixcclxuXHRUb29sYmFyLFxyXG5cdExpc3QsXHJcblx0TGlzdEl0ZW0sXHJcblx0TGlzdEl0ZW1JY29uLFxyXG5cdExpc3RJdGVtVGV4dCxcclxuXHRDb2xsYXBzZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL3NyYy9MaW5rXCI7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luYm94XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBFeHBhbmRMZXNzLCBFeHBhbmRNb3JlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAzNTA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRkcmF3ZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdGZsZXhTaHJpbms6IDAsXHJcblx0XHR0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuXHRcdGNvbG9yOiBcIndoaXRlICFpbXBvcnRhbnRcIixcclxuXHR9LFxyXG5cdGRyYXdlclBhcGVyOiB7XHJcblx0XHR3aWR0aDogZHJhd2VyV2lkdGgsXHJcblx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiMzMDMwMzBcIiA6IFwiI2VlZWVlZVwiLFxyXG5cdFx0Ly9iYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM3Mjg5ZGEsICM2NmE2ZmYpXCIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzJlMzIzOFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyQ29udGFpbmVyOiB7XHJcblx0XHRvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG5cdFx0b3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG5cdH0sXHJcblx0bmVzdGVkVGV4dDoge1xyXG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmNvbnN0IGRyb3Bkb3ducyA9IHt9O1xyXG5cclxuT2JqZWN0LmtleXMocm91dGVzKS5mb3JFYWNoKChyb3V0ZSkgPT4ge1xyXG5cdGlmICh0eXBlb2Ygcm91dGVzW3JvdXRlXSAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xyXG5cdGRyb3Bkb3duc1tyb3V0ZV0gPSB7fTtcclxuXHRkcm9wZG93bnNbcm91dGVdLm9wZW4gPSBvcGVuO1xyXG5cdGRyb3Bkb3duc1tyb3V0ZV0uc2V0T3BlbiA9ICgpID0+IHNldE9wZW4oIW9wZW4pO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbURyYXdlcigpIHtcclxuXHRjb25zdCByb3V0ZXMgPSB7XHJcblx0XHRIb21lOiBcIi9cIixcclxuXHRcdENvbnRyaWJ1dGU6IFwiL2NvbnRyaWJ1dGVcIixcclxuXHRcdEZBUToge1xyXG5cdFx0XHRTa3JpcHQ6IFwiL2ZhcS9za3JpcHRcIixcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc29sZS5sb2coZHJvcGRvd25zKTtcclxuXHJcblx0ZnVuY3Rpb24gbWFwUm91dGVzKHJvdXRlcywgaSkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHJvdXRlcykubWFwKChyb3V0ZSwgaW5kZXgpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVvZiByb3V0ZXNbcm91dGVdID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxMaXN0SXRlbVxyXG5cdFx0XHRcdFx0XHRidXR0b25cclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PXtMaW5rfVxyXG5cdFx0XHRcdFx0XHRuYWtlZFxyXG5cdFx0XHRcdFx0XHRocmVmPXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRrZXk9e3JvdXRlc1tyb3V0ZV19XHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkPXtpICsgaW5kZXggPT09IHNlbGVjdGVkSW5kZXh9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVMaXN0SXRlbUNsaWNrKGUsIGluZGV4ICsgaSl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQ+e3JvdXRlfTwvTGlzdEl0ZW1UZXh0PlxyXG5cdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW0gYnV0dG9uIG9uQ2xpY2s9e2Ryb3Bkb3duc1tyb3V0ZV0uc2V0T3Blbn0+XHJcblx0XHRcdFx0XHRcdFx0PExpc3RJdGVtVGV4dD57cm91dGV9PC9MaXN0SXRlbVRleHQ+XHJcblx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdDxDb2xsYXBzZSBpbj17ZHJvcGRvd25zW3JvdXRlXX0+XHJcblx0XHRcdFx0XHRcdFx0e21hcFJvdXRlcyhyb3V0ZXNbcm91dGVdKX1cclxuXHRcdFx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxEcmF3ZXJcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cclxuXHRcdFx0dmFyaWFudD1cInBlcm1hbmVudFwiXHJcblx0XHRcdGNsYXNzZXM9e3tcclxuXHRcdFx0XHRwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuXHRcdFx0fX1cclxuXHRcdFx0YW5jaG9yPVwibGVmdFwiXHJcblx0XHQ+XHJcblx0XHRcdDxUb29sYmFyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PExpc3QgZGVuc2U+e21hcFJvdXRlcyhyb3V0ZXMsIDApfTwvTGlzdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0RyYXdlcj5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=