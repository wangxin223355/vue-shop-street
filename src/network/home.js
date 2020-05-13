import { request } from './request'

export function getHomeMultidate() {
  return request({
    url: '/api/n3/home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/api/n3/home/data',
    params: {
      type,
      page
    }
  })
}
