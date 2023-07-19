webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/blog-section.js":
/*!**************************************!*\
  !*** ./src/sections/blog-section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlogSection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_post_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/post-card.js */ "./src/components/post-card.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_blog_d3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/blog/d3.png */ "./src/assets/blog/d3.png");
/* harmony import */ var assets_blog_d3_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_blog_d3_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_blog_gt_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/blog/gt.png */ "./src/assets/blog/gt.png");
/* harmony import */ var assets_blog_gt_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_blog_gt_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_blog_3_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/blog/3.jpg */ "./src/assets/blog/3.jpg");
/* harmony import */ var assets_blog_3_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_blog_3_jpg__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\Magang (SEAQIS)\\GT PBJJ JABAR\\src\\sections\\blog-section.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */









var data = [{
  id: 1,
  imgSrc: assets_blog_d3_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  altText: 'Marketing',
  postLink: '#',
  title: 'D3 Distance Learning',
  authorName: 'Seameo',
  date: 'Oct 20, 2020'
}, {
  id: 2,
  imgSrc: assets_blog_gt_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  altText: 'Creative',
  postLink: '#',
  title: 'Golden Ticket Program',
  authorName: 'Seameo',
  date: 'Oct 20, 2020'
}];
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1310
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1310,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};
function BlogSection() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.news'
    },
    id: "program",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "Program",
    title: "Program Kami",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.carouselWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    containerClass: "carousel-container",
    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 32
      }
    }),
    dotListClass: "test",
    draggable: true,
    focusOnSelect: false,
    infinite: true,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_post_card_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: item.id,
      src: item.imgSrc,
      alt: item.altText,
      postLink: item.postLink,
      title: item.title,
      authorName: item.authorName,
      date: item.date,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    });
  })))));
}
_c = BlogSection;
var styles = {
  carouselWrapper: {
    '.carousel-container': {
      mx: -3
    }
  }
};

var _c;

