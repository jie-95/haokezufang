import request from '@/utils/request'
// 用户登录
export const getUserInfo = (Authorization) => {
  return request({
    url: '/user/',
    headers: { Authorization }
  })
}
// 用户搜藏列表
export const getCollect = (Authorization) => {
  return request({
    url: '/user/favorites',
    headers: { Authorization }
  })
}
