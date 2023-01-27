/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./app/store.js":
/*!**********************!*\
  !*** ./app/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ \"./slices/basketSlice.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvc3RvcmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFrRDtBQUNBO0FBRTNDLE1BQU1FLFFBQVFGLGdFQUFjQSxDQUFDO0lBQ2xDRyxTQUFTO1FBQ1BDLFFBQVFILDJEQUFhQTtJQUN2QjtBQUNGLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWF6b24tY2xvbmUvLi9hcHAvc3RvcmUuanM/Y2FlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCBiYXNrZXRSZWR1Y2VyIGZyb20gXCIuLi9zbGljZXMvYmFza2V0U2xpY2VcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcclxuICByZWR1Y2VyOiB7XHJcbiAgICBiYXNrZXQ6IGJhc2tldFJlZHVjZXIsXHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImJhc2tldFJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJiYXNrZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./app/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/store */ \"./app/store.js\");\n\n\n\n\n\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n            store: _app_store__WEBPACK_IMPORTED_MODULE_4__.store,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"E:\\\\amazon-clone\\\\pages\\\\_app.js\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"E:\\\\amazon-clone\\\\pages\\\\_app.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\amazon-clone\\\\pages\\\\_app.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNtQjtBQUNYO0FBQ0Y7QUFFdEIsU0FBU0csSUFBSSxFQUMxQkMsVUFBUyxFQUNUQyxXQUFXLEVBQUVDLFFBQU8sRUFBRSxHQUFHRCxXQUFXLEdBQ3JDLEVBQUU7SUFDRCxxQkFDRSw4REFBQ0wsNERBQWVBO1FBQUNNLFNBQVNBO2tCQUN4Qiw0RUFBQ0wsaURBQVFBO1lBQUNDLE9BQU9BLDZDQUFLQTtzQkFDcEIsNEVBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FtYXpvbi1jbG9uZS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHAvc3RvcmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHtcbiAgQ29tcG9uZW50LFxuICBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNlc3Npb25Qcm92aWRlciIsIlByb3ZpZGVyIiwic3RvcmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./slices/basketSlice.js":
