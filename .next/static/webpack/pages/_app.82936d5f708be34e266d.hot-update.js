webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/Link.js":
/*!*********************!*\
  !*** ./src/Link.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");




var _jsxFileName = "C:\\Users\\carri\\Desktop\\Github\\minehut.xyz\\src\\Link.js",
    _s = $RefreshSig$(),
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable jsx-a11y/anchor-has-content */






var NextComposed = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(_c = function NextComposed(props, ref) {
  var as = props.as,
      href = props.href,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["as", "href"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: href,
    as: as,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", _objectSpread({
      ref: ref
    }, other), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 3
  }, this);
});
_c2 = NextComposed;
NextComposed.propTypes = {
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  href: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  prefetch: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
}; // A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link

function Link(props) {
  _s();

  var href = props.href,
      _props$activeClassNam = props.activeClassName,
      activeClassName = _props$activeClassNam === void 0 ? "active" : _props$activeClassNam,
      classNameProps = props.className,
      innerRef = props.innerRef,
      naked = props.naked,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["href", "activeClassName", "className", "innerRef", "naked"]);

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var pathname = typeof href === "string" ? href : href.pathname;
  var className = Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classNameProps, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, activeClassName, router.pathname === pathname && activeClassName));

  if (naked) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(NextComposed, _objectSpread({
      className: className,
      ref: innerRef,
      href: href
    }, other), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread({
    component: NextComposed,
    className: className,
    ref: innerRef,
    href: href
  }, other), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 3
  }, this);
}

_s(Link, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c3 = Link;
Link.propTypes = {
  activeClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  href: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  innerRef: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  naked: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  prefetch: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (_c5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(_c4 = function _c4(props, ref) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Link, _objectSpread(_objectSpread({}, props), {}, {
    innerRef: ref
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 2
  }, _this);
}));

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "NextComposed$React.forwardRef");
$RefreshReg$(_c2, "NextComposed");
$RefreshReg$(_c3, "Link");
$RefreshReg$(_c4, "%default%$React.forwardRef");
$RefreshReg$(_c5, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL0xpbmsuanMiXSwibmFtZXMiOlsiTmV4dENvbXBvc2VkIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwicHJvcHMiLCJyZWYiLCJhcyIsImhyZWYiLCJvdGhlciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsInByZWZldGNoIiwiYm9vbCIsIkxpbmsiLCJhY3RpdmVDbGFzc05hbWUiLCJjbGFzc05hbWVQcm9wcyIsImNsYXNzTmFtZSIsImlubmVyUmVmIiwibmFrZWQiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImNsc3giLCJmdW5jIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxnQkFBR0MsNENBQUssQ0FBQ0MsVUFBTixNQUFpQixTQUFTRixZQUFULENBQXNCRyxLQUF0QixFQUE2QkMsR0FBN0IsRUFBa0M7QUFBQSxNQUMvREMsRUFEK0QsR0FDeENGLEtBRHdDLENBQy9ERSxFQUQrRDtBQUFBLE1BQzNEQyxJQUQyRCxHQUN4Q0gsS0FEd0MsQ0FDM0RHLElBRDJEO0FBQUEsTUFDbERDLEtBRGtELHNHQUN4Q0osS0FEd0M7O0FBR3ZFLHNCQUNDLHFFQUFDLGdEQUFEO0FBQVUsUUFBSSxFQUFFRyxJQUFoQjtBQUFzQixNQUFFLEVBQUVELEVBQTFCO0FBQUEsMkJBQ0M7QUFBRyxTQUFHLEVBQUVEO0FBQVIsT0FBaUJHLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFLQSxDQVJvQixDQUFyQjtNQUFNUCxZO0FBVU5BLFlBQVksQ0FBQ1EsU0FBYixHQUF5QjtBQUN4QkgsSUFBRSxFQUFFSSxpREFBUyxDQUFDQyxTQUFWLENBQW9CLENBQUNELGlEQUFT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dXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvYW5jaG9yLWhhcy1jb250ZW50ICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE11aUxpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcblxuY29uc3QgTmV4dENvbXBvc2VkID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBOZXh0Q29tcG9zZWQocHJvcHMsIHJlZikge1xuXHRjb25zdCB7IGFzLCBocmVmLCAuLi5vdGhlciB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIChcblx0XHQ8TmV4dExpbmsgaHJlZj17aHJlZn0gYXM9e2FzfT5cblx0XHRcdDxhIHJlZj17cmVmfSB7Li4ub3RoZXJ9IC8+XG5cdFx0PC9OZXh0TGluaz5cblx0KTtcbn0pO1xuXG5OZXh0Q29tcG9zZWQucHJvcFR5cGVzID0ge1xuXHRhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuXHRocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cdHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbi8vIEEgc3R5bGVkIHZlcnNpb24gb2YgdGhlIE5leHQuanMgTGluayBjb21wb25lbnQ6XG4vLyBodHRwczovL25leHRqcy5vcmcvZG9jcy8jd2l0aC1saW5rXG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG5cdGNvbnN0IHtcblx0XHRocmVmLFxuXHRcdGFjdGl2ZUNsYXNzTmFtZSA9IFwiYWN0aXZlXCIsXG5cdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWVQcm9wcyxcblx0XHRpbm5lclJlZixcblx0XHRuYWtlZCxcblx0XHQuLi5vdGhlclxuXHR9ID0gcHJvcHM7XG5cblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cdGNvbnN0IHBhdGhuYW1lID0gdHlwZW9mIGhyZWYgPT09IFwic3RyaW5nXCIgPyBocmVmIDogaHJlZi5wYXRobmFtZTtcblx0Y29uc3QgY2xhc3NOYW1lID0gY2xzeChjbGFzc05hbWVQcm9wcywge1xuXHRcdFthY3RpdmVDbGFzc05hbWVdOiByb3V0ZXIucGF0aG5hbWUgPT09IHBhdGhuYW1lICYmIGFjdGl2ZUNsYXNzTmFtZSxcblx0fSk7XG5cblx0aWYgKG5ha2VkKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxOZXh0Q29tcG9zZWRcblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XG5cdFx0XHRcdHJlZj17aW5uZXJSZWZ9XG5cdFx0XHRcdGhyZWY9e2hyZWZ9XG5cdFx0XHRcdHsuLi5vdGhlcn1cblx0XHRcdC8+XG5cdFx0KTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PE11aUxpbmtcblx0XHRcdGNvbXBvbmVudD17TmV4dENvbXBvc2VkfVxuXHRcdFx0Y2xhc3NOYW1lPXtjbGFzc05hbWV9XG5cdFx0XHRyZWY9e2lubmVyUmVmfVxuXHRcdFx0aHJlZj17aHJlZn1cblx0XHRcdHsuLi5vdGhlcn1cblx0XHQvPlxuXHQpO1xufVxuXG5MaW5rLnByb3BUeXBlcyA9IHtcblx0YWN0aXZlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuXHRjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGhyZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcblx0aW5uZXJSZWY6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cdG5ha2VkOiBQcm9wVHlwZXMuYm9vbCxcblx0b25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cdHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IChcblx0PExpbmsgey4uLnByb3BzfSBpbm5lclJlZj17cmVmfSAvPlxuKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9