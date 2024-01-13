/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.scss":
/*!********************!*\
  !*** ./index.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ./index.scss */ "./index.scss");
let mainSound;
let volumeValue = 0.50;
let summerPlay = false;
let rainyPlay = false;
let winterPlay = false;
const background = document.querySelector(".background");
const summerCard = document.querySelector("#summerBlock");
const rainyCard = document.querySelector("#rainyBlock");
const winterCard = document.querySelector("#winterBlock");
const summerPlayer = document.querySelector("#summer");
const rainyPlayer = document.querySelector("#rainy");
const winterPlayer = document.querySelector("#winter");
const iconSummer = document.querySelector("#iconSummer");
const iconRainy = document.querySelector("#iconRainy");
const iconWinter = document.querySelector("#iconWinter");
const volume = document.getElementById("volume-slider");
const volumeInput = document.querySelectorAll("input[type='range'].inputVolume");
function PlayFunc(Player, play) {
    if (play === false) {
        Player.play();
        play = true;
    }
    else if (play === true) {
        Player.pause();
        play = false;
    }
    ;
    return play;
}
function GlobalPause() {
    summerPlayer.pause();
    rainyPlayer.pause();
    winterPlayer.pause();
    summerPlay = false;
    rainyPlay = false;
    winterPlay = false;
    iconSummer.src = "./assets/icons/sun.svg";
    iconRainy.src = "./assets/icons/cloud-rain.svg";
    iconWinter.src = "./assets/icons/cloud-snow.svg";
}
volume.addEventListener('change', function (e) {
    const target = e.target;
    if (mainSound !== undefined) {
        mainSound.volume = Number(target.value) / 100;
        volumeValue = Number(target.value) / 100;
    }
});
for (const input of volumeInput) {
    input.style.setProperty("--value", input.value);
    input.style.setProperty("--min", input.min === "" ? "0" : input.min);
    input.style.setProperty("--max", input.max === "" ? "100" : input.max);
    input.addEventListener("input", () => input.style.setProperty("--value", input.value));
}
summerCard.addEventListener("click", (event) => {
    event.preventDefault();
    background.className = "background summerImg";
    if (summerPlay === false) {
        GlobalPause();
    }
    ;
    mainSound = summerPlayer;
    summerPlay = PlayFunc(summerPlayer, summerPlay);
    summerPlayer.volume = volumeValue;
    iconSummer.src = summerPlay === true ? "./assets/icons/pause.svg" : "./assets/icons/sun.svg";
});
rainyCard.addEventListener("click", (event) => {
    event.preventDefault();
    background.className = "background rainyImg";
    if (rainyPlay === false) {
        GlobalPause();
    }
    ;
    mainSound = rainyPlayer;
    rainyPlay = PlayFunc(rainyPlayer, rainyPlay);
    rainyPlayer.volume = volumeValue;
    iconRainy.src = rainyPlay === true ? "./assets/icons/pause.svg" : "./assets/icons/cloud-rain.svg";
});
winterCard.addEventListener("click", (event) => {
    event.preventDefault();
    background.className = "background winterImg";
    if (winterPlay === false) {
        GlobalPause();
    }
    ;
    mainSound = winterPlayer;
    winterPlay = PlayFunc(winterPlayer, winterPlay);
    winterPlayer.volume = volumeValue;
    iconWinter.src = winterPlay === true ? "./assets/icons/pause.svg" : "./assets/icons/cloud-snow.svg";
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi40ZWMzMmE0N2IxNDYwN2I1OWRmMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7OztBQ05hO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFPLENBQUMsa0NBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vaW5kZXguc2Nzcz9hYjJmIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwiLi9pbmRleC5zY3NzXCIpO1xubGV0IG1haW5Tb3VuZDtcbmxldCB2b2x1bWVWYWx1ZSA9IDAuNTA7XG5sZXQgc3VtbWVyUGxheSA9IGZhbHNlO1xubGV0IHJhaW55UGxheSA9IGZhbHNlO1xubGV0IHdpbnRlclBsYXkgPSBmYWxzZTtcbmNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhY2tncm91bmRcIik7XG5jb25zdCBzdW1tZXJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdW1tZXJCbG9ja1wiKTtcbmNvbnN0IHJhaW55Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFpbnlCbG9ja1wiKTtcbmNvbnN0IHdpbnRlckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbnRlckJsb2NrXCIpO1xuY29uc3Qgc3VtbWVyUGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdW1tZXJcIik7XG5jb25zdCByYWlueVBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmFpbnlcIik7XG5jb25zdCB3aW50ZXJQbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dpbnRlclwiKTtcbmNvbnN0IGljb25TdW1tZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25TdW1tZXJcIik7XG5jb25zdCBpY29uUmFpbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25SYWlueVwiKTtcbmNvbnN0IGljb25XaW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ljb25XaW50ZXJcIik7XG5jb25zdCB2b2x1bWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInZvbHVtZS1zbGlkZXJcIik7XG5jb25zdCB2b2x1bWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJpbnB1dFt0eXBlPSdyYW5nZSddLmlucHV0Vm9sdW1lXCIpO1xuZnVuY3Rpb24gUGxheUZ1bmMoUGxheWVyLCBwbGF5KSB7XG4gICAgaWYgKHBsYXkgPT09IGZhbHNlKSB7XG4gICAgICAgIFBsYXllci5wbGF5KCk7XG4gICAgICAgIHBsYXkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChwbGF5ID09PSB0cnVlKSB7XG4gICAgICAgIFBsYXllci5wYXVzZSgpO1xuICAgICAgICBwbGF5ID0gZmFsc2U7XG4gICAgfVxuICAgIDtcbiAgICByZXR1cm4gcGxheTtcbn1cbmZ1bmN0aW9uIEdsb2JhbFBhdXNlKCkge1xuICAgIHN1bW1lclBsYXllci5wYXVzZSgpO1xuICAgIHJhaW55UGxheWVyLnBhdXNlKCk7XG4gICAgd2ludGVyUGxheWVyLnBhdXNlKCk7XG4gICAgc3VtbWVyUGxheSA9IGZhbHNlO1xuICAgIHJhaW55UGxheSA9IGZhbHNlO1xuICAgIHdpbnRlclBsYXkgPSBmYWxzZTtcbiAgICBpY29uU3VtbWVyLnNyYyA9IFwiLi9hc3NldHMvaWNvbnMvc3VuLnN2Z1wiO1xuICAgIGljb25SYWlueS5zcmMgPSBcIi4vYXNzZXRzL2ljb25zL2Nsb3VkLXJhaW4uc3ZnXCI7XG4gICAgaWNvbldpbnRlci5zcmMgPSBcIi4vYXNzZXRzL2ljb25zL2Nsb3VkLXNub3cuc3ZnXCI7XG59XG52b2x1bWUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICBpZiAobWFpblNvdW5kICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWFpblNvdW5kLnZvbHVtZSA9IE51bWJlcih0YXJnZXQudmFsdWUpIC8gMTAwO1xuICAgICAgICB2b2x1bWVWYWx1ZSA9IE51bWJlcih0YXJnZXQudmFsdWUpIC8gMTAwO1xuICAgIH1cbn0pO1xuZm9yIChjb25zdCBpbnB1dCBvZiB2b2x1bWVJbnB1dCkge1xuICAgIGlucHV0LnN0eWxlLnNldFByb3BlcnR5KFwiLS12YWx1ZVwiLCBpbnB1dC52YWx1ZSk7XG4gICAgaW5wdXQuc3R5bGUuc2V0UHJvcGVydHkoXCItLW1pblwiLCBpbnB1dC5taW4gPT09IFwiXCIgPyBcIjBcIiA6IGlucHV0Lm1pbik7XG4gICAgaW5wdXQuc3R5bGUuc2V0UHJvcGVydHkoXCItLW1heFwiLCBpbnB1dC5tYXggPT09IFwiXCIgPyBcIjEwMFwiIDogaW5wdXQubWF4KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4gaW5wdXQuc3R5bGUuc2V0UHJvcGVydHkoXCItLXZhbHVlXCIsIGlucHV0LnZhbHVlKSk7XG59XG5zdW1tZXJDYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGJhY2tncm91bmQuY2xhc3NOYW1lID0gXCJiYWNrZ3JvdW5kIHN1bW1lckltZ1wiO1xuICAgIGlmIChzdW1tZXJQbGF5ID09PSBmYWxzZSkge1xuICAgICAgICBHbG9iYWxQYXVzZSgpO1xuICAgIH1cbiAgICA7XG4gICAgbWFpblNvdW5kID0gc3VtbWVyUGxheWVyO1xuICAgIHN1bW1lclBsYXkgPSBQbGF5RnVuYyhzdW1tZXJQbGF5ZXIsIHN1bW1lclBsYXkpO1xuICAgIHN1bW1lclBsYXllci52b2x1bWUgPSB2b2x1bWVWYWx1ZTtcbiAgICBpY29uU3VtbWVyLnNyYyA9IHN1bW1lclBsYXkgPT09IHRydWUgPyBcIi4vYXNzZXRzL2ljb25zL3BhdXNlLnN2Z1wiIDogXCIuL2Fzc2V0cy9pY29ucy9zdW4uc3ZnXCI7XG59KTtcbnJhaW55Q2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTmFtZSA9IFwiYmFja2dyb3VuZCByYWlueUltZ1wiO1xuICAgIGlmIChyYWlueVBsYXkgPT09IGZhbHNlKSB7XG4gICAgICAgIEdsb2JhbFBhdXNlKCk7XG4gICAgfVxuICAgIDtcbiAgICBtYWluU291bmQgPSByYWlueVBsYXllcjtcbiAgICByYWlueVBsYXkgPSBQbGF5RnVuYyhyYWlueVBsYXllciwgcmFpbnlQbGF5KTtcbiAgICByYWlueVBsYXllci52b2x1bWUgPSB2b2x1bWVWYWx1ZTtcbiAgICBpY29uUmFpbnkuc3JjID0gcmFpbnlQbGF5ID09PSB0cnVlID8gXCIuL2Fzc2V0cy9pY29ucy9wYXVzZS5zdmdcIiA6IFwiLi9hc3NldHMvaWNvbnMvY2xvdWQtcmFpbi5zdmdcIjtcbn0pO1xud2ludGVyQ2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTmFtZSA9IFwiYmFja2dyb3VuZCB3aW50ZXJJbWdcIjtcbiAgICBpZiAod2ludGVyUGxheSA9PT0gZmFsc2UpIHtcbiAgICAgICAgR2xvYmFsUGF1c2UoKTtcbiAgICB9XG4gICAgO1xuICAgIG1haW5Tb3VuZCA9IHdpbnRlclBsYXllcjtcbiAgICB3aW50ZXJQbGF5ID0gUGxheUZ1bmMod2ludGVyUGxheWVyLCB3aW50ZXJQbGF5KTtcbiAgICB3aW50ZXJQbGF5ZXIudm9sdW1lID0gdm9sdW1lVmFsdWU7XG4gICAgaWNvbldpbnRlci5zcmMgPSB3aW50ZXJQbGF5ID09PSB0cnVlID8gXCIuL2Fzc2V0cy9pY29ucy9wYXVzZS5zdmdcIiA6IFwiLi9hc3NldHMvaWNvbnMvY2xvdWQtc25vdy5zdmdcIjtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9