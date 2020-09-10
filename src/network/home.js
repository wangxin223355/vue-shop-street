import { request } from './request'

export function getHomeMultidate() {
  return request({
    url: '/api/z8/home/multidata',
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '/api/z8/home/data',
    params: {
      type,
      page,
    },
  })
}
