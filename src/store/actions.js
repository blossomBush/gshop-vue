// 异步间接更新
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutations-type'

export default {
  // 异步获取地址信息的异步action
  async getAddress ({commit,state}) {
    //发送ajax请求
    const {latitude,longitude} = state
    const result = await reqAddress(latitude,longitude)
    if (result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取食品分类列表的异步action
  async getFoodCategorys ({commit}) {
    //发送ajax请求
    const result = await reqFoodCategorys()
    if (result.code===0) {
      const foodCategorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys: foodCategorys})
    }
  },

  // 异步获取商家列表的异步action
  async getShops ({commit,state}) {
    //发送ajax请求
    const {latitude,longitude} = state
    const result = await reqShops({latitude,longitude})
    if (result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
}


