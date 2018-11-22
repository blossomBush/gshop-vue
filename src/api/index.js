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
//发送短信验证码
export const reqSendCode = (phone) => ajax(API + '/sendcode', {phone})
//手机号验证登录
export const reqSmsLogin = (phone, code) => ajax(API + '/login_sms', {phone, code}, 'POST')
//密码验证登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(API + '/login_pwd', {name, pwd, captcha}, 'POST')
//用户登出
export const reqLogOut = () => ajax(API + '/logout')
//获取用户信息
export const reqUserInfo = () => ajax(API + '/userinfo')
// 商家详情页路由
export const reqShopInfo = () => ajax('/info')
export const reqShopGoods = () => ajax('/goods')
export const reqShopRating = () => ajax('/ratings')
