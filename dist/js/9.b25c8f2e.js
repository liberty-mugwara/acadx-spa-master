(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"0082":function(e,t,r){},"57c1":function(e,t,r){"use strict";var i=r("0082"),n=r.n(i);n.a},8871:function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{staticClass:"flex flex-center bg-brown-1",staticStyle:{"min-height":"100vh"}},[r("q-form",{staticStyle:{width:"90%","max-width":"600px"},on:{submit:e.next}},[r("q-card",{staticClass:"min-form"},[r("q-card-section",{staticClass:"title text-grey-4"},[r("div",{staticClass:"text-h6"},[e._v(e._s(e.title))])]),r("q-separator"),r("q-card-section",{staticClass:"flex column flex-center overflow-hidden",staticStyle:{width:"100%",height:"200px",position:"relative"}},[r("transition",{attrs:{appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutLeft"}},[e._l(e.fancy.inputs,(function(t,i){return[e.active==i+1?r("IInput",e._b({key:i,staticClass:"w-80 absolute",attrs:{filled:!0,autofocus:!0,color:1===e.active&&e.btnColor||"primary",placeholder:t.placeholder?t.placeholder:"Enter "+t.label,hint:e.hint}},"IInput",t,!1)):e._e()]}))],2)],1),r("q-card-section",{staticClass:"q-pa-none q-ma-none"},[r("q-linear-progress",{staticStyle:{width:"100%"},attrs:{stripe:!0,value:e.progress,color:"primary"}})],1),r("q-separator",{staticClass:"q-mt-none"}),r("q-card-actions",{attrs:{align:"right"}},[r("transition-group",{staticClass:"q-gutter-x-sm overflow-hidden",attrs:{appear:"","enter-active-class":"animated fadeInRight","leave-active-class":"animated fadeOutRight","move-class":"mugs-move"}},[1===e.active?r("q-btn",{key:"3",attrs:{dense:"",color:e.btnColor,label:e.btnTxt},on:{click:function(t){return e.toggleBEN()}}}):e._e(),e.active>1?r("q-btn",{key:"1",attrs:{dense:"",color:"secondary",label:"back",icon:"arrow_back_ios"},on:{click:function(t){return e.prev()}}}):e._e(),r("q-btn",{key:"3",attrs:{type:"submit",dense:"",disable:e.inputLoading,color:e.active!=e.fancy.inputs.length?"primary":"info",icon:e.active==e.fancy.inputs.length?e.fancy.submitIcon:"",label:e.active!=e.fancy.inputs.length?"next":"create","icon-right":e.active<e.fancy.inputs.length?"arrow_forward_ios":""}})],1)],1)],1)],1)],1)},n=[],s=r("60a3"),a=r("f33f"),o=r("1088"),c=r("c760"),u=function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])},e(t,r)};return function(t,r){function i(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(i.prototype=r.prototype,new i)}}(),l=function(e,t,r,i){var n,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(s<3?n(a):s>3?n(t,r,a):n(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a},p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.active=1,t.stage=0,t.max=0,t.isPwd=!0,t.notTouched=!0,t.error=!1,t.errorMsg="",t.fancy={title:t.title,submitIcon:"person_add",onSubmit:function(){return t.registerUser()},inputs:[{label:"national Id",hint:"Your national id",store:"user/toRegister.national_id",debounce:"0",rules:["registrationStage1"]},{label:"Date of birth",store:"user/toRegister.dob",date:!0,rules:["registrationStage2"]},{label:"AEN",store:"user/toRegister.employee_number",hint:t.title+" enter AEN",rules:["registrationStage2"],debounce:"2000"},{label:"email",store:"user/toRegister.email",hint:"your email address",rules:["checkEmail"]},{label:"Password",store:"user/toRegister.password",hint:"must have at least 8 characters, 2 uppercase letters, 1 number and might contain special characters.",type:"password",rules:["checkPassword"]},{label:"Password again",store:"user/toRegister.password2",hint:"enter same password as before",type:"password",rules:["passwordsMatch"]}]},t.registerUser=function(){a["m"].register()},t}return u(t,e),Object.defineProperty(t.prototype,"useBirthEntryNumber",{get:function(){return a["m"].useBirthEntryNumber},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"btnColor",{get:function(){return this.useBirthEntryNumber?"positive":"purple"},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"btnTxt",{get:function(){return this.useBirthEntryNumber?"use id":"use birth number"},enumerable:!0,configurable:!0}),t.prototype.toggleBEN=function(){a["m"].useBEN(!this.useBirthEntryNumber)},Object.defineProperty(t.prototype,"hint",{get:function(){return a["m"].toRegister.hint},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return a["m"].toRegister.first_name&&a["m"].toRegister.first_name+" "+a["m"].toRegister.last_name||a["m"].toRegister.message},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"userType",{get:function(){return a["m"].toRegister.user_type},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"formSuccess",{get:function(){return a["g"].success},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"progress",{get:function(){return this.active/this.fancy.inputs.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inputLoading",{get:function(){return a["g"].loading},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"verified",{get:function(){return a["m"].toRegister.verified},enumerable:!0,configurable:!0}),t.prototype.next=function(){if(this.active<6){if(this.userType&&this.active<3){var e=["School Admin","Teacher","Librarian"];if(e.includes(this.userType)&&1==this.active)return this.active=3,void a["g"].hideSuccess();if(!e.includes(this.userType)&&2==this.active)return this.active=4,void a["g"].hideSuccess()}this.active++,a["g"].hideSuccess()}else a["m"].register()},t.prototype.prev=function(){if(this.active>1){if(this.userType&&this.active>2){var e=["School Admin","Teacher","Librarian"];if(e.includes(this.userType)&&3==this.active)return this.active=1,void a["g"].hideSuccess();if(!e.includes(this.userType)&&4==this.active)return this.active=2,void a["g"].hideSuccess()}this.active--,a["g"].hideSuccess()}},t.prototype.created=function(){a["m"].useBEN(!1)},t.prototype.nextStep=function(e){if(e){if(this.userType&&this.active<2){var t=["School Admin","Teacher","Librarian"];t.includes(this.userType)?this.active=3:this.next(),a["g"].hideSuccess()}this.verified&&this.active<4&&(this.active=4,a["g"].hideSuccess())}},l([Object(s["f"])("formSuccess")],t.prototype,"nextStep",null),t=l([Object(s["a"])({components:{IInput:o["a"],ISelect:c["a"]}})],t),t}(s["e"]),f=p,h=f,d=(r("57c1"),r("2877")),g=r("9989"),b=r("0378"),y=r("f09f"),m=r("a370"),v=r("eb85"),w=r("6b1d"),_=r("4b7e"),S=r("9c40"),O=r("eebe"),x=r.n(O),P=Object(d["a"])(h,i,n,!1,null,"5282a15f",null);t["default"]=P.exports;x()(P,"components",{QPage:g["a"],QForm:b["a"],QCard:y["a"],QCardSection:m["a"],QSeparator:v["a"],QLinearProgress:w["a"],QCardActions:_["a"],QBtn:S["a"]})}}]);