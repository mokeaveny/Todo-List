!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"contentContainer",(function(){return i}));class o{constructor(e,t,n,o){this.title=e,this.description=t,this.due_date=n,this.priority=o}}const d=[];function r(){const e=document.createElement("div");e.id="current-container",d.forEach(t=>{const n=document.createElement("h1"),o=document.createElement("p"),d=document.createElement("p"),r=document.createElement("p");n.textContent=t.title,o.textContent=t.description,d.textContent=t.due_date,r.textContent=t.priority,e.appendChild(n),e.appendChild(o),e.appendChild(d),e.appendChild(r)});const t=document.getElementById("current-container");i.removeChild(t),i.appendChild(e)}const i=document.getElementById("content");!function(){const e=document.createElement("div"),t=document.createElement("nav"),n=document.createElement("h1");n.textContent="Todo List";const c=document.createElement("div");c.id="button-container";const u=document.createElement("button");u.textContent="Add Item";const l=document.createElement("button");l.textContent="Show List";const a=document.createElement("div");a.id="current-container",e.id="home-page",t.appendChild(n),c.appendChild(u),c.appendChild(l),t.appendChild(c),e.appendChild(t),i.appendChild(e),i.appendChild(a),u.addEventListener("click",()=>{const e=function(){const e=document.createElement("div"),t=document.createElement("form"),n=document.createElement("label"),r=document.createElement("input");r.type="text";const i=document.createElement("label"),c=document.createElement("input");c.type="text";const u=document.createElement("label"),l=document.createElement("input");l.type="text";const a=document.createElement("label"),p=document.createElement("input");p.type="text";const m=document.createElement("input");return m.type="submit",m.value="submit",n.textContent="Title",i.textContent="Description",u.textContent="Due Date",a.textContent="Priority",r.required=!0,c.required=!0,l.required=!0,p.required=!0,e.id="current-container",t.id="todo-form",r.id="todo-title",c.id="todo-description",l.id="todo-due-date",p.id="todo-priority",t.appendChild(n),t.appendChild(r),t.appendChild(i),t.appendChild(c),t.appendChild(u),t.appendChild(l),t.appendChild(a),t.appendChild(p),t.appendChild(m),e.appendChild(t),t.addEventListener("submit",e=>{const t=document.getElementById("todo-title").value,n=document.getElementById("todo-description").value,r=document.getElementById("todo-due-date").value,i=document.getElementById("todo-priority").value;e.preventDefault();const c=new o(t,n,r,i);var u;u=c,d.push(u),console.log(d)}),e}(),t=document.getElementById("current-container");i.removeChild(t),i.appendChild(e)}),l.addEventListener("click",r)}()}]);