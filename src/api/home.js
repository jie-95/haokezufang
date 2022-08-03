import request from '@/utils/request'
export const swiper = (params) => {
  return request({
    url: '/home/swiper',
    params
  })
}
export const groups = (params) => {
  return request({
    url: '/home/groups',
    params
  })
}
export const areaHot = (params) => {
  return request({
    url: '/area/hot',
    params
  })
}
export const areaCity = (level) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}
export const areaMap = (params) => {
  return request({
    url: '/area/map',
    params
  })
}

// 根据城市名称查询该城市信息
export const areaInfo = (name, value) => {
  return request({
    url: '/area/info',
    params: {
      name,
      value
    }
  })
}
