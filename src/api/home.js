import { get, post } from '@/utils/http'

export function fetchBanner () {
  return get('/banner', {
    params: {
      type: 1
    }
  })
}

export function fetchRecommendSongList (limit = 6) {
  return get('/personalized', {
    params: {
      limit
    }
  }, true)
}
