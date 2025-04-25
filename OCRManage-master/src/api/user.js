import request from '@/utils/request'
//接口管理
export function login(data) {
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

//token刷新接口
export function refreshToken() {
  return request({
    url: '/token/getToken',
    method: 'get',
  })
}


// export function getPermissionList(role) {
//   return request({
//     url: '/vue-admin-template/user/permission',
//     method: 'get',
//     params: { role } // 将 role 作为查询参数
//   })
// }

export function getInfo(token) {
  return request({
    url: '/permission/getRolePermissionByToken',
    method: 'get',
    params: { token }
  })
}

// export function logout() {
//   return request({
//     url: '/vue-admin-template/user/logout',
//     method: 'post'
//   })
// }