/*!*******************************!*\
  !*** ./slices/basketSlice.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToBasket\": () => (/* binding */ addToBasket),\n/* harmony export */   \"basketSlice\": () => (/* binding */ basketSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeFromBasket\": () => (/* binding */ removeFromBasket),\n/* harmony export */   \"selectItems\": () => (/* binding */ selectItems),\n/* harmony export */   \"selectTotal\": () => (/* binding */ selectTotal)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    items: []\n};\nconst basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"basket\",\n    initialState,\n    reducers: {\n        //actions\n        addToBasket: (state, action)=>{\n            // state.items.push(action.payload)\n            //or\n            state.items = [\n                ...state.items,\n                action.payload\n            ];\n        },\n        removeFromBasket: (state, action)=>{\n            // filter will remove all item with passed id but here we only want to remove one item with that particular id so used splice\n            // gets index of >=0 if it finds , but gets -1 if it could not find\n            const index = state.items.findIndex((basketItem)=>basketItem.id === action.payload.id);\n            let newBasket = [\n                ...state.items\n            ];\n            if (index >= 0) {\n                //the item exists in the basket, remove it\n                newBasket.splice(index, 1);\n            } else {\n                // item dont exists\n                console.warn(`Can't remove product (id:${action.payload.id}) as it is not in your basket`);\n            }\n            state.items = newBasket;\n        }\n    }\n});\nconst { addToBasket , removeFromBasket  } = basketSlice.actions;\n//selectors\nconst selectItems = (state)=>state.basket.items;\nconst selectTotal = (state)=>state.basket.items.reduce((total, item)=>{\n        total += item.price;\n        return total;\n    }, 0);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basketSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zbGljZXMvYmFza2V0U2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsZUFBZTtJQUNuQkMsT0FBTyxFQUFFO0FBQ1g7QUFFTyxNQUFNQyxjQUFjSCw2REFBV0EsQ0FBQztJQUNyQ0ksTUFBTTtJQUNOSDtJQUNBSSxVQUFVO1FBQ1IsU0FBUztRQUNUQyxhQUFhLENBQUNDLE9BQU9DLFNBQVc7WUFDOUIsbUNBQW1DO1lBQ25DLElBQUk7WUFDSkQsTUFBTUwsS0FBSyxHQUFHO21CQUFJSyxNQUFNTCxLQUFLO2dCQUFFTSxPQUFPQyxPQUFPO2FBQUM7UUFDaEQ7UUFDQUMsa0JBQWtCLENBQUNILE9BQU9DLFNBQVc7WUFDbkMsNkhBQTZIO1lBRTdILG1FQUFtRTtZQUNuRSxNQUFNRyxRQUFRSixNQUFNTCxLQUFLLENBQUNVLFNBQVMsQ0FDakMsQ0FBQ0MsYUFBZUEsV0FBV0MsRUFBRSxLQUFLTixPQUFPQyxPQUFPLENBQUNLLEVBQUU7WUFHckQsSUFBSUMsWUFBWTttQkFBSVIsTUFBTUwsS0FBSzthQUFDO1lBRWhDLElBQUlTLFNBQVMsR0FBRztnQkFDZCwwQ0FBMEM7Z0JBQzFDSSxVQUFVQyxNQUFNLENBQUNMLE9BQU87WUFDMUIsT0FBTztnQkFDTCxtQkFBbUI7Z0JBQ25CTSxRQUFRQyxJQUFJLENBQ1YsQ0FBQyx5QkFBeUIsRUFBRVYsT0FBT0MsT0FBTyxDQUFDSyxFQUFFLENBQUMsNkJBQTZCLENBQUM7WUFFaEYsQ0FBQztZQUVEUCxNQUFNTCxLQUFLLEdBQUdhO1FBQ2hCO0lBQ0Y7QUFDRixHQUFHO0FBRUksTUFBTSxFQUFFVCxZQUFXLEVBQUVJLGlCQUFnQixFQUFFLEdBQUdQLFlBQVlnQixPQUFPLENBQUM7QUFFckUsV0FBVztBQUNKLE1BQU1DLGNBQWMsQ0FBQ2IsUUFBVUEsTUFBTWMsTUFBTSxDQUFDbkIsS0FBSyxDQUFDO0FBQ2xELE1BQU1vQixjQUFjLENBQUNmLFFBQzFCQSxNQUFNYyxNQUFNLENBQUNuQixLQUFLLENBQUNxQixNQUFNLENBQUMsQ0FBQ0MsT0FBT0MsT0FBUztRQUN6Q0QsU0FBU0MsS0FBS0MsS0FBSztRQUNuQixPQUFPRjtJQUNULEdBQUcsR0FBRztBQUVSLGlFQUFlckIsWUFBWXdCLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FtYXpvbi1jbG9uZS8uL3NsaWNlcy9iYXNrZXRTbGljZS5qcz8xMjZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJiYXNrZXRcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIC8vYWN0aW9uc1xyXG4gICAgYWRkVG9CYXNrZXQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIC8vIHN0YXRlLml0ZW1zLnB1c2goYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgIC8vb3JcclxuICAgICAgc3RhdGUuaXRlbXMgPSBbLi4uc3RhdGUuaXRlbXMsIGFjdGlvbi5wYXlsb2FkXTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVGcm9tQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAvLyBmaWx0ZXIgd2lsbCByZW1vdmUgYWxsIGl0ZW0gd2l0aCBwYXNzZWQgaWQgYnV0IGhlcmUgd2Ugb25seSB3YW50IHRvIHJlbW92ZSBvbmUgaXRlbSB3aXRoIHRoYXQgcGFydGljdWxhciBpZCBzbyB1c2VkIHNwbGljZVxyXG5cclxuICAgICAgLy8gZ2V0cyBpbmRleCBvZiA+PTAgaWYgaXQgZmluZHMgLCBidXQgZ2V0cyAtMSBpZiBpdCBjb3VsZCBub3QgZmluZFxyXG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChcclxuICAgICAgICAoYmFza2V0SXRlbSkgPT4gYmFza2V0SXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWRcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGxldCBuZXdCYXNrZXQgPSBbLi4uc3RhdGUuaXRlbXNdO1xyXG5cclxuICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAvL3RoZSBpdGVtIGV4aXN0cyBpbiB0aGUgYmFza2V0LCByZW1vdmUgaXRcclxuICAgICAgICBuZXdCYXNrZXQuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBpdGVtIGRvbnQgZXhpc3RzXHJcbiAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgYENhbid0IHJlbW92ZSBwcm9kdWN0IChpZDoke2FjdGlvbi5wYXlsb2FkLmlkfSkgYXMgaXQgaXMgbm90IGluIHlvdXIgYmFza2V0YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN0YXRlLml0ZW1zID0gbmV3QmFza2V0O1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IGFkZFRvQmFza2V0LCByZW1vdmVGcm9tQmFza2V0IH0gPSBiYXNrZXRTbGljZS5hY3Rpb25zO1xyXG5cclxuLy9zZWxlY3RvcnNcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEl0ZW1zID0gKHN0YXRlKSA9PiBzdGF0ZS5iYXNrZXQuaXRlbXM7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RUb3RhbCA9IChzdGF0ZSkgPT5cclxuICBzdGF0ZS5iYXNrZXQuaXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4ge1xyXG4gICAgdG90YWwgKz0gaXRlbS5wcmljZTtcclxuICAgIHJldHVybiB0b3RhbDtcclxuICB9LCAwKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJhc2tldFNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsIml0ZW1zIiwiYmFza2V0U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0Jhc2tldCIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInJlbW92ZUZyb21CYXNrZXQiLCJpbmRleCIsImZpbmRJbmRleCIsImJhc2tldEl0ZW0iLCJpZCIsIm5ld0Jhc2tldCIsInNwbGljZSIsImNvbnNvbGUiLCJ3YXJuIiwiYWN0aW9ucyIsInNlbGVjdEl0ZW1zIiwiYmFza2V0Iiwic2VsZWN0VG90YWwiLCJyZWR1Y2UiLCJ0b3RhbCIsIml0ZW0iLCJwcmljZSIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./slices/basketSlice.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();