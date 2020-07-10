// 在此导出我们的vuex模块

 import Vue from 'vue'
 import Vuex  from 'vuex'
 import collection from './collection'
 import footStatus from './footerStatus'

 Vue.use('Vuex')

 const store = new Vuex.Store({
     modules:{
         collection,
         footStatus
     }
 })
 
 export default {
     store,
 }