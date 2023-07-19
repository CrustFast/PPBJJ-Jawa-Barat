webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/key-feature.js":
/*!*************************************!*\
  !*** ./src/sections/key-feature.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KeyFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/feature-card-column.js */ "./src/components/feature-card-column.js");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/key-feature/performance.svg */ "./src/assets/key-feature/performance.svg");
/* harmony import */ var assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/key-feature/partnership.svg */ "./src/assets/key-feature/partnership.svg");
/* harmony import */ var assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/key-feature/subscription.svg */ "./src/assets/key-feature/subscription.svg");
/* harmony import */ var assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/key-feature/support.svg */ "./src/assets/key-feature/support.svg");
/* harmony import */ var assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\Magang (SEAQIS)\\GT PBJJ JABAR\\src\\sections\\key-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








var data = [{
  id: 1,
  imgSrc: assets_key_feature_performance_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  altText: 'Fast Performance'
}, {
  id: 2,
  imgSrc: assets_key_feature_partnership_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  altText: 'Partnership deal'
}, {
  id: 3,
  imgSrc: assets_key_feature_subscription_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Pro Subscription'
}, {
  id: 4,
  imgSrc: assets_key_feature_support_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Customer Support'
}];
function KeyFeature() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.keyFeature'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_feature_card_column_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      src: item.imgSrc // alt={item.altText}
      // title={item.title}
      // text={item.text}
      ,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    });
  }))));
}
_c = KeyFeature;
var styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(4,1fr)']
  }
};

var _c;

$RefreshReg$(_c, "KeyFeature");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsImltZ1NyYyIsIlBlcmZvcm1hbmNlIiwiYWx0VGV4dCIsIlBhcnRuZXJzaGlwIiwiU3Vic2NyaXB0aW9uIiwiU3VwcG9ydCIsIktleUZlYXR1cmUiLCJ2YXJpYW50Iiwic3R5bGVzIiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJ3aWR0aCIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFQyx5RUFGVjtBQUdFQyxTQUFPLEVBQUU7QUFIWCxDQURXLEVBTVg7QUFDRUgsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFRyx5RUFGVjtBQUdFRCxTQUFPLEVBQUU7QUFIWCxDQU5XLEVBV1g7QUFDRUgsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFSSwwRUFGVjtBQUdFRixTQUFPLEVBQUU7QUFIWCxDQVhXLEVBZ0JYO0FBQ0VILElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRUsscUVBRlY7QUFHRUgsU0FBTyxFQUFFO0FBSFgsQ0FoQlcsQ0FBYjtBQXVCZSxTQUFTSSxVQUFULEdBQXNCO0FBQUE7O0FBQ25DLFNBQ0U7QUFBUyxNQUFFLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1FLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFQyxNQUFNLENBQUNDLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsSUFBSSxDQUFDWSxHQUFMLENBQVMsVUFBQ0MsSUFBRDtBQUFBLFdBQ1IscURBQUMseUVBQUQ7QUFDRSxTQUFHLEVBQUVBLElBQUksQ0FBQ1osRUFEWjtBQUVFLFNBQUcsRUFBRVksSUFBSSxDQUFDWCxNQUZaLENBR0U7QUFDQTtBQUNBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURRO0FBQUEsR0FBVCxDQURILENBTkYsQ0FERixDQURGO0FBc0JEO0tBdkJ1Qk0sVTtBQXlCeEIsSUFBTUUsTUFBTSxHQUFHO0FBQ2JDLE1BQUksRUFBRTtBQUNKRyxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixNQUFoQixDQURIO0FBRUpDLE1BQUUsRUFBRSxNQUZBO0FBR0pDLFdBQU8sRUFBRSxDQUNQLFFBRE8sRUFFUCxJQUZPLEVBR1AsV0FITyxFQUlQLFdBSk8sRUFLUCxNQUxPLEVBTVAsV0FOTyxFQU9QLFdBUE8sQ0FITDtBQVlKQyx1QkFBbUIsRUFBRSxDQUNuQixlQURtQixFQUVuQixJQUZtQixFQUduQixlQUhtQixFQUluQixJQUptQixFQUtuQixlQUxtQjtBQVpqQjtBQURPLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjI2MTI2MzhjNDAzNWQzMDE2NTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9uLWhlYWRlcic7XG5pbXBvcnQgRmVhdHVyZUNhcmRDb2x1bW4gZnJvbSAnY29tcG9uZW50cy9mZWF0dXJlLWNhcmQtY29sdW1uLmpzJztcbmltcG9ydCBQZXJmb3JtYW5jZSBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcGVyZm9ybWFuY2Uuc3ZnJztcbmltcG9ydCBQYXJ0bmVyc2hpcCBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvcGFydG5lcnNoaXAuc3ZnJztcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3N1YnNjcmlwdGlvbi5zdmcnO1xuaW1wb3J0IFN1cHBvcnQgZnJvbSAnYXNzZXRzL2tleS1mZWF0dXJlL3N1cHBvcnQuc3ZnJztcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIGltZ1NyYzogUGVyZm9ybWFuY2UsXG4gICAgYWx0VGV4dDogJ0Zhc3QgUGVyZm9ybWFuY2UnLFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgaW1nU3JjOiBQYXJ0bmVyc2hpcCxcbiAgICBhbHRUZXh0OiAnUGFydG5lcnNoaXAgZGVhbCcsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBpbWdTcmM6IFN1YnNjcmlwdGlvbixcbiAgICBhbHRUZXh0OiAnUHJvIFN1YnNjcmlwdGlvbicsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBpbWdTcmM6IFN1cHBvcnQsXG4gICAgYWx0VGV4dDogJ0N1c3RvbWVyIFN1cHBvcnQnLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2V5RmVhdHVyZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5rZXlGZWF0dXJlJyB9fT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIHsvKiA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHNsb2dhbj1cIldoYXRzIHRoZSBmdW5jdGlvblwiXG4gICAgICAgICAgdGl0bGU9XCJNZWV0IHRoZSBmZWF0dXJlIG9mIHByb2R1Y3RcIlxuICAgICAgICAvPiAqL31cblxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEZlYXR1cmVDYXJkQ29sdW1uXG4gICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ1NyY31cbiAgICAgICAgICAgICAgLy8gYWx0PXtpdGVtLmFsdFRleHR9XG4gICAgICAgICAgICAgIC8vIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAvLyB0ZXh0PXtpdGVtLnRleHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ3JpZDoge1xuICAgIHdpZHRoOiBbJzEwMCUnLCAnODAlJywgJzEwMCUnXSxcbiAgICBteDogJ2F1dG8nLFxuICAgIGdyaWRHYXA6IFtcbiAgICAgICczNXB4IDAnLFxuICAgICAgbnVsbCxcbiAgICAgICc0MHB4IDQwcHgnLFxuICAgICAgJzUwcHggNjBweCcsXG4gICAgICAnMzBweCcsXG4gICAgICAnNTBweCA0MHB4JyxcbiAgICAgICc1NXB4IDkwcHgnLFxuICAgIF0sXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xuICAgICAgJ3JlcGVhdCgxLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoMiwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDQsMWZyKScsXG4gICAgXSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9