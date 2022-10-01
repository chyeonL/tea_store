import http from '@/api/request'

const state = {
    goods:{}
}

const getters = {
    swiperList(state){
        let list = []
        list.push(state.goods.swiper1)
        list.push(state.goods.swiper2)
        list.push(state.goods.swiper3)
        list.push(state.goods.swiper4)
        return list
    }
}

const actions = {
    async getDetail({commit},id){
        let res = await http.$axios({url:'/api/goods/detail',params:{id}})
        // console.log(res); 
        commit('GETDETAIL',res[0])
    }
}

const mutations = {
    GETDETAIL(state,value){
        state.goods = value
    }
}

export default ({
    namespaced:true,
    state,
    getters,
    actions,
    mutations
})