(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{3646:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"shadow-14 bg-grey-1",staticStyle:{width:"100%","max-width":"1150px","min-height":"100vh"}},[s("q-card",{staticClass:"no-shadow no-border-radius intro my-card w-100"},[s("q-card-section",[s("div",{staticClass:"row items-center justify-between q-gutter-md"},[s("div",[s("div",{staticClass:"text-h3 text-grey-3 f-nano q-mb-sm"},[e._v(e._s(e.school.name))]),s("div",{staticClass:"text-h5 text-positive"},[e._v("\n            "+e._s(1==e.school.clasification?"Pre-school":2==e.school.classification?"Primary School":"Secondary School")+"\n          ")])]),s("div",{staticClass:"text-h4 f-trocchi text-grey-5"},[e._v(e._s(e.school.code.code))])])]),s("q-separator",{attrs:{inset:""}}),s("q-card-section",[s("q-toolbar",{staticClass:"toolbar"},[s("q-btn",{attrs:{flat:"",round:"",dense:""},on:{click:function(t){return e.updateCurrentTerm(e.school)}}},[s("q-icon",{attrs:{name:"refresh"}}),s("q-tooltip",{attrs:{"content-style":"font-size: 14px"}},[e._v("Update current term")])],1),s("q-toolbar-title",[e._v(e._s(e.currentTerm.term.name))]),s("q-toggle",{attrs:{"checked-icon":"check",color:"secondary",label:"Apply to system","unchecked-icon":"clear"},model:{value:e.production,callback:function(t){e.production=t},expression:"production"}})],1)],1)],1),s("div",{staticClass:"row q-pt-xl q-mb-xl justify-center q-gutter-lg"},[s("q-markup-table",{staticClass:"self-start",staticStyle:{width:"90%","max-width":"420px"}},[s("thead",{staticClass:"bg-primary text-white"},[s("tr",[s("th",{staticClass:"text-h2 f-nano",attrs:{colspan:e.school.acadx_schoollevels.length+1}},[s("div",{staticClass:"text-h5 text-center q-my-lg"},[e._v("Terms and Levels Offered")])])]),s("tr",[s("th",{staticClass:"text-left"},[s("div",{staticClass:"text-h6 f-trocchi"},[e._v("Level")])]),s("th",{staticClass:"text-right",attrs:{colspan:e.school.acadx_schoollevels.length-1}},[s("div",{staticClass:"text-h6 f-trocchi"},[e._v("Terms")])])])]),s("tbody",[e._l(e.school.acadx_schoollevels,(function(t,o){return[s("tr",{key:o,class:o%2==0?"bg-grey-3":"bg-white"},[s("td",{class:e.edit?"text-left hover":"text-left"},[e._v("\n              "+e._s(t.name)+"\n              "),e.edit?s("q-popup-edit",{attrs:{validate:e.validate,cover:!1,offset:[0,10],buttons:""},on:{"before-show":function(){return e.levelName=t.name},save:function(s){e.school.updateState({module:"school",state:"acadx_schoollevels",value:t.id+"||"+s+"||"+t.position})}},model:{value:e.levelName,callback:function(t){e.levelName=t},expression:"levelName"}},[s("q-input",{attrs:{"bottom-slots":!0,placeholder:"Enter level name",label:"level","input-class":"text-h5 "+(e.success?"text-"+e.successColor:""),debounce:"500",color:e.success?e.successColor:"cyan-8",autofocus:!0,rules:[]},scopedSlots:e._u([{key:"hint",fn:function(){return[s("div",{class:e.success?"text-"+e.successColor:""},[e._v(e._s(e.success?e.successText:""))])]},proxy:!0}],null,!0),model:{value:e.levelName,callback:function(t){e.levelName=t},expression:"levelName"}})],1):e._e()],1),e._l(e.school.acadx_schoolterms,(function(t){return s("td",{key:t.id,class:e.edit?"text-right hover":"text-right"},[e.currentTerm.term.id==t.id?s("q-icon",{attrs:{name:"mdi-seal",color:"accent"}}):e._e(),e._v("\n              "+e._s(t.name)+"\n              "),e.edit?s("q-popup-edit",{attrs:{validate:e.validate,cover:!1,offset:[0,10],buttons:""},on:{"before-show":function(){return e.termName=t.name},save:function(s){e.school.updateState({module:"school",state:"acadx_schoolterms",value:t.id+"||"+s+"||"+t.position})}},model:{value:e.termName,callback:function(t){e.termName=t},expression:"termName"}},[s("q-input",{attrs:{"bottom-slots":!0,placeholder:"Enter term name",label:"level","input-class":"text-h5 "+(e.success?"text-"+e.successColor:""),debounce:"500",color:e.success?e.successColor:"cyan-8",autofocus:!0,rules:[]},scopedSlots:e._u([{key:"hint",fn:function(){return[s("div",{class:e.success?"text-"+e.successColor:""},[e._v(e._s(e.success?e.successText:""))])]},proxy:!0}],null,!0),model:{value:e.termName,callback:function(t){e.termName=t},expression:"termName"}})],1):e._e()],1)}))],2)]})),s("tr",[e.saveTermsLevelsBtn?s("th",{attrs:{colspan:e.school.acadx_schoollevels.length+1}},[s("SaveBtn",{attrs:{permission:"user/group_4",click:function(){return e.updateSchool()},showCondition:"school//levelsChanged|termsChanged"}})],1):e._e()])],2)]),s("div",{staticStyle:{width:"90%","max-width":"600px"}},[s("q-list",{attrs:{bordered:""}},[s("EDetailEdit",{attrs:{headerClass:"bg-secondary text-white text-subtitle1",label:e.school.name+" details",icon:"school",permission:"user/group_2",saveBtnOptions:{click:function(){return e.updateSchool()},showCondition:"school/baseChanged",permission:"user/group_2"},detailEdits:e.prepareDetailEdits("school")}}),s("q-separator"),s("EDetailEdit",{attrs:{label:"Address",icon:"las la-map-marked-alt",permission:"user/group_4",saveBtnOptions:{click:function(){return e.updateAddress()},showCondition:"address/detailsChanged",permission:"user/group_4"},detailEdits:e.prepareDetailEdits("address")}}),s("q-separator"),s("EDetailEdit",{attrs:{label:"Subjects",icon:"las la-book-reader",permission:"user/group_4",subjects:{permission:"user/group_4",store:"school/acadx_subjects",optionsStore:"school/subjects",saveBtnOptions:{click:function(){return e.updateSchool()},showCondition:"school/subjectsChanged",permission:"user/group_4"}}}}),s("q-separator"),s("EDetailEdit",{attrs:{label:"Classes",icon:"las la-chalkboard-teacher",permission:"user/group_4",classes:!0}})],1)],1)],1)],1)},a=[],r=s("60a3"),c=s("421b"),n=s("c281"),l=function(){var e=function(t,s){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var s in t)t.hasOwnProperty(s)&&(e[s]=t[s])},e(t,s)};return function(t,s){function o(){this.constructor=t}e(t,s),t.prototype=null===s?Object.create(s):(o.prototype=s.prototype,new o)}}(),i=function(e,t,s,o){var a,r=arguments.length,c=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,s):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,s,o);else for(var n=e.length-1;n>=0;n--)(a=e[n])&&(c=(r<3?a(c):r>3?a(t,s,c):a(t,s))||c);return r>3&&c&&Object.defineProperty(t,s,c),c},u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.termN="",t.levelN="",t}return l(t,e),Object.defineProperty(t.prototype,"saveTermsLevelsBtn",{get:function(){return Object(n["m"])("school//levelsChanged|termsChanged")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"termName",{get:function(){return this.termN},set:function(e){this.termN=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"levelName",{get:function(){return this.levelN},set:function(e){this.levelN=e},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"production",{get:function(){return this.school.production},set:function(e){Object(n["x"])("school/production",e)},enumerable:!0,configurable:!0}),t.prototype.created=function(){this.user.authR()},t=i([r["a"]],t),t}(Object(r["c"])(c["b"],c["g"])),d=u,p=d,h=(s("f74e"),s("2877")),f=s("f09f"),m=s("a370"),v=s("eb85"),b=s("65c6"),_=s("9c40"),x=s("0016"),g=s("05c0"),y=s("6ac5"),C=s("9564"),w=s("2bb1"),q=s("42a1"),k=s("27f9"),N=s("1c1c"),j=s("eebe"),O=s.n(j),S=Object(h["a"])(p,o,a,!1,null,"7fb30f1c",null);t["default"]=S.exports;O()(S,"components",{QCard:f["a"],QCardSection:m["a"],QSeparator:v["a"],QToolbar:b["a"],QBtn:_["a"],QIcon:x["a"],QTooltip:g["a"],QToolbarTitle:y["a"],QToggle:C["a"],QMarkupTable:w["a"],QPopupEdit:q["a"],QInput:k["a"],QList:N["a"]})},"382f":function(e,t,s){},f74e:function(e,t,s){"use strict";var o=s("382f"),a=s.n(o);a.a}}]);