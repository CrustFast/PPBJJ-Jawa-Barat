webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/core-feature.js":
/*!**************************************!*\
  !*** ./src/sections/core-feature.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoreFeature; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var assets_ils_2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/ils_2.png */ "./src/assets/ils_2.png");
/* harmony import */ var assets_ils_2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_ils_2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/shape-pattern2.png */ "./src/assets/shape-pattern2.png");
/* harmony import */ var assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\Magang (SEAQIS)\\GT PBJJ JABAR\\src\\sections\\core-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





var data = {
  subTitle: 'Tentang Kami',
  title: 'Belajar Lebih Dari Sekedar Batas',
  description: 'Distance Learning Center adalah lembaga pendidikan yang menawarkan program pendidikan melalui digital media. Pusat ini menggunakan teknologi modern seperti platform online, konferensi video, dan media digital lainnya Untuk memberikan pengalaman belajar yang lebih fleksibel yang dapat diakses dari mana saja. Di era ekonomi global yang berubah dengan cepat, pembelajaran seumur hidup semakin penting. Pembelajaran jarak jauh Pusat dapat membantu individu untuk mengembangkan keterampilan dan pengetahuan baru sepanjang karir mereka.',
  btnName: 'Get Started',
  btnURL: '#'
};
function CoreFeature() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    sx: {
      variant: 'section.coreFeature'
    },
    id: "about us",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    description: data.description,
    btnName: data.btnName,
    btnURL: data.btnURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_ils_2_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_shape_pattern2_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  })))));
}
_c = CoreFeature;
var styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7]
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6]
    }
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block']
  }
};

var _c;

