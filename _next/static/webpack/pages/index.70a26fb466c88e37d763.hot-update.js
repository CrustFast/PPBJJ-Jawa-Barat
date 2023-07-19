webpackHotUpdate_N_E("pages/index",{

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#343D48',
    // body color and primary color
    text_secondary: '#02073E',
    // secondary body color
    heading: '#0F2137',
    // primary heading color
    heading_secondary: '#0F2137',
    // heading color
    background: '#FFFFFF',
    // body background color
    background_secondary: '#F9FBFD',
    // secondary background color
    border_color: '#E5ECF4',
    // border color
    yellow: '#FFA740',
    // border color
    primary: '#EA3A60',
    // primary button and link color
    secondary: '#2563FF',
    // secondary color - can be used for hover states
    muted: '#E4E4E4',
    // muted color
    accent: '#609',
    // a contrast color for emphasizing UI
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  breakpoints: ['480px', '640px', '768px', '1024px', '1220px', '1366px', '1620px'],
  fonts: {
    body: "'DM Sans', sans-serif",
    heading: "'DM Sans', sans-serif"
  },
  fontSizes: [12, 15, 16, 18, 20, 22, 24, 28, 32, 36, 42, 48, 52, 64],
  fontWeights: {
    body: 'normal',
    heading: 500,
    bold: 700
  },
  lineHeights: {
    body: 1.8,
    heading: 1.5
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, 5, 10, 15, 20, 25, 30, 50, 80, 100, 120, 150],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, '780px', '1020px', '1200px', null, '1310px'],
      px: [4, 6]
    },
    header: {
      color: '#02073E',
      fontWeight: 'normal',
      py: 3,
      position: 'absolute',
      width: '100%'
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    main: {}
  },
  section: {
    banner: {
      pt: [8, null, 9, null, null, 10],
      pb: ['90px', null, 9, null, null, 10, null, '165px']
    },
    feature: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    news: {
      pb: [8, null, 9, null, null, 10, null, '170px']
    },
    coreFeature: {
      pb: [7, null, 9, null, null, 10, null, '170px'],
      overflow: 'hidden'
    },
    testimonial: {
      pt: [8, null, 8, '70px', null, 8, null, '145px'],
      pb: ['90px', null, 9, null, null, 10, null, '190px'],
      overflow: 'hidden'
    },
    services: {
      pt: [8, null, 8, '70px', null, 8, null, '145px'],
      pb: ['90px', null, 9, null, null, 10, null, '150px']
    },
    pricing: {
      pt: [8, null, 9, null, null, 10, null, '180px'],
      pb: ['90px', null, 9, null, null, 10, null, '180px']
    }
  },
  sectionHeader: {
    width: ['100%', null, '540px'],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: ['-3px', null, -1],
    marginBottom: ['50px', null, '60px', null, null, '65px', null, '80px'],
    mx: 'auto',
    title: {
      fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],
      color: 'heading',
      lineHeight: [1.3, null, null, 1.25],
      textAlign: 'center',
      fontWeight: '700',
      letterSpacing: '-.5px'
    },
    subTitle: {
      fontSize: [0, '13px', null, '14px'],
      color: 'primary',
      textAlign: 'center',
      letterSpacing: ['1.5px', null, '2px'],
      textTransform: 'uppercase',
      fontWeight: '700',
      mb: 2,
      lineHeight: 1.5
    }
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [4],
      letterSpacing: '-.55px',
      color: 'heading'
    },
    heroPrimary: {
      color: 'heading',
      fontSize: ['32px', '36px', '42px', '40px', '42px', '52px', '58px', '66px'],
      lineHeight: [1.3, null, null, null, null, 1.2],
      fontWeight: 700,
      mb: [4, null, null, null, null, 5]
    },
    heroSecondary: {
      fontSize: [2, null, '17px', null, null, '19px', 4],
      lineHeight: [1.9, null, null, 2],
      fontWeight: 'body',
      mb: 5,
      px: [0, null, 5, 6, null, 8, 9],
      color: 'heading'
    },
    title: {
      // extends the text.heading styles
      variant: 'text.heading',
      fontWeight: 'bold',
      fontSize: [3, null, 4],
      lineHeight: 1.25,
      mb: 1
    },
    lead: {
      fontSize: 40,
      fontFamily: 'DM Sans',
      fontWeight: '500',
      lineHeight: '60px',
      letterSpacing: '-1.5px',
      color: '#0F2137'
    },
    muted: {
      lineHeight: '26px',
      color: 'muted'
    },
    secondary: {
      fontWeight: 500,
      color: '#00A99D',
      lineHeight: '40px'
    }
  },
  links: {
    "default": {
      cursor: 'pointer'
    },
    bold: {
      fontWeight: 'bold'
    },
    nav: {
      display: ['none', null, 'inline-block'],
      px: 25,
      fontWeight: 'normal'
    },
    blog: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      transition: 'color 0.25s',
      '&:hover': {
        color: 'primary'
      }
    },
    footer: {
      display: 'block',
      px: 0,
      color: 'inherit',
      textDecoration: 'none'
    },
    logo: {
      display: 'flex'
    }
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    menu: {
      display: [null, null, 'none']
    },
    // default variant for MenuButton
    // you can reference other values defined in the theme
    defaultBtn: {
      borderRadius: '45px',
      fontSize: ['14px', null, null, 2],
      letterSpacings: '-0.15px',
      padding: ['12px 20px', null, '15px 30px'],
      fontFamily: 'body',
      cursor: 'pointer',
      lineHeight: 1.2,
      transition: 'all 0.25s',
      fontWeight: 500,
      '&:focus': {
        outline: 0
      }
    },
    primary: {
      variant: 'buttons.defaultBtn',
      color: 'white',
      bg: 'primary',
      '&:hover': {
        boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px'
      }
    },
    whiteButton: {
      variant: 'buttons.defaultBtn',
      color: 'heading_secondary',
      bg: 'white',
      '&:hover': {
        boxShadow: 'rgba(0, 0, 0, 0.5) 0px 12px 24px -10px'
      }
    },
    secondary: {
      variant: 'buttons.defaultBtn',
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary'
      }
    },
    textButton: {
      variant: 'buttons.defaultBtn',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      color: 'white',
      svg: {
        fontSize: [4, 6],
        mr: 2
      }
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4
    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'row',
      p: 3
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderColor: 'border_color',
      height: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: function boxShadow(t) {
          return "0 0 0 2px ".concat(t.colors.primary);
        },
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSmoothing: 'antialiased',
      // Modal Global Style
      '.modal-video-close-btn': {
        cursor: 'pointer'
      },
      '.modal-video-movie-wrap': {
        margin: 6,
        width: 'auto'
      }
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3RoZW1lL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbG9ycyIsInRleHQiLCJ0ZXh0X3NlY29uZGFyeSIsImhlYWRpbmciLCJoZWFkaW5nX3NlY29uZGFyeSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX3NlY29uZGFyeSIsImJvcmRlcl9jb2xvciIsInllbGxvdyIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsIm1vZGVzIiwiZGFyayIsImJyZWFrcG9pbnRzIiwiZm9udHMiLCJib2R5IiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsImxheW91dCIsImNvbnRhaW5lciIsIm1heFdpZHRoIiwicHgiLCJoZWFkZXIiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJweSIsInBvc2l0aW9uIiwid2lkdGgiLCJ0b29sYmFyIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm1haW4iLCJzZWN0aW9uIiwiYmFubmVyIiwicHQiLCJwYiIsImZlYXR1cmUiLCJuZXdzIiwiY29yZUZlYXR1cmUiLCJvdmVyZmxvdyIsInRlc3RpbW9uaWFsIiwic2VydmljZXMiLCJwcmljaW5nIiwic2VjdGlvbkhlYWRlciIsImZsZXhEaXJlY3Rpb24iLCJtdCIsIm1hcmdpbkJvdHRvbSIsIm14IiwidGl0bGUiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJ0ZXh0QWxpZ24iLCJsZXR0ZXJTcGFjaW5nIiwic3ViVGl0bGUiLCJ0ZXh0VHJhbnNmb3JtIiwibWIiLCJmb250RmFtaWx5IiwiaGVyb1ByaW1hcnkiLCJoZXJvU2Vjb25kYXJ5IiwidmFyaWFudCIsImxlYWQiLCJsaW5rcyIsImN1cnNvciIsIm5hdiIsImJsb2ciLCJ0ZXh0RGVjb3JhdGlvbiIsInRyYW5zaXRpb24iLCJmb290ZXIiLCJsb2dvIiwiaW1hZ2VzIiwiYXZhdGFyIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYnV0dG9ucyIsIm1lbnUiLCJkZWZhdWx0QnRuIiwicGFkZGluZyIsIm91dGxpbmUiLCJiZyIsImJveFNoYWRvdyIsIndoaXRlQnV0dG9uIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJ0ZXh0QnV0dG9uIiwiYmFja2dyb3VuZENvbG9yIiwic3ZnIiwibXIiLCJjYXJkcyIsIm9mZmVyIiwiZmxleCIsIm1pbkhlaWdodCIsIm0iLCJmZWF0dXJlQ2FyZCIsInAiLCJmb3JtcyIsImxhYmVsIiwiaW5wdXQiLCJ0IiwiYmFkZ2VzIiwic3R5bGVzIiwicm9vdCIsImZvbnRTbW9vdGhpbmciLCJtYXJnaW4iLCJociIsImJvcmRlckJvdHRvbSIsInVsIiwibGlzdFN0eWxlIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIiwid2hpdGVTcGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsOENBQWU7QUFDYjtBQUNBQSxRQUFNLEVBQUU7QUFDTkMsUUFBSSxFQUFFLFNBREE7QUFDVztBQUNqQkMsa0JBQWMsRUFBRSxTQUZWO0FBRXFCO0FBQzNCQyxXQUFPLEVBQUUsU0FISDtBQUdjO0FBQ3BCQyxxQkFBaUIsRUFBRSxTQUpiO0FBSXdCO0FBQzlCQyxjQUFVLEVBQUUsU0FMTjtBQUtpQjtBQUN2QkMsd0JBQW9CLEVBQUUsU0FOaEI7QUFNMkI7QUFDakNDLGdCQUFZLEVBQUUsU0FQUjtBQU9tQjtBQUN6QkMsVUFBTSxFQUFFLFNBUkY7QUFRYTtBQUNuQkMsV0FBTyxFQUFFLFNBVEg7QUFTYztBQUNwQkMsYUFBUyxFQUFFLFNBVkw7QUFVZ0I7QUFDdEJDLFNBQUssRUFBRSxTQVhEO0FBV1k7QUFDbEJDLFVBQU0sRUFBRSxNQVpGO0FBWVU7QUFFaEI7QUFDQUMsU0FBSyxFQUFFO0FBQ0xDLFVBQUksRUFBRTtBQUNKYixZQUFJLEVBQUUsTUFERjtBQUVKSSxrQkFBVSxFQUFFLE1BRlI7QUFHSkksZUFBTyxFQUFFLE1BSEw7QUFJSkMs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LEtBakJFO0FBc0JOO0FBQ0F1QixNQUFFLEVBQUU7QUFDRkMsZUFBUyxFQUFFO0FBRFQsS0F2QkU7QUEwQk5DLFVBQU0sRUFBRTtBQUNOMUIsWUFBTSxFQUFFLGNBREY7QUFFTjJCLFVBQUksRUFBRSxxQ0FGQTtBQUdOQyxjQUFRLEVBQUUsdUJBSEo7QUFJTnRDLFlBQU0sRUFBRSxnQkFKRjtBQUtOK0IsWUFBTSxFQUFFLGlCQUxGO0FBTU4vRCxjQUFRLEVBQUUsbUJBTko7QUFPTnFDLGFBQU8sRUFBRSxjQVBIO0FBUU5uRCxjQUFRLEVBQUUscUJBUko7QUFTTkMsV0FBSyxFQUFFLGdCQVREO0FBVU5vRixnQkFBVSxFQUFFO0FBVk47QUExQkY7QUFyV0ssQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MGEyNmZiNDY2Yzg4ZTM3ZDc2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICAvLyBleGFtcGxlIGNvbG9ycyB3aXRoIGRhcmsgbW9kZVxuICBjb2xvcnM6IHtcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcbiAgICB0ZXh0X3NlY29uZGFyeTogJyMwMjA3M0UnLCAvLyBzZWNvbmRhcnkgYm9keSBjb2xvclxuICAgIGhlYWRpbmc6ICcjMEYyMTM3JywgLy8gcHJpbWFyeSBoZWFkaW5nIGNvbG9yXG4gICAgaGVhZGluZ19zZWNvbmRhcnk6ICcjMEYyMTM3JywgLy8gaGVhZGluZyBjb2xvclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgYmFja2dyb3VuZF9zZWNvbmRhcnk6ICcjRjlGQkZEJywgLy8gc2Vjb25kYXJ5IGJhY2tncm91bmQgY29sb3JcbiAgICBib3JkZXJfY29sb3I6ICcjRTVFQ0Y0JywgLy8gYm9yZGVyIGNvbG9yXG4gICAgeWVsbG93OiAnI0ZGQTc0MCcsIC8vIGJvcmRlciBjb2xvclxuICAgIHByaW1hcnk6ICcjRUEzQTYwJywgLy8gcHJpbWFyeSBidXR0b24gYW5kIGxpbmsgY29sb3JcbiAgICBzZWNvbmRhcnk6ICcjMjU2M0ZGJywgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xuICAgIG11dGVkOiAnI0U0RTRFNCcsIC8vIG11dGVkIGNvbG9yXG4gICAgYWNjZW50OiAnIzYwOScsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXG5cbiAgICAvLyBoaWdobGlnaHRcdGEgYmFja2dyb3VuZCBjb2xvciBmb3IgaGlnaGxpZ2h0aW5nIHRleHRcbiAgICBtb2Rlczoge1xuICAgICAgZGFyazoge1xuICAgICAgICB0ZXh0OiAnI2ZmZicsXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcbiAgICAgICAgcHJpbWFyeTogJyMwY2YnLFxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcbiAgICAgICAgbXV0ZWQ6ICcjMTExJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IFtcbiAgICAnNDgwcHgnLFxuICAgICc2NDBweCcsXG4gICAgJzc2OHB4JyxcbiAgICAnMTAyNHB4JyxcbiAgICAnMTIyMHB4JyxcbiAgICAnMTM2NnB4JyxcbiAgICAnMTYyMHB4JyxcbiAgXSxcbiAgZm9udHM6IHtcbiAgICBib2R5OiBcIidETSBTYW5zJywgc2Fucy1zZXJpZlwiLFxuICAgIGhlYWRpbmc6IFwiJ0RNIFNhbnMnLCBzYW5zLXNlcmlmXCIsXG4gIH0sXG4gIGZvbnRTaXplczogWzEyLCAxNSwgMTYsIDE4LCAyMCwgMjIsIDI0LCAyOCwgMzIsIDM2LCA0MiwgNDgsIDUyLCA2NF0sXG4gIGZvbnRXZWlnaHRzOiB7XG4gICAgYm9keTogJ25vcm1hbCcsXG4gICAgaGVhZGluZzogNTAwLFxuICAgIGJvbGQ6IDcwMCxcbiAgfSxcbiAgbGluZUhlaWdodHM6IHtcbiAgICBib2R5OiAxLjgsXG4gICAgaGVhZGluZzogMS41LFxuICB9LFxuICBsZXR0ZXJTcGFjaW5nczoge1xuICAgIGJvZHk6ICdub3JtYWwnLFxuICAgIGNhcHM6ICcwLjJlbScsXG4gICAgaGVhZGluZzogJy0wLjVweCcsXG4gIH0sXG4gIHNwYWNlOiBbMCwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCA1MCwgODAsIDEwMCwgMTIwLCAxNTBdLFxuICAvLyB2YXJpYW50cyBjYW4gdXNlIGN1c3RvbSwgdXNlci1kZWZpbmVkIG5hbWVzXG4gIGxheW91dDoge1xuICAgIGNvbnRhaW5lcjoge1xuICAgICAgbWF4V2lkdGg6IFtcbiAgICAgICAgJzEwMCUnLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICAnNzgwcHgnLFxuICAgICAgICAnMTAyMHB4JyxcbiAgICAgICAgJzEyMDBweCcsXG4gICAgICAgIG51bGwsXG4gICAgICAgICcxMzEwcHgnLFxuICAgICAgXSxcbiAgICAgIHB4OiBbNCwgNl0sXG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgIGNvbG9yOiAnIzAyMDczRScsXG4gICAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICAgIHB5OiAzLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH0sXG4gICAgdG9vbGJhcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgIH0sXG4gICAgbWFpbjoge30sXG4gIH0sXG4gIHNlY3Rpb246IHtcbiAgICBiYW5uZXI6IHtcbiAgICAgIHB0OiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTBdLFxuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTY1cHgnXSxcbiAgICB9LFxuICAgIGZlYXR1cmU6IHtcbiAgICAgIHBiOiBbOCwgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNzBweCddLFxuICAgIH0sXG4gICAgbmV3czoge1xuICAgICAgcGI6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXG4gICAgfSxcbiAgICBjb3JlRmVhdHVyZToge1xuICAgICAgcGI6IFs3LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE3MHB4J10sXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfSxcbiAgICB0ZXN0aW1vbmlhbDoge1xuICAgICAgcHQ6IFs4LCBudWxsLCA4LCAnNzBweCcsIG51bGwsIDgsIG51bGwsICcxNDVweCddLFxuICAgICAgcGI6IFsnOTBweCcsIG51bGwsIDksIG51bGwsIG51bGwsIDEwLCBudWxsLCAnMTkwcHgnXSxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9LFxuICAgIHNlcnZpY2VzOiB7XG4gICAgICBwdDogWzgsIG51bGwsIDgsICc3MHB4JywgbnVsbCwgOCwgbnVsbCwgJzE0NXB4J10sXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxNTBweCddLFxuICAgIH0sXG4gICAgcHJpY2luZzoge1xuICAgICAgcHQ6IFs4LCBudWxsLCA5LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgJzE4MHB4J10sXG4gICAgICBwYjogWyc5MHB4JywgbnVsbCwgOSwgbnVsbCwgbnVsbCwgMTAsIG51bGwsICcxODBweCddLFxuICAgIH0sXG4gIH0sXG4gIHNlY3Rpb25IZWFkZXI6IHtcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgJzU0MHB4J10sXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIG10OiBbJy0zcHgnLCBudWxsLCAtMV0sXG4gICAgbWFyZ2luQm90dG9tOiBbJzUwcHgnLCBudWxsLCAnNjBweCcsIG51bGwsIG51bGwsICc2NXB4JywgbnVsbCwgJzgwcHgnXSxcbiAgICBteDogJ2F1dG8nLFxuICAgIHRpdGxlOiB7XG4gICAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsIG51bGwsICczNnB4J10sXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgMS4yNV0sXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41cHgnLFxuICAgIH0sXG5cbiAgICBzdWJUaXRsZToge1xuICAgICAgZm9udFNpemU6IFswLCAnMTNweCcsIG51bGwsICcxNHB4J10sXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgIGxldHRlclNwYWNpbmc6IFsnMS41cHgnLCBudWxsLCAnMnB4J10sXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICAgICAgbWI6IDIsXG4gICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgfSxcbiAgfSxcbiAgdGV4dDoge1xuICAgIGhlYWRpbmc6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiBbNF0sXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLS41NXB4JyxcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgfSxcbiAgICBoZXJvUHJpbWFyeToge1xuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcbiAgICAgIGZvbnRTaXplOiBbXG4gICAgICAgICczMnB4JyxcbiAgICAgICAgJzM2cHgnLFxuICAgICAgICAnNDJweCcsXG4gICAgICAgICc0MHB4JyxcbiAgICAgICAgJzQycHgnLFxuICAgICAgICAnNTJweCcsXG4gICAgICAgICc1OHB4JyxcbiAgICAgICAgJzY2cHgnLFxuICAgICAgXSxcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjMsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuMl0sXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBtYjogWzQsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxuICAgIH0sXG4gICAgaGVyb1NlY29uZGFyeToge1xuICAgICAgZm9udFNpemU6IFsyLCBudWxsLCAnMTdweCcsIG51bGwsIG51bGwsICcxOXB4JywgNF0sXG4gICAgICBsaW5lSGVpZ2h0OiBbMS45LCBudWxsLCBudWxsLCAyXSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcbiAgICAgIG1iOiA1LFxuICAgICAgcHg6IFswLCBudWxsLCA1LCA2LCBudWxsLCA4LCA5XSxcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgLy8gZXh0ZW5kcyB0aGUgdGV4dC5oZWFkaW5nIHN0eWxlc1xuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIDRdLFxuICAgICAgbGluZUhlaWdodDogMS4yNSxcbiAgICAgIG1iOiAxLFxuICAgIH0sXG4gICAgbGVhZDoge1xuICAgICAgZm9udFNpemU6IDQwLFxuICAgICAgZm9udEZhbWlseTogJ0RNIFNhbnMnLFxuICAgICAgZm9udFdlaWdodDogJzUwMCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnNjBweCcsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTEuNXB4JyxcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXG4gICAgfSxcbiAgICBtdXRlZDoge1xuICAgICAgbGluZUhlaWdodDogJzI2cHgnLFxuICAgICAgY29sb3I6ICdtdXRlZCcsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgIGNvbG9yOiAnIzAwQTk5RCcsXG4gICAgICBsaW5lSGVpZ2h0OiAnNDBweCcsXG4gICAgfSxcbiAgfSxcbiAgbGlua3M6IHtcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICB9LFxuICAgIGJvbGQ6IHtcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICB9LFxuICAgIG5hdjoge1xuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgJ2lubGluZS1ibG9jayddLFxuICAgICAgcHg6IDI1LFxuICAgICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gICAgfSxcbiAgICBibG9nOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcHg6IDAsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICB0cmFuc2l0aW9uOiAnY29sb3IgMC4yNXMnLFxuICAgICAgJyY6aG92ZXInOiB7XG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgZm9vdGVyOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgcHg6IDAsXG4gICAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICB9LFxuICAgIGxvZ286IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB9LFxuICB9LFxuICBpbWFnZXM6IHtcbiAgICBhdmF0YXI6IHtcbiAgICAgIHdpZHRoOiA0OCxcbiAgICAgIGhlaWdodDogNDgsXG4gICAgICBib3JkZXJSYWRpdXM6IDk5OTk5LFxuICAgIH0sXG4gIH0sXG4gIC8vIHZhcmlhbnRzIGZvciBidXR0b25zXG4gIGJ1dHRvbnM6IHtcbiAgICBtZW51OiB7XG4gICAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgJ25vbmUnXSxcbiAgICB9LCAvLyBkZWZhdWx0IHZhcmlhbnQgZm9yIE1lbnVCdXR0b25cbiAgICAvLyB5b3UgY2FuIHJlZmVyZW5jZSBvdGhlciB2YWx1ZXMgZGVmaW5lZCBpbiB0aGUgdGhlbWVcbiAgICBkZWZhdWx0QnRuOiB7XG4gICAgICBib3JkZXJSYWRpdXM6ICc0NXB4JyxcbiAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCBudWxsLCAyXSxcbiAgICAgIGxldHRlclNwYWNpbmdzOiAnLTAuMTVweCcsXG4gICAgICBwYWRkaW5nOiBbJzEycHggMjBweCcsIG51bGwsICcxNXB4IDMwcHgnXSxcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjI1cycsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBwcmltYXJ5OiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYmc6ICdwcmltYXJ5JyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDIzMywgNzYsIDg0LCAwLjU3KSAwcHggOXB4IDIwcHggLTVweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgd2hpdGVCdXR0b246IHtcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHRCdG4nLFxuICAgICAgY29sb3I6ICdoZWFkaW5nX3NlY29uZGFyeScsXG4gICAgICBiZzogJ3doaXRlJyxcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuNSkgMHB4IDEycHggMjRweCAtMTBweCcsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiB7XG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0QnRuJyxcbiAgICAgIGJvcmRlcjogJzJweCBzb2xpZCcsXG4gICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxuICAgICAgcGFkZGluZzogWycxMHB4IDE1cHgnLCBudWxsLCAnMTVweCAzMHB4J10sXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGJnOiAncHJpbWFyeScsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdGV4dEJ1dHRvbjoge1xuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdEJ0bicsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgc3ZnOiB7XG4gICAgICAgIGZvbnRTaXplOiBbNCwgNl0sXG4gICAgICAgIG1yOiAyLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBjYXJkczoge1xuICAgIHByaW1hcnk6IHtcbiAgICAgIHBhZGRpbmc6IDIsXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXG4gICAgfSxcbiAgICBvZmZlcjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGZsZXg6IFsnMSAxIGNhbGMoNTAlIC0gMTZweCknLCAnMSAxIDIwJSddLFxuICAgICAgbWluSGVpZ2h0OiAxMzAsXG4gICAgICBtOiAyLFxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFREVGRjYnLFxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxuICAgIH0sXG4gICAgZmVhdHVyZUNhcmQ6IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgcDogMyxcbiAgICB9LFxuICB9LFxuICBmb3Jtczoge1xuICAgIGxhYmVsOiB7XG4gICAgICBmb250U2l6ZTogMSxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICBib3JkZXJDb2xvcjogJ2JvcmRlcl9jb2xvcicsXG4gICAgICBoZWlnaHQ6IDYwLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXG4gICAgICAgIGJveFNoYWRvdzogKHQpID0+IGAwIDAgMCAycHggJHt0LmNvbG9ycy5wcmltYXJ5fWAsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBiYWRnZXM6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxuICAgICAgYmc6ICcjMjhBNUZGJyxcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXG4gICAgICBwOiAnM3B4IDExcHgnLFxuICAgICAgZm9udFNpemU6IDEsXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcbiAgICB9LFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcbiAgICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCcsXG4gICAgfSxcbiAgfSxcblxuICBzdHlsZXM6IHtcbiAgICAvLyBUbyBhZGQgYmFzZSwgdG9wLWxldmVsIHN0eWxlcyB0byB0aGUgPGJvZHk+IGVsZW1lbnQsIHVzZSB0aGVtZS5zdHlsZXMucm9vdC5cbiAgICByb290OiB7XG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBsaW5lSGVpZ2h0OiAnYm9keScsXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXG4gICAgICBmb250U21vb3RoaW5nOiAnYW50aWFsaWFzZWQnLFxuICAgICAgLy8gTW9kYWwgR2xvYmFsIFN0eWxlXG4gICAgICAnLm1vZGFsLXZpZGVvLWNsb3NlLWJ0bic6IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICB9LFxuICAgICAgJy5tb2RhbC12aWRlby1tb3ZpZS13cmFwJzoge1xuICAgICAgICBtYXJnaW46IDYsXG4gICAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgLy8gRGl2aWRlciBzdHlsZXNcbiAgICBocjoge1xuICAgICAgYm9yZGVyOiAwLFxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Q5RTBFNycsXG4gICAgfSxcbiAgICAvLyBhbHNvIHlvdSBjYW4gdXNlIG90aGVyIEhUTUwgZWxlbWVudHMgc3R5bGUgaGVyZVxuICAgIHVsOiB7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICB9LFxuICAgIHNyT25seToge1xuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcbiAgICAgIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCkgIWltcG9ydGFudCcsXG4gICAgICBjbGlwUGF0aDogJ2luc2V0KDUwJSkgIWltcG9ydGFudCcsXG4gICAgICBoZWlnaHQ6ICcxcHggIWltcG9ydGFudCcsXG4gICAgICBtYXJnaW46ICctMXB4ICFpbXBvcnRhbnQnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4gIWltcG9ydGFudCcsXG4gICAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUgIWltcG9ydGFudCcsXG4gICAgICB3aWR0aDogJzFweCAhaW1wb3J0YW50JyxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAgIWltcG9ydGFudCcsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9