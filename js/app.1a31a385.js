(function(){"use strict";var t={187:function(t,e,n){var r=n(144),o=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{attrs:{id:"app"}},[e(t.$route.meta?.layout||n.DefaultLayout,{tag:"component"},[e("router-view")],1)],1)},a=[],i=function(){var t=this,e=t._self._c,n=t._self._setupProxy;return e("div",{staticClass:"layout"},[e(n.TheHeader,[e(n.TheNavigation)],1),e("main",[t._t("default")],2)],1)},u=[],s=function(){var t=this,e=t._self._c;return e("nav",{staticClass:"navigation"},[e("ul",{staticClass:"navigation__list"},[e("li",{staticClass:"navigation__item"},[e("RouterLink",{staticClass:"navigation__link",attrs:{to:"/"}},[t._v("Главная")])],1),e("li",{staticClass:"navigation__item"},[e("RouterLink",{staticClass:"navigation__link",attrs:{to:"/tasks"}},[t._v("Задачи")])],1)])])},c=[],l=n(1),f={},d=(0,l.Z)(f,s,c,!1,null,"54916fca",null),m=d.exports,p=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[e("div",{staticClass:"header__container"},[t._t("default")],2)])},v=[],h={},g=(0,l.Z)(h,p,v,!1,null,"b91a771e",null),_=g.exports,y=(0,r.aZ)({__name:"DefaultLayout",setup:function(t){return{__sfc:!0,TheNavigation:m,TheHeader:_}}}),k=y,b=(0,l.Z)(k,i,u,!1,null,null,null),S=b.exports,E=(0,r.aZ)({__name:"App",setup:function(t){return{__sfc:!0,DefaultLayout:S}}}),L=E,T=(0,l.Z)(L,o,a,!1,null,null,null),A=T.exports,C=n(345),w=function(){var t=this;t._self._c;return t._m(0)},O=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-page"},[e("h1",[t._v("Менеджер задач")])])}],D={},P=(0,l.Z)(D,w,O,!1,null,"642e7d51",null),Z=P.exports;r.ZP.use(C.ZP);var N=[{path:"/",name:"home",component:Z,meta:{layout:S}},{path:"/tasks",name:"tasks",component:function(){return n.e(801).then(n.bind(n,801))},meta:{layout:S}}],x=new C.ZP({mode:"hash",base:"/task-manager/",routes:N}),j=x,K=n(964);r.ZP.config.productionTip=!1,new r.ZP({router:j,store:K.Z,render:function(t){return t(A)}}).$mount("#app")},964:function(t,e,n){n.d(e,{Z:function(){return f},o:function(){return d}});var r=n(629),o=JSON.parse(localStorage.getItem("tasks")||"[]"),a=function(){return{tasksList:o}},i={ADD_TASK:function(t,e){var n=t.commit;n("ADD_TASK",e)},DELETE_TASK:function(t,e){var n=t.commit;n("DELETE_TASK",e)},DELETE_ALL_TASKS:function(t){var e=t.commit;e("DELETE_ALL_TASKS")}},u={ADD_TASK:function(t,e){t.tasksList.push({id:Math.floor(0xec6b4a48f8*Math.random()),name:e}),localStorage.setItem("tasks",JSON.stringify(t.tasksList))},DELETE_TASK:function(t,e){t.tasksList.splice(e,1),localStorage.setItem("tasks",JSON.stringify(t.tasksList))},DELETE_ALL_TASKS:function(t){t.tasksList=[],localStorage.setItem("tasks",JSON.stringify(t.tasksList))}},s={state:a,actions:i,mutations:u},c=n(144);c.ZP.use(r.ZP);var l=new r.ZP.Store({modules:{tasks:s}}),f=l,d=function(){return l}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],a=t[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var l=t.length;l>0&&t[l-1][2]>a;l--)t[l]=t[l-1];t[l]=[r,o,a]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+".9dcd9d55.js"}}(),function(){n.miniCssF=function(t){return"css/"+t+".19555cec.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="task-manager:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+a),u.src=r),t[r]=[o];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(m);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/task-manager/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,a.parentNode&&a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),u=n.p+i;if(e(i,u))return o();t(r,u,null,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={801:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),u=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};n.l(i,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(e&&e(r);c<i.length;c++)a=i[c],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(l)},r=self["webpackChunktask_manager"]=self["webpackChunktask_manager"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(187)}));r=n.O(r)})();
//# sourceMappingURL=app.1a31a385.js.map