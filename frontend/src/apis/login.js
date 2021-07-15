import request from './request'

export function login() {
    return request({
        url: `/admin/login`,
        method: 'post'
    })
}