$RefreshReg$(_c, "BlogSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jsb2ctc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJpbWdTcmMiLCJQb3N0VGh1bWIxIiwiYWx0VGV4dCIsInBvc3RMaW5rIiwidGl0bGUiLCJhdXRob3JOYW1lIiwiZGF0ZSIsIlBvc3RUaHVtYjIiLCJyZXNwb25zaXZlIiwiZGVza3RvcCIsImJyZWFrcG9pbnQiLCJtYXgiLCJtaW4iLCJpdGVtcyIsInNsaWRlc1RvU2xpZGUiLCJsYXB0b3AiLCJ0YWJsZXQiLCJtb2JpbGUiLCJCbG9nU2VjdGlvbiIsInZhcmlhbnQiLCJzdHlsZXMiLCJjYXJvdXNlbFdyYXBwZXIiLCJtYXAiLCJpdGVtIiwibXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsSUFBRSxFQUFFLENBRE47QUFFRUMsUUFBTSxFQUFFQyx5REFGVjtBQUdFQyxTQUFPLEVBQUUsV0FIWDtBQUlFQyxVQUFRLEVBQUUsR0FKWjtBQUtFQyxPQUFLLEVBQUUsc0JBTFQ7QUFNRUMsWUFBVSxFQUFFLFFBTmQ7QUFPRUMsTUFBSSxFQUFFO0FBUFIsQ0FEVyxFQVVYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLFFBQU0sRUFBRU8seURBRlY7QUFHRUwsU0FBTyxFQUFFLFVBSFg7QUFJRUMsVUFBUSxFQUFFLEdBSlo7QUFLRUMsT0FBSyxFQUFFLHVCQUxUO0FBTUVDLFlBQVUsRUFBRSxRQU5kO0FBT0VDLE1BQUksRUFBRTtBQVBSLENBVlcsQ0FBYjtBQXFCQSxJQUFNRSxVQUFVLEdBQUc7QUFDakJDLFNBQU8sRUFBRTtBQUNQQyxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBREw7QUFFUEMsU0FBSyxF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QWUsRUFBRTtBQUNmLDJCQUF1QjtBQUNyQkcsUUFBRSxFQUFFLENBQUM7QUFEZ0I7QUFEUjtBQURKLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWI4ZmEzY2NjYTYwYjUxMTNlMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyJztcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICdjb21wb25lbnRzL3Bvc3QtY2FyZC5qcyc7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9idXR0b24tZ3JvdXAnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW11bHRpLWNhcm91c2VsJztcbmltcG9ydCBQb3N0VGh1bWIxIGZyb20gJ2Fzc2V0cy9ibG9nL2QzLnBuZyc7XG5pbXBvcnQgUG9zdFRodW1iMiBmcm9tICdhc3NldHMvYmxvZy9ndC5wbmcnO1xuaW1wb3J0IFBvc3RUaHVtYjMgZnJvbSAnYXNzZXRzL2Jsb2cvMy5qcGcnO1xuXG5jb25zdCBkYXRhID0gW1xuICB7XG4gICAgaWQ6IDEsXG4gICAgaW1nU3JjOiBQb3N0VGh1bWIxLFxuICAgIGFsdFRleHQ6ICdNYXJrZXRpbmcnLFxuICAgIHBvc3RMaW5rOiAnIycsXG4gICAgdGl0bGU6ICdEMyBEaXN0YW5jZSBMZWFybmluZycsXG4gICAgYXV0aG9yTmFtZTogJ1NlYW1lbycsXG4gICAgZGF0ZTogJ09jdCAyMCwgMjAyMCcsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBpbWdTcmM6IFBvc3RUaHVtYjIsXG4gICAgYWx0VGV4dDogJ0NyZWF0aXZlJyxcbiAgICBwb3N0TGluazogJyMnLFxuICAgIHRpdGxlOiAnR29sZGVuIFRpY2tldCBQcm9ncmFtJyxcbiAgICBhdXRob3JOYW1lOiAnU2VhbWVvJyxcbiAgICBkYXRlOiAnT2N0IDIwLCAyMDIwJyxcbiAgfSxcbl07XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMzEwIH0sXG4gICAgaXRlbXM6IDMsXG4gICAgc2xpZGVzVG9TbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbiAgbGFwdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEzMTAsIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiAzLFxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxuICAgIGl0ZW1zOiAyLFxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nU2VjdGlvbigpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5uZXdzJyB9fSBpZD1cInByb2dyYW1cIj5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyXG4gICAgICAgICAgc2xvZ2FuPVwiUHJvZ3JhbVwiXG4gICAgICAgICAgdGl0bGU9XCJQcm9ncmFtIEthbWlcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJvdXNlbFdyYXBwZXJ9PlxuICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgYWRkaXRpb25hbFRyYW5zZnJvbT17MH1cbiAgICAgICAgICAgIGFycm93cz17ZmFsc2V9XG4gICAgICAgICAgICBhdXRvUGxheVNwZWVkPXszMDAwfVxuICAgICAgICAgICAgY2VudGVyTW9kZT17ZmFsc2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxuICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIlxuICAgICAgICAgICAgY3VzdG9tQnV0dG9uR3JvdXA9ezxCdXR0b25Hcm91cCAvPn1cbiAgICAgICAgICAgIGRvdExpc3RDbGFzcz1cInRlc3RcIlxuICAgICAgICAgICAgZHJhZ2dhYmxlPXt0cnVlfVxuICAgICAgICAgICAgZm9jdXNPblNlbGVjdD17ZmFsc2V9XG4gICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cbiAgICAgICAgICAgIGl0ZW1DbGFzcz1cIlwiXG4gICAgICAgICAgICBrZXlCb2FyZENvbnRyb2xcbiAgICAgICAgICAgIG1pbmltdW1Ub3VjaERyYWc9ezgwfVxuICAgICAgICAgICAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlXG4gICAgICAgICAgICByZW5kZXJEb3RzT3V0c2lkZT17ZmFsc2V9XG4gICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgICAgc2hvd0RvdHM9e2ZhbHNlfVxuICAgICAgICAgICAgc2xpZGVyQ2xhc3M9XCJcIlxuICAgICAgICAgICAgc2xpZGVzVG9TbGlkZT17MX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdTcmN9XG4gICAgICAgICAgICAgICAgYWx0PXtpdGVtLmFsdFRleHR9XG4gICAgICAgICAgICAgICAgcG9zdExpbms9e2l0ZW0ucG9zdExpbmt9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgYXV0aG9yTmFtZT17aXRlbS5hdXRob3JOYW1lfVxuICAgICAgICAgICAgICAgIGRhdGU9e2l0ZW0uZGF0ZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhcm91c2VsV3JhcHBlcjoge1xuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xuICAgICAgbXg6IC0zLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==