import http from "@/api/request";

export default {
  state: {
    orderList: [],
    orderId: JSON.parse(localStorage.getItem("teaStore_orderID")) || "",
    allOrders:[]
  },
  actions: {
    // cart页面去结算 调用的 新增订单
    async addOrder({ commit, rootGetters }) {
      let res = await http.$axios({
        url: "/api/addOrder",
        method: "post",
        data: {
          list: rootGetters.goodsList,
        },
      });
      console.log(res);
      if (res.success) {
        commit("ORDER", res.data);
        return res;
      } else return Promise.reject(new Error("failed"));
    },

    // order页面 created 调用的查询订单
    async getOrder({ commit, state }) {
      let res = await http.$axios({
        url: "/api/getOrder",
        method: "post",
        data: {
          orderId: state.orderId,
        },
      });
      // console.log(res.data);
      if (res.success) {
        commit("ORDER", res.data);
        return res;
      } else return Promise.reject(new Error("failed"));
    },

    // 修改订单状态，确认提交
    async submitOrder({ commit, state, rootState }) {
      let  dataObj={
        orderId: state.orderId,
        shopArr: rootState.Cart.selectedList,
      }
      // console.log(qs.stringify(dataObj));
      // console.log(rootState.Cart.selectedList);
      let res = await http.$axios({
        url: "/api/submitOrder",
        method: "post",
        data: dataObj
      });
      // console.log(res);
      if (res.success) {
        return res;
      } else return Promise.reject(new Error("failed"));
    },

    // 查询订单状态
    async getPaymentStatus(context,id){
      let res = await http.$axios({
        url:'/api/getPaymentStatus',
        method:'post',
        data:{id}
      })
      // console.log(res);
      if (res.success) {
        return res;
      } else return Promise.reject(new Error("failed"));
    },

    // 修改为支付成功/失败
    async goPayment(context ,data) {
      let res = await http.$axios({
        url: "/api/payment",
        method: "post",
        headers: {
          token: true,
          // "content-type": "application/x-form-urlencoded",
        },
        data
      });
      // console.log(res);
      if (res.success) {
        return res;
      } else return Promise.reject(new Error("failed"));
    },

    // 获取所有订单
    async getAllOrders(context){
      let res = await http.$axios({
        url:'/api/getAllOrders',
      })
      console.log(res);
      if(res.success) context.commit('ALLORDERS',res.data)
    }
  },
  mutations: {
    ORDER(state, value) {
      state.orderList = value; //这个是返回的订单数据
      state.orderId = value[0].order_id; //单独存储订单号，还要本地存储
      localStorage.setItem(
        "teaStore_orderID",
        JSON.stringify(value[0].order_id)
      );
    },

    ALLORDERS(state,data){
      state.allOrders = data
    }
  },
};
