import"./buttonup-362421b2.js";import"./modal-windows-37b9c303.js";import"./sliders-ebd5b5d6.js";import"https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";(function(e){typeof e.matches!="function"&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(r){for(var t=this,l=(t.document||t.ownerDocument).querySelectorAll(r),c=0;l[c]&&l[c]!==t;)++c;return Boolean(l[c])}),typeof e.closest!="function"&&(e.closest=function(r){for(var t=this;t&&t.nodeType===1;){if(t.matches(r))return t;t=t.parentNode}return null})})(window.Element.prototype);document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".js-open-modal"),r=document.querySelector(".js-overlay-modal"),t=document.querySelectorAll(".js-modal-close");e.forEach(function(l){l.addEventListener("click",function(c){c.preventDefault();var o=this.getAttribute("data-modal"),n=document.querySelector('.modal[data-modal="'+o+'"]');n.classList.add("active"),r.classList.add("active")})}),t.forEach(function(l){l.addEventListener("click",function(c){var o=this.closest(".modal");o.classList.remove("active"),r.classList.remove("active")})}),document.body.addEventListener("keyup",function(l){var c=l.keyCode;c==27&&(document.querySelector(".modal.active").classList.remove("active"),document.querySelector(".overlay").classList.remove("active"))},!1),r.addEventListener("click",function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")})});function f(e){let r=document.querySelectorAll(e.selectorImage),t=document.querySelector(e.selectorSliderLine),l=document.querySelector(e.selectorKeyNext),c=document.querySelector(e.selectorKeyPrev),o=0,n=0,d=0,s={};function u(){d=document.querySelector(e.selectorSlider).offsetWidth,n=0;let i={374:20,662:34,875:87,930:34,1143:86};s={};let a=20;a=i[d]?i[d]:a,r.forEach((y,v)=>{s[v]=y.clientWidth+a,n+=s[v]}),s[o],t.style.width=n+"px",m()}window.addEventListener("resize",u),u(),l.addEventListener("click",()=>{o++,o>=r.length&&(o=0),m()}),c.addEventListener("click",()=>{o--,o<0&&(o=r.length-1),m()});function m(){let i=0;for(let a in s){if(a>=o)break;i-=s[a]}e.reverse&&(i=-(n-d+i)),t.style.transform="translate("+i+"px)"}}const S={selectorSlider:".door-slider",selectorImage:".door-img",selectorSliderLine:".door-slider-list",selectorKeyNext:".door-btn-next",selectorKeyPrev:".door-btn-prev",reverse:!1};f(S);const h={selectorSlider:".hotel-slider-max",selectorImage:".hotel-img-max",selectorSliderLine:".service-img-list",selectorKeyNext:".icon-right",selectorKeyPrev:".icon-left",reverse:!0};f(h);
