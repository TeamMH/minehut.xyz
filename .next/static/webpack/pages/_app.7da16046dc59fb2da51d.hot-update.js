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

  var routes = {
    Home: "/",
    Contribute: "/contribute",
    FAQ: {
      Skript: "/faq/skript"
    }
  };

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
            return setSelectedIndex(e, index + i);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
            children: route
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 7
          }, _this)
        }, routes[route], false, {
          fileName: _jsxFileName,
          lineNumber: 55,
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
      lineNumber: 96,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: mapRoutes(routes, 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 3
  }, this);
}

_s(CustomDrawer, "UiqCbjzmevzNupjeNLr9qZK+JM8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJyb3V0ZXMiLCJIb21lIiwiQ29udHJpYnV0ZSIsIkZBUSIsIlNrcmlwdCIsIm1hcFJvdXRlcyIsImkiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicm91dGUiLCJpbmRleCIsIkxpbmsiLCJzZWxlY3RlZEluZGV4IiwiZSIsInNldFNlbGVjdGVkSW5kZXgiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwiaGFuZGxlTGlzdEl0ZW1DbGljayIsImV2ZW50IiwiaGFuZGxlQ2xpY2siLCJwYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxHQUFwQjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsUUFBTSxFQUFFO0FBQ1BDLFNBQUssRUFBRUosV0FEQTtBQUVQSyxjQUFVLEVBQUUsQ0FGTDtBQUdQQyxhQUFTLEVBQUUsT0FISjtBQUlQQyxTQUFLLEVBQUU7QUFKQSxHQURvQjtBQU81QkMsYUFBVyxFQUFFO0FBQ1pKLFNBQUssRUFBRUosV0FESztBQUVaO0FBQ0E7QUFDQVMsbUJBQWUsRUFBRTtBQUpMLEdBUGU7QUFhNUJDLGlCQUFlLEVBQUU7QUFD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S0EvQk9pQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2RhMTYwNDZkYzU5ZmIyZGE1MWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuXHREcmF3ZXIsXHJcblx0VG9vbGJhcixcclxuXHRMaXN0LFxyXG5cdExpc3RJdGVtLFxyXG5cdExpc3RJdGVtSWNvbixcclxuXHRMaXN0SXRlbVRleHQsXHJcblx0Q29sbGFwc2UsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9zcmMvTGlua1wiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9JbmJveFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgRXhwYW5kTGVzcywgRXhwYW5kTW9yZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMzUwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0ZHJhd2VyOiB7XHJcblx0XHR3aWR0aDogZHJhd2VyV2lkdGgsXHJcblx0XHRmbGV4U2hyaW5rOiAwLFxyXG5cdFx0dGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcblx0XHRjb2xvcjogXCJ3aGl0ZSAhaW1wb3J0YW50XCIsXHJcblx0fSxcclxuXHRkcmF3ZXJQYXBlcjoge1xyXG5cdFx0d2lkdGg6IGRyYXdlcldpZHRoLFxyXG5cdFx0Ly8gYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjMzAzMDMwXCIgOiBcIiNlZWVlZWVcIixcclxuXHRcdC8vYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjNzI4OWRhLCAjNjZhNmZmKVwiLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiMyZTMyMzhcIixcclxuXHR9LFxyXG5cdGRyYXdlckNvbnRhaW5lcjoge1xyXG5cdFx0b3ZlcmZsb3dZOiBcImF1dG9cIixcclxuXHRcdG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcclxuXHR9LFxyXG5cdG5lc3RlZFRleHQ6IHtcclxuXHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0fSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21EcmF3ZXIoKSB7XHJcblx0Y29uc3Qgcm91dGVzID0ge1xyXG5cdFx0SG9tZTogXCIvXCIsXHJcblx0XHRDb250cmlidXRlOiBcIi9jb250cmlidXRlXCIsXHJcblx0XHRGQVE6IHtcclxuXHRcdFx0U2tyaXB0OiBcIi9mYXEvc2tyaXB0XCIsXHJcblx0XHR9LFxyXG5cdH07XHJcblx0ZnVuY3Rpb24gbWFwUm91dGVzKHJvdXRlcywgaSkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHJvdXRlcykubWFwKChyb3V0ZSwgaW5kZXgpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVvZiByb3V0ZXNbcm91dGVdID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxMaXN0SXRlbVxyXG5cdFx0XHRcdFx0XHRidXR0b25cclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PXtMaW5rfVxyXG5cdFx0XHRcdFx0XHRuYWtlZFxyXG5cdFx0XHRcdFx0XHRocmVmPXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRrZXk9e3JvdXRlc1tyb3V0ZV19XHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkPXtpICsgaW5kZXggPT09IHNlbGVjdGVkSW5kZXh9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiBzZXRTZWxlY3RlZEluZGV4KGUsIGluZGV4ICsgaSl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQ+e3JvdXRlfTwvTGlzdEl0ZW1UZXh0PlxyXG5cdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHJldHVybiA8Q29sbGFwc2U+e21hcFJvdXRlcyhyb3V0ZXNbcm91dGVdKX08L0NvbGxhcHNlPjtcclxuXHRcdFx0XHRyZXR1cm4gPD48Lz47XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUxpc3RJdGVtQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHNldE9wZW4oIW9wZW4pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RHJhd2VyXHJcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9XHJcblx0XHRcdHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG5cdFx0XHRjbGFzc2VzPXt7XHJcblx0XHRcdFx0cGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcblx0XHRcdH19XHJcblx0XHRcdGFuY2hvcj1cImxlZnRcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8VG9vbGJhciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJDb250YWluZXJ9PlxyXG5cdFx0XHRcdDxMaXN0IGRlbnNlPnttYXBSb3V0ZXMocm91dGVzLCAwKX08L0xpc3Q+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9EcmF3ZXI+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9