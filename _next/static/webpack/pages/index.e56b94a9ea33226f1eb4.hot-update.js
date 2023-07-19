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








var data = [// {
  //   id: 1,
  //   imgSrc: Performance,
  //   altText: 'Fast Performance',
  // },
  // {
  //   id: 2,
  //   imgSrc: Partnership,
  //   altText: 'Partnership deal',
  // },
  // {
  //   id: 3,
  //   imgSrc: Subscription,
  //   altText: 'Pro Subscription',
  // },
  // {
  //   id: 4,
  //   imgSrc: Support,
  //   altText: 'Customer Support',
  // },
];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2tleS1mZWF0dXJlLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJLZXlGZWF0dXJlIiwidmFyaWFudCIsInN0eWxlcyIsImdyaWQiLCJtYXAiLCJpdGVtIiwiaWQiLCJpbWdTcmMiLCJ3aWR0aCIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCVyxDQUFiO0FBdUJlLFNBQVNDLFVBQVQsR0FBc0I7QUFBQTs7QUFDbkMsU0FDRTtBQUFTLE1BQUUsRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixJQUFJLENBQUNLLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsV0FDUixxREFBQyx5RUFBRDtBQUNFLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxFQURaO0FBRUUsU0FBRyxFQUFFRCxJQUFJLENBQUNFLE1BRlosQ0FHRTtBQUNBO0FBQ0E7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFE7QUFBQSxHQUFULENBREgsQ0FORixDQURGLENBREY7QUFzQkQ7S0F2QnVCUCxVO0FBeUJ4QixJQUFNRSxNQUFNLEdBQUc7QUFDYkMsTUFBSSxFQUFFO0FBQ0pLLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLE1BQWhCLENBREg7QUFFSkMsTUFBRSxFQUFFLE1BRkE7QUFHSkMsV0FBTyxFQUFFLENBQ1AsUUFETyxFQUVQLElBRk8sRUFHUCxXQUhPLEVBSVAsV0FKTyxFQUtQLE1BTE8sRUFNUCxXQU5PLEVBT1AsV0FQTyxDQUhMO0FBWUpDLHVCQUFtQixFQUFFLENBQ25CLGVBRG1CLEVBRW5CLElBRm1CLEVBR25CLGVBSG1CLEVBSW5CLElBSm1CLEVBS25CLGVBTG1CO0FBWmpCO0FBRE8sQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNTZiOTRhOWVhMzMyMjZmMWViNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbmltcG9ydCBGZWF0dXJlQ2FyZENvbHVtbiBmcm9tICdjb21wb25lbnRzL2ZlYXR1cmUtY2FyZC1jb2x1bW4uanMnO1xuaW1wb3J0IFBlcmZvcm1hbmNlIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9wZXJmb3JtYW5jZS5zdmcnO1xuaW1wb3J0IFBhcnRuZXJzaGlwIGZyb20gJ2Fzc2V0cy9rZXktZmVhdHVyZS9wYXJ0bmVyc2hpcC5zdmcnO1xuaW1wb3J0IFN1YnNjcmlwdGlvbiBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvc3Vic2NyaXB0aW9uLnN2Zyc7XG5pbXBvcnQgU3VwcG9ydCBmcm9tICdhc3NldHMva2V5LWZlYXR1cmUvc3VwcG9ydC5zdmcnO1xuXG5jb25zdCBkYXRhID0gW1xuICAvLyB7XG4gIC8vICAgaWQ6IDEsXG4gIC8vICAgaW1nU3JjOiBQZXJmb3JtYW5jZSxcbiAgLy8gICBhbHRUZXh0OiAnRmFzdCBQZXJmb3JtYW5jZScsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBpZDogMixcbiAgLy8gICBpbWdTcmM6IFBhcnRuZXJzaGlwLFxuICAvLyAgIGFsdFRleHQ6ICdQYXJ0bmVyc2hpcCBkZWFsJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIGlkOiAzLFxuICAvLyAgIGltZ1NyYzogU3Vic2NyaXB0aW9uLFxuICAvLyAgIGFsdFRleHQ6ICdQcm8gU3Vic2NyaXB0aW9uJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIGlkOiA0LFxuICAvLyAgIGltZ1NyYzogU3VwcG9ydCxcbiAgLy8gICBhbHRUZXh0OiAnQ3VzdG9tZXIgU3VwcG9ydCcsXG4gIC8vIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBLZXlGZWF0dXJlKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLmtleUZlYXR1cmUnIH19PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgey8qIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgc2xvZ2FuPVwiV2hhdHMgdGhlIGZ1bmN0aW9uXCJcbiAgICAgICAgICB0aXRsZT1cIk1lZXQgdGhlIGZlYXR1cmUgb2YgcHJvZHVjdFwiXG4gICAgICAgIC8+ICovfVxuXG4gICAgICAgIDxHcmlkIHN4PXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8RmVhdHVyZUNhcmRDb2x1bW5cbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICBzcmM9e2l0ZW0uaW1nU3JjfVxuICAgICAgICAgICAgICAvLyBhbHQ9e2l0ZW0uYWx0VGV4dH1cbiAgICAgICAgICAgICAgLy8gdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIC8vIHRleHQ9e2l0ZW0udGV4dH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBncmlkOiB7XG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxuICAgIG14OiAnYXV0bycsXG4gICAgZ3JpZEdhcDogW1xuICAgICAgJzM1cHggMCcsXG4gICAgICBudWxsLFxuICAgICAgJzQwcHggNDBweCcsXG4gICAgICAnNTBweCA2MHB4JyxcbiAgICAgICczMHB4JyxcbiAgICAgICc1MHB4IDQwcHgnLFxuICAgICAgJzU1cHggOTBweCcsXG4gICAgXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAgICAgbnVsbCxcbiAgICAgICdyZXBlYXQoNCwxZnIpJyxcbiAgICBdLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=