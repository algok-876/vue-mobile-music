import { get, post } from '@/utils/http'

export function fetchBanner () {
  return get('/banner', {
    type: 1
  })
}

export function fetchRecommendSongList (limit = 6) {
  return get('/personalized', {
    limit
  }, true)
}
