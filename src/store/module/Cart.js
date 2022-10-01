import http from "@/api/request";
import Vue from "vue";

export default {
  state: {
    cartList: [],
    selectedList: [],
  },
  getters: {
    isAllChecked(state) {
      if (state.cartList.length > 0)
        return state.cartList.length == state.selectedList.length;
      else return false;
    },

    total(state) {
      let total = {
        num: 0,
        price: 0,
      };
      state.cartList.forEach((element) => {
        if (element.isChecked) {
          total.num += parseInt(element.goods_num);
          total.price += element.goods_price * element.goods_num;
        }
      });
      return total;
    },

    goodsList(state) {
      let arr = [];
      state.selectedList.map((id) => {
        state.cartList.find((item) => {
          if (id == item.id) arr.push(item);
        });
      });
      return arr;
    },
  },
  actions: {
    async addToCart({ commit }, value) {
      let res = await http.$axios({
        url: "/api/addToCart",
        method: "post",
        data: {
          id: value,
        },
        headers: {
          token: true, //  说明用户已登录
        },
      });
      // console.log(res);
      if (res.success) return res;
      else return Promise.reject(new Error("failed"));
    },

    async getCart({ commit }) {
      let res = await http.$axios({
        url: "/api/getCart",
        headers: {
          token: true, //  说明用户已登录
        },
      });
      // console.log(res);
      if (res.success) {
        commit("GETCART", res.data);
        return res;
      } else return Promise.reject(new Error("failed"));
    },

    selectAllfn({ commit, getters }) {
      getters.isAllChecked ? commit("unselectAll") : commit("selectAll");
    },

    async updateGoods({ commit }, data) {
      let res = await http.$axios({
        url: "/api/updateGoods",
        method: "post",
        data,
      });
      if (res.success) {
        return res;
      } else return Promise.reject(new Error("failed"));
    },

    async deleteGoods({ commit, state }, id) {
      // 判断参数是数字还是数组，即单删还是批量
      // 赋值给数组，作为post参数一起发请求
      let idArray = typeof id == "object" ? state.selectedList : [id];
      // console.log(idArray);
      let res = await http.$axios({
        url: "/api/deleteGoods",
        method: "post",
        data: {
          idArray,
        },
      });
      if (res.success) {
        commit("DELETE", idArray);
        return res;
      } else return Promise.reject(new Error("failed"));
    },
  },
  mutations: {
    GETCART(state, data) {
      state.cartList = data;
      state.selectedList = [];
      // 给所有获取回来的数据项加一个isChecked属性
      state.cartList.forEach((item) => {
        Vue.set(item, "isChecked", false);
        // if (item.isChecked) {
        //   state.selectedList.push(item.id);
        // }
      });
    },

    selectAll(state) {
      state.cartList.forEach((item) => {
        Vue.set(item, "isChecked", true);
        state.selectedList.push(item.id);
      });
      // console.log(state.cartList,state.selectedList);
    },

    unselectAll(state) {
      state.cartList.forEach((item) => {
        Vue.set(item, "isChecked", false);
      });
      state.selectedList = [];
      // console.log(state.cartList,state.selectedList);
    },

    selectFn(state, index) {
      let id = state.cartList[index].id;
      let i = state.selectedList.indexOf(id);
      //能在selectList找到对应的id，就删除
      if (i > -1) {
        return state.selectedList.splice(i, 1);
      }
      //如果之前没有选中，就给selectList添加一个id进去
      state.selectedList.push(id);
    },

    DELETE(state, idArray) {
      // console.log(idArray);
      idArray.forEach((id) => {
        // 先遍历删除cartList中的
        state.cartList.forEach((item, index) => {
          if (item.id == id) {
            state.cartList.splice(index, 1);
          }
        });
        // 清空选中
        state.selectedList = [];
        // state.selectedList.forEach((item, index) => {
        //   if (item.id == id) {
        //     state.selectedList.splice(index, 1);
        //   }
        // });
      });
      // 重新遍历选中的
      state.cartList.forEach((item) => {
        if (item.isChecked) {
          state.selectedList.push(item.id);
        }
      });
    },
  },
};
