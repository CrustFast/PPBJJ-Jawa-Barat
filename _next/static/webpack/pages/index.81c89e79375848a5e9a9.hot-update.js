webpackHotUpdate_N_E("pages/index",{

/***/ "./src/assets/logo.svg":
false,

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var assets_widget_pens_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/widget/pens.png */ "./src/assets/widget/pens.png");
/* harmony import */ var assets_widget_pens_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_widget_pens_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_widget_seameo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/widget/seameo.png */ "./src/assets/widget/seameo.png");
/* harmony import */ var assets_widget_seameo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_widget_seameo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_widget_twh_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/widget/twh.jpeg */ "./src/assets/widget/twh.jpeg");
/* harmony import */ var assets_widget_twh_jpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_widget_twh_jpeg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\Magang (SEAQIS)\\GT PBJJ JABAR\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






function Footer() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.widgets,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].widgets.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      key: "footer-widget--key".concat(item.id),
      sx: styles.widgets.widgetItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: item.iconSrc,
      alt: item.altText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 15
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.widgets.infoWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      as: "h3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      as: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, item.description)));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.footerBottomArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_widget_pens_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_widget_seameo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_widget_twh_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.menus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].menuItem.map(function (_ref, i) {
    var path = _ref.path,
        label = _ref.label;
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      path: path,
      key: i,
      label: label,
      sx: styles.footer.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    });
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Copyright by ", new Date().getFullYear(), " Seameo"))));
}
_c = Footer;
var styles = {
  footer: {
    footerBottomArea: {
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      pt: [7, null, 8],
      pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column'
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }
    },
    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary'
      }
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%'
    }
  },
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', 'repeat(3,1fr)'],
    widgetItem: {
      textAlign: 'center'
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px']
      },
      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2
      }
    }
  }
};

var _c;

