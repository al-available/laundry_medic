/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/service.css"
/*!*****************************!*\
  !*** ./src/css/service.css ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3NzL3NlcnZpY2UuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdW5kcnlfbWVkaWMvLi9zcmMvY3NzL3NlcnZpY2UuY3NzPzlmNWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/css/service.css\n\n}");

/***/ },

/***/ "./src/navbar.js"
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navBar: () => (/* binding */ navBar)\n/* harmony export */ });\n\nfunction navBar (){\nconst openMenu = document.getElementById(\"openMenu\");\nconst closeMenu = document.getElementById(\"closeMenu\");\nconst mobileMenu = document.getElementById(\"mobileMenu\");\n\nopenMenu.addEventListener(\"click\", () => {\n  mobileMenu.classList.add(\"active\");\n});\n\ncloseMenu.addEventListener(\"click\", () => {\n  mobileMenu.classList.remove(\"active\");\n});\n\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbmF2YmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXVuZHJ5X21lZGljLy4vc3JjL25hdmJhci5qcz81NTc5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gbmF2QmFyICgpe1xuY29uc3Qgb3Blbk1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5NZW51XCIpO1xuY29uc3QgY2xvc2VNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZU1lbnVcIik7XG5jb25zdCBtb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2JpbGVNZW51XCIpO1xuXG5vcGVuTWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBtb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59KTtcblxuY2xvc2VNZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG1vYmlsZU1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn0pO1xuXG59XG5leHBvcnR7bmF2QmFyfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/navbar.js\n\n}");

/***/ },

