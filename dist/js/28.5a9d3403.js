(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"3e76":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("FancyForm",{attrs:{fancy:e.fancy}})},n=[],s=r("60a3"),o=r("f33f"),c=r("08b6"),u=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function a(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(a.prototype=r.prototype,new a)}}(),i=function(e,t,r,a){var n,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var c=e.length-1;c>=0;c--)(n=e[c])&&(o=(s<3?n(o):s>3?n(t,r,o):n(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o},l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.fancy={title:"user/toCreate.user_type",submitIcon:"person_add",onSubmit:function(){return o["m"].createUser()},inputs:[{label:"national Id",hint:"eg 00-000000Y00",store:"user/toCreate.national_id",debounce:"0",rules:["checkId"]},{label:"Email",store:"user/toCreate.email",hint:"eg mugs@impressi.com",rules:["checkEmail"]},{label:"First name",store:"user/toCreate.first_name",hint:"e.g Tadiwa",rules:["checkNamePlusInitials"]},{label:"Last name",store:"user/toCreate.last_name",hint:"e.g Gava",rules:["checkName"]},{label:"Password",store:"user/toCreate.password",hint:"must have at least 8 characters, 2 uppercase letters, 1 number and might contain special characters.",type:"password",rules:["checkPassword"]},{label:"Password again",store:"user/toCreate.password2",hint:"enter same password as before",type:"password",rules:["passwordsMatch"]}]},t}return u(t,e),t=i([Object(s["a"])({components:{FancyForm:c["a"]}})],t),t}(s["e"]),p=l,f=p,h=r("2877"),d=Object(h["a"])(f,a,n,!1,null,null,null);t["default"]=d.exports}}]);