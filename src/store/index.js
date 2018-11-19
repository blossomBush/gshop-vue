/**
 * Created by DELL on 2018/11/19.
 */
//管理状态的核心模块
import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

