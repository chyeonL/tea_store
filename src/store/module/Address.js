import http from "@/api/request";

export default {
  state: {
    addressList: [],
  },
  getters: {
    defaultAddress(state, getters) {
      //   console.log(state, getters);
      let index = -1;
      state.addressList.forEach((element, i) => {
        if (element.isDefault == "true") index = i;
      });
      return index == -1 ? {} : state.addressList[index];
    },
  },
  mutations: {
    ADDRESSLIST(state, data) {
      state.addressList = data;
    },
  },
  actions: {
    async addAddress(context, data) {
      //  13763334852      海淀区 五道口 清华大学   可爸可妈
      let res = await http.$axios({
        url: "/api/addAddress",
        method: "post",
        data,
        headers: {
          token: true,
        },
      });
      if (res.success) return res;
      else return Promise.reject(new Error("failed"));
    },

    async getAddress({ commit }) {
      let res = await http.$axios({
        url: "/api/getAddress",
        headers: {
          token: true,
        },
      });
      if (res.success) {
        commit("ADDRESSLIST", res.data);
        return res;
      } else return Promise.reject(new Error("failed"));
    },

    async updateAddress(context, data) {
      // console.log(data);
      let res = await http.$axios({
        url: "/api/updateAddress",
        method: "post",
        data,
        headers: {
          token: true,
        },
      });
      if (res.success) return res;
      else return Promise.reject(new Error("failed"));
    },

    async deleteAddress(context, data) {
      // console.log(data);
      let res = await http.$axios({
        url: "/api/deleteAddress",
        method: "post",
        data,
      });
      if (res.success) return res;
      else return Promise.reject(new Error("failed"));
    },
  },
};
