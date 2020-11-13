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
    _s = $RefreshSig$(),
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

  dropdowns[route].setOpen = function () {
    return setOpen(!open);
  };
}, "dVkDIfRb5RN4FjtonjBYYwpg89o="));
function CustomDrawer() {
  _s2();

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
            return handleListItemClick(e, index + i);
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
            onClick: dropdowns[route].setOpen,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              children: route
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 8
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
            "in": dropdowns[route],
            children: mapRoutes(routes[route])
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
    className: classes.drawer,
    variant: "permanent",
    classes: {
      paper: classes.drawerPaper
    },
    anchor: "left",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Toolbar"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: mapRoutes(routes, 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0N1c3RvbURyYXdlci5qcyJdLCJuYW1lcyI6WyJkcmF3ZXJXaWR0aCIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJkcmF3ZXIiLCJ3aWR0aCIsImZsZXhTaHJpbmsiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImRyYXdlclBhcGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd2VyQ29udGFpbmVyIiwib3ZlcmZsb3dZIiwib3ZlcmZsb3dYIiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwibmVzdGVkVGV4dCIsIm1hcmdpbkxlZnQiLCJyb3V0ZXMiLCJIb21lIiwiQ29udHJpYnV0ZSIsIkZBUSIsIlNrcmlwdCIsImRyb3Bkb3ducyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwicm91dGUiLCJSZWFjdCIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJDdXN0b21EcmF3ZXIiLCJjb25zb2xlIiwibG9nIiwibWFwUm91dGVzIiwiaSIsIm1hcCIsImluZGV4IiwiTGluayIsInNlbGVjdGVkSW5kZXgiLCJlIiwiaGFuZGxlTGlzdEl0ZW1DbGljayIsImNsYXNzZXMiLCJzZXRTZWxlY3RlZEluZGV4IiwicGFwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsV0FBVyxHQUFHLEdBQXBCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQzVCQyxRQUFNLEVBQUU7QUFDUEMsU0FBSyxFQUFFSixXQURBO0FBRVBLLGNBQVUsRUFBRSxDQUZMO0FBR1BDLGFBQVMsRUFBRSxPQUhKO0FBSVBDLFNBQUssRUFBRTtBQUpBLEdBRG9CO0FBTzVCQyxhQUFXLEVBQUU7QUFDWkosU0FBSyxFQUFFSixXQURLO0FBRVo7QUFDQTtBQUNBUyxtQkFBZSxFQUFFO0FBSkwsR0FQZTtBQWE1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QUFsQ3NDLHlCQW9DSTJCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBcENKO0FBQUE7QUFBQSxNQW9DL0JXLGFBcEMrQjtBQUFBLE1Bb0NoQkksZ0JBcENnQjs7QUFzQ3RDLHNCQUNDLHFFQUFDLHdEQUFEO0FBQ0MsYUFBUyxFQUFFRCxPQUFPLENBQUN4QyxNQURwQjtBQUVDLFdBQU8sRUFBQyxXQUZUO0FBR0MsV0FBTyxFQUFFO0FBQ1IwQyxXQUFLLEVBQUVGLE9BQU8sQ0FBQ25DO0FBRFAsS0FIVjtBQU1DLFVBQU0sRUFBQyxNQU5SO0FBQUEsNEJBUUMscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELGVBU0M7QUFBSyxlQUFTLEVBQUVtQyxPQUFPLENBQUNqQyxlQUF4QjtBQUFBLDZCQUNDLHFFQUFDLHNEQUFEO0FBQU0sYUFBSyxNQUFYO0FBQUEsa0JBQWF5QixTQUFTLENBQUNqQixNQUFELEVBQVMsQ0FBVDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZUE7O0lBckR1QmMsWTtVQWtDUC9CLFM7OztLQWxDTytCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41MmY3MWI1ZjFjN2Q3YjgzM2VhZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG5cdERyYXdlcixcclxuXHRUb29sYmFyLFxyXG5cdExpc3QsXHJcblx0TGlzdEl0ZW0sXHJcblx0TGlzdEl0ZW1JY29uLFxyXG5cdExpc3RJdGVtVGV4dCxcclxuXHRDb2xsYXBzZSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL3NyYy9MaW5rXCI7XHJcbmltcG9ydCBNYWlsSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01haWxcIjtcclxuaW1wb3J0IEluYm94SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0luYm94XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi90aGVtZVwiO1xyXG5pbXBvcnQgeyBFeHBhbmRMZXNzLCBFeHBhbmRNb3JlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29uc1wiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAzNTA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRkcmF3ZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdGZsZXhTaHJpbms6IDAsXHJcblx0XHR0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuXHRcdGNvbG9yOiBcIndoaXRlICFpbXBvcnRhbnRcIixcclxuXHR9LFxyXG5cdGRyYXdlclBhcGVyOiB7XHJcblx0XHR3aWR0aDogZHJhd2VyV2lkdGgsXHJcblx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiMzMDMwMzBcIiA6IFwiI2VlZWVlZVwiLFxyXG5cdFx0Ly9iYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM3Mjg5ZGEsICM2NmE2ZmYpXCIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzJlMzIzOFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyQ29udGFpbmVyOiB7XHJcblx0XHRvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG5cdFx0b3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG5cdH0sXHJcblx0bmVzdGVkVGV4dDoge1xyXG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmNvbnN0IHJvdXRlcyA9IHtcclxuXHRIb21lOiBcIi9cIixcclxuXHRDb250cmlidXRlOiBcIi9jb250cmlidXRlXCIsXHJcblx0RkFROiB7XHJcblx0XHRTa3JpcHQ6IFwiL2ZhcS9za3JpcHRcIixcclxuXHR9LFxyXG59O1xyXG5cclxuY29uc3QgZHJvcGRvd25zID0ge307XHJcblxyXG5PYmplY3Qua2V5cyhyb3V0ZXMpLmZvckVhY2goKHJvdXRlKSA9PiB7XHJcblx0aWYgKHR5cGVvZiByb3V0ZXNbcm91dGVdICE9PSBcIm9iamVjdFwiKSByZXR1cm47XHJcblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblx0ZHJvcGRvd25zW3JvdXRlXSA9IHt9O1xyXG5cdGRyb3Bkb3duc1tyb3V0ZV0ub3BlbiA9IG9wZW47XHJcblx0ZHJvcGRvd25zW3JvdXRlXS5zZXRPcGVuID0gKCkgPT4gc2V0T3Blbighb3Blbik7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tRHJhd2VyKCkge1xyXG5cdGNvbnNvbGUubG9nKGRyb3Bkb3ducyk7XHJcblxyXG5cdGZ1bmN0aW9uIG1hcFJvdXRlcyhyb3V0ZXMsIGkpIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhyb3V0ZXMpLm1hcCgocm91dGUsIGluZGV4KSA9PiB7XHJcblx0XHRcdGlmICh0eXBlb2Ygcm91dGVzW3JvdXRlXSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8TGlzdEl0ZW1cclxuXHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudD17TGlua31cclxuXHRcdFx0XHRcdFx0bmFrZWRcclxuXHRcdFx0XHRcdFx0aHJlZj17cm91dGVzW3JvdXRlXX1cclxuXHRcdFx0XHRcdFx0a2V5PXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZD17aSArIGluZGV4ID09PSBzZWxlY3RlZEluZGV4fVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gaGFuZGxlTGlzdEl0ZW1DbGljayhlLCBpbmRleCArIGkpfVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0Pntyb3V0ZX08L0xpc3RJdGVtVGV4dD5cclxuXHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0PExpc3RJdGVtIGJ1dHRvbiBvbkNsaWNrPXtkcm9wZG93bnNbcm91dGVdLnNldE9wZW59PlxyXG5cdFx0XHRcdFx0XHRcdDxMaXN0SXRlbVRleHQ+e3JvdXRlfTwvTGlzdEl0ZW1UZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHQ8Q29sbGFwc2UgaW49e2Ryb3Bkb3duc1tyb3V0ZV19PlxyXG5cdFx0XHRcdFx0XHRcdHttYXBSb3V0ZXMocm91dGVzW3JvdXRlXSl9XHJcblx0XHRcdFx0XHRcdDwvQ29sbGFwc2U+XHJcblx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcblx0Y29uc3QgW3NlbGVjdGVkSW5kZXgsIHNldFNlbGVjdGVkSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8RHJhd2VyXHJcblx0XHRcdGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJ9XHJcblx0XHRcdHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG5cdFx0XHRjbGFzc2VzPXt7XHJcblx0XHRcdFx0cGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXHJcblx0XHRcdH19XHJcblx0XHRcdGFuY2hvcj1cImxlZnRcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8VG9vbGJhciAvPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJDb250YWluZXJ9PlxyXG5cdFx0XHRcdDxMaXN0IGRlbnNlPnttYXBSb3V0ZXMocm91dGVzLCAwKX08L0xpc3Q+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9EcmF3ZXI+XHJcblx0KTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9