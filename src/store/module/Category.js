import http from '@/api/request'

const state = {
    left:[],
    right:[],
    banner:''
}

const getters = {}

const actions = {
    async getCategory({commit}){
        let res = await http.$axios({url:'/api/category'})
        // console.log(res);
        commit('GETCATEGORY',res)
    }
}

const mutations = {
    GETCATEGORY(state,value){
        state.left=[]
        state.right=[]
        value.forEach(item=>{
            if(item.bannerUrl) {
                state.banner = item.bannerUrl
            }else{
                state.left.push({
                    id:item.id,
                    name:item.name
                })
                state.right.push(item.data)
            }            
        })
    }
}

export default ({
    namespaced:true,
    state,
    getters,
    actions,
    mutations
})