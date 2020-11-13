webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/next-server/server/router.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/router.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.default=exports.route=void 0;var _pathMatch=_interopRequireDefault(__webpack_require__(/*! ../lib/router/utils/path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));var _normalizeTrailingSlash=__webpack_require__(/*! ../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}const route=(0,_pathMatch.default)();exports.route=route;const customRouteTypes=new Set(['rewrite','redirect','header']);function replaceBasePath(basePath,pathname){// If replace ends up replacing the full url it'll be `undefined`, meaning we have to default it to `/`
return pathname.replace(basePath,'')||'/';}class Router{constructor({basePath='',headers=[],fsRoutes=[],rewrites=[],redirects=[],catchAllRoute,dynamicRoutes=[],pageChecker,useFileSystemPublicRoutes}){this.basePath=void 0;this.headers=void 0;this.fsRoutes=void 0;this.rewrites=void 0;this.redirects=void 0;this.catchAllRoute=void 0;this.pageChecker=void 0;this.dynamicRoutes=void 0;this.useFileSystemPublicRoutes=void 0;this.basePath=basePath;this.headers=headers;this.fsRoutes=fsRoutes;this.rewrites=rewrites;this.redirects=redirects;this.pageChecker=pageChecker;this.catchAllRoute=catchAllRoute;this.dynamicRoutes=dynamicRoutes;this.useFileSystemPublicRoutes=useFileSystemPublicRoutes;}setDynamicRoutes(routes=[]){this.dynamicRoutes=routes;}addFsRoute(fsRoute){this.fsRoutes.unshift(fsRoute);}async execute(req,res,parsedUrl){// memoize page check calls so we don't duplicate checks for pages
const pageChecks={};const memoizedPageChecker=async p=>{if(pageChecks[p]){return pageChecks[p];}const result=this.pageChecker(p);pageChecks[p]=result;return result;};let parsedUrlUpdated=parsedUrl;/*
      Desired routes order
      - headers
      - redirects
      - Check filesystem (including pages), if nothing found continue
      - User rewrites (checking filesystem and pages each match)
    */const allRoutes=[...this.headers,...this.redirects,...this.fsRoutes,// We only check the catch-all route if public page routes hasn't been
// disabled
...(this.useFileSystemPublicRoutes?[{type:'route',name:'page checker',requireBasePath:false,match:route('/:path*'),fn:async(checkerReq,checkerRes,params,parsedCheckerUrl)=>{let{pathname}=parsedCheckerUrl;pathname=(0,_normalizeTrailingSlash.removePathTrailingSlash)(pathname||'/');if(!pathname){return{finished:false};}if(await memoizedPageChecker(pathname)){return this.catchAllRoute.fn(checkerReq,checkerRes,params,parsedCheckerUrl);}return{finished:false};}}]:[]),...this.rewrites,// We only check the catch-all route if public page routes hasn't been
// disabled
...(this.useFileSystemPublicRoutes?[this.catchAllRoute]:[])];const originallyHadBasePath=!this.basePath||req._nextHadBasePath;for(const testRoute of allRoutes){// if basePath is being used, the basePath will still be included
// in the pathname here to allow custom-routes to require containing
// it or not, filesystem routes and pages must always include the basePath
// if it is set
let currentPathname=parsedUrlUpdated.pathname;const originalPathname=currentPathname;const requireBasePath=testRoute.requireBasePath!==false;const isCustomRoute=customRouteTypes.has(testRoute.type);const isPublicFolderCatchall=testRoute.name==='public folder catchall';const keepBasePath=isCustomRoute||isPublicFolderCatchall;if(!keepBasePath){currentPathname=replaceBasePath(this.basePath,currentPathname);}// re-add locale for custom-routes to allow matching against
if(isCustomRoute&&req.__nextStrippedLocale&&parsedUrl.query.__nextLocale){currentPathname=`/${parsedUrl.query.__nextLocale}${currentPathname==='/'?'':currentPathname}`;}const newParams=testRoute.match(currentPathname);// Check if the match function matched
if(newParams){// since we require basePath be present for non-custom-routes we
// 404 here when we matched an fs route
if(!keepBasePath){if(!originallyHadBasePath&&!req._nextDidRewrite){if(requireBasePath){// consider this a non-match so the 404 renders
return false;}// page checker occurs before rewrites so we need to continue
// to check those since they don't always require basePath
continue;}parsedUrlUpdated.pathname=currentPathname;}const result=await testRoute.fn(req,res,newParams,parsedUrlUpdated);// The response was handled
if(result.finished){return true;}// since the fs route didn't match we need to re-add the basePath
// to continue checking rewrites with the basePath present
if(!keepBasePath){parsedUrlUpdated.pathname=originalPathname;}if(result.pathname){parsedUrlUpdated.pathname=result.pathname;}if(result.query){parsedUrlUpdated.query={...parsedUrlUpdated.query,...result.query};}// check filesystem
if(testRoute.check===true){const originalFsPathname=parsedUrlUpdated.pathname;const fsPathname=replaceBasePath(this.basePath,originalFsPathname);for(const fsRoute of this.fsRoutes){const fsParams=fsRoute.match(fsPathname);if(fsParams){parsedUrlUpdated.pathname=fsPathname;const fsResult=await fsRoute.fn(req,res,fsParams,parsedUrlUpdated);if(fsResult.finished){return true;}parsedUrlUpdated.pathname=originalFsPathname;}}let matchedPage=await memoizedPageChecker(fsPathname);// If we didn't match a page check dynamic routes
if(!matchedPage){for(const dynamicRoute of this.dynamicRoutes){if(dynamicRoute.match(fsPathname)){matchedPage=true;}}}// Matched a page or dynamic route so render it using catchAllRoute
if(matchedPage){parsedUrlUpdated.pathname=fsPathname;const pageParams=this.catchAllRoute.match(parsedUrlUpdated.pathname);await this.catchAllRoute.fn(req,res,pageParams,parsedUrlUpdated);return true;}}}}return false;}}exports.default=Router;
//# sourceMappingURL=router.js.map

