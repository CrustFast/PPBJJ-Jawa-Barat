webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/service-section.js":
/*!*****************************************!*\
  !*** ./src/sections/service-section.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceSection; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var components_text_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/text-feature */ "./src/components/text-feature.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/service-thumb.png */ "./src/assets/service-thumb.png");
/* harmony import */ var assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/shape-pattern1.png */ "./src/assets/shape-pattern1.png");
/* harmony import */ var assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/services/smart.svg */ "./src/assets/services/smart.svg");
/* harmony import */ var assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/services/secure.svg */ "./src/assets/services/secure.svg");
/* harmony import */ var assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10__);


var _jsxFileName = "D:\\Magang (SEAQIS)\\GT PBJJ JABAR\\src\\sections\\service-section.js",
    _s = $RefreshSig$(),
    _templateObject;

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */










var data = {
  subTitle: 'Tujuan',
  title: 'Tujuan Kami',
  features: [{
    id: 1,
    imgSrc: assets_services_smart_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
    altText: 'Memfasilitasi pembelajaran sepanjang hayat',
    title: 'Memfasilitasi pembelajaran sepanjang hayat',
    text: 'Pusat pembelajaran jarak jauh dapat membantu siswa, guru, dan masyarakat untuk terus belajar dan berkembang sepanjang hidup mereka, bahkan setelah menyelesaikan program studi formal mereka.'
  }, {
    id: 2,
    imgSrc: assets_services_secure_svg__WEBPACK_IMPORTED_MODULE_10___default.a,
    altText: 'Meningkatkan kualitas pendidikan',
    title: 'Meningkatkan kualitas pendidikan',
    text: 'Dengan memanfaatkan teknologi modern dan inovasi pendidikan, pusat pembelajaran jarak jauh dapat memberikan pembelajaran pengalaman yang lebih efektif, efisien, dan dipersonalisasi.'
  }]
};
function ServiceSection() {
  _s();

  var _this = this;

  // modal popup video handler
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      videoOpen = _useState[0],
      setVideoOpen = _useState[1];

  var handleClick = function handleClick(e) {
    e.preventDefault();
    setVideoOpen(true);
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    sx: {
      variant: 'section.services'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    sx: styles.containerBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.thumbnail,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_service_thumb_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Thumbnail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    sx: styles.videoBtn,
    onClick: handleClick,
    "aria-label": "Play Button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_6__["IoIosPlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.shapeBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
    src: assets_shape_pattern1_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "Shape",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styles.contentBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_text_feature__WEBPACK_IMPORTED_MODULE_4__["default"], {
    subTitle: data.subTitle,
    title: data.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    sx: styles.grid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, data.features.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.card,
      key: item.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Image"], {
      src: item.imgSrc,
      alt: item.altText,
      sx: styles.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.wrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
      sx: styles.wrapper.title,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 19
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Text"], {
      sx: styles.wrapper.subTitle,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }, item.text)));
  })))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_modal_video__WEBPACK_IMPORTED_MODULE_5___default.a, {
    channel: "youtube",
    isOpen: videoOpen,
    videoId: "ZNA9rmDsYVE",
    onClose: function onClose() {
      return setVideoOpen(false);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }));
}

_s(ServiceSection, "fjrTXSMqqo5cVpzR03nEXJYpFAo=");

