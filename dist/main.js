!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"contentContainer",(function(){return r}));class o{constructor(e,t,n,o){this.title=e,this.description=t,this.due_date=n,this.priority=o}}const d=[];const r=document.getElementById("content");!function(){const e=document.createElement("div"),t=document.createElement("nav"),n=document.createElement("h1");n.textContent="Todo List";const i=document.createElement("div");i.id="button-container";const c=document.createElement("button");c.textContent="Add Item";const u=document.createElement("button");u.textContent="Show List",e.id="home-page",t.appendChild(n),i.appendChild(c),i.appendChild(u),t.appendChild(i),e.appendChild(t),r.appendChild(e),c.addEventListener("click",()=>{const e=function(){const e=document.createElement("form"),t=document.createElement("label"),n=document.createElement("input");n.type="text";const i=document.createElement("label"),c=document.createElement("input");c.type="text";const u=document.createElement("label"),l=document.createElement("input");l.type="text";const a=document.createElement("label"),p=document.createElement("input");p.type="text";const m=document.createElement("input");return m.type="submit",m.value="submit",t.textContent="Title",i.textContent="Description",u.textContent="Due Date",a.textContent="Priority",n.required=!0,c.required=!0,l.required=!0,p.required=!0,e.id="todo-form",n.id="todo-title",c.id="todo-description",l.id="todo-due-date",p.id="todo-priority",e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(c),e.appendChild(u),e.appendChild(l),e.appendChild(a),e.appendChild(p),e.appendChild(m),e.addEventListener("submit",e=>{const t=document.getElementById("todo-title").value,n=document.getElementById("todo-description").value,i=document.getElementById("todo-due-date").value,c=document.getElementById("todo-priority").value;e.preventDefault();const u=new o(t,n,i,c);var l;l=u,d.push(l),console.log(d),d.forEach(e=>{const t=document.createElement("div"),n=document.createElement("h1"),o=document.createElement("p"),d=document.createElement("p"),i=document.createElement("p");n.textContent=e.title,o.textContent=e.description,d.textContent=e.due_date,i.textContent=e.priority,t.appendChild(n),t.appendChild(o),t.appendChild(d),t.appendChild(i),r.appendChild(t)})}),e}();r.appendChild(e)})}()}]);