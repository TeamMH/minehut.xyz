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
            return setSelectedIndex(index + i);
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
            onClick: function onClick() {
              dropdowns[route].setOpen(!open);
              dropdowns[route].open = !open;
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              children: route
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
            "in": dropdowns[route].open,
            children: mapRoutes(routes[route])
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
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
      lineNumber: 114,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: mapRoutes(routes, 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 106,
    columnNumber: 3
  }, this);
}

_s2(CustomDrawer, "C0gye0bmCHxT9D++3+6E4jw4HaQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJyb3V0ZXMiLCJIb21lIiwiQ29udHJpYnV0ZSIsIkZBUSIsIlNrcmlwdCIsImRyb3Bkb3ducyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicm91dGUiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJjb25zb2xlIiwibG9nIiwibWFwUm91dGVzIiwiaSIsIm1hcCIsImluZGV4IiwiTGluayIsInNlbGVjdGVkSW5kZXgiLCJlIiwic2V0U2VsZWN0ZWRJbmRleCIsImNsYXNzZXMiLCJwYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsR0FBRyxHQUFwQjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUM1QkMsUUFBTSxFQUFFO0FBQ1BDLFNBQUssRUFBRUosV0FEQTtBQUVQSyxjQUFVLEVBQUUsQ0FGTDtBQUdQQyxhQUFTLEVBQUUsT0FISjtBQUlQQyxTQUFLLEVBQUU7QUFKQSxHQURvQjtBQU81QkMsYUFBVyxFQUFFO0FBQ1pKLFNBQUssRUFBRUosV0FESztBQUVaO0FBQ0E7QUFDQVMsbUJBQWUsRUFBRTtBQUpMLEdBUGU7QUFhNUJDLGlCQUFlLEVBQUU7QUFDaEJDLGFB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Q0E7O0FBRUQsTUFBTWUsT0FBTyxHQUFHMUMsU0FBUyxFQUF6Qjs7QUExRHNDLHlCQTRESTRCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBNURKO0FBQUE7QUFBQSxNQTREL0JVLGFBNUQrQjtBQUFBLE1BNERoQkUsZ0JBNURnQjs7QUE4RHRDLHNCQUNDLHFFQUFDLHdEQUFEO0FBQ0MsYUFBUyxFQUFFQyxPQUFPLENBQUN4QyxNQURwQjtBQUVDLFdBQU8sRUFBQyxXQUZUO0FBR0MsV0FBTyxFQUFFO0FBQ1J5QyxXQUFLLEVBQUVELE9BQU8sQ0FBQ25DO0FBRFAsS0FIVjtBQU1DLFVBQU0sRUFBQyxNQU5SO0FBQUEsNEJBUUMscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELGVBU0M7QUFBSyxlQUFTLEVBQUVtQyxPQUFPLENBQUNqQyxlQUF4QjtBQUFBLDZCQUNDLHFFQUFDLHNEQUFEO0FBQU0sYUFBSyxNQUFYO0FBQUEsa0JBQWF5QixTQUFTLENBQUNoQixNQUFELEVBQVMsQ0FBVDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZUE7O0lBN0V1QkQsWTtVQTBEUGpCLFM7OztLQTFET2lCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kZWU4NDIxMGMwNTNlZDU0MWE3Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG5cdERyYXdlcixcclxuXHRUb29sYmFyLFxyXG5cdExpc3QsXHJcblx0TGlzdEl0ZW0sXHJcblx0TGlzdEl0ZW1JY29uLFxyXG5cdExpc3RJdGVtVGV4dCxcclxuXHRDb2xsYXBzZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL3NyYy9MaW5rXCI7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luYm94XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBFeHBhbmRMZXNzLCBFeHBhbmRNb3JlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAzNTA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRkcmF3ZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdGZsZXhTaHJpbms6IDAsXHJcblx0XHR0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuXHRcdGNvbG9yOiBcIndoaXRlICFpbXBvcnRhbnRcIixcclxuXHR9LFxyXG5cdGRyYXdlclBhcGVyOiB7XHJcblx0XHR3aWR0aDogZHJhd2VyV2lkdGgsXHJcblx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiMzMDMwMzBcIiA6IFwiI2VlZWVlZVwiLFxyXG5cdFx0Ly9iYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM3Mjg5ZGEsICM2NmE2ZmYpXCIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzJlMzIzOFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyQ29udGFpbmVyOiB7XHJcblx0XHRvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG5cdFx0b3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG5cdH0sXHJcblx0bmVzdGVkVGV4dDoge1xyXG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbURyYXdlcigpIHtcclxuXHRjb25zdCByb3V0ZXMgPSB7XHJcblx0XHRIb21lOiBcIi9cIixcclxuXHRcdENvbnRyaWJ1dGU6IFwiL2NvbnRyaWJ1dGVcIixcclxuXHRcdEZBUToge1xyXG5cdFx0XHRTa3JpcHQ6IFwiL2ZhcS9za3JpcHRcIixcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3QgZHJvcGRvd25zID0ge307XHJcblxyXG5cdE9iamVjdC5rZXlzKHJvdXRlcykuZm9yRWFjaCgocm91dGUpID0+IHtcclxuXHRcdGlmICh0eXBlb2Ygcm91dGVzW3JvdXRlXSAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xyXG5cdFx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblx0XHRkcm9wZG93bnNbcm91dGVdID0ge307XHJcblx0XHRkcm9wZG93bnNbcm91dGVdLm9wZW4gPSBvcGVuO1xyXG5cdFx0ZHJvcGRvd25zW3JvdXRlXS5zZXRPcGVuID0gc2V0T3BlbjtcclxuXHR9KTtcclxuXHJcblx0Y29uc29sZS5sb2coZHJvcGRvd25zKTtcclxuXHJcblx0ZnVuY3Rpb24gbWFwUm91dGVzKHJvdXRlcywgaSkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHJvdXRlcykubWFwKChyb3V0ZSwgaW5kZXgpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVvZiByb3V0ZXNbcm91dGVdID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxMaXN0SXRlbVxyXG5cdFx0XHRcdFx0XHRidXR0b25cclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PXtMaW5rfVxyXG5cdFx0XHRcdFx0XHRuYWtlZFxyXG5cdFx0XHRcdFx0XHRocmVmPXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRrZXk9e3JvdXRlc1tyb3V0ZV19XHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkPXtpICsgaW5kZXggPT09IHNlbGVjdGVkSW5kZXh9XHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhlKSA9PiBzZXRTZWxlY3RlZEluZGV4KGluZGV4ICsgaSl9XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQ+e3JvdXRlfTwvTGlzdEl0ZW1UZXh0PlxyXG5cdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1cclxuXHRcdFx0XHRcdFx0XHRidXR0b25cclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRkcm9wZG93bnNbcm91dGVdLnNldE9wZW4oIW9wZW4pO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZHJvcGRvd25zW3JvdXRlXS5vcGVuID0gIW9wZW47XHJcblx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQ+e3JvdXRlfTwvTGlzdEl0ZW1UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8Q29sbGFwc2UgaW49e2Ryb3Bkb3duc1tyb3V0ZV0ub3Blbn0+XHJcblx0XHRcdFx0XHRcdFx0e21hcFJvdXRlcyhyb3V0ZXNbcm91dGVdKX1cclxuXHRcdFx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxEcmF3ZXJcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cclxuXHRcdFx0dmFyaWFudD1cInBlcm1hbmVudFwiXHJcblx0XHRcdGNsYXNzZXM9e3tcclxuXHRcdFx0XHRwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuXHRcdFx0fX1cclxuXHRcdFx0YW5jaG9yPVwibGVmdFwiXHJcblx0XHQ+XHJcblx0XHRcdDxUb29sYmFyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PExpc3QgZGVuc2U+e21hcFJvdXRlcyhyb3V0ZXMsIDApfTwvTGlzdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0RyYXdlcj5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=