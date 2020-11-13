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
        // return <Collapse>{mapRoutes(routes[route])}</Collapse>;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {}, void 0, false);
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
      lineNumber: 89,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: mapRoutes(routes, 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJtYXBSb3V0ZXMiLCJyb3V0ZXMiLCJpIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInJvdXRlIiwiaW5kZXgiLCJMaW5rIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsInNlbGVjdGVkSW5kZXgiLCJzZXRTZWxlY3RlZEluZGV4IiwiaGFuZGxlTGlzdEl0ZW1DbGljayIsImV2ZW50IiwiaGFuZGxlQ2xpY2siLCJwYXBlciIsIkhvbWUiLCJDb250cmlidXRlIiwiRkFRIiwiU2tyaXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFSixXQURBO0FBRVBLLGNBQVUsRUFBRSxDQUZMO0FBR1BDLGFBQVMsRUFBRSxPQUhKO0FBSVBDLFNBQUssRUFBRTtBQUpBLEdBRG9CO0FBTzVCQyxhQUFXLEVBQUU7QUFDWkosU0FBSyxFQUFFSixXQURLO0FBRVo7QUFDQTtBQUNBUyxtQkFBZSxFQUFFO0FBSkwsR0FQZTtBQWE1QkMsaUJBQWUsRUFBRTtBQUNoQkMsYUFBUyxFQUFFLE1BREs7QUFFaEJDLGFBQVMsRUFBRSxRQUZLO0FBR2hCQyxhQUFTLEVBQUVDLDhDQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkO0FBSEssR0FiVztBQWtCNUJDLFlBQVUsRUFBRTtBQUNYQyxjQUFVLEVBQUVILDhDQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkO0FBREQ7QUFsQmdCLENBQUQsQ0FBNUI7QUF1QmUsU0FBU0csWUFBVCxHQUF3QjtBQUFBOztBQUN0QyxXQUFTQyxTQUFULENBQW1CQyxNQUFuQixFQUEyQkMsQ0FBM0IsRUFBOEI7QUFBQTs7QUFDN0JDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFZSCxNQUFaLEVBQW9CSSxHQUFwQixDQUF3QixVQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBa0I7QUFDekMsVUFBSSxPQUFPTixNQUFNLENBQUNLLEtBQUQsQ0FBYixLQUF5QixRQUE3QixFQUF1QztBQUN0Qyw0QkFDQyxxRUFBQywwREFBRDtBQUNDLGdCQUFNLE1BRFA7QUFFQyxtQkFBUyxFQUFFRSxpREFGWjtBQUdDLGVBQUssTUFITjtBQUlDLGNBQUksRUFBRVAsTUFBTSxDQUFDSyxLQUFELENBSmI7QUFBQSxpQ0FTQyxxRUFBQyw4REFBRDtBQUFBLHNCQUFlQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURCxXQUtNTCxNQUFNLENBQUNLLEtBQUQsQ0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBYUEsT0FkRCxNQWNPO0FBQ047QUFDQSw0QkFBTyx1SkFBUDtBQUNBO0FBQ0QsS0FuQkQ7QUFvQkE7O0FBRUQsTUFBTUcsT0FBTyxHQUFHM0IsU0FBUyxFQUF6Qjs7QUF4QnNDLHdCQTBCZDRCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBMUJjO0FBQUE7QUFBQSxNQTBCL0JDLElBMUIrQjtBQUFBLE1BMEJ6QkMsT0ExQnlCOztBQUFBLHlCQTJCSUgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0EzQko7QUFBQTtBQUFBLE1BMkIvQkcsYUEzQitCO0FBQUEsTUEyQmhCQyxnQkEzQmdCOztBQTZCdEMsTUFBTUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUFDQyxLQUFELEVBQVFWLEtBQVIsRUFBa0I7QUFDN0NRLG9CQUFnQixDQUFDUixLQUFELENBQWhCO0FBQ0EsR0FGRDs7QUFJQSxNQUFNVyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3pCTCxXQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0EsR0FGRDs7QUFJQSxzQkFDQyxxRUFBQyx3REFBRDtBQUNDLGFBQVMsRUFBRUgsT0FBTyxDQUFDekIsTUFEcEI7QUFFQyxXQUFPLEVBQUMsV0FGVDtBQUdDLFdBQU8sRUFBRTtBQUNSbUMsV0FBSyxFQUFFVixPQUFPLENBQUNwQjtBQURQLEtBSFY7QUFNQyxVQUFNLEVBQUMsTUFOUjtBQUFBLDRCQVFDLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRCxlQVNDO0FBQUssZUFBUyxFQUFFb0IsT0FBTyxDQUFDbEIsZUFBeEI7QUFBQSw2QkFDQyxxRUFBQyxzREFBRDtBQUFNLGFBQUssTUFBWDtBQUFBLGtCQUFhUyxTQUFTLENBQUNDLE1BQUQsRUFBUyxDQUFUO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFlQTs7R0FwRHVCRixZO1VBd0JQakIsUzs7O0tBeEJPaUIsWTtBQXNEeEIsSUFBTUUsTUFBTSxHQUFHO0FBQ2RtQixNQUFJLEVBQUUsR0FEUTtBQUVkQyxZQUFVLEVBQUUsYUFGRTtBQUdkQyxLQUFHLEVBQUU7QUFDSkMsVUFBTSxFQUFFO0FBREo7QUFIUyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDBhN2NiNDA3MGQ2ZGQ2ZWQ5NDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuXHREcmF3ZXIsXHJcblx0VG9vbGJhcixcclxuXHRMaXN0LFxyXG5cdExpc3RJdGVtLFxyXG5cdExpc3RJdGVtSWNvbixcclxuXHRMaXN0SXRlbVRleHQsXHJcblx0Q29sbGFwc2UsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9zcmMvTGlua1wiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9JbmJveFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgRXhwYW5kTGVzcywgRXhwYW5kTW9yZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMzUwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0ZHJhd2VyOiB7XHJcblx0XHR3aWR0aDogZHJhd2VyV2lkdGgsXHJcblx0XHRmbGV4U2hyaW5rOiAwLFxyXG5cdFx0dGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcblx0XHRjb2xvcjogXCJ3aGl0ZSAhaW1wb3J0YW50XCIsXHJcblx0fSxcclxuXHRkcmF3ZXJQYXBlcjoge1xyXG5cdFx0d2lkdGg6IGRyYXdlcldpZHRoLFxyXG5cdFx0Ly8gYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjMzAzMDMwXCIgOiBcIiNlZWVlZWVcIixcclxuXHRcdC8vYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjNzI4OWRhLCAjNjZhNmZmKVwiLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiMyZTMyMzhcIixcclxuXHR9LFxyXG5cdGRyYXdlckNvbnRhaW5lcjoge1xyXG5cdFx0b3ZlcmZsb3dZOiBcImF1dG9cIixcclxuXHRcdG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcclxuXHR9LFxyXG5cdG5lc3RlZFRleHQ6IHtcclxuXHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0fSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21EcmF3ZXIoKSB7XHJcblx0ZnVuY3Rpb24gbWFwUm91dGVzKHJvdXRlcywgaSkge1xyXG5cdFx0T2JqZWN0LmtleXMocm91dGVzKS5tYXAoKHJvdXRlLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRpZiAodHlwZW9mIHJvdXRlc1tyb3V0ZV0gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PExpc3RJdGVtXHJcblx0XHRcdFx0XHRcdGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ9e0xpbmt9XHJcblx0XHRcdFx0XHRcdG5ha2VkXHJcblx0XHRcdFx0XHRcdGhyZWY9e3JvdXRlc1tyb3V0ZV19XHJcblx0XHRcdFx0XHRcdGtleT17cm91dGVzW3JvdXRlXX1cclxuXHRcdFx0XHRcdFx0Ly8gc2VsZWN0ZWQ9e2kgKyBpbmRleCA9PT0gc2VsZWN0ZWRJbmRleH1cclxuXHRcdFx0XHRcdFx0Ly8gb25DbGljaz17KGUpID0+IHNldFNlbGVjdGVkSW5kZXgoZSwgaW5kZXggKyBpKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PExpc3RJdGVtVGV4dD57cm91dGV9PC9MaXN0SXRlbVRleHQ+XHJcblx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gcmV0dXJuIDxDb2xsYXBzZT57bWFwUm91dGVzKHJvdXRlc1tyb3V0ZV0pfTwvQ29sbGFwc2U+O1xyXG5cdFx0XHRcdHJldHVybiA8PjwvPjtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlTGlzdEl0ZW1DbGljayA9IChldmVudCwgaW5kZXgpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0c2V0T3Blbighb3Blbik7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxEcmF3ZXJcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cclxuXHRcdFx0dmFyaWFudD1cInBlcm1hbmVudFwiXHJcblx0XHRcdGNsYXNzZXM9e3tcclxuXHRcdFx0XHRwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuXHRcdFx0fX1cclxuXHRcdFx0YW5jaG9yPVwibGVmdFwiXHJcblx0XHQ+XHJcblx0XHRcdDxUb29sYmFyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PExpc3QgZGVuc2U+e21hcFJvdXRlcyhyb3V0ZXMsIDApfTwvTGlzdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0RyYXdlcj5cclxuXHQpO1xyXG59XHJcblxyXG5jb25zdCByb3V0ZXMgPSB7XHJcblx0SG9tZTogXCIvXCIsXHJcblx0Q29udHJpYnV0ZTogXCIvY29udHJpYnV0ZVwiLFxyXG5cdEZBUToge1xyXG5cdFx0U2tyaXB0OiBcIi9mYXEvc2tyaXB0XCIsXHJcblx0fSxcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==