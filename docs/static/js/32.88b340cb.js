"use strict";(self["webpackChunktea_store"]=self["webpackChunktea_store"]||[]).push([[32],{3032:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"cart"}},[t("header",[t("span",{staticClass:"title"},[e._v("购物车")]),t("span",{staticClass:"manage",domProps:{textContent:e._s(e.isManage?"完成":"管理")},on:{click:e.changeIsManage}})]),e.cartList.length?t("main",{ref:"wrapper"},[t("ul",{ref:"content"},e._l(e.cartList,(function(s,a){return t("li",{key:s.id},[t("div",{staticClass:"radio"},[t("van-checkbox",{attrs:{"checked-color":"#b0352f"},on:{click:function(t){return e.$store.commit("selectFn",a)}},model:{value:s.isChecked,callback:function(t){e.$set(s,"isChecked",t)},expression:"goods.isChecked"}})],1),t("div",{staticClass:"goods-img"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.goods_imgUrl,expression:"goods.goods_imgUrl"}],attrs:{alt:""}})]),t("div",{staticClass:"info"},[t("div",{staticClass:"title"},[t("span",[e._v(e._s(s.goods_name))]),t("i",{staticClass:"iconfont icon-icon",on:{click:function(t){return e.deleteGoods(s.id)}}})]),t("div",{staticClass:"price"},[e._v("￥"+e._s(s.goods_price))]),t("div",{staticClass:"stepper"},[t("van-stepper",{attrs:{integer:""},on:{change:function(t){return e.changeNum(t,s.id)}},model:{value:s.goods_num,callback:function(t){e.$set(s,"goods_num",t)},expression:"goods.goods_num"}})],1)])])})),0)]):t("main",{staticClass:"noGoods"},[t("p",[e._v("购物车中没有商品")]),t("div",{on:{click:function(t){return e.$router.replace("/home")}}},[e._v("去首页逛逛")])]),e.cartList.length?t("footer",[t("div",{staticClass:"radio"},[t("van-checkbox",{attrs:{value:e.isAllChecked,"checked-color":"#b0352f"},on:{click:function(t){return e.$store.dispatch("selectAllfn")}}})],1),t("div",{staticClass:"info"},[t("div",{staticClass:"Num"},[e._v(" 共有 "),t("span",[e._v(e._s(e.total.num))]),e._v(" 件商品 ")]),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isManage,expression:"!isManage"}],staticClass:"total"},[e._v(" 总计： "),t("span",{staticClass:"price"},[e._v("¥"+e._s(e.total.price.toFixed(2))+" + 0茶币")])])]),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isManage,expression:"!isManage"}],staticClass:"order",on:{click:e.goOrder}},[e._v("去结算")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isManage,expression:"isManage"}],staticClass:"order",on:{click:function(t){return e.deleteGoods(e.$store.state.Cart.selectedList)}}},[e._v(" 删除 ")])]):e._e(),t("Tabbar")],1)},i=[],n=s(3822),o=s(5031),c={name:"cart",data(){return{isManage:!1}},computed:{...(0,n.rn)({cartList:e=>e.Cart.cartList,selectedList:e=>e.Cart.selectedList}),...(0,n.Se)(["isAllChecked","total","goodsList"])},created(){this.getData()},methods:{async getData(){await this.$mock.mockCart().then((e=>{this.$store.commit("GETCART",e.data),this.$nextTick((()=>{new o.ZP(this.$refs.wrapper,{click:!0,bounce:!1,mouseWheel:!0})}))}))},deleteGoods(e){this.$dialog.confirm({title:"删除",message:"确认删除商品吗？"}).then((()=>{})).catch((()=>{}))},changeNum(e,t){},goOrder(){this.selectedList.length||this.$toast("还未勾选商品")},changeIsManage(){this.cartList.length>0&&(this.isManage=!this.isManage)}}},r=c,l=s(1001),d=(0,l.Z)(r,a,i,!1,null,"26111b68",null),u=d.exports}}]);