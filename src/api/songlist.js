import { get, post } from '@/utils/http'

export function fetchSongListDetail (id) {
  return get('/playlist/detail', {
    id
  })
}

export function fetchSongDetail (ids) {
  return get('/song/detail', {
    ids
  })
}
