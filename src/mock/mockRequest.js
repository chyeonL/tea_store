import axios from 'axios'

const mockRequest = axios.create({
    baseURL:'/mock',
    timeout:5000
})

mockRequest.interceptors.response.use(res=>{
    if(res.status == 200)
    return res.data
})

export const mockHome = ()=>mockRequest.get('/home')
export const mockHomeDA = ()=>mockRequest.get('/da')
export const mockHomeTIE = ()=>mockRequest.get('/tie')
export const mockCategory = ()=>mockRequest.get('/category')
export const mockLogin = ()=>mockRequest.get('/login')
export const mockCart = ()=>mockRequest.get('/cart')
export const mockAddress = ()=>mockRequest.get('/address')
export const mockDetail = ()=>mockRequest.get('/detail')
export const mockSearch = ()=>mockRequest.get('/search')





