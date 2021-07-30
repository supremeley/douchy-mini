import request from '@/utils/request.js'

export function userList(data) {
  return request.get('/user/list', data, {
    header: { 'X-Dts-Admin-Token': 'd55b1b07-82e5-4a17-838b-858cd8ccf3f1' }
  })
}
