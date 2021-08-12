import axios from '@/utils/axios.js'

export function login (params) {
  return axios.post('/login/cellphone', params)
}
