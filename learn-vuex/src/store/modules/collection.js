/* 
在此模块中存放collect列表
并且编写方法往该列表里添加指定参数
再在export default中导出这些模块
*/

const state ={
    collects:[],
}

const getters = {
    renderCollcets(state){
        return state.collects;
    }
}

const mutations = {
    pushCollects(state,items){
        state.collects.push(items);
    }
}

const acitons = {
    InvokePushItems(content,item){
        content.commit.push('pushCollects',item)
    }
}
export default{
    namespaced:true,
    state,
    getters,
    mutations,
    acitons,
}