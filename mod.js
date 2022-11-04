// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,r=Object.prototype,i=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,a=r.__lookupGetter__,l=r.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?e:function(n,t,e){var f,c,p,s;if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(a.call(n,t)||l.call(n,t)?(f=n.__proto__,n.__proto__=r,delete n[t],n[t]=e.value,n.__proto__=f):n[t]=e.value),p="get"in e,s="set"in e,c&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(n,t,e.get),s&&u&&u.call(n,t,e.set),n};var f=t;function c(n,t,e){f(n,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}function p(n){var t=n.default;if("function"==typeof t){var e=function(){return t.apply(this,arguments)};e.prototype=t.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(n).forEach((function(t){var r=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,r.get?r:{enumerable:!0,get:function(){return n[t]}})})),e}function s(n,t){for(var e=0,r=n.length-1;r>=0;r--){var i=n[r];"."===i?n.splice(r,1):".."===i?(n.splice(r,1),e++):e&&(n.splice(r,1),e--)}if(t)for(;e--;e)n.unshift("..");return n}var m=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,g=function(n){return m.exec(n).slice(1)};function y(){for(var n="",t=!1,e=arguments.length-1;e>=-1&&!t;e--){var r=e>=0?arguments[e]:"/";if("string"!=typeof r)throw new TypeError("Arguments to path.resolve must be strings");r&&(n=r+"/"+n,t="/"===r.charAt(0))}return(t?"/":"")+(n=s(T(n.split("/"),(function(n){return!!n})),!t).join("/"))||"."}function h(n){var t=d(n),e="/"===_(n,-1);return(n=s(T(n.split("/"),(function(n){return!!n})),!t).join("/"))||t||(n="."),n&&e&&(n+="/"),(t?"/":"")+n}function d(n){return"/"===n.charAt(0)}function b(){var n=Array.prototype.slice.call(arguments,0);return h(T(n,(function(n,t){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n})).join("/"))}function v(n,t){function e(n){for(var t=0;t<n.length&&""===n[t];t++);for(var e=n.length-1;e>=0&&""===n[e];e--);return t>e?[]:n.slice(t,e-t+1)}n=y(n).substr(1),t=y(t).substr(1);for(var r=e(n.split("/")),i=e(t.split("/")),o=Math.min(r.length,i.length),u=o,a=0;a<o;a++)if(r[a]!==i[a]){u=a;break}var l=[];for(a=u;a<r.length;a++)l.push("..");return(l=l.concat(i.slice(u))).join("/")}function w(n){var t=g(n),e=t[0],r=t[1];return e||r?(r&&(r=r.substr(0,r.length-1)),e+r):"."}function x(n,t){var e=g(n)[2];return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e}function E(n){return g(n)[3]}var j={extname:E,basename:x,dirname:w,sep:"/",delimiter:":",relative:v,join:b,isAbsolute:d,normalize:h,resolve:y};function T(n,t){if(n.filter)return n.filter(t);for(var e=[],r=0;r<n.length;r++)t(n[r],r,n)&&e.push(n[r]);return e}var _="b"==="ab".substr(-1)?function(n,t,e){return n.substr(t,e)}:function(n,t,e){return t<0&&(t=n.length+t),n.substr(t,e)},O=p(Object.freeze({__proto__:null,resolve:y,normalize:h,isAbsolute:d,join:b,relative:v,sep:"/",delimiter:":",dirname:w,basename:x,extname:E,default:j}));var S=/./;function A(n,t,e){f(n,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function P(n){return"boolean"==typeof n}var V="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function I(){return V&&"symbol"==typeof Symbol.toStringTag}var k=Object.prototype.toString;var F=Object.prototype.hasOwnProperty;function N(n,t){return null!=n&&F.call(n,t)}var R="function"==typeof Symbol?Symbol.toStringTag:"";var M=I()?function(n){var t,e,r;if(null==n)return k.call(n);e=n[R],t=N(n,R);try{n[R]=void 0}catch(t){return k.call(n)}return r=k.call(n),t?n[R]=e:delete n[R],r}:function(n){return k.call(n)},B=Boolean.prototype.toString;var L=I();function C(n){return"object"==typeof n&&(n instanceof Boolean||(L?function(n){try{return B.call(n),!0}catch(n){return!1}}(n):"[object Boolean]"===M(n)))}function Y(n){return P(n)||C(n)}function q(){return new Function("return this;")()}A(Y,"isPrimitive",P),A(Y,"isObject",C);var U="object"==typeof self?self:null,z="object"==typeof window?window:null,G="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D="object"==typeof G?G:null;var J=function(n){if(arguments.length){if(!P(n))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+n+"`.");if(n)return q()}if(U)return U;if(z)return z;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")}(),X=J.document&&J.document.childNodes,H=Int8Array;function W(){return/^\s*function\s*([^(]*)/i}var $=/^\s*function\s*([^(]*)/i;A(W,"REGEXP",$);var K=Array.isArray?Array.isArray:function(n){return"[object Array]"===M(n)};function Q(n){return null!==n&&"object"==typeof n}function Z(n){var t,e,r,i;if(("Object"===(e=M(n).slice(8,-1))||"Error"===e)&&n.constructor){if("string"==typeof(r=n.constructor).name)return r.name;if(t=$.exec(r.toString()))return t[1]}return Q(i=n)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}A(Q,"isObjectLikeArray",function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(t){var e,r;if(!K(t))return!1;if(0===(e=t.length))return!1;for(r=0;r<e;r++)if(!1===n(t[r]))return!1;return!0}}(Q));var nn="function"==typeof S||"object"==typeof H||"function"==typeof X?function(n){return Z(n).toLowerCase()}:function(n){var t;return null===n?"null":"object"===(t=typeof n)?Z(n).toLowerCase():t};function tn(n){return"function"===nn(n)}var en,rn=Object.getPrototypeOf;en=tn(Object.getPrototypeOf)?rn:function(n){var t=function(n){return n.__proto__}(n);return t||null===t?t:"[object Function]"===M(n.constructor)?n.constructor.prototype:n instanceof Object?Object.prototype:null};var on=en;function un(n){return null==n?null:(n=Object(n),on(n))}function an(n){try{return function(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(n)}catch(n){return function(n){if("object"!=typeof n||null===n)return!1;if(n instanceof Error)return!0;for(;n;){if("[object Error]"===M(n))return!0;n=un(n)}return!1}(n)?n:"object"==typeof n?new Error(JSON.stringify(n)):new Error(n.toString())}}var ln=Math.floor;function fn(n){return ln(n)===n}function cn(n){return"number"==typeof n}var pn=Number,sn=pn.prototype.toString;var mn=I();function gn(n){return"object"==typeof n&&(n instanceof pn||(mn?function(n){try{return sn.call(n),!0}catch(n){return!1}}(n):"[object Number]"===M(n)))}function yn(n){return cn(n)||gn(n)}A(yn,"isPrimitive",cn),A(yn,"isObject",gn);var hn=Number.POSITIVE_INFINITY,dn=pn.NEGATIVE_INFINITY;function bn(n){return n<hn&&n>dn&&fn(n)}function vn(n){return cn(n)&&bn(n)}function wn(n){return gn(n)&&bn(n.valueOf())}function xn(n){return vn(n)||wn(n)}function En(n){return vn(n)&&n>=0}function jn(n){return wn(n)&&n.valueOf()>=0}function Tn(n){return En(n)||jn(n)}function _n(n){return Object.keys(Object(n))}A(xn,"isPrimitive",vn),A(xn,"isObject",wn),A(Tn,"isPrimitive",En),A(Tn,"isObject",jn);var On=void 0!==Object.keys;function Sn(n){return"[object Arguments]"===M(n)}var An=function(){return Sn(arguments)}();function Pn(n){return"string"==typeof n}var Vn=String.prototype.valueOf;var In=I();function kn(n){return"object"==typeof n&&(n instanceof String||(In?function(n){try{return Vn.call(n),!0}catch(n){return!1}}(n):"[object String]"===M(n)))}function Fn(n){return Pn(n)||kn(n)}function Nn(n){return n!=n}function Rn(n){return cn(n)&&Nn(n)}function Mn(n){return gn(n)&&Nn(n.valueOf())}function Bn(n){return Rn(n)||Mn(n)}A(Fn,"isPrimitive",Pn),A(Fn,"isObject",kn),A(Bn,"isPrimitive",Rn),A(Bn,"isObject",Mn);var Ln=Object.prototype.propertyIsEnumerable;var Cn=!Ln.call("beep","0");function Yn(n,t){var e;return null!=n&&(!(e=Ln.call(n,t))&&Cn&&Fn(n)?!Rn(t=+t)&&vn(t)&&t>=0&&t<n.length:e)}var qn=An?Sn:function(n){return null!==n&&"object"==typeof n&&!K(n)&&"number"==typeof n.length&&fn(n.length)&&n.length>=0&&n.length<=4294967295&&N(n,"callee")&&!Yn(n,"callee")},Un=Array.prototype.slice;var zn=Yn((function(){}),"prototype"),Gn=!Yn({toString:null},"toString");function Dn(n){return"object"==typeof n&&null!==n&&"number"==typeof n.length&&fn(n.length)&&n.length>=0&&n.length<=9007199254740991}function Jn(n,t,e){var r,i;if(!Dn(n)&&!Pn(n))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+n+"`.");if(0===(r=n.length))return-1;if(3===arguments.length){if(!vn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(Bn(t)){for(;i<r;i++)if(Bn(n[i]))return i}else for(;i<r;i++)if(n[i]===t)return i;return-1}function Xn(n){return n.constructor&&n.constructor.prototype===n}var Hn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Wn="undefined"==typeof window?void 0:window;var $n=function(){var n;if("undefined"===nn(Wn))return!1;for(n in Wn)try{-1===Jn(Hn,n)&&N(Wn,n)&&null!==Wn[n]&&"object"===nn(Wn[n])&&Xn(Wn[n])}catch(n){return!0}return!1}(),Kn="undefined"!=typeof window;var Qn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Zn=On?function(){return 2!==(_n(arguments)||"").length}(1,2)?function(n){return qn(n)?_n(Un.call(n)):_n(n)}:_n:function(n){var t,e,r,i,o,u,a;if(i=[],qn(n)){for(a=0;a<n.length;a++)i.push(a.toString());return i}if("string"==typeof n){if(n.length>0&&!N(n,"0"))for(a=0;a<n.length;a++)i.push(a.toString())}else{if(!1==(r="function"==typeof n)&&!Q(n))return i;e=zn&&r}for(o in n)e&&"prototype"===o||!N(n,o)||i.push(String(o));if(Gn)for(t=function(n){if(!1===Kn&&!$n)return Xn(n);try{return Xn(n)}catch(n){return!1}}(n),a=0;a<Qn.length;a++)u=Qn[a],t&&"constructor"===u||!N(n,u)||i.push(String(u));return i};var nt=Object.prototype;function tt(n){var t;return!!function(n){return"object"==typeof n&&null!==n&&!K(n)}(n)&&(!(t=un(n))||!N(n,"constructor")&&N(t,"constructor")&&tn(t.constructor)&&"[object Function]"===M(t.constructor)&&N(t,"isPrototypeOf")&&tn(t.isPrototypeOf)&&(t===nt||function(n){var t;for(t in n)if(!N(n,t))return!1;return!0}(n)))}function et(n,t){var e,r,i,o,u,a,l,f=!0;if(!Q(n))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+n+"`.");if(arguments.length>1){if(!tt(t))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+t+"`.");if(N(t,"duplicates")&&!P(f=t.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+f+"`.")}if(r=(e=Zn(n)).length,u={},f)for(l=0;l<r;l++)N(u,o=n[i=e[l]])?(a=u[o],K(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(l=0;l<r;l++)u[n[i=e[l]]]=i;return u}var rt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function it(){return rt.slice()}var ot=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function ut(){return ot.slice()}function at(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}A(ut,"enum",at),function(n,t){var e,r,i;for(e=Zn(t),i=0;i<e.length;i++)c(n,r=e[i],t[r])}(ut,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var lt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function ft(){return{bool:lt.bool,int8:lt.int8,uint8:lt.uint8,uint8c:lt.uint8c,int16:lt.int16,uint16:lt.uint16,int32:lt.int32,uint32:lt.uint32,int64:lt.int64,uint64:lt.uint64,float32:lt.float32,float64:lt.float64,complex64:lt.complex64,complex128:lt.complex128,binary:lt.binary,generic:lt.generic,notype:lt.notype,userdefined_type:lt.userdefined_type}}A(it,"enum",ft),function(n,t){var e,r,i;for(e=Zn(t),i=0;i<e.length;i++)c(n,r=e[i],t[r])}(it,ft());var ct=et(ft(),{duplicates:!1});var pt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function st(n){var t=typeof n;return"string"===t?null===function(n){var t=pt[n];return"number"==typeof t?t:null}(n)?null:n:"number"===t?function(n){var t=ct[n];return"string"==typeof t?t:null}(n):null}function mt(n,t,e){var r,i,o,u,a,l,f,c,p;if(!("object"==typeof(p=n)&&null!==p&&"number"==typeof p.length&&fn(p.length)&&p.length>=0&&p.length<=4294967295))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+n+"`.");if(!En(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(!En(e))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+e+"`.");if(0===(r=n.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(r%(a=t+e)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(i=[],o=[],l=2*a,c=2*t,f=0;f<=l;f++)0===f?f===c?o.push("() => ("):o.push("("):f===l?f===c?o.push(") => ()"):o.push(")"):f===c?o.push(") => ("):f%2==1?o.push(""):o.push(", ");for(f=0;f<r;f++)null===(u=st(n[f]))&&(u=n[f]),o[2*(c=f%a)+1]=u,c===a-1&&i.push(o.join(""));return i}function gt(n,t,e,r){return A(e,"nargs",r?n.nargs+n.nin+n.nout:n.nargs),A(e,"nin",n.nin),A(e,"nout",n.nout),function(n,t,e){f(n,t,{configurable:!1,enumerable:!1,get:e})}(e,"types",(function(){return mt(t,n.nin,n.nout)})),e}var yt={nargs:10,nin:2,nout:1},ht={float64:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"float64",uint16:"float64",uint8:"float64",uint8c:"float64",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},float32:{float64:"float64",float32:"float32",int32:"float64",int16:"float32",int8:"float32",uint32:"float64",uint16:"float32",uint8:"float32",uint8c:"float32",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int32:{float64:"float64",float32:"float64",int32:"int32",int16:"int32",int8:"int32",uint32:"float64",uint16:"int32",uint8:"int32",uint8c:"int32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},int16:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},int8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int8",uint32:"float64",uint16:"int32",uint8:"int16",uint8c:"int16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint32:{float64:"float64",float32:"float64",int32:"float64",int16:"float64",int8:"float64",uint32:"uint32",uint16:"uint32",uint8:"uint32",uint8c:"uint32",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},uint16:{float64:"float64",float32:"float32",int32:"int32",int16:"int32",int8:"int32",uint32:"uint32",uint16:"uint16",uint8:"uint16",uint8c:"uint16",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},uint8c:{float64:"float64",float32:"float32",int32:"int32",int16:"int16",int8:"int16",uint32:"uint32",uint16:"uint16",uint8:"uint8",uint8c:"uint8c",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},complex128:{float64:"complex128",float32:"complex128",int32:"complex128",int16:"complex128",int8:"complex128",uint32:"complex128",uint16:"complex128",uint8:"complex128",uint8c:"complex128",complex64:"complex128",complex128:"complex128",binary:-1,generic:"generic"},complex64:{float64:"complex128",float32:"complex64",int32:"complex128",int16:"complex64",int8:"complex64",uint32:"complex128",uint16:"complex64",uint8:"complex64",uint8c:"complex64",complex64:"complex64",complex128:"complex128",binary:-1,generic:"generic"},generic:{float64:"generic",float32:"generic",int32:"generic",int16:"generic",int8:"generic",uint32:"generic",uint16:"generic",uint8:"generic",uint8c:"generic",complex64:"generic",complex128:"generic",binary:-1,generic:"generic"},binary:{float64:-1,float32:-1,int32:-1,int16:-1,int8:-1,uint32:-1,uint16:-1,uint8:-1,uint8c:-1,complex64:-1,complex128:-1,binary:"binary",generic:-1}};function dt(){var n,t,e,r,i,o,u,a,l;for(e={},t=(n=Zn(ht)).length,l=0;l<t;l++){for(i=n[l],u=ht[i],r={},a=0;a<t;a++)r[o=n[a]]=u[o];e[i]=r}return e}function bt(n,t){var e;return 0===arguments.length?dt():(n=st(n),N(ht,n)&&N(e=ht[n],t=st(t))?e[t]:null)}var vt,wt={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function xt(){var n,t,e,r,i,o,u,a,l;for(e={},t=(n=Zn(wt)).length,l=0;l<t;l++){for(i=n[l],u=wt[i],r={},a=0;a<t;a++)r[o=n[a]]=u[o];e[i]=r}return e}function Et(){var n,t,e,r,i,o,u,a,l;for(e={},t=(n=Zn(wt)).length,l=0;l<t;l++){for(i=n[l],u=wt[i],r=[],a=0;a<t;a++)1===u[o=n[a]]&&r.push(o);e[i]=r}return e}function jt(n){return 0===arguments.length?xt():(void 0===vt&&(vt=Et()),n=st(n),N(vt,n)?vt[n].slice():null)}var Tt=et(ft(),{duplicates:!1});function _t(n){var t=Tt[n];return"string"==typeof t?t:null}var Ot=ft();function St(n){var t=Ot[n];return"number"==typeof t?t:null}function At(n){var t=typeof n;return"number"===t?_t(n)?n:null:"string"===t?St(n):null}function Pt(n){var t=typeof n;return"string"===t?St(n)?n:null:"number"===t?_t(n):null}function Vt(n,t){var e,r,i,o,u,a,l;for(r=n.length,i=t.length,e=[],l=0,u=0;u<r&&!(l>=i);u++)for(o=n[u],a=l;a<i;a++)if(o===t[a]){l=a+1,e.push(o);break}return e}function It(n){var t,e,r;for(t=[],r=0;r<n.length;r++){if(null===(e=Pt(n[r])))return new TypeError("invalid argument. Must provided recognized data types. Unable to resolve a data type string. Value: `"+n[r]+"`.");t.push(e)}return t}function kt(n,t,e,r){var i,o,u,a,l,f,c,p,s,m,g,y,h,d,b,v,w;if(u=arguments.length>3?r:{},(f=It(n))instanceof Error)throw f;if(t===n)c=f;else if((c=It(t))instanceof Error)throw c;if(e===n)p=f;else if(e===t)p=c;else if((p=It(e))instanceof Error)throw p;for(p.sort(),i={},h=f.length,d=c.length,l=[],b=0;b<h;b++)for(s=f[b],v=0;v<d;v++)if(-1!==(g=bt(s,m=c[v]))&&null!==g)for(l.push(s,m,g),void 0===(o=i[g])&&(o=Vt(p,(o=jt(g)).sort()),i[g]=o),w=0;w<o.length;w++)(y=o[w])!==g&&l.push(s,m,y);if(u.enums){for(a=[],b=0;b<l.length;b++)a.push(At(l[b]));l=a}return l}var Ft=[[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2]],Nt=kt(Ft[0],Ft[1],Ft[2],{enums:!0});function Rt(n){return vn(n)&&n>0}function Mt(n){return wn(n)&&n.valueOf()>0}function Bt(n){return Rt(n)||Mt(n)}A(Bt,"isPrimitive",Rt),A(Bt,"isObject",Mt);var Lt=function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(t){var e,r;if(!function(n){return null!=n&&"function"!=typeof n&&"number"==typeof n.length&&fn(n.length)&&n.length>=0&&n.length<=4294967295}(t))return!1;if(0===(e=t.length))return!1;for(r=0;r<e;r++)if(!1===n(t[r]))return!1;return!0}}(tn);function Ct(n){return Math.abs(n)}function Yt(n,t,e,r,i,o,u,a,l){var f,c,p,s;for(f=o,p=0;p<n;p++){for(c=l,s=0;s<t&&e[f+s*i]===u[c];s++)c+=a;if(s===t)return p;f+=r}return-1}function qt(n,t,e,r,i,o){var u,a,l,f,c,p;if(tn(n))p=n;else if(!Lt(n))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+n+"`.");if(!Dn(t))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+t+"`.");if(!Dn(e)&&null!==e)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+e+"`.");if(!Bt(r))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+r+"`.");if(!En(i))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+i+"`.");if(!En(o))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+o+"`.");if(0===(l=i+o))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(p){if(!vn(f=t.length/l))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(f=n.length,t.length!==f*l)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(e&&e.length!==f)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*l+1===r)a=!1;else{if(4*l+1!==r)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return c=i*(u=a?4:3)+1,function(){var s,m,g,y,h,d,b,v,w,x,E,j;if((d=arguments.length)!==r){if(d<r)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!vn(v=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(h=[v],y=[],E=1;E<r;E+=u)y.push(arguments[E]);for(s=[],E=3;E<r;E+=u){if(!vn(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");s.push(w)}if(a)for(m=[],E=4;E<r;E+=u){if(!En(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");m.push(w)}for(g=[],E=2;E<r;E+=u){if(!Dn(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(j=(E-2)/u,a){if(b=m[j]+(v-1)*s[j],v>0&&(b<0||b>=w.length))throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((v-1)*Ct(s[j])>=w.length)throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");g.push(w)}if((b=Yt(f,l,t,l,1,0,y,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");x=p||n[b];e?a?x(g,h,s,m,e[b]):x(g,h,s,e[b]):a?x(g,h,s,m):x(g,h,s);if(1===o)return g[l-1];if(0===o)return;return g.slice(i)}}function Ut(n,t){return n[t]}function zt(n,t){return n.get(t)}function Gt(n,t,e){n[t]=e}function Dt(n,t,e){n.set(e,t)}function Jt(n,t,e,r){var i,o,u,a,l,f;return(a=n[0]).get&&a.set&&(i=zt),(l=n[1]).get&&l.set&&(o=zt),(f=n[2]).get&&f.set&&(u=Dt),i||o||u?function(n,t,e,r,i){var o,u,a,l,f,c,p,s,m,g,y,h,d,b;if(!((d=t[0])<=0))for(p=(l=e[0])<0?(1-d)*l:0,s=(f=e[1])<0?(1-d)*f:0,m=(c=e[2])<0?(1-d)*c:0,g=n[0],y=n[1],h=n[2],o=r[0],u=r[1],a=r[2],b=0;b<d;b++)a(h,m,i(o(g,p),u(y,s))),p+=l,s+=f,m+=c}(n,t,e,[i=i||Ut,o=o||Ut,u=u||Gt],r):function(n,t,e,r){var i,o,u,a,l,f,c,p,s,m,g;if(!((m=t[0])<=0))for(a=(i=e[0])<0?(1-m)*i:0,l=(o=e[1])<0?(1-m)*o:0,f=(u=e[2])<0?(1-m)*u:0,c=n[0],p=n[1],s=n[2],g=0;g<m;g++)s[f]=r(c[a],p[l]),a+=i,l+=o,f+=u}(n,t,e,r)}function Xt(n,t,e,r,i){var o,u,a,l,f,c;return(l=n[0]).get&&l.set&&(o=zt),(f=n[1]).get&&f.set&&(u=zt),(c=n[2]).get&&c.set&&(a=Dt),o||u||a?function(n,t,e,r,i,o){var u,a,l,f,c,p,s,m,g,y,h,d,b,v;if(!((b=t[0])<=0))for(s=r[0],m=r[1],g=r[2],f=e[0],c=e[1],p=e[2],y=n[0],h=n[1],d=n[2],u=i[0],a=i[1],l=i[2],v=0;v<b;v++)l(d,g,o(u(y,s),a(h,m))),s+=f,m+=c,g+=p}(n,t,e,r,[o=o||Ut,u=u||Ut,a=a||Gt],i):function(n,t,e,r,i){var o,u,a,l,f,c,p,s,m,g,y;if(!((g=t[0])<=0))for(l=r[0],f=r[1],c=r[2],o=e[0],u=e[1],a=e[2],p=n[0],s=n[1],m=n[2],y=0;y<g;y++)m[c]=i(p[l],s[f]),l+=o,f+=u,c+=a}(n,t,e,r,i)}function Ht(n,t){if(!(this instanceof Ht))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!cn(n))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+n+"`.");if(!cn(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return f(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:n}),f(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:t}),this}function Wt(n){return n.re}function $t(n){return n.im}A(Jt,"ndarray",Xt),A(Ht,"BYTES_PER_ELEMENT",8),A(Ht.prototype,"BYTES_PER_ELEMENT",8),A(Ht.prototype,"byteLength",16),A(Ht.prototype,"toString",(function(){var n=""+this.re;return this.im<0?n+=" - "+-this.im:n+=" + "+this.im,n+="i"})),A(Ht.prototype,"toJSON",(function(){var n={type:"Complex128"};return n.re=this.re,n.im=this.im,n}));var Kt="function"==typeof Math.fround?Math.fround:null,Qt="function"==typeof Float32Array;var Zt="function"==typeof Float32Array?Float32Array:null;var ne,te="function"==typeof Float32Array?Float32Array:void 0;ne=function(){var n,t,e;if("function"!=typeof Zt)return!1;try{t=new Zt([1,3.14,-3.14,5e40]),e=t,n=(Qt&&e instanceof Float32Array||"[object Float32Array]"===M(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===hn}catch(t){n=!1}return n}()?te:function(){throw new Error("not implemented")};var ee=new ne(1);var re="function"==typeof Kt?Kt:function(n){return ee[0]=n,ee[0]};function ie(n,t){if(!(this instanceof ie))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!cn(n))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+n+"`.");if(!cn(t))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+t+"`.");return f(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:re(n)}),f(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:re(t)}),this}function oe(n){return n.re}function ue(n){return n.im}A(ie,"BYTES_PER_ELEMENT",4),A(ie.prototype,"BYTES_PER_ELEMENT",4),A(ie.prototype,"byteLength",8),A(ie.prototype,"toString",(function(){var n=""+this.re;return this.im<0?n+=" - "+-this.im:n+=" + "+this.im,n+="i"})),A(ie.prototype,"toJSON",(function(){var n={type:"Complex64"};return n.re=this.re,n.im=this.im,n}));var ae="number";function le(n,t,e){var r;if(!tn(n))throw new TypeError("invalid argument. First argument must be a function. Value: `"+n+"`.");if(!En(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(!tn(e))throw new TypeError("invalid argument. Third argument must be a constructor function. Value: `"+e+"`.");return r=[function(){return n()},function(t){typeof t===ae&&(t=new e(t,0));return n(t)},function(t,r){typeof t===ae&&(t=new e(t,0));typeof r===ae&&(r=new e(r,0));return n(t,r)},function(t,r,i){typeof t===ae&&(t=new e(t,0));typeof r===ae&&(r=new e(r,0));typeof i===ae&&(i=new e(i,0));return n(t,r,i)},function(t,r,i,o){typeof t===ae&&(t=new e(t,0));typeof r===ae&&(r=new e(r,0));typeof i===ae&&(i=new e(i,0));typeof o===ae&&(o=new e(o,0));return n(t,r,i,o)},function(t,r,i,o,u){typeof t===ae&&(t=new e(t,0));typeof r===ae&&(r=new e(r,0));typeof i===ae&&(i=new e(i,0));typeof o===ae&&(o=new e(o,0));typeof u===ae&&(u=new e(u,0));return n(t,r,i,o,u)}],t<=5?r[t]:function(){var t,r,i;for(t=[],i=0;i<arguments.length;i++)typeof(r=arguments[i])===ae&&(r=new e(r,0)),t.push(r);return n.apply(null,t)}}var fe="complex64",ce="complex128",pe={complex64:ie,complex128:Ht};function se(n,t,e,r){if(r===fe||r===ce)return t===e&&e===r?n[r]:le(n[r],2,pe[r]);if("generic"===r){if(t===ce||e===ce)return t===e?n[t]:le(n[ce],2,pe[ce]);if(t===fe||e===fe)return t===e?n[t]:le(n[fe],2,pe[fe])}return n.default}function me(n,t){var e,r,i,o,u;for(e=[],u=0;u<t.length;u+=3)r=Pt(t[u]),i=Pt(t[u+1]),o=Pt(t[u+2]),e.push(se(n,r,i,o));return e}var ge=me({default:function(n,t){return n+t},complex64:function(n,t){return new ie(re(oe(n)+oe(t)),re(ue(n)+ue(t)))},complex128:function(n,t){return new Ht(Wt(n)+Wt(t),$t(n)+$t(t))}},Nt),ye=qt(Jt,Nt,ge,yt.nargs,yt.nin,yt.nout);function he(n,t,e,r,i,o,u,a,l,f){return ye(n,At(t),e,r,At(i),o,u,At(a),l,f)}var de=qt(Xt,Nt,ge,yt.nargs+yt.nin+yt.nout,yt.nin,yt.nout);A(he,"ndarray",(function(n,t,e,r,i,o,u,a,l,f,c,p,s){return de(n,At(t),e,r,i,At(o),u,a,l,At(f),c,p,s)})),gt(yt,Nt,he,!1),gt(yt,Nt,he.ndarray,!0);var be=an((0,O.join)("/home/runner/work/math-strided-ops/math-strided-ops/node_modules/@stdlib/math-strided-ops-add/lib","./native.js")),ve=be instanceof Error?he:be,we={nargs:10,nin:2,nout:1},xe=[[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2]],Ee=kt(xe[0],xe[1],xe[2],{enums:!0});var je=me({default:function(n,t){return n*t},complex64:function(n,t){var e=oe(n),r=oe(t),i=ue(n),o=ue(t),u=re(e*r)-re(i*o),a=re(e*o)+re(i*r);return new ie(re(u),re(a))},complex128:function(n,t){var e=Wt(n),r=Wt(t),i=$t(n),o=$t(t),u=e*r-i*o,a=e*o+i*r;return new n.constructor(u,a)}},Ee),Te=qt(Jt,Ee,je,we.nargs,we.nin,we.nout);function _e(n,t,e,r,i,o,u,a,l,f){return Te(n,At(t),e,r,At(i),o,u,At(a),l,f)}var Oe=qt(Xt,Ee,je,we.nargs+we.nin+we.nout,we.nin,we.nout);A(_e,"ndarray",(function(n,t,e,r,i,o,u,a,l,f,c,p,s){return Oe(n,At(t),e,r,i,At(o),u,a,l,At(f),c,p,s)})),gt(we,Ee,_e,!1),gt(we,Ee,_e.ndarray,!0);var Se=an((0,O.join)("/home/runner/work/math-strided-ops/math-strided-ops/node_modules/@stdlib/math-strided-ops-mul/lib","./native.js")),Ae=Se instanceof Error?_e:Se,Pe={nargs:10,nin:2,nout:1},Ve=[[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2],[12,13,10,11,15,4,6,1,5,7,2]],Ie=kt(Ve[0],Ve[1],Ve[2],{enums:!0});var ke=me({default:function(n,t){return n-t},complex64:function(n,t){var e=Wt(n)-Wt(t),r=$t(n)-$t(t);return new n.constructor(e,r)},complex128:function(n,t){var e=Wt(n)-Wt(t),r=$t(n)-$t(t);return new n.constructor(e,r)}},Ie),Fe=qt(Jt,Ie,ke,Pe.nargs,Pe.nin,Pe.nout);function Ne(n,t,e,r,i,o,u,a,l,f){return Fe(n,At(t),e,r,At(i),o,u,At(a),l,f)}var Re=qt(Xt,Ie,ke,Pe.nargs+Pe.nin+Pe.nout,Pe.nin,Pe.nout);A(Ne,"ndarray",(function(n,t,e,r,i,o,u,a,l,f,c,p,s){return Re(n,At(t),e,r,i,At(o),u,a,l,At(f),c,p,s)})),gt(Pe,Ie,Ne,!1),gt(Pe,Ie,Ne.ndarray,!0);var Me=an((0,O.join)("/home/runner/work/math-strided-ops/math-strided-ops/node_modules/@stdlib/math-strided-ops-sub/lib","./native.js")),Be=Me instanceof Error?Ne:Me,Le={};c(Le,"add",ve),c(Le,"mul",Ae),c(Le,"sub",Be);export{ve as add,Le as default,Ae as mul,Be as sub};
//# sourceMappingURL=mod.js.map
