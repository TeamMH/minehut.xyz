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

  function mapRoutes(routes, i) {
    var _this = this;

    Object.keys(routes).map(function (route, index) {
      if (typeof routes[route] === "string") {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
          button: true,
          component: _src_Link__WEBPACK_IMPORTED_MODULE_4__["default"],
          naked: true,
          href: routes[route],
          selected: i + index === selectedIndex,
          onClick: function onClick(e) {
            return setSelectedIndex(e, index + i);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
            children: route
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7
          }, _this)
        }, routes[route], false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }, _this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
          children: mapRoutes(routes[route])
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 12
        }, _this);
      }
    });
  }

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
      lineNumber: 88,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: mapRoutes()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJtYXBSb3V0ZXMiLCJyb3V0ZXMiLCJpIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInJvdXRlIiwiaW5kZXgiLCJMaW5rIiwic2VsZWN0ZWRJbmRleCIsImUiLCJzZXRTZWxlY3RlZEluZGV4IiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUxpc3RJdGVtQ2xpY2siLCJldmVudCIsImhhbmRsZUNsaWNrIiwicGFwZXIiLCJIb21lIiwiQ29udHJpYnV0ZSIsIkZBUSIsIlNrcmlwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFSixXQURBO0FBRVBLLGNBQVUsRUFBRSxDQUZMO0FBR1BDLGFBQVMsRUFBRSxPQUhKO0FBSVBDLFNBQUssRUFBRTtBQUpBLEdBRG9CO0FBTzVCQyxhQUFXLEVBQUU7QUFDWkosU0FBSyxFQUFFSixXQURLO0FBRVo7QUFDQTtBQUNBUyxtQkFBZSxFQUFFO0FBSkwsR0FQZTtBQWE1QkMsaUJBQWUsRUFBRTtBQUNo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RUFBRSxhQUZFO0FBR2RDLEtBQUcsRUFBRTtBQUNKQyxVQUFNLEVBQUU7QUFESjtBQUhTLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iYjdlNmFkNTk0YjRhYTY5YzQwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG5cdERyYXdlcixcclxuXHRUb29sYmFyLFxyXG5cdExpc3QsXHJcblx0TGlzdEl0ZW0sXHJcblx0TGlzdEl0ZW1JY29uLFxyXG5cdExpc3RJdGVtVGV4dCxcclxuXHRDb2xsYXBzZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL3NyYy9MaW5rXCI7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luYm94XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBFeHBhbmRMZXNzLCBFeHBhbmRNb3JlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAzNTA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRkcmF3ZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdGZsZXhTaHJpbms6IDAsXHJcblx0XHR0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuXHRcdGNvbG9yOiBcIndoaXRlICFpbXBvcnRhbnRcIixcclxuXHR9LFxyXG5cdGRyYXdlclBhcGVyOiB7XHJcblx0XHR3aWR0aDogZHJhd2VyV2lkdGgsXHJcblx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiMzMDMwMzBcIiA6IFwiI2VlZWVlZVwiLFxyXG5cdFx0Ly9iYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM3Mjg5ZGEsICM2NmE2ZmYpXCIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzJlMzIzOFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyQ29udGFpbmVyOiB7XHJcblx0XHRvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG5cdFx0b3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG5cdH0sXHJcblx0bmVzdGVkVGV4dDoge1xyXG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbURyYXdlcigpIHtcclxuXHRmdW5jdGlvbiBtYXBSb3V0ZXMocm91dGVzLCBpKSB7XHJcblx0XHRPYmplY3Qua2V5cyhyb3V0ZXMpLm1hcCgocm91dGUsIGluZGV4KSA9PiB7XHJcblx0XHRcdGlmICh0eXBlb2Ygcm91dGVzW3JvdXRlXSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8TGlzdEl0ZW1cclxuXHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudD17TGlua31cclxuXHRcdFx0XHRcdFx0bmFrZWRcclxuXHRcdFx0XHRcdFx0aHJlZj17cm91dGVzW3JvdXRlXX1cclxuXHRcdFx0XHRcdFx0a2V5PXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZD17aSArIGluZGV4ID09PSBzZWxlY3RlZEluZGV4fVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gc2V0U2VsZWN0ZWRJbmRleChlLCBpbmRleCArIGkpfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0Pntyb3V0ZX08L0xpc3RJdGVtVGV4dD5cclxuXHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gPENvbGxhcHNlPnttYXBSb3V0ZXMocm91dGVzW3JvdXRlXSl9PC9Db2xsYXBzZT47XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUxpc3RJdGVtQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHNldE9wZW4oIW9wZW4pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RHJhd2VyXHJcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9XHJcblx0XHRcdHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG5cdFx0XHRjbGFzc2VzPXt7XHJcblx0XHRcdFx0cGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcblx0XHRcdH19XHJcblx0XHRcdGFuY2hvcj1cImxlZnRcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8VG9vbGJhciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJDb250YWluZXJ9PlxyXG5cdFx0XHRcdDxMaXN0IGRlbnNlPnttYXBSb3V0ZXMoKX08L0xpc3Q+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9EcmF3ZXI+XHJcblx0KTtcclxufVxyXG5cclxuY29uc3Qgcm91dGVzID0ge1xyXG5cdEhvbWU6IFwiL1wiLFxyXG5cdENvbnRyaWJ1dGU6IFwiL2NvbnRyaWJ1dGVcIixcclxuXHRGQVE6IHtcclxuXHRcdFNrcmlwdDogXCIvZmFxL3NrcmlwdFwiLFxyXG5cdH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=