/***/ "./src/service.js"
/*!************************!*\
  !*** ./src/service.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_service_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/service.css */ \"./src/css/service.css\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"./src/navbar.js\");\n\n\n// navigation bar \n\n(0,_navbar__WEBPACK_IMPORTED_MODULE_1__.navBar)()\n\n\n\nconst popup = document.getElementById(\"pricingPopup\");\nconst openBtn = document.getElementById(\"openPopup\");\nconst closeBtn = document.getElementById(\"closePopup\");\nconst overlay = document.querySelector(\".pricing-popup__overlay\");\n\nopenBtn.addEventListener(\"click\", () => {\n  popup.classList.add(\"active\");\n  document.body.style.overflow = \"hidden\";\n});\n\nconst closePopup = () => {\n  popup.classList.remove(\"active\");\n  document.body.style.overflow = \"auto\";\n};\n\ncloseBtn.addEventListener(\"click\", closePopup);\noverlay.addEventListener(\"click\", closePopup);\n\ndocument.addEventListener(\"keydown\", (e) => {\n  if (e.key === \"Escape\") {\n    closePopup();\n  }\n});\n\n\n\nconst pricingModal = document.getElementById(\"pricingModal\");\nconst openPricingModal = document.getElementById(\"openIroningModal\");\nconst closePricingModal = document.getElementById(\"closePricingModal\");\n\nopenPricingModal.addEventListener(\"click\", () => {\n  pricingModal.classList.add(\"active\");\n  document.body.style.overflow = \"hidden\";\n});\n\nclosePricingModal.addEventListener(\"click\", () => {\n  pricingModal.classList.remove(\"active\");\n  document.body.style.overflow = \"auto\";\n});\n\npricingModal.addEventListener(\"click\", (e) => {\n  if(e.target === pricingModal){\n    pricingModal.classList.remove(\"active\");\n    document.body.style.overflow = \"auto\";\n  }\n});\n\n\nconst dryCleaningModal = document.getElementById(\"dryCleaningModal\");\nconst openDryCleaningModal = document.getElementById(\"openDryCleaningModal\");\nconst closeDryCleaningModal = document.getElementById(\"closeDryCleaningModal\");\n\nopenDryCleaningModal.addEventListener(\"click\", () => {\n  dryCleaningModal.classList.add(\"active\");\n  document.body.style.overflow = \"hidden\";\n});\n\ncloseDryCleaningModal.addEventListener(\"click\", () => {\n  dryCleaningModal.classList.remove(\"active\");\n  document.body.style.overflow = \"auto\";\n});\n\ndryCleaningModal.addEventListener(\"click\", (e) => {\n  if(e.target === dryCleaningModal){\n    dryCleaningModal.classList.remove(\"active\");\n    document.body.style.overflow = \"auto\";\n  }\n});\n\n\nconst fabricCarePricingModal = document.getElementById(\n  'fabricCarePricingModal'\n);\n\nconst openFabricCarePricing = document.getElementById(\n  'openFabricCarePricing'\n);\n\nconst closeFabricCarePricing = document.getElementById(\n  'closeFabricCarePricing'\n);\n\nopenFabricCarePricing.addEventListener('click', () => {\n  fabricCarePricingModal.classList.add('active');\n});\n\ncloseFabricCarePricing.addEventListener('click', () => {\n  fabricCarePricingModal.classList.remove('active');\n});\n\nfabricCarePricingModal.addEventListener('click', (event) => {\n\n  if(event.target === fabricCarePricingModal){\n    fabricCarePricingModal.classList.remove('active');\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBMEI7O0FBRTFCO0FBQ2lDO0FBQ2pDLCtDQUFNOzs7O0FBSU47QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF1bmRyeV9tZWRpYy8uL3NyYy9zZXJ2aWNlLmpzP2JhNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Nzcy9zZXJ2aWNlLmNzcydcblxuLy8gbmF2aWdhdGlvbiBiYXIgXG5pbXBvcnQgeyBuYXZCYXIgfSBmcm9tICcuL25hdmJhcidcbm5hdkJhcigpXG5cblxuXG5jb25zdCBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpY2luZ1BvcHVwXCIpO1xuY29uc3Qgb3BlbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3BlblBvcHVwXCIpO1xuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlUG9wdXBcIik7XG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmljaW5nLXBvcHVwX19vdmVybGF5XCIpO1xuXG5vcGVuQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xufSk7XG5cbmNvbnN0IGNsb3NlUG9wdXAgPSAoKSA9PiB7XG4gIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcbn07XG5cbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVBvcHVwKTtcbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlUG9wdXApO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcbiAgICBjbG9zZVBvcHVwKCk7XG4gIH1cbn0pO1xuXG5cblxuY29uc3QgcHJpY2luZ01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmljaW5nTW9kYWxcIik7XG5jb25zdCBvcGVuUHJpY2luZ01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvcGVuSXJvbmluZ01vZGFsXCIpO1xuY29uc3QgY2xvc2VQcmljaW5nTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlUHJpY2luZ01vZGFsXCIpO1xuXG5vcGVuUHJpY2luZ01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHByaWNpbmdNb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbn0pO1xuXG5jbG9zZVByaWNpbmdNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcmljaW5nTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xufSk7XG5cbnByaWNpbmdNb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYoZS50YXJnZXQgPT09IHByaWNpbmdNb2RhbCl7XG4gICAgcHJpY2luZ01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICB9XG59KTtcblxuXG5jb25zdCBkcnlDbGVhbmluZ01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcnlDbGVhbmluZ01vZGFsXCIpO1xuY29uc3Qgb3BlbkRyeUNsZWFuaW5nTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9wZW5EcnlDbGVhbmluZ01vZGFsXCIpO1xuY29uc3QgY2xvc2VEcnlDbGVhbmluZ01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjbG9zZURyeUNsZWFuaW5nTW9kYWxcIik7XG5cbm9wZW5EcnlDbGVhbmluZ01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRyeUNsZWFuaW5nTW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG59KTtcblxuY2xvc2VEcnlDbGVhbmluZ01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRyeUNsZWFuaW5nTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xufSk7XG5cbmRyeUNsZWFuaW5nTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmKGUudGFyZ2V0ID09PSBkcnlDbGVhbmluZ01vZGFsKXtcbiAgICBkcnlDbGVhbmluZ01vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xuICB9XG59KTtcblxuXG5jb25zdCBmYWJyaWNDYXJlUHJpY2luZ01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICdmYWJyaWNDYXJlUHJpY2luZ01vZGFsJ1xuKTtcblxuY29uc3Qgb3BlbkZhYnJpY0NhcmVQcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICdvcGVuRmFicmljQ2FyZVByaWNpbmcnXG4pO1xuXG5jb25zdCBjbG9zZUZhYnJpY0NhcmVQcmljaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICdjbG9zZUZhYnJpY0NhcmVQcmljaW5nJ1xuKTtcblxub3BlbkZhYnJpY0NhcmVQcmljaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBmYWJyaWNDYXJlUHJpY2luZ01vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSk7XG5cbmNsb3NlRmFicmljQ2FyZVByaWNpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGZhYnJpY0NhcmVQcmljaW5nTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59KTtcblxuZmFicmljQ2FyZVByaWNpbmdNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXG4gIGlmKGV2ZW50LnRhcmdldCA9PT0gZmFicmljQ2FyZVByaWNpbmdNb2RhbCl7XG4gICAgZmFicmljQ2FyZVByaWNpbmdNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfVxuXG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/service.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/service.js");
/******/ 	
/******/ })()
;