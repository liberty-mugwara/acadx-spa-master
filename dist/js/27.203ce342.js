(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{c69c:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("FancyForm",{attrs:{fancy:e.fancy}})},r=[],c=o("60a3"),a=o("f33f"),l=o("08b6"),i=o("c281"),u=function(){var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])},e(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),s=function(e,t,o,n){var r,c=arguments.length,a=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(c<3?r(a):c>3?r(t,o,a):r(t,o))||a);return c>3&&a&&Object.defineProperty(t,o,a),a},f=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.fancy={title:t.title,submitIcon:"add",onSubmit:function(){return Object(i["w"])(t.module+"/create")},inputs:[{label:"National id",hint:"eg 00-000000Y00",store:t.module+"/toCreate.national_id",rules:["checkId"]},{label:"First name",hint:"at least two letters",store:t.module+"/toCreate.first_name",rules:["checkNamePlusInitials"]},{label:"Last name",hint:"at least two letters",store:t.module+"/toCreate.last_name",rules:["checkName"]}]},t}return u(t,e),Object.defineProperty(t.prototype,"module",{get:function(){return a["m"].profile},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return"schoolAdmin"==this.module?"Create School Admin":"create "+this.module},enumerable:!0,configurable:!0}),t.prototype.created=function(){a["m"].authR(),a["m"].group_4||Object(i["t"])("/schools/users"),Object(i["x"])(this.module+"/toCreate.school_id",Object(i["m"])("school/id"))},t=s([Object(c["a"])({components:{FancyForm:l["a"]}})],t),t}(c["e"]),p=f,m=p,d=o("2877"),b=Object(d["a"])(m,n,r,!1,null,null,null);t["default"]=b.exports}}]);