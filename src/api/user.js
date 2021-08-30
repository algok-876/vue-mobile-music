import { get, post } from '@/utils/http'

export function phoneLogin (params) {
  return post('/login/cellphone', params)
}

export function validCaptcha (phone, captcha) {
  return post('/captcha/verify', {
    phone,
    captcha
  })
}

export function sendCaptcha (phone) {
  return get('/captcha/sent', {
    phone
  })
}

export function loginStatus () {
  return post('/login/status', null, true)
}
