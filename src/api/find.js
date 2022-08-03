import request from '@/utils/request'

export const getHouseList = (cityId) => {
  return request({
    url: '/houses',
    params: {
      cityId
    }
  })
}
