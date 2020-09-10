import { request } from './request'

// 左侧导航
export function getCategory() {
  return request({
    url: '/api/z8/category',
  })
}
// 右侧导航
export function getSubcategory(maitKey) {
  return request({
    url: '/api/z8/subcategory',
    params: {
      maitKey: maitKey,
    },
  })
}
