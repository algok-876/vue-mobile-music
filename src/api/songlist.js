import axios from '@/utils/axios.js'

export function fetchSongListDetail (id) {
  return axios.get('/playlist/detail', {
    params: {
      id
    }
  })
}

export function fetchSongDetail (ids) {
  return axios.get('/song/detail', {
    params: {
      ids
    }
  })
}
