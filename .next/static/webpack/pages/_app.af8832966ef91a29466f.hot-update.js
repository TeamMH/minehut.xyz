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

    if (typeof route !== "object") return;
    console.log(route);

    var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(true),
        _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

    dropdowns[route].open = open;

    dropdowns[route].setOpen = function () {
      return setOpen(!open);
    };
  }, "dVkDIfRb5RN4FjtonjBYYwpg89o="));

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
            lineNumber: 75,
            columnNumber: 7
          }, _this)
        }, routes[route], false, {
          fileName: _jsxFileName,
          lineNumber: 66,
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
              lineNumber: 82,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
            "in": dropdowns[route],
            children: mapRoutes(routes[route])
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJyb3V0ZXMiLCJIb21lIiwiQ29udHJpYnV0ZSIsIkZBUSIsIlNrcmlwdCIsImRyb3Bkb3ducyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicm91dGUiLCJjb25zb2xlIiwibG9nIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwibWFwUm91dGVzIiwiaSIsIm1hcCIsImluZGV4IiwiTGluayIsInNlbGVjdGVkSW5kZXgiLCJlIiwiaGFuZGxlTGlzdEl0ZW1DbGljayIsImNsYXNzZXMiLCJzZXRTZWxlY3RlZEluZGV4IiwiZXZlbnQiLCJoYW5kbGVDbGljayIsInBhcGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFSixXQURBO0FBRVBLLGNBQVUsRUFBRSxDQUZMO0FBR1BDLGFBQVMsRUFBRSxPQUhKO0FBSVBDLFNBQUssRUFBRTtBQUpBLEdBRG9CO0FBTzVCQyxhQUFXLEVBQUU7QUFDWkosU0FBSyxFQUFFSixXQURLO0FBRVo7QUFDQTtBQUNBUyxtQkFB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LFFBQU4sQ0FBZSxDQUFmLENBcERKO0FBQUE7QUFBQSxNQW9EL0JRLGFBcEQrQjtBQUFBLE1Bb0RoQkksZ0JBcERnQjs7QUFzRHRDLE1BQU1GLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0csS0FBRCxFQUFRUCxLQUFSLEVBQWtCO0FBQzdDTSxvQkFBZ0IsQ0FBQ04sS0FBRCxDQUFoQjtBQUNBLEdBRkQ7O0FBSUEsTUFBTVEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QlosV0FBTyxDQUFDLENBQUNELElBQUYsQ0FBUDtBQUNBLEdBRkQ7O0FBSUEsc0JBQ0MscUVBQUMsd0RBQUQ7QUFDQyxhQUFTLEVBQUVVLE9BQU8sQ0FBQ3hDLE1BRHBCO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxXQUFPLEVBQUU7QUFDUjRDLFdBQUssRUFBRUosT0FBTyxDQUFDbkM7QUFEUCxLQUhWO0FBTUMsVUFBTSxFQUFDLE1BTlI7QUFBQSw0QkFRQyxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQsZUFTQztBQUFLLGVBQVMsRUFBRW1DLE9BQU8sQ0FBQ2pDLGVBQXhCO0FBQUEsNkJBQ0MscUVBQUMsc0RBQUQ7QUFBTSxhQUFLLE1BQVg7QUFBQSxrQkFBYXlCLFNBQVMsQ0FBQ2hCLE1BQUQsRUFBUyxDQUFUO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFlQTs7SUE3RXVCRCxZO1VBa0RQakIsUzs7O0tBbERPaUIsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmFmODgzMjk2NmVmOTFhMjk0NjZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcblx0RHJhd2VyLFxyXG5cdFRvb2xiYXIsXHJcblx0TGlzdCxcclxuXHRMaXN0SXRlbSxcclxuXHRMaXN0SXRlbUljb24sXHJcblx0TGlzdEl0ZW1UZXh0LFxyXG5cdENvbGxhcHNlLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi4vc3JjL0xpbmtcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5ib3hcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lXCI7XHJcbmltcG9ydCB7IEV4cGFuZExlc3MsIEV4cGFuZE1vcmUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDM1MDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdGRyYXdlcjoge1xyXG5cdFx0d2lkdGg6IGRyYXdlcldpZHRoLFxyXG5cdFx0ZmxleFNocmluazogMCxcclxuXHRcdHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG5cdFx0Y29sb3I6IFwid2hpdGUgIWltcG9ydGFudFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyUGFwZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdC8vIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiIzMwMzAzMFwiIDogXCIjZWVlZWVlXCIsXHJcblx0XHQvL2JhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzcyODlkYSwgIzY2YTZmZilcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjMmUzMjM4XCIsXHJcblx0fSxcclxuXHRkcmF3ZXJDb250YWluZXI6IHtcclxuXHRcdG92ZXJmbG93WTogXCJhdXRvXCIsXHJcblx0XHRvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXHJcblx0fSxcclxuXHRuZXN0ZWRUZXh0OiB7XHJcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tRHJhd2VyKCkge1xyXG5cdGNvbnN0IHJvdXRlcyA9IHtcclxuXHRcdEhvbWU6IFwiL1wiLFxyXG5cdFx0Q29udHJpYnV0ZTogXCIvY29udHJpYnV0ZVwiLFxyXG5cdFx0RkFROiB7XHJcblx0XHRcdFNrcmlwdDogXCIvZmFxL3NrcmlwdFwiLFxyXG5cdFx0fSxcclxuXHR9O1xyXG5cclxuXHRjb25zdCBkcm9wZG93bnMgPSB7fTtcclxuXHJcblx0T2JqZWN0LmtleXMocm91dGVzKS5mb3JFYWNoKChyb3V0ZSkgPT4ge1xyXG5cdFx0aWYgKHR5cGVvZiByb3V0ZSAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xyXG5cdFx0Y29uc29sZS5sb2cocm91dGUpO1xyXG5cdFx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblx0XHRkcm9wZG93bnNbcm91dGVdLm9wZW4gPSBvcGVuO1xyXG5cdFx0ZHJvcGRvd25zW3JvdXRlXS5zZXRPcGVuID0gKCkgPT4gc2V0T3Blbighb3Blbik7XHJcblx0fSk7XHJcblxyXG5cdGZ1bmN0aW9uIG1hcFJvdXRlcyhyb3V0ZXMsIGkpIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhyb3V0ZXMpLm1hcCgocm91dGUsIGluZGV4KSA9PiB7XHJcblx0XHRcdGlmICh0eXBlb2Ygcm91dGVzW3JvdXRlXSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8TGlzdEl0ZW1cclxuXHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudD17TGlua31cclxuXHRcdFx0XHRcdFx0bmFrZWRcclxuXHRcdFx0XHRcdFx0aHJlZj17cm91dGVzW3JvdXRlXX1cclxuXHRcdFx0XHRcdFx0a2V5PXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZD17aSArIGluZGV4ID09PSBzZWxlY3RlZEluZGV4fVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTGlzdEl0ZW1DbGljayhlLCBpbmRleCArIGkpfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0Pntyb3V0ZX08L0xpc3RJdGVtVGV4dD5cclxuXHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0PExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXtkcm9wZG93bnNbcm91dGVdLnNldE9wZW59PlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQ+e3JvdXRlfTwvTGlzdEl0ZW1UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8Q29sbGFwc2UgaW49e2Ryb3Bkb3duc1tyb3V0ZV19PlxyXG5cdFx0XHRcdFx0XHRcdHttYXBSb3V0ZXMocm91dGVzW3JvdXRlXSl9XHJcblx0XHRcdFx0XHRcdDwvQ29sbGFwc2U+XHJcblx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcblxyXG5cdGNvbnN0IGhhbmRsZUxpc3RJdGVtQ2xpY2sgPSAoZXZlbnQsIGluZGV4KSA9PiB7XHJcblx0XHRzZXRTZWxlY3RlZEluZGV4KGluZGV4KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHNldE9wZW4oIW9wZW4pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RHJhd2VyXHJcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9XHJcblx0XHRcdHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG5cdFx0XHRjbGFzc2VzPXt7XHJcblx0XHRcdFx0cGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcblx0XHRcdH19XHJcblx0XHRcdGFuY2hvcj1cImxlZnRcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8VG9vbGJhciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJDb250YWluZXJ9PlxyXG5cdFx0XHRcdDxMaXN0IGRlbnNlPnttYXBSb3V0ZXMocm91dGVzLCAwKX08L0xpc3Q+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9EcmF3ZXI+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9