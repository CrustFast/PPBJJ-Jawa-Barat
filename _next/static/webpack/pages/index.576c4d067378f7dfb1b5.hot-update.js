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
/* harmony import */ var assets_ethol_logo_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/ethol-logo 1.png */ "./src/assets/ethol-logo 1.png");
/* harmony import */ var assets_ethol_logo_1_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_ethol_logo_1_png__WEBPACK_IMPORTED_MODULE_4__);
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
      lineNumber: 8,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.widgets,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].widgets.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      key: "footer-widget--key".concat(item.id),
      sx: styles.widgets.widgetItem,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
      src: item.iconSrc,
      alt: item.altText,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }
    }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      sx: styles.widgets.infoWrapper,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 15
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
      as: "h3",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    }, item.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
      as: "p",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, item.description)));
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.footerBottomArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_ethol_logo_1_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.menus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
        lineNumber: 32,
        columnNumber: 17
      }
    });
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    sx: styles.footer.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJ3aWRnZXRzIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpZCIsIndpZGdldEl0ZW0iLCJpY29uU3JjIiwiYWx0VGV4dCIsImluZm9XcmFwcGVyIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZvb3RlckJvdHRvbUFyZWEiLCJGb290ZXJMb2dvIiwibWVudXMiLCJtZW51SXRlbSIsImkiLCJwYXRoIiwibGFiZWwiLCJsaW5rIiwiY29weXJpZ2h0IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJkaXNwbGF5IiwicHQiLCJwYiIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJtdCIsIm1iIiwibmF2IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJmb250U2l6ZSIsImNvbG9yIiwiZm9udFdlaWdodCIsImN1cnNvciIsInRyYW5zaXRpb24iLCJ0ZXh0RGVjb3JhdGlvbiIsImxpbmVIZWlnaHQiLCJweCIsIndpZHRoIiwicHkiLCJteCIsImdyaWRHYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiaDMiLCJwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQy9CLFNBQ0U7QUFBUSxNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBRUQsTUFBTSxDQUFDRSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLG9EQUFJLENBQUNELE9BQUwsQ0FBYUUsR0FBYixDQUFpQixVQUFDQyxJQUFEO0FBQUEsV0FDaEIscURBQUMsNENBQUQ7QUFDRSxTQUFHLDhCQUF1QkEsSUFBSSxDQUFDQyxFQUE1QixDQURMO0FBRUUsUUFBRSxFQUFFTixNQUFNLENBQUNFLE9BQVAsQ0FBZUssVUFGckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlFLHFEQUFDLDhDQUFEO0FBQU8sU0FBRyxFQUFFRixJQUFJLENBQUNHLE9BQWpCO0FBQTBCLFNBQUcsRUFBRUgsSUFBSSxDQUFDSSxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsRUFLRSxxREFBQyw0Q0FBRDtBQUFLLFFBQUUsRUFBRVQsTUFBTSxDQUFDRSxPQUFQLENBQWVRLFdBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxxREFBQyxnREFBRDtBQUFTLFFBQUUsRUFBQyxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBa0JMLElBQUksQ0FBQ00sS0FBdkIsQ0FERixFQUVFLHFEQUFDLDZDQUFEO0FBQU0sUUFBRSxFQUFDLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFjTixJQUFJLENBQUNPLFdBQW5CLENBRkYsQ0FMRixDQURnQjtBQUFBLEdBQWpCLENBREgsQ0FERixFQWdCRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRVosTUFBTSxDQUFDQyxNQUFQLENBQWNZLGdCQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsb0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsOENBQUQ7QUFBTyxPQUFHLEVBQUVDLDhEQUFaO0FBQXdCLE9BQUcsRUFBQyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFZCxNQUFNLENBQUNDLE1BQVAsQ0FBY2MsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1osb0RBQUksQ0FBQ2EsUUFBTCxDQUFjWixHQUFkLENBQWtCLGdCQUFrQmEsQ0FBbEI7QUFBQSxRQUFHQyxJQUFILFFBQUdBLElBQUg7QUFBQSxRQUFTQyxLQUFULFFBQVNBLEtBQVQ7QUFBQSxXQUNqQixxREFBQyxvREFBRDtBQUNFLFVBQUksRUFBRUQsSUFEUjtBQUVFLFNBQUcsRUFBRUQsQ0FGUDtBQUdFLFdBQUssRUFBRUUsS0FIVDtBQUlFLFFBQUUsRUFBRW5CLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjbUIsSUFKcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURpQjtBQUFBLEdBQWxCLENBREgsQ0FERixDQUpGLEVBZ0JFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFcEIsTUFBTSxDQUFDQyxNQUFQLENBQWNvQixTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNnQixJQUFJQyxJQUFKLEdBQVdDLFdBQVgsRUFEaEIsWUFoQkYsQ0FoQkYsQ0FERixDQURGO0FBeUNEO0tBMUN1QnhCLE07QUE0Q3hCLElBQU1DLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUU7QUFDTlksb0JBQWdCLEVBQUU7QUFDaEJXLGVBQVMsRUFBRSxXQURLO0FBRWhCQyxvQkFBYyxFQUFFLGNBRkE7QUFHaEJDLGFBQU8sRUFBRSxNQUhPO0FBSWhCQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FKWTtBQUtoQkMsUUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxPQUFmLENBTFk7QUFNaEJDLGVBQVMsRUFBRSxRQU5LO0FBT2hCQyxtQkFBYSxFQUFFO0FBUEMsS0FEWjtBQVVOZixTQUFLLEVBQUU7QUFDTGdCLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBREM7QUFFTEMsUUFBRSxFQUFFLENBRkM7QUFHTEMsU0FBRyxFQUFFO0FBQ0hQLGVBQU8sRUFBRSxNQUROO0FBRUhRLGtCQUFVLEVBQUUsUUFGVDtBQUdIQyxzQkFBYyxFQUFFLFFBSGI7QUFJSEMsZ0JBQVEsRUFBRTtBQUpQO0FBSEEsS0FWRDtBQXFCTmhCLFFBQUksRUFBRTtBQUNKaUIsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FETjtBQUVKQyxXQUFLLEVBQUUsTUFGSDtBQUdKQyxnQkFBVSxFQUFFLEtBSFI7QUFJSlAsUUFBRSxFQUFFLENBSkE7QUFLSlEsWUFBTSxFQUFFLFNBTEo7QUFNSkMsZ0JBQVUsRUFBRSxXQU5SO0FBT0pmLGFBQU8sRUFBRSxPQVBMO0FBUUpnQixvQkFBYyxFQUFFLE1BUlo7QUFTSkMsZ0JBQVUsRUFBRSxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksR0FBWixDQVRSO0FBVUpDLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixDQVZBO0FBV0osZ0JBQVU7QUFDUk4sYUFBSyxFQUFFO0FBREM7QUFYTixLQXJCQTtBQW9DTmpCLGFBQVMsRUFBRTtBQUNUZ0IsY0FBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLE1BQUosQ0FERDtBQUVUUSxXQUFLLEVBQUU7QUFGRTtBQXBDTCxHQURLO0FBMENiM0MsU0FBTyxFQUFFO0FBQ1A0QyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FERztBQUVQRixNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxJQUFWLEVBQWdCLENBQWhCLEVBQW1CLEVBQW5CLENBRkc7QUFHUEMsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsTUFBaEIsQ0FIQTtBQUlQRSxNQUFFLEVBQUUsTUFKRztBQUtQQyxXQUFPLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixXQUFqQixFQUE4QixJQUE5QixFQUFvQyxXQUFwQyxFQUFpRCxXQUFqRCxDQUxGO0FBTVBDLHVCQUFtQixFQUFFLENBQ25CLGVBRG1CLEVBRW5CLElBRm1CLEVBR25CLGVBSG1CLEVBSW5CLGVBSm1CLENBTmQ7QUFZUDFDLGNBQVUsRUFBRTtBQUNWc0IsZUFBUyxFQUFFO0FBREQsS0FaTDtBQWVQbkIsZUFBVyxFQUFFO0FBQ1hxQixRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLElBQVAsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBRE87QUFFWEMsUUFBRSxFQUFFLENBQUMsQ0FGTTtBQUdYa0IsUUFBRSxFQUFFO0FBQ0ZiLGdCQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsQ0FEUjtBQUVGQyxhQUFLLEVBQUUsbUJBRkw7QUFHRkssa0JBQVUsRUFBRSxHQUhWO0FBSUZKLGtCQUFVLEVBQUUsR0FKVjtBQUtGUCxVQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsSUFBaEIsRUFBc0IsTUFBdEI7QUFMRixPQUhPO0FBV1htQixPQUFDLEVBQUU7QUFDRGQsZ0JBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBRFQ7QUFFREUsa0JBQVUsRUFBRSxHQUZYO0FBR0RJLGtCQUFVLEVBQUU7QUFIWDtBQVhRO0FBZk47QUExQ0ksQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41NzZjNGQwNjczNzhmN2RmYjFiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgR3JpZCwgQ29udGFpbmVyLCBJbWFnZSwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi9mb290ZXIuZGF0YSc7XG5pbXBvcnQgRm9vdGVyTG9nbyBmcm9tICdhc3NldHMvZXRob2wtbG9nbyAxLnBuZyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBzeD17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8R3JpZCBzeD17c3R5bGVzLndpZGdldHN9PlxuICAgICAgICAgIHtkYXRhLndpZGdldHMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGtleT17YGZvb3Rlci13aWRnZXQtLWtleSR7aXRlbS5pZH1gfVxuICAgICAgICAgICAgICBzeD17c3R5bGVzLndpZGdldHMud2lkZ2V0SXRlbX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aXRlbS5pY29uU3JjfSBhbHQ9e2l0ZW0uYWx0VGV4dH0gLz5cbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLndpZGdldHMuaW5mb1dyYXBwZXJ9PlxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57aXRlbS50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCI+e2l0ZW0uZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0dyaWQ+XG4gICAgICAgIHsvKiBFbmQgb2YgZm9vdGVyIHdpZGdldHMgYXJlYSAqL31cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5mb290ZXJCb3R0b21BcmVhfT5cbiAgICAgICAgICA8TGluayBwYXRoPVwiL1wiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17Rm9vdGVyTG9nb30gYWx0PVwiTG9nb1wiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXIubWVudXN9PlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAge2RhdGEubWVudUl0ZW0ubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgcGF0aD17cGF0aH1cbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH1cbiAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuZm9vdGVyLmxpbmt9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8VGV4dCBzeD17c3R5bGVzLmZvb3Rlci5jb3B5cmlnaHR9PlxuICAgICAgICAgICAgQ29weXJpZ2h0IGJ5IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IFNlYW1lbyBcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9mb290ZXI+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZm9vdGVyOiB7XG4gICAgZm9vdGVyQm90dG9tQXJlYToge1xuICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkJyxcbiAgICAgIGJvcmRlclRvcENvbG9yOiAnYm9yZGVyX2NvbG9yJyxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIHB0OiBbNywgbnVsbCwgOF0sXG4gICAgICBwYjogWyc0MHB4JywgbnVsbCwgJzEwMHB4J10sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgfSxcbiAgICBtZW51czoge1xuICAgICAgbXQ6IFszLCA0XSxcbiAgICAgIG1iOiAyLFxuICAgICAgbmF2OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGxpbms6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgJzE1cHgnXSxcbiAgICAgIGNvbG9yOiAndGV4dCcsXG4gICAgICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgICAgIG1iOiAyLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMzVzJyxcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgMS44XSxcbiAgICAgIHB4OiBbMiwgbnVsbCwgNF0sXG4gICAgICAnOmhvdmVyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvcHlyaWdodDoge1xuICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICB9LFxuICB9LFxuICB3aWRnZXRzOiB7XG4gICAgcHk6IFs4LCBudWxsLCA5XSxcbiAgICBweDogWzQsIDAsIDMsIG51bGwsIDcsIDEwXSxcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICBncmlkR2FwOiBbJzQwcHggMCcsIG51bGwsICc0NXB4IDMwcHgnLCBudWxsLCAnNjBweCAzMHB4JywgJzUwcHggOTBweCddLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDIsMWZyKScsXG4gICAgICAncmVwZWF0KDMsMWZyKScsXG4gICAgXSxcbiAgICB3aWRnZXRJdGVtOiB7XG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIH0sXG4gICAgaW5mb1dyYXBwZXI6IHtcbiAgICAgIG10OiBbMiwgMywgbnVsbCwgMiwgNF0sXG4gICAgICBtYjogLTEsXG4gICAgICBoMzoge1xuICAgICAgICBmb250U2l6ZTogWzMsIG51bGwsIG51bGwsIDIsIDMsIDRdLFxuICAgICAgICBjb2xvcjogJ2hlYWRpbmdfc2Vjb25kYXJ5JyxcbiAgICAgICAgbGluZUhlaWdodDogMS40LFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIG1iOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgJzE1cHgnXSxcbiAgICAgIH0sXG5cbiAgICAgIHA6IHtcbiAgICAgICAgZm9udFNpemU6IFsxLCAnMTVweCddLFxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==