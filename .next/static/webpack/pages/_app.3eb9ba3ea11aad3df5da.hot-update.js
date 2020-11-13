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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJtYXBSb3V0ZXMiLCJyb3V0ZXMiLCJpIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsInJvdXRlIiwiaW5kZXgiLCJMaW5rIiwic2VsZWN0ZWRJbmRleCIsImUiLCJzZXRTZWxlY3RlZEluZGV4IiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUxpc3RJdGVtQ2xpY2siLCJldmVudCIsImhhbmRsZUNsaWNrIiwicGFwZXIiLCJIb21lIiwiQ29udHJpYnV0ZSIsIkZBUSIsIlNrcmlwdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxHQUFwQjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsUUFBTSxFQUFFO0FBQ1BDLFNBQUssRUFBRUosV0FEQTtBQUVQSyxjQUFVLEVBQUUsQ0FGTDtBQUdQQyxhQUFTLEVBQUUsT0FISjtBQUlQQyxTQUFLLEVBQUU7QUFKQSxHQURvQjtBQU81QkMsYUFBVyxFQUFFO0FBQ1pKLFNBQUssRUFBRUosV0FESztBQUVaO0FBQ0E7QUFDQVMsbUJBQWUsRUFBRTtBQUpMLEdBUGU7QUFhNUJDLGlCQUFlLEVBQUU7QUFD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ZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNlYjliYTNlYTExYWFkM2RmNWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcblx0RHJhd2VyLFxyXG5cdFRvb2xiYXIsXHJcblx0TGlzdCxcclxuXHRMaXN0SXRlbSxcclxuXHRMaXN0SXRlbUljb24sXHJcblx0TGlzdEl0ZW1UZXh0LFxyXG5cdENvbGxhcHNlLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi4vc3JjL0xpbmtcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5ib3hcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lXCI7XHJcbmltcG9ydCB7IEV4cGFuZExlc3MsIEV4cGFuZE1vcmUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDM1MDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdGRyYXdlcjoge1xyXG5cdFx0d2lkdGg6IGRyYXdlcldpZHRoLFxyXG5cdFx0ZmxleFNocmluazogMCxcclxuXHRcdHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG5cdFx0Y29sb3I6IFwid2hpdGUgIWltcG9ydGFudFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyUGFwZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdC8vIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiIzMwMzAzMFwiIDogXCIjZWVlZWVlXCIsXHJcblx0XHQvL2JhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzcyODlkYSwgIzY2YTZmZilcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjMmUzMjM4XCIsXHJcblx0fSxcclxuXHRkcmF3ZXJDb250YWluZXI6IHtcclxuXHRcdG92ZXJmbG93WTogXCJhdXRvXCIsXHJcblx0XHRvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXHJcblx0fSxcclxuXHRuZXN0ZWRUZXh0OiB7XHJcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tRHJhd2VyKCkge1xyXG5cdGZ1bmN0aW9uIG1hcFJvdXRlcyhyb3V0ZXMsIGkpIHtcclxuXHRcdE9iamVjdC5rZXlzKHJvdXRlcykubWFwKChyb3V0ZSwgaW5kZXgpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVvZiByb3V0ZXNbcm91dGVdID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxMaXN0SXRlbVxyXG5cdFx0XHRcdFx0XHRidXR0b25cclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PXtMaW5rfVxyXG5cdFx0XHRcdFx0XHRuYWtlZFxyXG5cdFx0XHRcdFx0XHRocmVmPXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRrZXk9e3JvdXRlc1tyb3V0ZV19XHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkPXtpICsgaW5kZXggPT09IHNlbGVjdGVkSW5kZXh9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiBzZXRTZWxlY3RlZEluZGV4KGUsIGluZGV4ICsgaSl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQ+e3JvdXRlfTwvTGlzdEl0ZW1UZXh0PlxyXG5cdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIHJldHVybiA8Q29sbGFwc2U+e21hcFJvdXRlcyhyb3V0ZXNbcm91dGVdKX08L0NvbGxhcHNlPjtcclxuXHRcdFx0XHRyZXR1cm4gPD48Lz47XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUxpc3RJdGVtQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHNldE9wZW4oIW9wZW4pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RHJhd2VyXHJcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9XHJcblx0XHRcdHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG5cdFx0XHRjbGFzc2VzPXt7XHJcblx0XHRcdFx0cGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcblx0XHRcdH19XHJcblx0XHRcdGFuY2hvcj1cImxlZnRcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8VG9vbGJhciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJDb250YWluZXJ9PlxyXG5cdFx0XHRcdDxMaXN0IGRlbnNlPnttYXBSb3V0ZXMocm91dGVzLCAwKX08L0xpc3Q+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9EcmF3ZXI+XHJcblx0KTtcclxufVxyXG5cclxuY29uc3Qgcm91dGVzID0ge1xyXG5cdEhvbWU6IFwiL1wiLFxyXG5cdENvbnRyaWJ1dGU6IFwiL2NvbnRyaWJ1dGVcIixcclxuXHRGQVE6IHtcclxuXHRcdFNrcmlwdDogXCIvZmFxL3NrcmlwdFwiLFxyXG5cdH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=