$RefreshReg$(_c, "Footer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJ3aWRnZXRzIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpZCIsIndpZGdldEl0ZW0iLCJpY29uU3JjIiwiYWx0VGV4dCIsImluZm9XcmFwcGVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZvb3RlckJvdHRvbUFyZWEiLCJGb290ZXJMb2dvMSIsIkZvb3RlckxvZ28yIiwiRm9vdGVyTG9nbzMiLCJtZW51cyIsIm1lbnVJdGVtIiwiaSIsInBhdGgiLCJsYWJlbCIsImxpbmsiLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJib3JkZXJUb3AiLCJib3JkZXJUb3BDb2xvciIsImRpc3BsYXkiLCJwdCIsInBiIiwidGV4dEFsaWduIiwiZmxleERpcmVjdGlvbiIsIm10IiwibWIiLCJuYXYiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsImZvbnRTaXplIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsInRleHREZWNvcmF0aW9uIiwibGluZUhlaWdodCIsInB4Iiwid2lkdGgiLCJweSIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJoMyIsInAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixTQUNFO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNkNBQUQ7QUFBTSxNQUFF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WDtBQUdESSxrQkFBVSxFQUFFO0FBSFg7QUFYUTtBQWZOO0FBMUNJLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODFjODllNzkzNzU4NDhhNWU5YTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBCb3gsIEdyaWQsIENvbnRhaW5lciwgSW1hZ2UsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcbmltcG9ydCBkYXRhIGZyb20gJy4vZm9vdGVyLmRhdGEnO1xuaW1wb3J0IEZvb3RlckxvZ28xIGZyb20gJ2Fzc2V0cy93aWRnZXQvcGVucy5wbmcnO1xuaW1wb3J0IEZvb3RlckxvZ28yIGZyb20gJ2Fzc2V0cy93aWRnZXQvc2VhbWVvLnBuZyc7XG5pbXBvcnQgRm9vdGVyTG9nbzMgZnJvbSAnYXNzZXRzL3dpZGdldC90d2guanBlZyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBzeD17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLndpZGdldHN9PlxuICAgICAgICAgIHtkYXRhLndpZGdldHMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGtleT17YGZvb3Rlci13aWRnZXQtLWtleSR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICBzeD17c3R5bGVzLndpZGdldHMud2lkZ2V0SXRlbX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pY29uU3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gLz5cbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndpZGdldHMuaW5mb1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57aXRlbS50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIHsvKiBFbmQgb2YgZm9vdGVyIHdpZGdldHMgYXJlYSAqL31cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5mb290ZXJCb3R0b21BcmVhfT5cbiAgICAgICAgICA8TGluayBwYXRoPVwiL1wiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17Rm9vdGVyTG9nbzF9IGFsdD1cIkxvZ29cIiAvPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17Rm9vdGVyTG9nbzJ9IGFsdD1cIkxvZ29cIiAvPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17Rm9vdGVyTG9nbzN9IGFsdD1cIkxvZ29cIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLm1lbnVzfT5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgIHtkYXRhLm1lbnVJdGVtLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgIHBhdGg9e3BhdGh9XG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICAgICAgICBzeD17c3R5bGVzLmZvb3Rlci5saW5rfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPFRleHQgc3g9e3N0eWxlcy5mb290ZXIuY29weXJpZ2h0fT5cbiAgICAgICAgICAgIENvcHlyaWdodCBieSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBTZWFtZW8gXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvb3Rlcjoge1xuICAgIGZvb3RlckJvdHRvbUFyZWE6IHtcbiAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCcsXG4gICAgICBib3JkZXJUb3BDb2xvcjogJ2JvcmRlcl9jb2xvcicsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBwdDogWzcsIG51bGwsIDhdLFxuICAgICAgcGI6IFsnNDBweCcsIG51bGwsICcxMDBweCddLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIH0sXG4gICAgbWVudXM6IHtcbiAgICAgIG10OiBbMywgNF0sXG4gICAgICBtYjogMixcbiAgICAgIG5hdjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBsaW5rOiB7XG4gICAgICBmb250U2l6ZTogWzEsICcxNXB4J10sXG4gICAgICBjb2xvcjogJ3RleHQnLFxuICAgICAgZm9udFdlaWdodDogJzQwMCcsXG4gICAgICBtYjogMixcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjM1cycsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXG4gICAgICBweDogWzIsIG51bGwsIDRdLFxuICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb3B5cmlnaHQ6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfSxcbiAgfSxcbiAgd2lkZ2V0czoge1xuICAgIHB5OiBbOCwgbnVsbCwgOV0sXG4gICAgcHg6IFs0LCAwLCAzLCBudWxsLCA3LCAxMF0sXG4gICAgd2lkdGg6IFsnMTAwJScsICc4MCUnLCAnMTAwJSddLFxuICAgIG14OiAnYXV0bycsXG4gICAgZ3JpZEdhcDogWyc0MHB4IDAnLCBudWxsLCAnNDVweCAzMHB4JywgbnVsbCwgJzYwcHggMzBweCcsICc1MHB4IDkwcHgnXSxcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXG4gICAgICAncmVwZWF0KDEsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgyLDFmciknLFxuICAgICAgJ3JlcGVhdCgzLDFmciknLFxuICAgIF0sXG4gICAgd2lkZ2V0SXRlbToge1xuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGluZm9XcmFwcGVyOiB7XG4gICAgICBtdDogWzIsIDMsIG51bGwsIDIsIDRdLFxuICAgICAgbWI6IC0xLFxuICAgICAgaDM6IHtcbiAgICAgICAgZm9udFNpemU6IFszLCBudWxsLCBudWxsLCAyLCAzLCA0XSxcbiAgICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBtYjogWzIsIG51bGwsIG51bGwsIG51bGwsICcxNXB4J10sXG4gICAgICB9LFxuXG4gICAgICBwOiB7XG4gICAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcbiAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICBsaW5lSGVpZ2h0OiAyLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=