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
export const reqPwdLogin = ({phone, pwd, captcha}) => ajax(API + '/login_pwd', {phone, pwd, captcha}, 'POST')

