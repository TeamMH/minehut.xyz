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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJyb3V0ZXMiLCJIb21lIiwiQ29udHJpYnV0ZSIsIkZBUSIsIlNrcmlwdCIsIm1hcFJvdXRlcyIsImkiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwicm91dGUiLCJpbmRleCIsIkxpbmsiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJoYW5kbGVMaXN0SXRlbUNsaWNrIiwiZXZlbnQiLCJoYW5kbGVDbGljayIsInBhcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFSixXQURBO0FBRVBLLGNBQVUsRUFBRSxDQUZMO0FBR1BDLGFBQVMsRUFBRSxPQUhKO0FBSVBDLFNBQUssRUFBRTtBQUpBLEdBRG9CO0FBTzVCQyxhQUFXLEVBQUU7QUFDWkosU0FBSyxFQUFFSixXQURLO0FBRVo7QUFDQTtBQUNBUyxtQkFBZSxFQUFFO0FBSkwsR0FQZTtBQWE1QkMsaUJBQWUsRUFBRTtBQUNoQkMsYUFBUyxFQUFFLE1BREs7QUFFaEJDLGFBQVMsRUFBRSxRQUZLO0FBR2hCQyxhQUFTLEVBQUVDLDhDQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkO0FBSEssR0FiVztBQWtCNUJDLFlBQVUsRUFBRTtBQUNYQyxjQUFVLEVBQUVILDhDQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkO0FBREQ7QUFsQmdCLENBQUQsQ0FBNUI7QUF1QmUsU0FBU0csWUFBVCxHQUF3QjtBQUFBOztBQUN0QyxNQUFNQyxNQUFNLEdBQUc7QUFDZEMsUUFBSSxFQUFFLEdBRFE7QUFFZEMsY0FBVSxFQUFFLGFBRkU7QUFHZEMsT0FBRyxFQUFFO0FBQ0pDLFlBQU0sRUFBRTtBQURKO0FBSFMsR0FBZjs7QUFPQSxXQUFTQyxTQUFULENBQW1CTCxNQUFuQixFQUEyQk0sQ0FBM0IsRUFBOEI7QUFBQTs7QUFDN0IsV0FBT0MsTUFBTSxDQUFDQyxJQUFQLENBQVlSLE1BQVosRUFBb0JTLEdBQXBCLENBQXdCLFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUNoRCxVQUFJLE9BQU9YLE1BQU0sQ0FBQ1UsS0FBRCxDQUFiLEtBQXlCLFFBQTdCLEVBQXVDO0FBQ3RDLDRCQUNDLHFFQUFDLDBEQUFEO0FBQ0MsZ0JBQU0sTUFEUDtBQUVDLG1CQUFTLEVBQUVFLGlEQUZaO0FBR0MsZUFBSyxNQUhOO0FBSUMsY0FBSSxFQUFFWixNQUFNLENBQUNVLEtBQUQsQ0FKYjtBQUFBLGlDQVNDLHFFQUFDLDhEQUFEO0FBQUEsc0JBQWVBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRELFdBS01WLE1BQU0sQ0FBQ1UsS0FBRCxDQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQ7QUFhQSxPQWRELE1BY087QUFDTjtBQUNBLDRCQUFPLHVKQUFQO0FBQ0E7QUFDRCxLQW5CTSxDQUFQO0FBb0JBOztBQUVELE1BQU1HLE9BQU8sR0FBRy9CLFNBQVMsRUFBekI7O0FBL0JzQyx3QkFpQ2RnQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQWpDYztBQUFBO0FBQUEsTUFpQy9CQyxJQWpDK0I7QUFBQSxNQWlDekJDLE9BakN5Qjs7QUFBQSx5QkFrQ0lILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBbENKO0FBQUE7QUFBQSxNQWtDL0JHLGFBbEMrQjtBQUFBLE1Ba0NoQkMsZ0JBbENnQjs7QUFvQ3RDLE1BQU1DLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsS0FBRCxFQUFRVixLQUFSLEVBQWtCO0FBQzdDUSxvQkFBZ0IsQ0FBQ1IsS0FBRCxDQUFoQjtBQUNBLEdBRkQ7O0FBSUEsTUFBTVcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QkwsV0FBTyxDQUFDLENBQUNELElBQUYsQ0FBUDtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0MscUVBQUMsd0RBQUQ7QUFDQyxhQUFTLEVBQUVILE9BQU8sQ0FBQzdCLE1BRHBCO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxXQUFPLEVBQUU7QUFDUnVDLFdBQUssRUFBRVYsT0FBTyxDQUFDeEI7QUFEUCxLQUhWO0FBTUMsVUFBTSxFQUFDLE1BTlI7QUFBQSw0QkFRQyxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQsZUFTQztBQUFLLGVBQVMsRUFBRXdCLE9BQU8sQ0FBQ3RCLGVBQXhCO0FBQUEsNkJBQ0MscUVBQUMsc0RBQUQ7QUFBTSxhQUFLLE1BQVg7QUFBQSxrQkFBYWMsU0FBUyxDQUFDTCxNQUFELEVBQVMsQ0FBVDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZUE7O0dBM0R1QkQsWTtVQStCUGpCLFM7OztLQS9CT2lCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iZGYyMjhkYWU5NThhNDU5MjJjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG5cdERyYXdlcixcclxuXHRUb29sYmFyLFxyXG5cdExpc3QsXHJcblx0TGlzdEl0ZW0sXHJcblx0TGlzdEl0ZW1JY29uLFxyXG5cdExpc3RJdGVtVGV4dCxcclxuXHRDb2xsYXBzZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL3NyYy9MaW5rXCI7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luYm94XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBFeHBhbmRMZXNzLCBFeHBhbmRNb3JlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAzNTA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRkcmF3ZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdGZsZXhTaHJpbms6IDAsXHJcblx0XHR0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuXHRcdGNvbG9yOiBcIndoaXRlICFpbXBvcnRhbnRcIixcclxuXHR9LFxyXG5cdGRyYXdlclBhcGVyOiB7XHJcblx0XHR3aWR0aDogZHJhd2VyV2lkdGgsXHJcblx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiMzMDMwMzBcIiA6IFwiI2VlZWVlZVwiLFxyXG5cdFx0Ly9iYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM3Mjg5ZGEsICM2NmE2ZmYpXCIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzJlMzIzOFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyQ29udGFpbmVyOiB7XHJcblx0XHRvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG5cdFx0b3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG5cdH0sXHJcblx0bmVzdGVkVGV4dDoge1xyXG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbURyYXdlcigpIHtcclxuXHRjb25zdCByb3V0ZXMgPSB7XHJcblx0XHRIb21lOiBcIi9cIixcclxuXHRcdENvbnRyaWJ1dGU6IFwiL2NvbnRyaWJ1dGVcIixcclxuXHRcdEZBUToge1xyXG5cdFx0XHRTa3JpcHQ6IFwiL2ZhcS9za3JpcHRcIixcclxuXHRcdH0sXHJcblx0fTtcclxuXHRmdW5jdGlvbiBtYXBSb3V0ZXMocm91dGVzLCBpKSB7XHJcblx0XHRyZXR1cm4gT2JqZWN0LmtleXMocm91dGVzKS5tYXAoKHJvdXRlLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRpZiAodHlwZW9mIHJvdXRlc1tyb3V0ZV0gPT09IFwic3RyaW5nXCIpIHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PExpc3RJdGVtXHJcblx0XHRcdFx0XHRcdGJ1dHRvblxyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQ9e0xpbmt9XHJcblx0XHRcdFx0XHRcdG5ha2VkXHJcblx0XHRcdFx0XHRcdGhyZWY9e3JvdXRlc1tyb3V0ZV19XHJcblx0XHRcdFx0XHRcdGtleT17cm91dGVzW3JvdXRlXX1cclxuXHRcdFx0XHRcdFx0Ly8gc2VsZWN0ZWQ9e2kgKyBpbmRleCA9PT0gc2VsZWN0ZWRJbmRleH1cclxuXHRcdFx0XHRcdFx0Ly8gb25DbGljaz17KGUpID0+IHNldFNlbGVjdGVkSW5kZXgoZSwgaW5kZXggKyBpKX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PExpc3RJdGVtVGV4dD57cm91dGV9PC9MaXN0SXRlbVRleHQ+XHJcblx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gcmV0dXJuIDxDb2xsYXBzZT57bWFwUm91dGVzKHJvdXRlc1tyb3V0ZV0pfTwvQ29sbGFwc2U+O1xyXG5cdFx0XHRcdHJldHVybiA8PjwvPjtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuXHJcblx0Y29uc3QgaGFuZGxlTGlzdEl0ZW1DbGljayA9IChldmVudCwgaW5kZXgpID0+IHtcclxuXHRcdHNldFNlbGVjdGVkSW5kZXgoaW5kZXgpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG5cdFx0c2V0T3Blbighb3Blbik7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxEcmF3ZXJcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cclxuXHRcdFx0dmFyaWFudD1cInBlcm1hbmVudFwiXHJcblx0XHRcdGNsYXNzZXM9e3tcclxuXHRcdFx0XHRwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuXHRcdFx0fX1cclxuXHRcdFx0YW5jaG9yPVwibGVmdFwiXHJcblx0XHQ+XHJcblx0XHRcdDxUb29sYmFyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PExpc3QgZGVuc2U+e21hcFJvdXRlcyhyb3V0ZXMsIDApfTwvTGlzdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0RyYXdlcj5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=