_c = ServiceSection;
var playPluse = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__["keyframes"])(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateX(-50%) translateY(-50%) translateZ(0) scale(1);\n    opacity: 1;\n  }\n\n  to {\n\ttransform: translateX(-50%) translateY(-50%) translateZ(0) scale(1.5);\n    opacity: 0;\n  }\n"])));
var styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative'
  },
  containerBox: {
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-start', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    pb: [0, null, null, null, null, 7]
  },
  thumbnail: {
    mr: ['auto', null, null, 6, 60, 85],
    order: [2, null, null, 0],
    ml: ['auto', null, null, 0],
    display: 'inline-flex',
    position: 'relative',
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto']
    }
  },
  shapeBox: {
    position: 'absolute',
    bottom: -68,
    left: -160,
    zIndex: -1,
    display: ['none', null, null, null, null, 'inline-block']
  },
  videoBtn: {
    zIndex: 2,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: ['60px', null, '80px', null, '100px'],
    height: ['60px', null, '80px', null, '100px'],
    p: '0px !important',
    backgroundColor: 'transparent',
    '&::before': {
      position: 'absolute',
      content: '""',
      left: '50%',
      top: '50%',
      transform: 'translateX(-50%) translateY(-50%)',
      display: 'block',
      width: ['60px', null, '80px', null, '100px'],
      height: ['60px', null, '80px', null, '100px'],
      backgroundColor: 'primary',
      borderRadius: '50%',
      animation: "".concat(playPluse, " 1.5s ease-out infinite"),
      opacity: 0.5
    },
    '> span': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 'inherit',
      height: 'inherit',
      textAlign: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      transition: 'all 0.5s',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: 2
    },
    svg: {
      fontSize: [40, null, 48, null, 62]
    }
  },
  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['center', null, null, 'left']
  },
  grid: {
    pr: [2, 0, null, null, 6, '70px'],
    pl: [2, 0],
    pt: [2, null, null, null, 3],
    mx: 'auto',
    width: ['100%', 370, 420, '100%'],
    gridGap: ['35px 0', null, null, null, '50px 0'],
    gridTemplateColumns: ['repeat(1,1fr)']
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    transition: 'all 0.3s'
  },
  icon: {
    width: ['45px', null, null, null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, null, null, null, 4]
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3, 2, 3]
    },
    subTitle: {
      fontSize: [1, null, null, '14px', 1],
      fontWeight: 400,
      lineHeight: 1.9
    }
  },
  videoWrapper: {
    maxWidth: '100%',
    position: 'relative',
    width: '900px',
    '&:before': {
      content: '""',
      display: 'block',
      paddingTop: '56.25%'
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }
  }
};

var _c;

