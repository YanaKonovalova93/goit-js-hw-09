!function(){var t=document.body,e=document.querySelector("BUTTON[data-start]"),n=document.querySelector("BUTTON[data-stop]"),a=null;e.addEventListener("click",(function(){a=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.setAttribute("disabled","disabled")})),n.addEventListener("click",(function(){clearInterval(a),e.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.822f5352.js.map
