(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"15e0":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shadow-14 bg-brown-1",staticStyle:{width:"100%","max-width":"1150px","min-height":"100vh"}},[s("div",{staticClass:"flex column flex-center q-pt-xl q-mb-md justify-center"},[s("div",{staticClass:"f-nano text-h2 w-100 text-center"},[t._v(t._s(t.profile.first_name)+" "+t._s(t.profile.last_name))]),s("p",{staticClass:"text-subtitle1 text-center q-pa-sm",staticStyle:{"max-width":"600px"}},[t._v(t._s(t.profile.user&&t.getMsg(t.profile.user)||t.noUserMsg))])]),s("div",{staticClass:"row q-pt-md q-mb-xl justify-center q-gutter-lg"},[s("div",{staticClass:"details-panel column no-wrap q-pa-md text-grey-2 shadow-1",staticStyle:{height:"320px",width:"96%","max-width":"400px"}},[s("div",{staticClass:"column justify-center items-center",staticStyle:{width:"100%"}},[s("q-avatar",{staticStyle:{"background-color":"rgba(255,255,255,.8)"},attrs:{"text-color":"dark",size:"72px"}},[t._v("\n          "+t._s(t.profile.first_name.charAt(0).toUpperCase())+t._s(t.profile.last_name.charAt(0).toUpperCase())+"\n        ")]),s("div",{staticClass:"text-h4 text-white q-mt-md q-mb-xs"},[t._v(t._s(t.profile.first_name)+" "+t._s(t.profile.last_name))]),s("div",{staticClass:"text-h5 q-mt-md q-mb-xs"},[t._v(t._s(t.profile.position||"schoolAdmin"===t.module&&"School Admin"||t.module))]),s("div",{staticClass:"text-h5 q-mt-md q-mb-xs"},[t._v("ID: "+t._s(t.profile.national_id))]),s("div",{staticClass:"text-h5 q-mt-md q-mb-xs"},[t._v("EMAIL: "+t._s(t.profile.user&&t.profile.user.email||t.profile.email))])],1)]),s("div",{staticStyle:{width:"90%","max-width":"600px"}},[s("q-list",{attrs:{bordered:""}},[s("EDetailEdit",{attrs:{headerClass:"bg-secondary text-white text-subtitle1",label:"Identity",icon:t.getIcon("national_id"),permission:"user/group_4",saveBtnOptions:{click:function(){return t.updateProfile()},showCondition:t.module+"/detailsChanged",permission:"user/group_4"},detailEdits:t.prepareDetailEdits(t.module,t.identity)}}),s("q-separator"),s("EDetailEdit",{attrs:{label:"Other",icon:t.getIcon("join_date"),permission:"user/group_4",saveBtnOptions:{click:function(){return t.updateProfile()},showCondition:t.module+"/detailsChanged",permission:"user/group_4"},detailEdits:t.prepareDetailEdits(t.module,t.other)}}),s("q-separator"),s("EDetailEdit",{attrs:{headerClass:"text-subtitle1 bg-white",label:"Address",icon:"las la-map-marked-alt",permission:"user/group_4",saveBtnOptions:{click:function(){return t.updateAddress()},showCondition:"address/detailsChanged",permission:"user/group_4"},detailEdits:t.prepareDetailEdits("address")}}),s("q-separator"),s("EDetailEdit",{attrs:{headerClass:"text-subtitle1 bg-white",label:"Next of kin",icon:"las la-user-friends",permission:"user/group_4",saveBtnOptions:{click:function(){return t.updateNOK()},showCondition:"nextOfKin/detailsChanged",permission:"user/group_4"},detailEdits:t.prepareDetailEdits("nextOfKin")}}),s("q-separator"),t.profile.user?s("EDetailEdit",{attrs:{headerClass:"text-subtitle1 bg-white",label:"User Acadx Roles",icon:t.getIcon("supervisor"),permission:"user/group_4",saveBtnOptions:{click:function(){return t.updateUser()},showCondition:"userDetail/detailsChanged",permission:"user/group_4"},detailEdits:t.prepareDetailEdits("userDetail",t.acadxPermissions)}}):t._e(),s("q-separator"),t.profile.user?s("EDetailEdit",{attrs:{icon:"las la-user-tie",label:"User School Roles",permission:"user/group_4",saveBtnOptions:{click:function(){return t.updateUser()},permission:"user/group_4",showCondition:"userDetail/detailsChanged"},detailEdits:t.prepareDetailEdits("userDetail",t.schoolPermissions)}}):t._e(),s("q-expansion-item",{attrs:{group:"group1",icon:t.getIcon("student"),label:"Children","header-class":"bg-white"}},[s("q-card",{staticClass:"bg-grey-3"},[s("q-card-section",{staticClass:"overflow-hidden",staticStyle:{"min-height":"150px"}},[s("div",{staticClass:"w-100"},[t.group4?s("q-btn",{staticClass:"q-ma-sm",attrs:{color:"primary",dense:"",icon:"add",label:"Create Student",size:"md"},on:{click:function(e){return t.createStudent()}}}):t._e()],1),t._l(t.profile.children,(function(e){return s("q-intersection",{key:e.id,staticClass:"list-item",attrs:{transition:"scale"}},[s("q-item",{staticClass:"bg-white q-mt-sm",attrs:{clickable:""}},[s("q-item-section",{attrs:{avatar:"",top:""},on:{click:function(){return t.studentDetails(e)}}},[s("q-avatar",{attrs:{icon:t.getIcon("student"),color:"secondary",size:"md","text-color":"white","font-size":"24px"}})],1),s("q-item-section",{on:{click:function(){return t.studentDetails(e)}}},[s("q-item-label",{attrs:{lines:"1"}},[s("span",{staticClass:"text-weight-medium"},[t._v(t._s(e.first_name)+" "+t._s(e.last_name))])])],1),s("q-item-section",{staticClass:"q-gutter-x-sm overflow-hidden",attrs:{side:""}},[t._v(t._s(e.school_class))])],1)],1)}))],2)],1)],1)],1)],1)])])},a=[],r=s("60a3"),n=s("421b"),o=s("c281"),l=function(){var t=function(e,s){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var s in e)e.hasOwnProperty(s)&&(t[s]=e[s])},t(e,s)};return function(e,s){function i(){this.constructor=e}t(e,s),e.prototype=null===s?Object.create(s):(i.prototype=s.prototype,new i)}}(),c=function(t,e,s,i){var a,r=arguments.length,n=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(t,e,s,i);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(n=(r<3?a(n):r>3?a(e,s,n):a(e,s))||n);return r>3&&n&&Object.defineProperty(e,s,n),n},d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.identity=["first_name","last_name","national_id"],e.other=["Position","employee_number","phone_number","work_phone_number","home_phone_number","email","join_date"],e.acadxPermissions=["is_active","is_superuser","is_supervisor","is_staff"],e.schoolPermissions=["is_superadmin","is_school_admin","is_teacher","is_librarian","is_parent","is_student"],e}return l(e,t),e.prototype.getMsg=function(t){return t.is_active&&this.activeMsg||this.inactiveMsg},e.prototype.createStudent=function(){Object(o["t"])({name:"studentCreate"})},e=c([r["a"]],e),e}(Object(r["c"])(n["c"],n["b"])),u=d,p=u,m=(s("deb7"),s("2877")),f=s("cb32"),_=s("1c1c"),h=s("eb85"),b=s("3b73"),g=s("f09f"),v=s("a370"),x=s("9c40"),w=s("ad56"),C=s("66e5"),q=s("4074"),y=s("0170"),E=s("eebe"),D=s.n(E),O=Object(m["a"])(p,i,a,!1,null,"f46a2350",null);e["default"]=O.exports;D()(O,"components",{QAvatar:f["a"],QList:_["a"],QSeparator:h["a"],QExpansionItem:b["a"],QCard:g["a"],QCardSection:v["a"],QBtn:x["a"],QIntersection:w["a"],QItem:C["a"],QItemSection:q["a"],QItemLabel:y["a"]})},deb7:function(t,e,s){"use strict";var i=s("f091"),a=s.n(i);a.a},f091:function(t,e,s){}}]);