$RefreshReg$(_c, "ServiceSection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2Utc2VjdGlvbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3ViVGl0bGUiLCJ0aXRsZSIsImZlYXR1cmVzIiwiaWQiLCJpbWdTcmMiLCJTbWFydCIsImFsdFRleHQiLCJ0ZXh0IiwiU2VjdXJlIiwiU2VydmljZVNlY3Rpb24iLCJ1c2VTdGF0ZSIsInZpZGVvT3BlbiIsInNldFZpZGVvT3BlbiIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFyaWFudCIsInN0eWxlcyIsImNvbnRhaW5lckJveCIsInRodW1ibmFpbCIsIlNlcnZpY2VUaHVtYiIsInZpZGVvQnRuIiwic2hhcGVCb3giLCJzaGFwZVBhdHRlcm4iLCJjb250ZW50Qm94IiwiZ3JpZCIsIm1hcCIsIml0ZW0iLCJjYXJkIiwiaWNvbiIsIndyYXBwZXIiLCJwbGF5UGx1c2UiLCJrZXlmcmFtZXMiLCJjb3JlRmVhdHVyZSIsInB5IiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsInBiIiwibXIiLCJvcmRlciIsIm1sIiwiekluZGV4IiwiaGVpZ2h0IiwiYm90dG9tIiwibGVmdCIsInRvcCIsInRyYW5zZm9ybSIsIndpZHRoIiwicCIsImJhY2tncm91bmRDb2xvciIsImNvbnRlbnQiLCJib3JkZXJSYWRpdXMiLCJhbmltYXRpb24iLCJvcGFjaXR5IiwidGV4dEFsaWduIiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInN2ZyIsImZvbnRTaXplIiwiZmxleFNocmluayIsIm1iIiwicHIiLCJwbCIsInB0IiwibXgiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm10IiwiY29sb3IiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsInZpZGVvV3JhcHBlciIsIm1heFdpZHRoIiwicGFkZGluZ1RvcCIsImlmcmFtZSJdLCJtYXBwaW5ncyI6Ijs7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R0FwR0k7QUF3SGJFLGNBQVksRUFBRTtBQUNaQyxZQUFRLEVBQUUsTUFERTtBQUVaeEMsWUFBUSxFQUFFLFVBRkU7QUFHWmUsU0FBSyxFQUFFLE9BSEs7QUFJWixnQkFBWTtBQUNWRyxhQUFPLEVBQUUsSUFEQztBQUVWakIsYUFBTyxFQUFFLE9BRkM7QUFHVndDLGdCQUFVLEVBQUU7QUFIRixLQUpBO0FBU1pDLFVBQU0sRUFBRTtBQUNOM0IsV0FBSyxFQUFFLE1BREQ7QUFFTkwsWUFBTSxFQUFFLE1BRkY7QUFHTlYsY0FBUSxFQUFFLFVBSEo7QUFJTmEsU0FBRyxFQUFFLENBSkM7QUFLTkQsVUFBSSxFQUFFO0FBTEE7QUFUSTtBQXhIRCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkZmMzN2VjNzI0YzAxNmViNzEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7XG4gIGpzeCxcbiAgQ29udGFpbmVyLFxuICBCb3gsXG4gIEdyaWQsXG4gIFRleHQsXG4gIEhlYWRpbmcsXG4gIEJ1dHRvbixcbiAgSW1hZ2UsXG59IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IFRleHRGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvdGV4dC1mZWF0dXJlJztcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcbmltcG9ydCB7IElvSW9zUGxheSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcblxuaW1wb3J0IFNlcnZpY2VUaHVtYiBmcm9tICdhc3NldHMvc2VydmljZS10aHVtYi5wbmcnO1xuaW1wb3J0IHNoYXBlUGF0dGVybiBmcm9tICdhc3NldHMvc2hhcGUtcGF0dGVybjEucG5nJztcblxuaW1wb3J0IFNtYXJ0IGZyb20gJ2Fzc2V0cy9zZXJ2aWNlcy9zbWFydC5zdmcnO1xuaW1wb3J0IFNlY3VyZSBmcm9tICdhc3NldHMvc2VydmljZXMvc2VjdXJlLnN2Zyc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIHN1YlRpdGxlOiAnVHVqdWFuJyxcbiAgdGl0bGU6ICdUdWp1YW4gS2FtaScsXG4gIGZlYXR1cmVzOiBbXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBpbWdTcmM6IFNtYXJ0LFxuICAgICAgYWx0VGV4dDogJ01lbWZhc2lsaXRhc2kgcGVtYmVsYWphcmFuIHNlcGFuamFuZyBoYXlhdCcsXG4gICAgICB0aXRsZTogJ01lbWZhc2lsaXRhc2kgcGVtYmVsYWphcmFuIHNlcGFuamFuZyBoYXlhdCcsXG4gICAgICB0ZXh0OlxuICAgICAgICAnUHVzYXQgcGVtYmVsYWphcmFuIGphcmFrIGphdWggZGFwYXQgbWVtYmFudHUgc2lzd2EsIGd1cnUsIGRhbiBtYXN5YXJha2F0IHVudHVrIHRlcnVzIGJlbGFqYXIgZGFuIGJlcmtlbWJhbmcgc2VwYW5qYW5nIGhpZHVwIG1lcmVrYSwgYmFoa2FuIHNldGVsYWggbWVueWVsZXNhaWthbiBwcm9ncmFtIHN0dWRpIGZvcm1hbCBtZXJla2EuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgaW1nU3JjOiBTZWN1cmUsXG4gICAgICBhbHRUZXh0OiAnTWVuaW5na2F0a2FuIGt1YWxpdGFzIHBlbmRpZGlrYW4nLFxuICAgICAgdGl0bGU6ICdNZW5pbmdrYXRrYW4ga3VhbGl0YXMgcGVuZGlkaWthbicsXG4gICAgICB0ZXh0OlxuICAgICAgICAnRGVuZ2FuIG1lbWFuZmFhdGthbiB0ZWtub2xvZ2kgbW9kZXJuIGRhbiBpbm92YXNpIHBlbmRpZGlrYW4sIHB1c2F0IHBlbWJlbGFqYXJhbiBqYXJhayBqYXVoIGRhcGF0IG1lbWJlcmlrYW4gcGVtYmVsYWphcmFuIHBlbmdhbGFtYW4geWFuZyBsZWJpaCBlZmVrdGlmLCBlZmlzaWVuLCBkYW4gZGlwZXJzb25hbGlzYXNpLicsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlcnZpY2VTZWN0aW9uKCkge1xuICAvLyBtb2RhbCBwb3B1cCB2aWRlbyBoYW5kbGVyXG4gIGNvbnN0IFt2aWRlb09wZW4sIHNldFZpZGVvT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0VmlkZW9PcGVuKHRydWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLnNlcnZpY2VzJyB9fT5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJCb3h9PlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtTZXJ2aWNlVGh1bWJ9IGFsdD1cIlRodW1ibmFpbFwiIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgc3g9e3N0eWxlcy52aWRlb0J0bn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBsYXkgQnV0dG9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPElvSW9zUGxheSAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLnNoYXBlQm94fT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NoYXBlUGF0dGVybn0gYWx0PVwiU2hhcGVcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxuICAgICAgICAgIDxUZXh0RmVhdHVyZSBzdWJUaXRsZT17ZGF0YS5zdWJUaXRsZX0gdGl0bGU9e2RhdGEudGl0bGV9IC8+XG5cbiAgICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgICAge2RhdGEuZmVhdHVyZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jYXJkfSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uaW1nU3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gc3g9e3N0eWxlcy5pY29ufSAvPlxuXG4gICAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy53cmFwcGVyLnRpdGxlfT57aXRlbS50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLndyYXBwZXIuc3ViVGl0bGV9PntpdGVtLnRleHR9PC9UZXh0PlxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxNb2RhbFZpZGVvXG4gICAgICAgIGNoYW5uZWw9XCJ5b3V0dWJlXCJcbiAgICAgICAgaXNPcGVuPXt2aWRlb09wZW59XG4gICAgICAgIHZpZGVvSWQ9XCJaTkE5cm1Ec1lWRVwiXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFZpZGVvT3BlbihmYWxzZSl9XG4gICAgICAvPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3QgcGxheVBsdXNlID0ga2V5ZnJhbWVzYFxuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVaKDApIHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVooMCkgc2NhbGUoMS41KTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5gO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvcmVGZWF0dXJlOiB7XG4gICAgcHk6IFswLCBudWxsLCBudWxsLCAyLCBudWxsLCA3XSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgfSxcbiAgY29udGFpbmVyQm94OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6IFsnZmxleC1zdGFydCcsIG51bGwsIG51bGwsICdjZW50ZXInXSxcbiAgICBqdXN0aWZ5Q29udGVudDogWydmbGV4LXN0YXJ0JywgbnVsbCwgbnVsbCwgJ3NwYWNlLWJldHdlZW4nXSxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsIG51bGwsIG51bGwsICdyb3cnXSxcbiAgICBwYjogWzAsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDddLFxuICB9LFxuICB0aHVtYm5haWw6IHtcbiAgICBtcjogWydhdXRvJywgbnVsbCwgbnVsbCwgNiwgNjAsIDg1XSxcbiAgICBvcmRlcjogWzIsIG51bGwsIG51bGwsIDBdLFxuICAgIG1sOiBbJ2F1dG8nLCBudWxsLCBudWxsLCAwXSxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICc+IGltZyc6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgekluZGV4OiAxLFxuICAgICAgaGVpZ2h0OiBbMzEwLCAnYXV0byddLFxuICAgIH0sXG4gIH0sXG4gIHNoYXBlQm94OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgYm90dG9tOiAtNjgsXG4gICAgbGVmdDogLTE2MCxcbiAgICB6SW5kZXg6IC0xLFxuICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdpbmxpbmUtYmxvY2snXSxcbiAgfSxcbiAgdmlkZW9CdG46IHtcbiAgICB6SW5kZXg6IDIsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgbGVmdDogJzUwJScsXG4gICAgdG9wOiAnNTAlJyxcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTUwJSwgLTUwJSknLFxuICAgIHdpZHRoOiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgIGhlaWdodDogWyc2MHB4JywgbnVsbCwgJzgwcHgnLCBudWxsLCAnMTAwcHgnXSxcbiAgICBwOiAnMHB4ICFpbXBvcnRhbnQnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSknLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHdpZHRoOiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgICAgaGVpZ2h0OiBbJzYwcHgnLCBudWxsLCAnODBweCcsIG51bGwsICcxMDBweCddLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgYW5pbWF0aW9uOiBgJHtwbGF5UGx1c2V9IDEuNXMgZWFzZS1vdXQgaW5maW5pdGVgLFxuICAgICAgb3BhY2l0eTogMC41LFxuICAgIH0sXG4gICAgJz4gc3Bhbic6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMC41KScsXG4gICAgICB3aWR0aDogJ2luaGVyaXQnLFxuICAgICAgaGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjVzJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB6SW5kZXg6IDIsXG4gICAgfSxcbiAgICBzdmc6IHtcbiAgICAgIGZvbnRTaXplOiBbNDAsIG51bGwsIDQ4LCBudWxsLCA2Ml0sXG4gICAgfSxcbiAgfSxcbiAgY29udGVudEJveDoge1xuICAgIHdpZHRoOiBbJzEwMCUnLCBudWxsLCBudWxsLCAzMTUsIDM5MCwgNDUwLCBudWxsLCA1MDBdLFxuICAgIGZsZXhTaHJpbms6IDAsXG4gICAgbWI6IFs3LCBudWxsLCA2MCwgMF0sXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICdsZWZ0J10sXG4gIH0sXG4gIGdyaWQ6IHtcbiAgICBwcjogWzIsIDAsIG51bGwsIG51bGwsIDYsICc3MHB4J10sXG4gICAgcGw6IFsyLCAwXSxcbiAgICBwdDogWzIsIG51bGwsIG51bGwsIG51bGwsIDNdLFxuICAgIG14OiAnYXV0bycsXG4gICAgd2lkdGg6IFsnMTAwJScsIDM3MCwgNDIwLCAnMTAwJSddLFxuICAgIGdyaWRHYXA6IFsnMzVweCAwJywgbnVsbCwgbnVsbCwgbnVsbCwgJzUwcHggMCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsMWZyKSddLFxuICB9LFxuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MnLFxuICB9LFxuXG4gIGljb246IHtcbiAgICB3aWR0aDogWyc0NXB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzU1cHgnXSxcbiAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICBmbGV4U2hyaW5rOiAwLFxuICAgIG1yOiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgNF0sXG4gIH0sXG4gIHdyYXBwZXI6IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICBtdDogJy01cHgnLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogMyxcbiAgICAgIGNvbG9yOiAnaGVhZGluZ19zZWNvbmRhcnknLFxuICAgICAgbGluZUhlaWdodDogMS40LFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgbWI6IFsyLCBudWxsLCAzLCAyLCAzXSxcbiAgICB9LFxuXG4gICAgc3ViVGl0bGU6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgJzE0cHgnLCAxXSxcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgIGxpbmVIZWlnaHQ6IDEuOSxcbiAgICB9LFxuICB9LFxuICB2aWRlb1dyYXBwZXI6IHtcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHdpZHRoOiAnOTAwcHgnLFxuICAgICcmOmJlZm9yZSc6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJyxcbiAgICB9LFxuICAgIGlmcmFtZToge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==