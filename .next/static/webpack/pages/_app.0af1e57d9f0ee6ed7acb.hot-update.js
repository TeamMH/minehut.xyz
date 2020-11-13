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
        children: [["Inbox", "Starred", "Send email"].map(function (text, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
            component: _src_Link__WEBPACK_IMPORTED_MODULE_4__["default"],
            naked: true,
            href: "/",
            button: true,
            selected: selectedIndex === index,
            onClick: function onClick(event) {
              return handleListItemClick(event, index);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
              children: index % 2 === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Inbox__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 28
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 44
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              primary: text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 8
            }, _this)]
          }, text, true, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 7
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
          onClick: handleClick,
          button: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Inbox__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
            primary: "Drafts"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 7
          }, this), open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ExpandLess"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 15
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ExpandMore"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 32
          }, this)]
        }, "Drafts", true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 6
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
          "in": open,
          timeout: "auto",
          unmountOnExit: true,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
            dense: true,
            component: "div",
            disablePadding: true,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
              button: true,
              onClick: function onClick(event) {
                return handleListItemClick(event, 3);
              },
              selected: selectedIndex === 3,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
                className: classes.nestedText,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Mail__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 10
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 9
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
                primary: "Draft 1"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 9
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 8
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 7
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 6
        }, this)]
      }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJoYW5kbGVMaXN0SXRlbUNsaWNrIiwiZXZlbnQiLCJpbmRleCIsImhhbmRsZUNsaWNrIiwicGFwZXIiLCJtYXAiLCJ0ZXh0IiwiTGluayIsInJvdXRlcyIsIkhvbWUiLCJDb250cmlidXRlIiwiRkFRIiwiU2tyaXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLEdBQUcsR0FBcEI7QUFFQSxJQUFNQyxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDNUJDLFFBQU0sRUFBRTtBQUNQQyxTQUFLLEVBQUVKLFdBREE7QUFFUEssY0FBVSxFQUFFLENBRkw7QUFHUEMsYUFBUyxFQUFFLE9BSEo7QUFJUEMsU0FBSyxFQUFFO0FBSkEsR0FEb0I7QUFPNUJDLGFBQVcsRUFBRTtBQUNaSixTQUFLLEVBQUVKLFdBREs7QUFFWjtBQUNBO0FBQ0FTLG1CQUFlLEVBQUU7QUFKTCxHQVBlO0FBYTVCQyxpQkFBZSxFQUFFO0FBQ2hCQyxhQUFTLEVBQUUsTUFESztBQUVoQkMsYUFBUyxFQUFFLFFB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Y2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuXHREcmF3ZXIsXHJcblx0VG9vbGJhcixcclxuXHRMaXN0LFxyXG5cdExpc3RJdGVtLFxyXG5cdExpc3RJdGVtSWNvbixcclxuXHRMaXN0SXRlbVRleHQsXHJcblx0Q29sbGFwc2UsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9zcmMvTGlua1wiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9JbmJveFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgRXhwYW5kTGVzcywgRXhwYW5kTW9yZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuXHJcbmNvbnN0IGRyYXdlcldpZHRoID0gMzUwO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcblx0ZHJhd2VyOiB7XHJcblx0XHR3aWR0aDogZHJhd2VyV2lkdGgsXHJcblx0XHRmbGV4U2hyaW5rOiAwLFxyXG5cdFx0dGV4dEFsaWduOiBcInJpZ2h0XCIsXHJcblx0XHRjb2xvcjogXCJ3aGl0ZSAhaW1wb3J0YW50XCIsXHJcblx0fSxcclxuXHRkcmF3ZXJQYXBlcjoge1xyXG5cdFx0d2lkdGg6IGRyYXdlcldpZHRoLFxyXG5cdFx0Ly8gYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09IFwiZGFya1wiID8gXCIjMzAzMDMwXCIgOiBcIiNlZWVlZWVcIixcclxuXHRcdC8vYmFja2dyb3VuZDogXCJsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCAjNzI4OWRhLCAjNjZhNmZmKVwiLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiBcIiMyZTMyMzhcIixcclxuXHR9LFxyXG5cdGRyYXdlckNvbnRhaW5lcjoge1xyXG5cdFx0b3ZlcmZsb3dZOiBcImF1dG9cIixcclxuXHRcdG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuXHRcdG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcclxuXHR9LFxyXG5cdG5lc3RlZFRleHQ6IHtcclxuXHRcdG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcblx0fSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21EcmF3ZXIoKSB7XHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUxpc3RJdGVtQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHNldE9wZW4oIW9wZW4pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RHJhd2VyXHJcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9XHJcblx0XHRcdHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG5cdFx0XHRjbGFzc2VzPXt7XHJcblx0XHRcdFx0cGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcblx0XHRcdH19XHJcblx0XHRcdGFuY2hvcj1cImxlZnRcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8VG9vbGJhciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJDb250YWluZXJ9PlxyXG5cdFx0XHRcdDxMaXN0IGRlbnNlPlxyXG5cdFx0XHRcdFx0e1tcIkluYm94XCIsIFwiU3RhcnJlZFwiLCBcIlNlbmQgZW1haWxcIl0ubWFwKCh0ZXh0LCBpbmRleCkgPT4gKFxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1cclxuXHRcdFx0XHRcdFx0XHRjb21wb25lbnQ9e0xpbmt9XHJcblx0XHRcdFx0XHRcdFx0bmFrZWRcclxuXHRcdFx0XHRcdFx0XHRocmVmPVwiL1wiXHJcblx0XHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0a2V5PXt0ZXh0fVxyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdGVkPXtzZWxlY3RlZEluZGV4ID09PSBpbmRleH1cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRoYW5kbGVMaXN0SXRlbUNsaWNrKGV2ZW50LCBpbmRleClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1JY29uPlxyXG5cdFx0XHRcdFx0XHRcdFx0e2luZGV4ICUgMiA9PT0gMCA/IDxJbmJveEljb24gLz4gOiA8TWFpbEljb24gLz59XHJcblx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbUljb24+XHJcblx0XHRcdFx0XHRcdFx0PExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxyXG5cdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8TGlzdEl0ZW0gb25DbGljaz17aGFuZGxlQ2xpY2t9IGJ1dHRvbiBrZXk9XCJEcmFmdHNcIj5cclxuXHRcdFx0XHRcdFx0PExpc3RJdGVtSWNvbj5cclxuXHRcdFx0XHRcdFx0XHQ8SW5ib3hJY29uIC8+XHJcblx0XHRcdFx0XHRcdDwvTGlzdEl0ZW1JY29uPlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEcmFmdHNcIiAvPlxyXG5cdFx0XHRcdFx0XHR7b3BlbiA/IDxFeHBhbmRMZXNzIC8+IDogPEV4cGFuZE1vcmUgLz59XHJcblx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0PENvbGxhcHNlIGluPXtvcGVufSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XHJcblx0XHRcdFx0XHRcdDxMaXN0IGRlbnNlIGNvbXBvbmVudD1cImRpdlwiIGRpc2FibGVQYWRkaW5nPlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVxyXG5cdFx0XHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhhbmRsZUxpc3RJdGVtQ2xpY2soZXZlbnQsIDMpXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3RlZD17c2VsZWN0ZWRJbmRleCA9PT0gM31cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1JY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5uZXN0ZWRUZXh0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE1haWxJY29uIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtSWNvbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkRyYWZ0IDFcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdDwvTGlzdD5cclxuXHRcdFx0XHRcdDwvQ29sbGFwc2U+XHJcblx0XHRcdFx0PC9MaXN0PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvRHJhd2VyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuXHRIb21lOiBcIi9cIixcclxuXHRDb250cmlidXRlOiBcIi9jb250cmlidXRlXCIsXHJcblx0RkFROiB7XHJcblx0XHRTa3JpcHQ6IFwiL2ZhcS9za3JpcHRcIixcclxuXHR9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9