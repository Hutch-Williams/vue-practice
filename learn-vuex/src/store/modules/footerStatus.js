/*在此vuex模块中，存放showFooter参数来存放是否显示该模块
还有一个changNum参数是变化的数字
用hide,和show方法，将showFooter的显示状态设置为true或false,
用newNum方法让changeNum参数每次加上我们指定的值
*/
const state = {
    showFooter:true,
    changeNum:0
}
const getters = {
    isShow(state){
        return state.showFooter
    },
    
    getChangeNum(state){
        return state.changeNum
    }
}

const mutations = {
    show(state){
        state.showFooter = true;
    },

    hide(state){
        state.showFooter = false;
    },

    newNum(state,sum){
        state.changeNum +=sum;
    }
}

const actions = {
    hideFooter(content){
        content.commit('hide')
    },

    showFooter(content){
        content.commit('show')
    },

    getNum(content,num){
        content.commit('newNum',num)
    }
}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions,
}