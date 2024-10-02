"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfront"] = self["webpackChunkfront"] || []).push([["src_components_pages_task_taskComp_codeEditor_tsx"],{

/***/ "./src/components/pages/task/taskComp/codeEditor.tsx":
/*!***********************************************************!*\
  !*** ./src/components/pages/task/taskComp/codeEditor.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @monaco-editor/react */ \"./node_modules/@monaco-editor/react/dist/index.mjs\");\n\n\nconst MyEditor = () => {\n    const [codeText, setText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n    const handleEditorChange = (value, event) => {\n        setText(value);\n    };\n    let defaultText = \"int main(123)\";\n    const editor = { language: \"python\", defaultValue: \"илюха лох\" };\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: 'CodeEditor' },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { height: \"50vh\", width: \"50vh\", defaultLanguage: editor.language, defaultValue: editor.defaultValue, onChange: handleEditorChange }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { onClick: () => { console.log(codeText); } }, \"send\")));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyEditor);\n\n\n//# sourceURL=webpack://front/./src/components/pages/task/taskComp/codeEditor.tsx?");

/***/ })

}]);