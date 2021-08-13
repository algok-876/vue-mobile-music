import axios from '@/utils/axios.js'

export function fetchBanner () {
  return axios.get('/banner', {
    type: 1
  })
}