"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_components_pages_task_taskComp_task_tsx"],{

/***/ "./src/components/pages/task/taskComp/task.tsx":
/*!*****************************************************!*\
  !*** ./src/components/pages/task/taskComp/task.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CodeEditor = (0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(() => Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_monaco-editor_react_dist_index_mjs\"), __webpack_require__.e(\"src_components_pages_task_taskComp_codeEditor_tsx\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./codeEditor */ \"./src/components/pages/task/taskComp/codeEditor.tsx\")));\nconst Task = () => {\n    const [code, setCode] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('// Ваш код здесь');\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"task\"),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CodeEditor, null)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n\n//# sourceURL=webpack://front/./src/components/pages/task/taskComp/task.tsx?");

/***/ })

}]);