/***/ }),

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
              marginLeft: "".concat(i * 8, "px")
            },
            children: route
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 7
          }, _this)
        }, routes[route], false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 6
        }, _this);
      } else {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
            button: true,
            onClick: function onClick() {
              dropdowns[route].setOpen(!dropdowns[route].open);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
              style: {
                marginLeft: "".concat(i * 16, "px")
              },
              children: route
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 8
            }, _this)
          }, router, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
            "in": dropdowns[route].open,
            children: mapRoutes(routes[route], i + 1)
          }, route, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
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
      lineNumber: 121,
      columnNumber: 4
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.drawerContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
        dense: true,
        children: mapRoutes(routes, 0)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 4
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 113,
    columnNumber: 3
  }, this);
}

_s2(CustomDrawer, "N9ZfWcQJTnUpvGsFEFmCa4dukQ4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvcm91dGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvQ3VzdG9tRHJhd2VyLmpzIl0sIm5hbWVzIjpbImRyYXdlcldpZHRoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImRyYXdlciIsIndpZHRoIiwiZmxleFNocmluayIsInRleHRBbGlnbiIsImNvbG9yIiwiZHJhd2VyUGFwZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3ZXJDb250YWluZXIiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJtYXJnaW5Ub3AiLCJ0aGVtZSIsInNwYWNpbmciLCJuZXN0ZWRUZXh0IiwibWFyZ2luTGVmdCIsIkN1c3RvbURyYXdlciIsInJvdXRlcyIsIkhvbWUiLCJDb250cmlidXRlIiwiRkFRIiwiU2tyaXB0IiwiZHJvcGRvd25zIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJyb3V0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsInJvdXRlciIsInVzZVJvdXRlciIsIm1hcFJvdXRlcyIsImkiLCJtYXAiLCJpbmRleCIsIkxpbmsiLCJhc1BhdGgiLCJjbGFzc2VzIiwic2VsZWN0ZWRJbmRleCIsInNldFNlbGVjdGVkSW5kZXgiLCJwYXBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhLHdCQUF3QixxQ0FBcUMsc0NBQXNDLG1CQUFPLENBQUMsMkdBQWdDLEdBQUcsNEJBQTRCLG1CQUFPLENBQUMsMEdBQXVDLEVBQUUscUNBQXFDLGdDQUFnQyxjQUFjLHFDQUFxQyxvQkFBb0IsZ0VBQWdFLDRDQUE0QztBQUNoZSwyQ0FBMkMsYUFBYSxhQUFhLGlJQUFpSSxFQUFFLHFCQUFxQixvQkFBb0IscUJBQXFCLHFCQUFxQixzQkFBc0IsMEJBQTBCLHdCQUF3QiwwQkFBMEIsc0NBQXNDLHVCQUF1QixxQkFBcUIsdUJBQXVCLHVCQUF1Qix5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YXBwLmQ4OGI5OTdkZTliOGIwNTliMDAxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9ZXhwb3J0cy5yb3V0ZT12b2lkIDA7dmFyIF9wYXRoTWF0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoXCIpKTt2YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2g9cmVxdWlyZShcIi4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCByb3V0ZT0oMCxfcGF0aE1hdGNoLmRlZmF1bHQpKCk7ZXhwb3J0cy5yb3V0ZT1yb3V0ZTtjb25zdCBjdXN0b21Sb3V0ZVR5cGVzPW5ldyBTZXQoWydyZXdyaXRlJywncmVkaXJlY3QnLCdoZWFkZXInXSk7ZnVuY3Rpb24gcmVwbGFjZUJhc2VQYXRoKGJhc2VQYXRoLHBhdGhuYW1lKXsvLyBJZiByZXBsYWNlIGVuZHMgdXAgcmVwbGFjaW5nIHRoZSBmdWxsIHVybCBpdCdsbCBiZSBgdW5kZWZpbmVkYCwgbWVhbmluZyB3ZSBoYXZlIHRvIGRlZmF1bHQgaXQgdG8gYC9gXG5yZXR1cm4gcGF0aG5hbWUucmVwbGFjZShiYXNlUGF0aCwnJyl8fCcvJzt9Y2xhc3MgUm91dGVye2NvbnN0cnVjdG9yKHtiYXNlUGF0aD0nJyxoZWFkZXJzPVtdLGZzUm91dGVzPVtdLHJld3JpdGVzPVtdLHJlZGlyZWN0cz1bXSxjYXRjaEFsbFJvdXRlLGR5bmFtaWNSb3V0ZXM9W10scGFnZUNoZWNrZXIsdXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlc30pe3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuaGVhZGVycz12b2lkIDA7dGhpcy5mc1JvdXRlcz12b2lkIDA7dGhpcy5yZXdyaXRlcz12b2lkIDA7dGhpcy5yZWRpcmVjdHM9dm9pZCAwO3RoaXMuY2F0Y2hBbGxSb3V0ZT12b2lkIDA7dGhpcy5wYWdlQ2hlY2tlcj12b2lkIDA7dGhpcy5keW5hbWljUm91dGVzPXZvaWQgMDt0aGlzLnVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXM9dm9pZCAwO3RoaXMuYmFzZVBhdGg9YmFzZVBhdGg7dGhpcy5oZWFkZXJzPWhlYWRlcnM7dGhpcy5mc1JvdXRlcz1mc1JvdXRlczt0aGlzLnJld3JpdGVzPXJld3JpdGVzO3RoaXMucmVkaXJlY3RzPXJlZGlyZWN0czt0aGlzLnBhZ2VDaGVja2VyPXBhZ2VDaGVja2VyO3RoaXMuY2F0Y2hBbGxSb3V0ZT1jYXRjaEFsbFJvdXRlO3RoaXMuZHluYW1pY1JvdXRlcz1keW5hbWljUm91dGVzO3RoaXMudXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlcz11c2VGaWxlU3lzdGVtUHVibGljUm91dGVzO31zZXREeW5hbWljUm91dGVzKHJvdXRlcz1bXSl7dGhpcy5keW5hbWljUm91dGVzPXJvdXRlczt9YWRkRnNSb3V0ZShmc1JvdXRlKXt0aGlzLmZzUm91dGVzLnVuc2hpZnQoZnNSb3V0ZSk7fWFzeW5jIGV4ZWN1dGUocmVxLHJlcyxwYXJzZWRVcmwpey8vIG1lbW9pemUgcGFnZSBjaGVjayBjYWxscyBzbyB3ZSBkb24ndCBkdXBsaWNhdGUgY2hlY2tzIGZvciBwYWdlc1xuY29uc3QgcGFnZUNoZWNrcz17fTtjb25zdCBtZW1vaXplZFBhZ2VDaGVja2VyPWFzeW5jIHA9PntpZihwYWdlQ2hlY2tzW3BdKXtyZXR1cm4gcGFnZUNoZWNrc1twXTt9Y29uc3QgcmVzdWx0PXRoaXMucGFnZUNoZWNrZXIocCk7cGFnZUNoZWNrc1twXT1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O2xldCBwYXJzZWRVcmxVcGRhdGVkPXBhcnNlZFVybDsvKlxuICAgICAgRGVzaXJlZCByb3V0ZXMgb3JkZXJcbiAgICAgIC0gaGVhZGVyc1xuICAgICAgLSByZWRpcmVjdHNcbiAgICAgIC0gQ2hlY2sgZmlsZXN5c3RlbSAoaW5jbHVkaW5nIHBhZ2VzKSwgaWYgbm90aGluZyBmb3VuZCBjb250aW51ZVxuICAgICAgLSBVc2VyIHJld3JpdGVzIChjaGVja2luZyBmaWxlc3lzdGVtIGFuZCBwYWdlcyBlYWNoIG1hdGNoKVxuICAgICovY29uc3QgYWxsUm91dGVzPVsuLi50aGlzLmhlYWRlcnMsLi4udGhpcy5yZWRpcmVjdHMsLi4udGhpcy5mc1JvdXRlcywvLyBXZSBvbmx5IGNoZWNrIHRoZSBjYXRjaC1hbGwgcm91dGUgaWYgcHVibGljIHBhZ2Ugcm91dGVzIGhhc24ndCBiZWVuXG4vLyBkaXNhYmxlZFxuLi4uKHRoaXMudXNlRmlsZVN5c3RlbVB1YmxpY1JvdXRlcz9be3R5cGU6J3JvdXRlJyxuYW1lOidwYWdlIGNoZWNrZXInLHJlcXVpcmVCYXNlUGF0aDpmYWxzZSxtYXRjaDpyb3V0ZSgnLzpwYXRoKicpLGZuOmFzeW5jKGNoZWNrZXJSZXEsY2hlY2tlclJlcyxwYXJhbXMscGFyc2VkQ2hlY2tlclVybCk9PntsZXR7cGF0aG5hbWV9PXBhcnNlZENoZWNrZXJVcmw7cGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKHBhdGhuYW1lfHwnLycpO2lmKCFwYXRobmFtZSl7cmV0dXJue2ZpbmlzaGVkOmZhbHNlfTt9aWYoYXdhaXQgbWVtb2l6ZWRQYWdlQ2hlY2tlcihwYXRobmFtZSkpe3JldHVybiB0aGlzLmNhdGNoQWxsUm91dGUuZm4oY2hlY2tlclJlcSxjaGVja2VyUmVzLHBhcmFtcyxwYXJzZWRDaGVja2VyVXJsKTt9cmV0dXJue2ZpbmlzaGVkOmZhbHNlfTt9fV06W10pLC4uLnRoaXMucmV3cml0ZXMsLy8gV2Ugb25seSBjaGVjayB0aGUgY2F0Y2gtYWxsIHJvdXRlIGlmIHB1YmxpYyBwYWdlIHJvdXRlcyBoYXNuJ3QgYmVlblxuLy8gZGlzYWJsZWRcbi4uLih0aGlzLnVzZUZpbGVTeXN0ZW1QdWJsaWNSb3V0ZXM/W3RoaXMuY2F0Y2hBbGxSb3V0ZV06W10pXTtjb25zdCBvcmlnaW5hbGx5SGFkQmFzZVBhdGg9IXRoaXMuYmFzZVBhdGh8fHJlcS5fbmV4dEhhZEJhc2VQYXRoO2Zvcihjb25zdCB0ZXN0Um91dGUgb2YgYWxsUm91dGVzKXsvLyBpZiBiYXNlUGF0aCBpcyBiZWluZyB1c2VkLCB0aGUgYmFzZVBhdGggd2lsbCBzdGlsbCBiZSBpbmNsdWRlZFxuLy8gaW4gdGhlIHBhdGhuYW1lIGhlcmUgdG8gYWxsb3cgY3VzdG9tLXJvdXRlcyB0byByZXF1aXJlIGNvbnRhaW5pbmdcbi8vIGl0IG9yIG5vdCwgZmlsZXN5c3RlbSByb3V0ZXMgYW5kIHBhZ2VzIG11c3QgYWx3YXlzIGluY2x1ZGUgdGhlIGJhc2VQYXRoXG4vLyBpZiBpdCBpcyBzZXRcbmxldCBjdXJyZW50UGF0aG5hbWU9cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZTtjb25zdCBvcmlnaW5hbFBhdGhuYW1lPWN1cnJlbnRQYXRobmFtZTtjb25zdCByZXF1aXJlQmFzZVBhdGg9dGVzdFJvdXRlLnJlcXVpcmVCYXNlUGF0aCE9PWZhbHNlO2NvbnN0IGlzQ3VzdG9tUm91dGU9Y3VzdG9tUm91dGVUeXBlcy5oYXModGVzdFJvdXRlLnR5cGUpO2NvbnN0IGlzUHVibGljRm9sZGVyQ2F0Y2hhbGw9dGVzdFJvdXRlLm5hbWU9PT0ncHVibGljIGZvbGRlciBjYXRjaGFsbCc7Y29uc3Qga2VlcEJhc2VQYXRoPWlzQ3VzdG9tUm91dGV8fGlzUHVibGljRm9sZGVyQ2F0Y2hhbGw7aWYoIWtlZXBCYXNlUGF0aCl7Y3VycmVudFBhdGhuYW1lPXJlcGxhY2VCYXNlUGF0aCh0aGlzLmJhc2VQYXRoLGN1cnJlbnRQYXRobmFtZSk7fS8vIHJlLWFkZCBsb2NhbGUgZm9yIGN1c3RvbS1yb3V0ZXMgdG8gYWxsb3cgbWF0Y2hpbmcgYWdhaW5zdFxuaWYoaXNDdXN0b21Sb3V0ZSYmcmVxLl9fbmV4dFN0cmlwcGVkTG9jYWxlJiZwYXJzZWRVcmwucXVlcnkuX19uZXh0TG9jYWxlKXtjdXJyZW50UGF0aG5hbWU9YC8ke3BhcnNlZFVybC5xdWVyeS5fX25leHRMb2NhbGV9JHtjdXJyZW50UGF0aG5hbWU9PT0nLyc/Jyc6Y3VycmVudFBhdGhuYW1lfWA7fWNvbnN0IG5ld1BhcmFtcz10ZXN0Um91dGUubWF0Y2goY3VycmVudFBhdGhuYW1lKTsvLyBDaGVjayBpZiB0aGUgbWF0Y2ggZnVuY3Rpb24gbWF0Y2hlZFxuaWYobmV3UGFyYW1zKXsvLyBzaW5jZSB3ZSByZXF1aXJlIGJhc2VQYXRoIGJlIHByZXNlbnQgZm9yIG5vbi1jdXN0b20tcm91dGVzIHdlXG4vLyA0MDQgaGVyZSB3aGVuIHdlIG1hdGNoZWQgYW4gZnMgcm91dGVcbmlmKCFrZWVwQmFzZVBhdGgpe2lmKCFvcmlnaW5hbGx5SGFkQmFzZVBhdGgmJiFyZXEuX25leHREaWRSZXdyaXRlKXtpZihyZXF1aXJlQmFzZVBhdGgpey8vIGNvbnNpZGVyIHRoaXMgYSBub24tbWF0Y2ggc28gdGhlIDQwNCByZW5kZXJzXG5yZXR1cm4gZmFsc2U7fS8vIHBhZ2UgY2hlY2tlciBvY2N1cnMgYmVmb3JlIHJld3JpdGVzIHNvIHdlIG5lZWQgdG8gY29udGludWVcbi8vIHRvIGNoZWNrIHRob3NlIHNpbmNlIHRoZXkgZG9uJ3QgYWx3YXlzIHJlcXVpcmUgYmFzZVBhdGhcbmNvbnRpbnVlO31wYXJzZWRVcmxVcGRhdGVkLnBhdGhuYW1lPWN1cnJlbnRQYXRobmFtZTt9Y29uc3QgcmVzdWx0PWF3YWl0IHRlc3RSb3V0ZS5mbihyZXEscmVzLG5ld1BhcmFtcyxwYXJzZWRVcmxVcGRhdGVkKTsvLyBUaGUgcmVzcG9uc2Ugd2FzIGhhbmRsZWRcbmlmKHJlc3VsdC5maW5pc2hlZCl7cmV0dXJuIHRydWU7fS8vIHNpbmNlIHRoZSBmcyByb3V0ZSBkaWRuJ3QgbWF0Y2ggd2UgbmVlZCB0byByZS1hZGQgdGhlIGJhc2VQYXRoXG4vLyB0byBjb250aW51ZSBjaGVja2luZyByZXdyaXRlcyB3aXRoIHRoZSBiYXNlUGF0aCBwcmVzZW50XG5pZigha2VlcEJhc2VQYXRoKXtwYXJzZWRVcmxVcGRhdGVkLnBhdGhuYW1lPW9yaWdpbmFsUGF0aG5hbWU7fWlmKHJlc3VsdC5wYXRobmFtZSl7cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZT1yZXN1bHQucGF0aG5hbWU7fWlmKHJlc3VsdC5xdWVyeSl7cGFyc2VkVXJsVXBkYXRlZC5xdWVyeT17Li4ucGFyc2VkVXJsVXBkYXRlZC5xdWVyeSwuLi5yZXN1bHQucXVlcnl9O30vLyBjaGVjayBmaWxlc3lzdGVtXG5pZih0ZXN0Um91dGUuY2hlY2s9PT10cnVlKXtjb25zdCBvcmlnaW5hbEZzUGF0aG5hbWU9cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZTtjb25zdCBmc1BhdGhuYW1lPXJlcGxhY2VCYXNlUGF0aCh0aGlzLmJhc2VQYXRoLG9yaWdpbmFsRnNQYXRobmFtZSk7Zm9yKGNvbnN0IGZzUm91dGUgb2YgdGhpcy5mc1JvdXRlcyl7Y29uc3QgZnNQYXJhbXM9ZnNSb3V0ZS5tYXRjaChmc1BhdGhuYW1lKTtpZihmc1BhcmFtcyl7cGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZT1mc1BhdGhuYW1lO2NvbnN0IGZzUmVzdWx0PWF3YWl0IGZzUm91dGUuZm4ocmVxLHJlcyxmc1BhcmFtcyxwYXJzZWRVcmxVcGRhdGVkKTtpZihmc1Jlc3VsdC5maW5pc2hlZCl7cmV0dXJuIHRydWU7fXBhcnNlZFVybFVwZGF0ZWQucGF0aG5hbWU9b3JpZ2luYWxGc1BhdGhuYW1lO319bGV0IG1hdGNoZWRQYWdlPWF3YWl0IG1lbW9pemVkUGFnZUNoZWNrZXIoZnNQYXRobmFtZSk7Ly8gSWYgd2UgZGlkbid0IG1hdGNoIGEgcGFnZSBjaGVjayBkeW5hbWljIHJvdXRlc1xuaWYoIW1hdGNoZWRQYWdlKXtmb3IoY29uc3QgZHluYW1pY1JvdXRlIG9mIHRoaXMuZHluYW1pY1JvdXRlcyl7aWYoZHluYW1pY1JvdXRlLm1hdGNoKGZzUGF0aG5hbWUpKXttYXRjaGVkUGFnZT10cnVlO319fS8vIE1hdGNoZWQgYSBwYWdlIG9yIGR5bmFtaWMgcm91dGUgc28gcmVuZGVyIGl0IHVzaW5nIGNhdGNoQWxsUm91dGVcbmlmKG1hdGNoZWRQYWdlKXtwYXJzZWRVcmxVcGRhdGVkLnBhdGhuYW1lPWZzUGF0aG5hbWU7Y29uc3QgcGFnZVBhcmFtcz10aGlzLmNhdGNoQWxsUm91dGUubWF0Y2gocGFyc2VkVXJsVXBkYXRlZC5wYXRobmFtZSk7YXdhaXQgdGhpcy5jYXRjaEFsbFJvdXRlLmZuKHJlcSxyZXMscGFnZVBhcmFtcyxwYXJzZWRVcmxVcGRhdGVkKTtyZXR1cm4gdHJ1ZTt9fX19cmV0dXJuIGZhbHNlO319ZXhwb3J0cy5kZWZhdWx0PVJvdXRlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcblx0RHJhd2VyLFxyXG5cdFRvb2xiYXIsXHJcblx0TGlzdCxcclxuXHRMaXN0SXRlbSxcclxuXHRMaXN0SXRlbUljb24sXHJcblx0TGlzdEl0ZW1UZXh0LFxyXG5cdENvbGxhcHNlLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi4vc3JjL0xpbmtcIjtcclxuaW1wb3J0IE1haWxJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWFpbFwiO1xyXG5pbXBvcnQgSW5ib3hJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSW5ib3hcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lXCI7XHJcbmltcG9ydCB7IEV4cGFuZExlc3MsIEV4cGFuZE1vcmUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3JvdXRlclwiO1xyXG5cclxuY29uc3QgZHJhd2VyV2lkdGggPSAzNTA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcclxuXHRkcmF3ZXI6IHtcclxuXHRcdHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuXHRcdGZsZXhTaHJpbms6IDAsXHJcblx0XHR0ZXh0QWxpZ246IFwicmlnaHRcIixcclxuXHRcdGNvbG9yOiBcIndoaXRlICFpbXBvcnRhbnRcIixcclxuXHR9LFxyXG5cdGRyYXdlclBhcGVyOiB7XHJcblx0XHR3aWR0aDogZHJhd2VyV2lkdGgsXHJcblx0XHQvLyBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gXCJkYXJrXCIgPyBcIiMzMDMwMzBcIiA6IFwiI2VlZWVlZVwiLFxyXG5cdFx0Ly9iYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCgxMjBkZWcsICM3Mjg5ZGEsICM2NmE2ZmYpXCIsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IFwiIzJlMzIzOFwiLFxyXG5cdH0sXHJcblx0ZHJhd2VyQ29udGFpbmVyOiB7XHJcblx0XHRvdmVyZmxvd1k6IFwiYXV0b1wiLFxyXG5cdFx0b3ZlcmZsb3dYOiBcImhpZGRlblwiLFxyXG5cdFx0bWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG5cdH0sXHJcblx0bmVzdGVkVGV4dDoge1xyXG5cdFx0bWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcclxuXHR9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbURyYXdlcigpIHtcclxuXHRjb25zdCByb3V0ZXMgPSB7XHJcblx0XHRIb21lOiBcIi9cIixcclxuXHRcdENvbnRyaWJ1dGU6IFwiL2NvbnRyaWJ1dGVcIixcclxuXHRcdEZBUToge1xyXG5cdFx0XHRTa3JpcHQ6IFwiL2ZhcS9za3JpcHRcIixcclxuXHRcdH0sXHJcblx0fTtcclxuXHJcblx0Y29uc3QgZHJvcGRvd25zID0ge307XHJcblxyXG5cdE9iamVjdC5rZXlzKHJvdXRlcykuZm9yRWFjaCgocm91dGUpID0+IHtcclxuXHRcdGlmICh0eXBlb2Ygcm91dGVzW3JvdXRlXSAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xyXG5cdFx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcblx0XHRkcm9wZG93bnNbcm91dGVdID0ge307XHJcblx0XHRkcm9wZG93bnNbcm91dGVdLm9wZW4gPSBvcGVuO1xyXG5cdFx0ZHJvcGRvd25zW3JvdXRlXS5zZXRPcGVuID0gc2V0T3BlbjtcclxuXHR9KTtcclxuXHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cdGZ1bmN0aW9uIG1hcFJvdXRlcyhyb3V0ZXMsIGkpIHtcclxuXHRcdHJldHVybiBPYmplY3Qua2V5cyhyb3V0ZXMpLm1hcCgocm91dGUsIGluZGV4KSA9PiB7XHJcblx0XHRcdGlmICh0eXBlb2Ygcm91dGVzW3JvdXRlXSA9PT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHQ8TGlzdEl0ZW1cclxuXHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudD17TGlua31cclxuXHRcdFx0XHRcdFx0bmFrZWRcclxuXHRcdFx0XHRcdFx0aHJlZj17cm91dGVzW3JvdXRlXX1cclxuXHRcdFx0XHRcdFx0a2V5PXtyb3V0ZXNbcm91dGVdfVxyXG5cdFx0XHRcdFx0XHRzZWxlY3RlZD17cm91dGVyLmFzUGF0aCA9PT0gcm91dGVzW3JvdXRlXX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0PExpc3RJdGVtVGV4dCBzdHlsZT17eyBtYXJnaW5MZWZ0OiBgJHtpICogOH1weGAgfX0+XHJcblx0XHRcdFx0XHRcdFx0e3JvdXRlfVxyXG5cdFx0XHRcdFx0XHQ8L0xpc3RJdGVtVGV4dD5cclxuXHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdFx0PExpc3RJdGVtXHJcblx0XHRcdFx0XHRcdFx0YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZHJvcGRvd25zW3JvdXRlXS5zZXRPcGVuKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQhZHJvcGRvd25zW3JvdXRlXS5vcGVuXHJcblx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0a2V5PXtyb3V0ZXJ9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8TGlzdEl0ZW1UZXh0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IGAke2kgKiAxNn1weGAgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7cm91dGV9XHJcblx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbVRleHQ+XHJcblx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHRcdDxDb2xsYXBzZSBrZXk9e3JvdXRlfSBpbj17ZHJvcGRvd25zW3JvdXRlXS5vcGVufT5cclxuXHRcdFx0XHRcdFx0XHR7bWFwUm91dGVzKHJvdXRlc1tyb3V0ZV0sIGkgKyAxKX1cclxuXHRcdFx0XHRcdFx0PC9Db2xsYXBzZT5cclxuXHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuXHRjb25zdCBbc2VsZWN0ZWRJbmRleCwgc2V0U2VsZWN0ZWRJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxEcmF3ZXJcclxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlcn1cclxuXHRcdFx0dmFyaWFudD1cInBlcm1hbmVudFwiXHJcblx0XHRcdGNsYXNzZXM9e3tcclxuXHRcdFx0XHRwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuXHRcdFx0fX1cclxuXHRcdFx0YW5jaG9yPVwibGVmdFwiXHJcblx0XHQ+XHJcblx0XHRcdDxUb29sYmFyIC8+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRyYXdlckNvbnRhaW5lcn0+XHJcblx0XHRcdFx0PExpc3QgZGVuc2U+e21hcFJvdXRlcyhyb3V0ZXMsIDApfTwvTGlzdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0RyYXdlcj5cclxuXHQpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=