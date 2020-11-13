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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/dist/next-server/server/router */ "./node_modules/next/dist/next-server/server/router.js");
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_11__);




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
    Partnerships: "/partnerships",
    FAQ: {
      Skript: "/faq/skript"
    },
    Plugins: {
      "Plugin List": "/plugins/plugin-list",
      "Recommended Plugins": "/plugins/recommended-plugins"
    }
  };
  var dropdowns = {};
  Object.keys(routes).forEach(_s(function (route) {
    _s();

    if (typeof routes[route] !== "object") return;

    var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
        _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
        open = _React$useState2[0],
        setOpen = _React$useState2[1];

    dropdowns[route] = {};
    dropdowns[route].open = open;
    dropdowns[route].setOpen = setOpen;
  }, "xG1TONbKtDWtdOTrXaTAsNhPg/Q="));
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  function mapRoutes(routes, i) {
    var _this = this;

    return Object.keys(routes).map(function (route, index) {
      if (typeof routes[route] === "string") {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
          button: true,
          component: _src_Link__WEBPACK_IMPORTED_MODULE_4__["default"],
          naked: true,
          href: routes[route],
          selected: router.asPath === routes[route],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
            style: {
              marginLeft: "".concat(i * 32, "px")
            },
            children: route
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 7
          }, _this)
        }, routes[route], false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }, _this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
            button: true,
            onClick: function onClick() {
              dropdowns[route].setOpen(!dropdowns[route].open);
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              style: {
                marginLeft: "".concat(i * 16, "px")
              },
              children: route
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 8
            }, _this), dropdowns[route].open ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ExpandLess"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 9
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["ExpandMore"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 9
            }, _this)]
          }, route, true, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
            "in": dropdowns[route].open,
            children: mapRoutes(routes[route], i + 1)
          }, route + "-dropdown", false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 7
          }, _this)]
        }, void 0, true);
      }
    });
  }

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
    className: classes.drawer,
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    anchor: "left",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: mapRoutes(routes, 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 3
  }, this);
}