$RefreshReg$(_c, "CoreFeature");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2NvcmUtZmVhdHVyZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYnRuTmFtZSIsImJ0blVSTCIsIkNvcmVGZWF0dXJlIiwidmFyaWFudCIsInN0eWxlcyIsImNvbnRhaW5lckJveCIsImNvbnRlbnRCb3giLCJ0aHVtYm5haWwiLCJGZWF0dXJlVGh1bWIiLCJzaGFwZUJveCIsInNoYXBlUGF0dGVybiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsInBiIiwiZmxleFNocmluayIsInB4IiwidGV4dEFsaWduIiwid2lkdGgiLCJteCIsInByIiwicG9zaXRpb24iLCJtciIsIm1sIiwiekluZGV4IiwiaGVpZ2h0IiwiYm90dG9tIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUc7QUFDWEMsVUFBUSxFQUFFLGNBREM7QUFFWEMsT0FBSyxFQUFFLGtDQUZJO0FBR1hDLGFBQVcsRUFDVCxzaEJBSlM7QUFLWEMsU0FBTyxFQUFFLGFBTEU7QUFNWEMsUUFBTSxFQUFFO0FBTkcsQ0FBYjtBQVNlLFNBQVNDLFdBQVQsR0FBdUI7QUFDcEMsU0FDRTtBQUFTLE1BQUUsRUFBRTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFiO0FBQWlELE1BQUUsRUFBQyxVQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsa0RBQUQ7QUFBVyxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFRCxNQUFNLENBQUNFLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FB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QVMsY0FBVCxFQUF5QixNQUF6QixFQUFpQyxJQUFqQyxFQUF1QyxjQUF2QztBQUxEO0FBOUJHLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDJkMzllNmFmYjE1ZDhhY2U1Y2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEJveCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBUZXh0RmVhdHVyZSBmcm9tICdjb21wb25lbnRzL3RleHQtZmVhdHVyZSc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XG5cbmltcG9ydCBGZWF0dXJlVGh1bWIgZnJvbSAnYXNzZXRzL2lsc18yLnBuZyc7XG5pbXBvcnQgc2hhcGVQYXR0ZXJuIGZyb20gJ2Fzc2V0cy9zaGFwZS1wYXR0ZXJuMi5wbmcnO1xuXG5jb25zdCBkYXRhID0ge1xuICBzdWJUaXRsZTogJ1RlbnRhbmcgS2FtaScsXG4gIHRpdGxlOiAnQmVsYWphciBMZWJpaCBEYXJpIFNla2VkYXIgQmF0YXMnLFxuICBkZXNjcmlwdGlvbjpcbiAgICAnRGlzdGFuY2UgTGVhcm5pbmcgQ2VudGVyIGFkYWxhaCBsZW1iYWdhIHBlbmRpZGlrYW4geWFuZyBtZW5hd2Fya2FuIHByb2dyYW0gcGVuZGlkaWthbiBtZWxhbHVpIGRpZ2l0YWwgbWVkaWEuIFB1c2F0IGluaSBtZW5nZ3VuYWthbiB0ZWtub2xvZ2kgbW9kZXJuIHNlcGVydGkgcGxhdGZvcm0gb25saW5lLCBrb25mZXJlbnNpIHZpZGVvLCBkYW4gbWVkaWEgZGlnaXRhbCBsYWlubnlhIFVudHVrIG1lbWJlcmlrYW4gcGVuZ2FsYW1hbiBiZWxhamFyIHlhbmcgbGViaWggZmxla3NpYmVsIHlhbmcgZGFwYXQgZGlha3NlcyBkYXJpIG1hbmEgc2FqYS4gRGkgZXJhIGVrb25vbWkgZ2xvYmFsIHlhbmcgYmVydWJhaCBkZW5nYW4gY2VwYXQsIHBlbWJlbGFqYXJhbiBzZXVtdXIgaGlkdXAgc2VtYWtpbiBwZW50aW5nLiBQZW1iZWxhamFyYW4gamFyYWsgamF1aCBQdXNhdCBkYXBhdCBtZW1iYW50dSBpbmRpdmlkdSB1bnR1ayBtZW5nZW1iYW5na2FuIGtldGVyYW1waWxhbiBkYW4gcGVuZ2V0YWh1YW4gYmFydSBzZXBhbmphbmcga2FyaXIgbWVyZWthLicsXG4gIGJ0bk5hbWU6ICdHZXQgU3RhcnRlZCcsXG4gIGJ0blVSTDogJyMnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29yZUZlYXR1cmUoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gc3g9e3sgdmFyaWFudDogJ3NlY3Rpb24uY29yZUZlYXR1cmUnIH19IGlkPVwiYWJvdXQgdXNcIj5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XG4gICAgICAgICAgPFRleHRGZWF0dXJlXG4gICAgICAgICAgICBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX1cbiAgICAgICAgICAgIHRpdGxlPXtkYXRhLnRpdGxlfVxuICAgICAgICAgICAgZGVzY3JpcHRpb249e2RhdGEuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBidG5OYW1lPXtkYXRhLmJ0bk5hbWV9XG4gICAgICAgICAgICBidG5VUkw9e2RhdGEuYnRuVVJMfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtGZWF0dXJlVGh1bWJ9IGFsdD1cIlRodW1ibmFpbFwiIC8+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNoYXBlQm94fT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NoYXBlUGF0dGVybn0gYWx0PVwiU2hhcGVcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb250YWluZXJCb3g6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICBmbGV4V3JhcDogWyd3cmFwJywgbnVsbCwgbnVsbCwgJ25vd3JhcCddLFxuICAgIHBiOiBbMCwgNywgMCwgbnVsbCwgN10sXG4gIH0sXG4gIGNvbnRlbnRCb3g6IHtcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIHB4OiBbMCwgbnVsbCwgJzMwcHgnLCAwXSxcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsIG51bGwsIDM0MCwgNDAwLCA0MzAsIG51bGwsIDQ4NV0sXG4gICAgcGI6IFsnNTBweCcsICc2MHB4JywgbnVsbCwgMF0sXG4gICAgbXg6IFsnYXV0bycsIG51bGwsIG51bGwsIDBdLFxuICAgICcuZGVzY3JpcHRpb24nOiB7XG4gICAgICBwcjogWzAsIG51bGwsIDYsIDcsIDZdLFxuICAgIH0sXG4gIH0sXG4gIHRodW1ibmFpbDoge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgbXI6ICdhdXRvJyxcbiAgICBtbDogWydhdXRvJywgbnVsbCwgbnVsbCwgbnVsbCwgN10sXG4gICAgJz4gaW1nJzoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB6SW5kZXg6IDEsXG4gICAgICBoZWlnaHQ6IFszMTAsICdhdXRvJ10sXG4gICAgfSxcbiAgfSxcbiAgc2hhcGVCb3g6IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICBib3R0b206IC02NSxcbiAgICByaWdodDogLTE2NSxcbiAgICB6SW5kZXg6IC0xLFxuICAgIGRpc3BsYXk6IFsnbm9uZScsICdpbmxpbmUtYmxvY2snLCAnbm9uZScsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9