!function(){var t=document.body,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=null;e.addEventListener("click",(function(){o=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.setAttribute("disabled","disabled")})),n.addEventListener("click",(function(){clearInterval(o),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.04effc87.js.map
