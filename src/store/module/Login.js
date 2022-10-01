// axios
import http from '@/api/request'

const state = {
    isLogin: false,
    userInfo: {},
    token: ''
}

const getters = {}

const actions = {
    async loginByPwd({ commit }, data) {
        let res = await http.$axios({
            url: '/api/loginByPwd', data, method: 'post'
        })
        // console.log(res.success);
        if(res.success) commit('LOGIN', res.data)        
        return res || Promise.reject(new Error('fail'))
    },

    async loginByTel({ commit }, data) {
        let res = await http.$axios({
            url: '/api/loginByTel', data, method: 'post'
        })
        // console.log(res.success);
        if(res.success) commit('LOGIN', res.data)        
        return res || Promise.reject(new Error('fail'))
    },

    async getCode({ commit }, userTel) {
        let res = await http.$axios({
            url: '/api/code',
            params: { userTel },
            method: 'post'
        })
        if (res.success) return res
        else return Promise.reject(new Error('fail'))
    },

    async register({ commit }, data) {
        let res = await http.$axios({
            url: '/api/register',
            data,
            method: 'post'
        })
        // console.log(res.success);
        if(res.success) commit('LOGIN', res.data)        
        return res || Promise.reject(new Error('fail'))
    },
}

const mutations = {
    // 登录、注册后，vuex存储返回的用户信息，and本地存储
    LOGIN(state, value) {
        // vuex存储
        state.isLogin = true
        state.token = value.token
        state.userInfo = { avatar: value.imgUrl, name: value.nickName }
        // 本地存储
        localStorage.setItem('isLogin', true)
        localStorage.setItem('token', JSON.stringify(state.token))
        localStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    },

    // 退出登录
    LOGOUT(state) {
        localStorage.setItem('isLogin', false)
        localStorage.removeItem('token','')
        localStorage.removeItem('userInfo','')
        // vuex
        state.isLogin = false
        state.token = JSON.parse(localStorage.getItem('token'))
        state.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    },

    // 首次进入商城，初始化数据，判断是否登录
    init(state) {
        // 判断本地存储中的登陆状态
        let isLogin = JSON.parse(localStorage.getItem('isLogin'))
        if (isLogin) {
            // 已登录，获取本地存储中的数据
            state.isLogin = true
            state.token = JSON.parse(localStorage.getItem('token'))
            state.userInfo = JSON.parse(localStorage.getItem('userInfo'))
        }else {
            localStorage.setItem('isLogin', false)
        }
        // console.log(state.isLogin,state.token,state.userInfo);
    }
}

export default ({
    namespaced: true,
    state,
    getters,
    actions,
    mutations
})