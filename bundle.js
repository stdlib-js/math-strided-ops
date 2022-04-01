// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ns=r()}(this,(function(){"use strict";function e(e){if(e.__esModule)return e;var r=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(t){var o=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,o.get?o:{enumerable:!0,get:function(){return e[t]}})})),r}var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(e){return!1}},o=Object.defineProperty,n=Object.prototype,i=n.toString,u=n.__defineGetter__,a=n.__defineSetter__,l=n.__lookupGetter__,s=n.__lookupSetter__;var d=o,p=function(e,r,t){var o,d,p,c;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((d="value"in t)&&(l.call(e,r)||s.call(e,r)?(o=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=o):e[r]=t.value),p="get"in t,c="set"in t,d&&(p||c))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&u&&u.call(e,r,t.get),c&&a&&a.call(e,r,t.set),e},c=t()?d:p;var _=function(e,r,t){c(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})},f=require("path").join,b=require("@stdlib/utils-try-require"),m=require("./main.js"),j=b(f("/home/runner/work/math-strided-ops/math-strided-ops/node_modules/@stdlib/math-strided-ops-add/lib","./native.js"));j instanceof Error||(m=j),module.exports=m;var y=e(Object.freeze({__proto__:null})),h=require("path").join,v=require("@stdlib/utils-try-require"),g=require("./main.js"),q=v(h("/home/runner/work/math-strided-ops/math-strided-ops/node_modules/@stdlib/math-strided-ops-mul/lib","./native.js"));q instanceof Error||(g=q),module.exports=g;var w=e(Object.freeze({__proto__:null})),O=require("path").join,E=require("@stdlib/utils-try-require"),P=require("./main.js"),k=E(O("/home/runner/work/math-strided-ops/math-strided-ops/node_modules/@stdlib/math-strided-ops-sub/lib","./native.js"));k instanceof Error||(P=k),module.exports=P;var x=e(Object.freeze({__proto__:null})),T=_,z={};return T(z,"add",y),T(z,"mul",w),T(z,"sub",x),z}));
//# sourceMappingURL=bundle.js.map