_s2(CustomDrawer, "udxARlSzUQQ8jg2GSLXYjtUi3ZI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"], useStyles];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJDdXN0b21EcmF3ZXIiLCJyb3V0ZXMiLCJIb21lIiwiQ29udHJpYnV0ZSIsIlBhcnRuZXJzaGlwcyIsIkZBUSIsIlNrcmlwdCIsIlBsdWdpbnMiLCJkcm9wZG93bnMiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInJvdXRlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwicm91dGVyIiwidXNlUm91dGVyIiwibWFwUm91dGVzIiwiaSIsIm1hcCIsImluZGV4IiwiTGluayIsImFzUGF0aCIsImNsYXNzZXMiLCJwYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFSixXQURBO0FBRVBLLGNBQVUsRUFBRSxDQUZMO0FBR1BDLGFBQVMsRUFBRSxPQUhKO0FBSVBDLFNBQUssRUFBRTtBQUpBLEdBRG9CO0FBTzVCQyxhQUFXLEVBQUU7QUFDWkosU0FBSyxFQUFFSixXQURLO0FBRVo7QUFDQTtBQUNBUyxtQkFBZSxFQUFFO0FBSkwsR0FQZTtBQWE1QkMsaUJBQWUsRUFBRTtBQUNoQkMsYUFBUyxFQUFFLE1BREs7QUFFaEJDLGFBQVMsRUFBRSxRQUZLO0FBR2hCQyxhQUFTLEVBQUVDLDhDQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkO0FBSEssR0FiVztBQWtCNUJDLFlBQVUsRUFBRTtBQUNYQyxjQUFVLEVBQUVILDhDQUFLLENBQUNDLE9BQU4sQ0FBYyxDQUFkO0FBREQ7QUFsQmdCLENBQUQsQ0FBNUI7QUF1QmUsU0FBU0csWUFBVCxHQUF3QjtBQUFBOztBQUFBOztBQUN0QyxNQUFNQyxNQUFNLEdBQUc7QUFDZEMsUUFBSSxFQUFFLEdBRFE7QUFFZEMsY0FBVSxFQUFFLGFBRkU7QUFHZEMsZ0JBQVksRUFBRSxlQUhBO0FBSWRDLE9BQUcsRUFBRTtBQUNKQyxZQUFNLEVBQUU7QUFESixLQUpTO0FBT2RDLFdBQU8sRUFBRTtBQUNSLHFCQUFlLHNCQURQO0FBRVIsNkJBQXVCO0FBRmY7QUFQSyxHQUFmO0FBYUEsTUFBTUMsU0FBUyxHQUFHLEVBQWxCO0FBRUFDLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZVCxNQUFaLEVBQW9CVSxPQUFwQixJQUE0QixVQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDdEMsUUFBSSxPQUFPWCxNQUFNLENBQUNXLEtBQUQsQ0FBYixLQUF5QixRQUE3QixFQUF1Qzs7QUFERCwwQkFFZEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FGYztBQUFBO0FBQUEsUUFFL0JDLElBRitCO0FBQUEsUUFFekJDLE9BRnlCOztBQUd0Q1IsYUFBUyxDQUFDSSxLQUFELENBQVQsR0FBbUIsRUFBbkI7QUFDQUosYUFBUyxDQUFDSSxLQUFELENBQVQsQ0FBaUJHLElBQWpCLEdBQXdCQSxJQUF4QjtBQUNBUCxhQUFTLENBQUNJLEtBQUQsQ0FBVCxDQUFpQkksT0FBakIsR0FBMkJBLE9BQTNCO0FBQ0EsR0FORDtBQVFBLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7O0FBRUEsV0FBU0MsU0FBVCxDQUFtQmxCLE1BQW5CLEVBQTJCbUIsQ0FBM0IsRUFBOEI7QUFBQTs7QUFDN0IsV0FBT1gsTUFBTSxDQUFDQyxJQUFQLENBQVlULE1BQVosRUFBb0JvQixHQUFwQixDQUF3QixVQUFDVCxLQUFELEVBQVFVLEtBQVIsRUFBa0I7QUFDaEQsVUFBSSxPQUFPckIsTUFBTSxDQUFDVyxLQUFELENBQWIsS0FBeUIsUUFBN0IsRUFBdUM7QUFDdEMsNEJBQ0MscUVBQUMsMERBQUQ7QUFDQyxnQkFBTSxNQURQO0FBRUMsbUJBQVMsRUFBRVcsaURBRlo7QUFHQyxlQUFLLE1BSE47QUFJQyxjQUFJLEVBQUV0QixNQUFNLENBQUNXLEtBQUQsQ0FKYjtBQU1DLGtCQUFRLEVBQUVLLE1BQU0sQ0FBQ08sTUFBUCxLQUFrQnZCLE1BQU0sQ0FBQ1csS0FBRCxDQU5uQztBQUFBLGlDQVFDLHFFQUFDLDhEQUFEO0FBQWMsaUJBQUssRUFBRTtBQUFFYix3QkFBVSxZQUFLcUIsQ0FBQyxHQUFHLEVBQVQ7QUFBWixhQUFyQjtBQUFBLHNCQUNFUjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRCxXQUtNWCxNQUFNLENBQUNXLEtBQUQsQ0FMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBY0EsT0FmRCxNQWVPO0FBQ04sNEJBQ0M7QUFBQSxrQ0FDQyxxRUFBQywwREFBRDtBQUNDLGtCQUFNLE1BRFA7QUFFQyxtQkFBTyxFQUFFLG1CQUFNO0FBQ2RKLHVCQUFTLENBQUNJLEtBQUQsQ0FBVCxDQUFpQkksT0FBakIsQ0FDQyxDQUFDUixTQUFTLENBQUNJLEtBQUQsQ0FBVCxDQUFpQkcsSUFEbkI7QUFHQSxhQU5GO0FBQUEsb0NBU0MscUVBQUMsOERBQUQ7QUFBYyxtQkFBSyxFQUFFO0FBQUVoQiwwQkFBVSxZQUFLcUIsQ0FBQyxHQUFHLEVBQVQ7QUFBWixlQUFyQjtBQUFBLHdCQUNFUjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEQsRUFZRUosU0FBUyxDQUFDSSxLQUFELENBQVQsQ0FBaUJHLElBQWpCLGdCQUNBLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZ0JBR0EscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmRjtBQUFBLGFBT01ILEtBUE47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQW1CQyxxRUFBQywwREFBRDtBQUVDLGtCQUFJSixTQUFTLENBQUNJLEtBQUQsQ0FBVCxDQUFpQkcsSUFGdEI7QUFBQSxzQkFJRUksU0FBUyxDQUFDbEIsTUFBTSxDQUFDVyxLQUFELENBQVAsRUFBZ0JRLENBQUMsR0FBRyxDQUFwQjtBQUpYLGFBQ01SLEtBQUssR0FBRyxXQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbkJEO0FBQUEsd0JBREQ7QUE0QkE7QUFDRCxLQTlDTSxDQUFQO0FBK0NBOztBQUVELE1BQU1hLE9BQU8sR0FBRzFDLFNBQVMsRUFBekI7QUFFQSxzQkFDQyxxRUFBQyx3REFBRDtBQUNDLGFBQVMsRUFBRTBDLE9BQU8sQ0FBQ3hDLE1BRHBCO0FBRUMsV0FBTyxFQUFDLFdBRlQ7QUFHQyxXQUFPLEVBQUU7QUFDUnlDLFdBQUssRUFBRUQsT0FBTyxDQUFDbkM7QUFEUCxLQUhWO0FBTUMsVUFBTSxFQUFDLE1BTlI7QUFBQSw0QkFRQyxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkQsZUFTQztBQUFLLGVBQVMsRUFBRW1DLE9BQU8sQ0FBQ2pDLGVBQXhCO0FBQUEsNkJBQ0MscUVBQUMsc0RBQUQ7QUFBTSxhQUFLLE1BQVg7QUFBQSxrQkFBYTJCLFNBQVMsQ0FBQ2xCLE1BQUQsRUFBUyxDQUFUO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFlQTs7SUE3RnVCRCxZO1VBd0JSa0Isc0QsRUFvRENuQyxTOzs7S0E1RU9pQixZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNWJhMmM4YTE5ZDRkNGUzZGI4NzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuXHREcmF3ZXIsXHJcblx0VG9vbGJhcixcclxuXHRMaXN0LFxyXG5cdExpc3RJdGVtLFxyXG5cdExpc3RJdGVtSWNvbixcclxuXHRMaXN0SXRlbVRleHQsXHJcblx0Q29sbGFwc2UsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9zcmMvTGlua1wiO1xyXG5pbXBvcnQgTWFpbEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9NYWlsXCI7XHJcbmltcG9ydCBJbmJveEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9JbmJveFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgRXhwYW5kTGVzcywgRXhwYW5kTW9yZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyXCI7XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDM1MDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG5cdGRyYXdlcjoge1xyXG5cdFx0d2lkdGg6IGRyYXdlcldpZHRoLFxyXG5cdFx0ZmxleFNocmluazogMCxcclxuXHRcdHRleHRBbGlnbjogXCJyaWdodFwiLFxyXG5cdFx0Y29sb3I6IFwid2hpdGUgIWltcG9ydGFudFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyUGFwZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdC8vIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS50eXBlID09PSBcImRhcmtcIiA/IFwiIzMwMzAzMFwiIDogXCIjZWVlZWVlXCIsXHJcblx0XHQvL2JhY2tncm91bmQ6IFwibGluZWFyLWdyYWRpZW50KDEyMGRlZywgIzcyODlkYSwgIzY2YTZmZilcIixcclxuXHRcdGJhY2tncm91bmRDb2xvcjogXCIjMmUzMjM4XCIsXHJcblx0fSxcclxuXHRkcmF3ZXJDb250YWluZXI6IHtcclxuXHRcdG92ZXJmbG93WTogXCJhdXRvXCIsXHJcblx0XHRvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcblx0XHRtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXHJcblx0fSxcclxuXHRuZXN0ZWRUZXh0OiB7XHJcblx0XHRtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxyXG5cdH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tRHJhd2VyKCkge1xyXG5cdGNvbnN0IHJvdXRlcyA9IHtcclxuXHRcdEhvbWU6IFwiL1wiLFxyXG5cdFx0Q29udHJpYnV0ZTogXCIvY29udHJpYnV0ZVwiLFxyXG5cdFx0UGFydG5lcnNoaXBzOiBcIi9wYXJ0bmVyc2hpcHNcIixcclxuXHRcdEZBUToge1xyXG5cdFx0XHRTa3JpcHQ6IFwiL2ZhcS9za3JpcHRcIixcclxuXHRcdH0sXHJcblx0XHRQbHVnaW5zOiB7XHJcblx0XHRcdFwiUGx1Z2luIExpc3RcIjogXCIvcGx1Z2lucy9wbHVnaW4tbGlzdFwiLFxyXG5cdFx0XHRcIlJlY29tbWVuZGVkIFBsdWdpbnNcIjogXCIvcGx1Z2lucy9yZWNvbW1lbmRlZC1wbHVnaW5zXCIsXHJcblx0XHR9LFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRyb3Bkb3ducyA9IHt9O1xyXG5cclxuXHRPYmplY3Qua2V5cyhyb3V0ZXMpLmZvckVhY2goKHJvdXRlKSA9PiB7XHJcblx0XHRpZiAodHlwZW9mIHJvdXRlc1tyb3V0ZV0gIT09IFwib2JqZWN0XCIpIHJldHVybjtcclxuXHRcdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHRcdGRyb3Bkb3duc1tyb3V0ZV0gPSB7fTtcclxuXHRcdGRyb3Bkb3duc1tyb3V0ZV0ub3BlbiA9IG9wZW47XHJcblx0XHRkcm9wZG93bnNbcm91dGVdLnNldE9wZW4gPSBzZXRPcGVuO1xyXG5cdH0pO1xyXG5cclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0ZnVuY3Rpb24gbWFwUm91dGVzKHJvdXRlcywgaSkge1xyXG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHJvdXRlcykubWFwKChyb3V0ZSwgaW5kZXgpID0+IHtcclxuXHRcdFx0aWYgKHR5cGVvZiByb3V0ZXNbcm91dGVdID09PSBcInN0cmluZ1wiKSB7XHJcblx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdDxMaXN0SXRlbVxyXG5cdFx0XHRcdFx0XHRidXR0b25cclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50PXtMaW5rfVxyXG5cdFx0XHRcdFx0XHRuYWtlZFxyXG5cdFx0XHRcdFx0XHRocmVmPXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRrZXk9e3JvdXRlc1tyb3V0ZV19XHJcblx0XHRcdFx0XHRcdHNlbGVjdGVkPXtyb3V0ZXIuYXNQYXRoID09PSByb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IGAke2kgKiAzMn1weGAgfX0+XHJcblx0XHRcdFx0XHRcdFx0e3JvdXRlfVxyXG5cdFx0XHRcdFx0XHQ8L0xpc3RJdGVtVGV4dD5cclxuXHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0PExpc3RJdGVtXHJcblx0XHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZHJvcGRvd25zW3JvdXRlXS5zZXRPcGVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQhZHJvcGRvd25zW3JvdXRlXS5vcGVuXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0a2V5PXtyb3V0ZX1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQgc3R5bGU9e3sgbWFyZ2luTGVmdDogYCR7aSAqIDE2fXB4YCB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdHtyb3V0ZX1cclxuXHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtVGV4dD5cclxuXHRcdFx0XHRcdFx0XHR7ZHJvcGRvd25zW3JvdXRlXS5vcGVuID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEV4cGFuZExlc3MgLz5cclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEV4cGFuZE1vcmUgLz5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8Q29sbGFwc2VcclxuXHRcdFx0XHRcdFx0XHRrZXk9e3JvdXRlICsgXCItZHJvcGRvd25cIn1cclxuXHRcdFx0XHRcdFx0XHRpbj17ZHJvcGRvd25zW3JvdXRlXS5vcGVufVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0e21hcFJvdXRlcyhyb3V0ZXNbcm91dGVdLCBpICsgMSl9XHJcblx0XHRcdFx0XHRcdDwvQ29sbGFwc2U+XHJcblx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxEcmF3ZXJcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cclxuXHRcdFx0dmFyaWFudD1cInBlcm1hbmVudFwiXHJcblx0XHRcdGNsYXNzZXM9e3tcclxuXHRcdFx0XHRwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuXHRcdFx0fX1cclxuXHRcdFx0YW5jaG9yPVwibGVmdFwiXHJcblx0XHQ+XHJcblx0XHRcdDxUb29sYmFyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PExpc3QgZGVuc2U+e21hcFJvdXRlcyhyb3V0ZXMsIDApfTwvTGlzdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0RyYXdlcj5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=