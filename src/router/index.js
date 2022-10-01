import vue from 'vue'
import vueRouter from 'vue-router'

vue.use(vueRouter)

// 路由懒加载
const Home = () => import('@/views/Home')
const My = () => import('@/views/My')
const Category = () => import('@/views/Category')
const Cart = () => import('@/views/Cart')
const Search = () => import('@/views/Search')
const SearchList = () => import('@/views/Search/SearchList')
const searchIndex = () => import('@/views/Search/SearchIndex')
const Detail = () => import('@/views/Detail')
const Login = () => import('@/views/Login/login')
const LoginPwd = () => import('@/views/Login/loginPwd')
const Register = () => import('@/views/Login/Register')
const Address = () => import('@/views/Address')
const AddressIndex = () => import('@/views/Address/AddressIndex')
const AddressEdit = () => import('@/views/Address/AddressEdit')
const Order = () => import('@/views/Order')
const Payment = () => import('@/views/Order/Payment')
const AllOrders = () => import('@/views/Order/AllOrders')

const routes = [
    {
        path: '/',
        redirect: '/home',  //路由重定向
        // component: Home,
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/my',
        name: 'My',
        component: My
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart,
        meta:{
            requireAuth:true
        },
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        children: [
            {   //搜索页面的默认主页
                path: '/',
                name: 'searchIndex',
                component: searchIndex
            },
            {   //搜索详情
                path: '/searchList',
                name: 'SearchList',
                component: SearchList
            }
        ]
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail,
        meta: {
            keepAlive: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta:{
            afterLogin:true
        }
    },
    {
        path: '/loginPwd',
        name: 'LoginPwd',
        component: LoginPwd,
        meta:{
            afterLogin:true
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        meta:{
            afterLogin:true
        }
    },
    {
        path: '/address',
        name: 'Address',
        component: Address,
        meta:{
            requireAuth:true
        },
        children: [
            {
                path: '/',
                name: 'AddressIndex',
                component: AddressIndex,
                meta:{
                    requireAuth:true
                },
            },
            {
                path: '/addressEdit',
                name: 'AddressEdit',
                component: AddressEdit,
                meta:{
                    requireAuth:true
                },
            }
        ]
    },
    {
        path: '/order',
        name: 'Order',
        component: Order,
        meta:{
            requireAuth:true,
            keepAlive: true
        },
    },
    {
        path: '/payment',
        name: 'Payment',
        component: Payment,
        meta:{
            requireAuth:true
        },
    },
    {
        path: '/allOrders',
        name: 'AllOrders',
        component: AllOrders,
        meta:{
            requireAuth:true
        },
    },

]

const router = new vueRouter({
    routes,
    // mode: 'history'
})


const originalPush = vueRouter.prototype.push
const originalReplace = vueRouter.prototype.replace

vueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

vueRouter.prototype.replace = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalReplace.call(this, location, onResolve, onReject)
  }
  return originalReplace.call(this, location).catch(err => err)
}


export default router