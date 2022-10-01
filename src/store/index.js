import Vue from 'vue'
import vuex from 'vuex'

import Category from './module/Category'
import Detail from './module/Detail'
import Login from './module/Login'
import Cart from './module/Cart'
import Address from './module/Address'
import Order from './module/Order'

Vue.use(vuex)

export default new vuex.Store({
    modules:{
        Category,
        Detail,
        Login,
        Cart,
        Address,
        Order
    }
})