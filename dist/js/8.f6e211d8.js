(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"0e1f":function(t,e,n){},"548b":function(t,e,n){"use strict";var o=n("0e1f"),a=n.n(o);a.a},e37c:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-page",{staticClass:"column justify-center items-center bg-brown-1",staticStyle:{"min-height":"100vh"}},[n("div",{staticClass:"text-h4 f-trocchi text-primary q-my-sm text-weight-bolder"},[t._v("ACADX")]),n("q-card",{staticClass:"login-card rounded-lg text-positive q-px-lg",staticStyle:{width:"80%","max-width":"300px"}},[n("q-card-section",{staticClass:"flex column flex-center"},[n("div",{staticClass:"text-h6 f-nano text-grey-9 font-weight-bolder"},[t._v("Account Login")])]),n("q-card-section",{staticClass:"q-pa-sm"},[n("q-form",{on:{submit:t.login}},[n("Iinput",{staticClass:"q-mb-xs",attrs:{autofocus:!0,mask:t.inputMask,label:t.label,placeholder:"Enter "+t.label,color:t.btnColor,rules:["required"]},model:{value:t.loginData.username,callback:function(e){t.$set(t.loginData,"username",e)},expression:"loginData.username"}}),n("Iinput",{staticClass:"q-mb-xs",attrs:{type:"password",label:"Password",placeholder:"Enter password",rules:["required"]},model:{value:t.loginData.password,callback:function(e){t.$set(t.loginData,"password",e)},expression:"loginData.password"}}),n("q-btn",{staticClass:"full-width q-mb-lg",attrs:{type:"submit",color:"primary",label:"login"}}),n("q-btn",{staticClass:"full-width q-mb-lg",attrs:{color:t.btnColor,label:t.btnTxt},on:{click:function(e){return t.toggleMask()}}})],1)],1)],1)],1)},a=[],r=n("60a3"),s=n("f33f"),i=n("1088"),l=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},t(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),c=function(t,e,n,o){var a,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var i=t.length-1;i>=0;i--)(a=t[i])&&(s=(r<3?a(s):r>3?a(e,n,s):a(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s},u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.mask="nationalId",e.loginData={password:"",username:""},e}return l(e,t),e.prototype.login=function(){s["m"].login(this.loginData)},e.prototype.toggleMask=function(){""===this.mask?this.mask="nationalId":this.mask=""},Object.defineProperty(e.prototype,"inputMask",{get:function(){return this.mask},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"btnTxt",{get:function(){return""===this.mask?"use national id":"use birth number"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"btnColor",{get:function(){return""===this.mask?"positive":"purple"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"label",{get:function(){return""===this.mask?"Enter Birth Entry Number":"Enter National Id"},enumerable:!0,configurable:!0}),e.prototype.created=function(){this.loginData={password:"",username:""}},e=c([Object(r["a"])({components:{Iinput:i["a"]}})],e),e}(r["e"]),p=u,f=p,b=(n("548b"),n("2877")),d=n("9989"),m=n("f09f"),g=n("a370"),h=n("0378"),y=n("9c40"),w=n("eebe"),k=n.n(w),x=Object(b["a"])(f,o,a,!1,null,"3802d257",null);e["default"]=x.exports;k()(x,"components",{QPage:d["a"],QCard:m["a"],QCardSection:g["a"],QForm:h["a"],QBtn:y["a"]})}}]);