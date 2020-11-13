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
    _s = $RefreshSig$();









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
  _s();

  var _this = this;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(1),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      selectedIndex = _React$useState4[0],
      setSelectedIndex = _React$useState4[1];

  var handleListItemClick = function handleListItemClick(event, index) {
    setSelectedIndex(index);
  };

  var handleClick = function handleClick() {
    setOpen(!open);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
    className: classes.drawer,
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    anchor: "left",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: Object.keys(routes).map(function (route) {
          if (typeof routes[route] === "string") {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
              button: true,
              component: _src_Link__WEBPACK_IMPORTED_MODULE_4__["default"],
              naked: true,
              href: routes[route],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
                children: route
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 10
              }, _this)
            }, routes[route], false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 9
            }, _this);
          } else return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 3
  }, this);
}

_s(CustomDrawer, "UiqCbjzmevzNupjeNLr9qZK+JM8=", false, function () {
  return [useStyles];
});

_c = CustomDrawer;
var routes = {
  Home: "/",
  Contribute: "/contribute",
  FAQ: {
    Skript: "/faq/skript"
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJoYW5kbGVMaXN0SXRlbUNsaWNrIiwiZXZlbnQiLCJpbmRleCIsImhhbmRsZUNsaWNrIiwicGFwZXIiLCJPYmplY3QiLCJrZXlzIiwicm91dGVzIiwibWFwIiwicm91dGUiLCJMaW5rIiwiSG9tZSIsIkNvbnRyaWJ1dGUiLCJGQVEiLCJTa3JpcHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLFFBQU0sRUFBRTtBQUNQQyxTQUFLLEVBQUVKLFdBREE7QUFFUEssY0FBVSxFQUFFLENBRkw7QUFHUEMsYUFBUyxFQUFFLE9BSEo7QUFJUEMsU0FBSyxFQUFFO0FBSkEsR0FEb0I7QUFPNUJDLGFBQVcsRUFBRTtBQUNaSixTQUFLLEVBQUVKLFdBREs7QUFFWjtBQUNBO0FBQ0FTLG1CQUFlLEVBQUU7QUFKTCxHQVBlO0FBYTVCQyxpQkFBZSxFQUFFO0FBQ2hCQyxhQUFTLEVBQUUsTUFESztBQUVoQkMsYUFBUyxFQUFFLFFBRks7QUFHaEJDLGFBQVMsRUFBRUMsOENBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQ7QUFISyxHQWJXO0FBa0I1QkMsWUFBVSxFQUFFO0FBQ1hDLGNBQVUsRUFBRUgsOENBQUssQ0FBQ0MsT0FBTixDQUFjLENBQWQ7QUFERDtBQWxCZ0IsQ0FBRCxDQUE1QjtBQXVCZSxTQUFTRyxZQUFULEdBQXdCO0FBQUE7O0FBQUE7O0FBQ3RDLE1BQU1DLE9BQU8sR0FBR2xCLFNBQVMsRUFBekI7O0FBRHNDLHdCQUdkbUIsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FIYztBQUFBO0FBQUEsTUFHL0JDLElBSCtCO0FBQUEsTUFHekJDLE9BSHlCOztBQUFBLHlCQUlJSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUpKO0FBQUE7QUFBQSxNQUkvQkcsYUFKK0I7QUFBQSxNQUloQkMsZ0JBSmdCOztBQU10QyxNQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUM3Q0gsb0JBQWdCLENBQUNHLEtBQUQsQ0FBaEI7QUFDQSxHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDekJOLFdBQU8sQ0FBQyxDQUFDRCxJQUFGLENBQVA7QUFDQSxHQUZEOztBQUlBLHNCQUNDLHFFQUFDLHdEQUFEO0FBQ0MsYUFBUyxFQUFFSCxPQUFPLENBQUNoQixNQURwQjtBQUVDLFdBQU8sRUFBQyxXQUZUO0FBR0MsV0FBTyxFQUFFO0FBQ1IyQixXQUFLLEVBQUVYLE9BQU8sQ0FBQ1g7QUFEUCxLQUhWO0FBTUMsVUFBTSxFQUFDLE1BTlI7QUFBQSw0QkFRQyxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQsZUFTQztBQUFLLGVBQVMsRUFBRVcsT0FBTyxDQUFDVCxlQUF4QjtBQUFBLDZCQUNDLHFFQUFDLHNEQUFEO0FBQU0sYUFBSyxNQUFYO0FBQUEsa0JBQ0VxQixNQUFNLENBQUNDLElBQVAsQ0FBWUMsTUFBWixFQUFvQkMsR0FBcEIsQ0FBd0IsVUFBQ0MsS0FBRCxFQUFXO0FBQ25DLGNBQUksT0FBT0YsTUFBTSxDQUFDRSxLQUFELENBQWIsS0FBeUIsUUFBN0IsRUFBdUM7QUFDdEMsZ0NBQ0MscUVBQUMsMERBQUQ7QUFDQyxvQkFBTSxNQURQO0FBRUMsdUJBQVMsRUFBRUMsaURBRlo7QUFHQyxtQkFBSyxNQUhOO0FBSUMsa0JBQUksRUFBRUgsTUFBTSxDQUFDRSxLQUFELENBSmI7QUFBQSxxQ0FPQyxxRUFBQyw4REFBRDtBQUFBLDBCQUFlQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRCxlQUtNRixNQUFNLENBQUNFLEtBQUQsQ0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBV0EsV0FaRCxNQVlPLG9CQUFPLHVKQUFQO0FBQ1AsU0FkQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUErQkE7O0dBN0N1QmpCLFk7VUFDUGpCLFM7OztLQURPaUIsWTtBQStDeEIsSUFBTWUsTUFBTSxHQUFHO0FBQ2RJLE1BQUksRUFBRSxHQURRO0FBRWRDLFlBQVUsRUFBRSxhQUZFO0FBR2RDLEtBQUcsRUFBRTtBQUNKQyxVQUFNLEVBQUU7QUFESjtBQUhTLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wMDQ0Nzg2YzFmZjFlMmMxZTg5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG5cdERyYXdlcixcclxuXHRUb29sYmFyLFxyXG5cdExpc3QsXHJcblx0TGlzdEl0ZW0sXHJcblx0TGlzdEl0ZW1JY29uLFxyXG5cdExpc3RJdGVtVGV4dCxcclxuXHRDb2xsYXBzZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL3NyYy9MaW5rXCI7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luYm94XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBFeHBhbmRMZXNzLCBFeHBhbmRNb3JlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAzNTA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRkcmF3ZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdGZsZXhTaHJpbms6IDAsXHJcblx0XHR0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuXHRcdGNvbG9yOiBcIndoaXRlICFpbXBvcnRhbnRcIixcclxuXHR9LFxyXG5cdGRyYXdlclBhcGVyOiB7XHJcblx0XHR3aWR0aDogZHJhd2VyV2lkdGgsXHJcblx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiMzMDMwMzBcIiA6IFwiI2VlZWVlZVwiLFxyXG5cdFx0Ly9iYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM3Mjg5ZGEsICM2NmE2ZmYpXCIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzJlMzIzOFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyQ29udGFpbmVyOiB7XHJcblx0XHRvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG5cdFx0b3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG5cdH0sXHJcblx0bmVzdGVkVGV4dDoge1xyXG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbURyYXdlcigpIHtcclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlTGlzdEl0ZW1DbGljayA9IChldmVudCwgaW5kZXgpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0c2V0T3Blbighb3Blbik7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxEcmF3ZXJcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cclxuXHRcdFx0dmFyaWFudD1cInBlcm1hbmVudFwiXHJcblx0XHRcdGNsYXNzZXM9e3tcclxuXHRcdFx0XHRwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuXHRcdFx0fX1cclxuXHRcdFx0YW5jaG9yPVwibGVmdFwiXHJcblx0XHQ+XHJcblx0XHRcdDxUb29sYmFyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PExpc3QgZGVuc2U+XHJcblx0XHRcdFx0XHR7T2JqZWN0LmtleXMocm91dGVzKS5tYXAoKHJvdXRlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmICh0eXBlb2Ygcm91dGVzW3JvdXRlXSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBvbmVudD17TGlua31cclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFrZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj17cm91dGVzW3JvdXRlXX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0Pntyb3V0ZX08L0xpc3RJdGVtVGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHJldHVybiA8PjwvPjtcclxuXHRcdFx0XHRcdH0pfVxyXG5cdFx0XHRcdDwvTGlzdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0RyYXdlcj5cclxuXHQpO1xyXG59XHJcblxyXG5jb25zdCByb3V0ZXMgPSB7XHJcblx0SG9tZTogXCIvXCIsXHJcblx0Q29udHJpYnV0ZTogXCIvY29udHJpYnV0ZVwiLFxyXG5cdEZBUToge1xyXG5cdFx0U2tyaXB0OiBcIi9mYXEvc2tyaXB0XCIsXHJcblx0fSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==