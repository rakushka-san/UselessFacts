(()=>{"use strict";var e,t,n,o,r={469:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ApiService=void 0,t.ApiService=function(){function e(){}return e.getFact=function(){return fetch(this.URL).then((function(e){return e.json()})).then((function(e){return e.text}))},e.URL="https://uselessfacts.jsph.pl/api/v2/facts/random",e}()},671:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.print=void 0,t.print=function(e,t,n,o,r){var i=0,u=setInterval((function(){i===t.length-1&&(clearInterval(u),void 0!==r&&r()),void 0!==o&&o(),e.innerHTML=e.innerHTML+t[i],i++,e.scrollIntoView(!1)}),void 0!==n?85:n)}},133:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Utils=void 0;var n=function(){function e(){}return e.arrayRandElement=function(e){return e[Math.floor(Math.random()*e.length)]},e}();t.Utils=n}},i={};function u(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return r[e](n,n.exports,u),n.exports}e=u(469),t=u(133),n=u(671),o=function(){function o(){}return o.init=function(){o.quote.addEventListener("click",o.setQuote),o.setQuote();for(var e=0;e<o.audioNum;e++)o.audioPaths.push("audio/key".concat(e,".mp3"));console.log(o.audioPaths)},o.setQuote=function(){e.ApiService.getFact().then((function(e){o.quote.innerHTML="",o.quote.removeEventListener("click",o.setQuote),clearInterval(o.blinkInterval),o.cursor.classList.remove("hidden"),(0,n.print)(o.quote,e,60,(function(){var e=t.Utils.arrayRandElement(o.audioPaths);new Audio(e).play()}),(function(){o.blinkInterval=setInterval((function(){o.cursor.classList.contains("hidden")?o.cursor.classList.remove("hidden"):o.cursor.classList.add("hidden")}),500),o.quote.addEventListener("click",o.setQuote)}))}))},o.quote=document.querySelector("#quote"),o.cursor=document.querySelector("#cursor"),o.audioPaths=[],o.audioNum=5,o}(),document.addEventListener("DOMContentLoaded",o.init)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJ1QkFBQSxFQUNBLEVBQ0EsRUFFQSxFLG9GQ0pBLHFDQVFBLFFBTFcsRUFBQUEsUUFBUCxXQUNJLE9BQU9DLE1BQU1DLEtBQUtDLEtBQ2JDLE1BQUssU0FBQUMsR0FBWSxPQUFBQSxFQUFTQyxNQUFULElBQ2pCRixNQUFLLFNBQUFFLEdBQVEsT0FBQUEsRUFBS0MsSUFBTCxHQUN0QixFQU5PLEVBQUFKLElBQWMsbURBT3pCLEMsQ0FSQSxFLDhFQ0FBLGlCQUFzQkssRUFBYUQsRUFBY0UsRUFBWUMsRUFBZ0JDLEdBQ3pFLElBQUlDLEVBQWdCLEVBQ2RDLEVBQWdCQyxhQUFZLFdBQzFCRixJQUFVTCxFQUFLUSxPQUFTLElBQ3hCQyxjQUFjSCxRQUVHSSxJQUFiTixHQUNBQSxVQUlTTSxJQUFiUCxHQUNBQSxJQUdKRixFQUFHVSxVQUFZVixFQUFHVSxVQUFZWCxFQUFLSyxHQUNuQ0EsSUFDQUosRUFBR1csZ0JBQWUsRUFDdEIsUUFBV0YsSUFBUFIsRUFBbUIsR0FBS0EsRUFDaEMsQyw4RUNuQkEsOEJBS0EsUUFKVyxFQUFBVyxpQkFBUCxTQUF3QkMsR0FFcEIsT0FBT0EsRUFETUMsS0FBS0MsTUFBTUQsS0FBS0UsU0FBV0gsRUFBSU4sUUFFaEQsRUFDSixFQUxBLEdBQWEsRUFBQVUsTUFBQUEsQyxHQ0NUQyxFQUEyQixDQUFDLEVBR2hDLFNBQVNDLEVBQW9CQyxHQUU1QixJQUFJQyxFQUFlSCxFQUF5QkUsR0FDNUMsUUFBcUJYLElBQWpCWSxFQUNILE9BQU9BLEVBQWFDLFFBR3JCLElBQUlDLEVBQVNMLEVBQXlCRSxHQUFZLENBR2pERSxRQUFTLENBQUMsR0FPWCxPQUhBRSxFQUFvQkosR0FBVUcsRUFBUUEsRUFBT0QsUUFBU0gsR0FHL0NJLEVBQU9ELE9BQ2YsQ0p0QkEsU0FDQSxTQUNBLFNBRUEsMEJBMENBLFFBbkNrQixFQUFBRyxLQUFkLFdBQ0lDLEVBQUlDLE1BQU1DLGlCQUFpQixRQUFTRixFQUFJRyxVQUN4Q0gsRUFBSUcsV0FFSixJQUFLLElBQUl6QixFQUFRLEVBQUdBLEVBQVFzQixFQUFJSSxTQUFVMUIsSUFDdENzQixFQUFJSyxXQUFXQyxLQUFLLG1CQUFZNUIsRUFBSyxTQUd6QzZCLFFBQVFDLElBQUlSLEVBQUlLLFdBQ3BCLEVBRWUsRUFBQUYsU0FBZixXQUNJLEVBQUFNLFdBQVczQyxVQUFVSSxNQUFLLFNBQUFHLEdBQ3RCMkIsRUFBSUMsTUFBTWpCLFVBQVksR0FDdEJnQixFQUFJQyxNQUFNUyxvQkFBb0IsUUFBU1YsRUFBSUcsVUFFM0NyQixjQUFja0IsRUFBSVcsZUFDbEJYLEVBQUlZLE9BQU9DLFVBQVVDLE9BQU8sV0FFNUIsSUFBQUMsT0FBTWYsRUFBSUMsTUFBTzVCLEVBQU0sSUFBSSxXQUN2QixJQUFNMkMsRUFBWSxFQUFBekIsTUFBTUwsaUJBQWlCYyxFQUFJSyxZQUM1QixJQUFJWSxNQUFNRCxHQUNsQkUsTUFDYixJQUFHLFdBQ0NsQixFQUFJVyxjQUFnQi9CLGFBQVksV0FDeEJvQixFQUFJWSxPQUFPQyxVQUFVTSxTQUFTLFVBQzlCbkIsRUFBSVksT0FBT0MsVUFBVUMsT0FBTyxVQUU1QmQsRUFBSVksT0FBT0MsVUFBVU8sSUFBSSxTQUVqQyxHQUFHLEtBQ0hwQixFQUFJQyxNQUFNQyxpQkFBaUIsUUFBU0YsRUFBSUcsU0FDNUMsR0FDSixHQUNKLEVBdkNlLEVBQUFGLE1BQWlCb0IsU0FBU0MsY0FBYyxVQUN4QyxFQUFBVixPQUFrQlMsU0FBU0MsY0FBYyxXQUN6QyxFQUFBakIsV0FBNEIsR0FDNUIsRUFBQUQsU0FBbUIsRUFxQ3RDLEMsQ0ExQ0EsR0E0Q0FpQixTQUFTbkIsaUJBQWlCLG1CQUFvQkYsRUFBSUQsSyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZWxlc3NmYWN0cy8uL2Fzc2V0cy90cy9hcHAudHMiLCJ3ZWJwYWNrOi8vdXNlbGVzc2ZhY3RzLy4vYXNzZXRzL3RzL2FwaS5zZXJ2aWNlLnRzIiwid2VicGFjazovL3VzZWxlc3NmYWN0cy8uL2Fzc2V0cy90cy9wcmludC50cyIsIndlYnBhY2s6Ly91c2VsZXNzZmFjdHMvLi9hc3NldHMvdHMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vdXNlbGVzc2ZhY3RzL3dlYnBhY2svYm9vdHN0cmFwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXRpbHMgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgcHJpbnQgfSBmcm9tICcuL3ByaW50JztcclxuXHJcbmNsYXNzIEFwcCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBibGlua0ludGVydmFsOiBOb2RlSlMuVGltZXI7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBxdW90ZTogRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdW90ZScpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3Vyc29yOiBFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnNvcicpO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXVkaW9QYXRoczogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXVkaW9OdW06IG51bWJlciA9IDU7XHJcbiAgICBcclxuICAgIHB1YmxpYyBzdGF0aWMgaW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBBcHAucXVvdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBBcHAuc2V0UXVvdGUpO1xyXG4gICAgICAgIEFwcC5zZXRRdW90ZSgpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgQXBwLmF1ZGlvTnVtOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIEFwcC5hdWRpb1BhdGhzLnB1c2goYGF1ZGlvL2tleSR7aW5kZXh9Lm1wM2ApOyAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coQXBwLmF1ZGlvUGF0aHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHNldFF1b3RlKCk6IHZvaWQge1xyXG4gICAgICAgIEFwaVNlcnZpY2UuZ2V0RmFjdCgpLnRoZW4odGV4dCA9PiB7XHJcbiAgICAgICAgICAgIEFwcC5xdW90ZS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgQXBwLnF1b3RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnNldFF1b3RlKTtcclxuXHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoQXBwLmJsaW5rSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICBBcHAuY3Vyc29yLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG5cclxuICAgICAgICAgICAgcHJpbnQoQXBwLnF1b3RlLCB0ZXh0LCA2MCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXVkaW9QYXRoID0gVXRpbHMuYXJyYXlSYW5kRWxlbWVudChBcHAuYXVkaW9QYXRocyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlTb3VuZCA9IG5ldyBBdWRpbyhhdWRpb1BhdGgpO1xyXG4gICAgICAgICAgICAgICAga2V5U291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBcHAuYmxpbmtJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQXBwLmN1cnNvci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5jdXJzb3IuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLmN1cnNvci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xyXG4gICAgICAgICAgICAgICAgQXBwLnF1b3RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQXBwLnNldFF1b3RlKTtcclxuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgQXBwLmluaXQpOyIsImV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcclxuICAgIHN0YXRpYyBVUkw6IHN0cmluZyA9ICdodHRwczovL3VzZWxlc3NmYWN0cy5qc3BoLnBsL2FwaS92Mi9mYWN0cy9yYW5kb20nO1xyXG5cclxuICAgIHN0YXRpYyBnZXRGYWN0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKHRoaXMuVVJMKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ganNvbi50ZXh0KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBwcmludChlbDogRWxlbWVudCwgdGV4dDogc3RyaW5nLCBtcz86bnVtYmVyLCBvblN5bWJvbD86IGFueSwgb25GaW5pc2g/OiBhbnkpIHtcclxuICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcclxuICAgIGNvbnN0IHByaW50SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSB0ZXh0Lmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChwcmludEludGVydmFsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChvbkZpbmlzaCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBvbkZpbmlzaCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob25TeW1ib2wgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvblN5bWJvbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MICsgdGV4dFtpbmRleF07XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgICAgICBlbC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XHJcbiAgICB9LCAobXMgIT09IHVuZGVmaW5lZCA/IDg1IDogbXMpKTtcclxufSIsImV4cG9ydCBjbGFzcyBVdGlscyB7XHJcbiAgICBzdGF0aWMgYXJyYXlSYW5kRWxlbWVudChhcnI6IEFycmF5PGFueT4pOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gYXJyW3JhbmRdO1xyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiJdLCJuYW1lcyI6WyJnZXRGYWN0IiwiZmV0Y2giLCJ0aGlzIiwiVVJMIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInRleHQiLCJlbCIsIm1zIiwib25TeW1ib2wiLCJvbkZpbmlzaCIsImluZGV4IiwicHJpbnRJbnRlcnZhbCIsInNldEludGVydmFsIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsInNjcm9sbEludG9WaWV3IiwiYXJyYXlSYW5kRWxlbWVudCIsImFyciIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsIlV0aWxzIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJpbml0IiwiQXBwIiwicXVvdGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0UXVvdGUiLCJhdWRpb051bSIsImF1ZGlvUGF0aHMiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIkFwaVNlcnZpY2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYmxpbmtJbnRlcnZhbCIsImN1cnNvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsInByaW50IiwiYXVkaW9QYXRoIiwiQXVkaW8iLCJwbGF5IiwiY29udGFpbnMiLCJhZGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9