/*
包含n个接口请求参数的模块，返回值是promise
 */
import ajax from './ajax'
const API = '/api'
//根据经纬度获取位置详情
export const reqAddress = (latitude,longitude) => ajax(API + `/position/${latitude},${longitude}`)
//获取食品分类列表
export const reqFoodCategorys = () => ajax(API + `/index_category`)
//根据经纬度获取商铺列表
export const reqShops = ({latitude,longitude}) => ajax(API + `/shops`, {latitude,longitude})


