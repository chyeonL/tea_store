"use strict";(self["webpackChunktea_store"]=self["webpackChunktea_store"]||[]).push([[350],{6350:function(s,t,e){e.r(t),e.d(t,{default:function(){return o}});var a=function(){var s=this,t=s._self._c;return t("div",{staticClass:"addressIndex"},[t("header",[s.selectStatus?t("div",{staticClass:"back",on:{click:function(t){return s.$router.back()}}},[t("i",{staticClass:"iconfont icon-xiangzuojiantou"})]):t("div",{staticClass:"back",on:{click:function(t){return s.$router.push("/my")}}},[t("i",{staticClass:"iconfont icon-xiangzuojiantou"})]),s._m(0),t("div",{staticClass:"home",on:{click:function(t){return s.$router.push("/")}}})]),t("main",[s.addressList.length?t("ul",{staticClass:"addressList"},s._l(s.addressList,(function(e){return t("li",{key:e.id,on:{click:function(t){return s.editAddress(e)}}},[t("div",{staticClass:"basic"},[t("span",{staticClass:"name"},[s._v(s._s(e.name))]),t("span",{staticClass:"tel"},[s._v(s._s(e.tel))])]),t("div",{staticClass:"addres"},[t("span",{directives:[{name:"show",rawName:"v-show",value:"true"==e.isDefault,expression:"add.isDefault == 'true'"}],staticClass:"default"},[s._v("[默认]")]),s._v(" "+s._s(e.province)+" "+s._s(e.city)+" "+s._s(e.county)+" "+s._s(e.addressDetail)+" ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:s.selectStatus,expression:"selectStatus"}],staticClass:"choose",on:{click:function(t){return s.goOrder(e)}}},[s._v(" 选择 ")])])})),0):t("p",[s._v("暂无地址信息")]),t("div",{directives:[{name:"show",rawName:"v-show",value:!s.selectStatus,expression:"!selectStatus"}],staticClass:"addAddress",on:{click:s.addAddress}},[s._v("添加地址")])])])},i=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"title"},[t("span",[s._v("我的地址")])])}],r=e(3822),d={name:"AddressIndex",data(){return{selectStatus:!1,path:"/my"}},created(){this.$store.dispatch("getAddress"),this.$route.query.type&&(this.selectStatus=!0)},computed:{...(0,r.rn)({addressList:s=>s.Address.addressList})},methods:{addAddress(){this.$router.push("/addressEdit")},editAddress(s){this.selectStatus||this.$router.push({name:"AddressEdit",query:s})},goOrder(s){this.$bus.$emit("selectPath",JSON.stringify(s)),this.$router.back()}}},n=d,c=e(1001),u=(0,c.Z)(n,a,i,!1,null,"9468bba0",null),o=u.exports}}]);