"use strict";(self["webpackChunktea_store"]=self["webpackChunktea_store"]||[]).push([[264],{4323:function(t,e,r){r.d(e,{Z:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header"},[e("div",{staticClass:"left",on:{click:function(e){return t.$router.back()}}},[e("i",{staticClass:"iconfont icon-xiangzuojiantou"})]),e("div",{staticClass:"middle"},[e("i",{staticClass:"iconfont icon-search"}),e("form",{attrs:{onsubmit:"return false"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goSearchList.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],attrs:{type:"text",placeholder:"搜索你喜欢的产品"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})])]),e("div",{staticClass:"right",on:{click:t.goSearchList}},[t._v("搜索")])])},i=[],a={name:"Header",data(){return{input:"",searchArr:JSON.parse(localStorage.getItem("searchArr"))||[]}},created(){this.$route.query&&(this.input=this.$route.query.key),this.$bus.$on("searchHistory",(t=>{this.input=t,this.goSearchList()}))},methods:{goSearchList(){if(!this.input)return;this.searchArr.unshift(this.input.trim());let t=new Set(this.searchArr);localStorage.setItem("searchArr",JSON.stringify(Array.from(t))),this.input.trim()!=this.$route.query.key&&this.$router.push({name:"SearchList",query:{key:this.input.trim()}})}}},n=a,c=r(1001),o=(0,c.Z)(n,s,i,!1,null,"324a3bfb",null),u=o.exports},7264:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"searchindex"},[e("Header"),e("section",[t.searchArr.length?e("div",{staticClass:"search-history"},[e("h2",[t._m(0),e("div",{staticClass:"clear",on:{click:t.clearHistory}},[t._v("清除历史记录")])]),e("ul",t._l(t.searchArr,(function(r,s){return e("li",{key:s,on:{click:function(e){return t.serachHistory(r)}}},[t._v(t._s(r))])})),0)]):e("div",{staticClass:"noHistory"},[t._v("暂无搜索记录……")])])],1)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("i",{staticClass:"iconfont icon-lishi"}),t._v("历史搜索")])}],a=r(4323),n=r(7511),c={name:"SearchIndex",components:{Header:a.Z},data(){return{searchArr:JSON.parse(localStorage.getItem("searchArr"))||[]}},methods:{clearHistory(){(0,n.MessageBox)({title:"提示",message:"确定执行此操作?",showCancelButton:!0}).then((t=>{"confirm"==t&&(localStorage.removeItem("searchArr"),this.searchArr=[])}))},serachHistory(t){this.$bus.$emit("searchHistory",t)}}},o=c,u=r(1001),l=(0,u.Z)(o,s,i,!1,null,"9fd324b4",null),h=l.exports}}]);