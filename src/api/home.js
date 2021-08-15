import axios from '@/utils/axios.js'

export function fetchBanner () {
  return axios.get('/banner', {
    params: {
      type: 1
    }
  })
}

export function fetchRecommendSongList (limit = 6) {
  return axios.get('/personalized', {
    params: {
      limit
    }
  })
}
