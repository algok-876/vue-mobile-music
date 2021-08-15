import { fetchBanner, fetchRecommendSongList } from '@/api/home'
import customStorage from '@/utils/customStorage'

export async function getBanner () {
  let data = customStorage.getItem('banner')
  if (!data) {
    data = await fetchBanner()
    customStorage.setItem("banner", data.banners)
    return data.banners
  }
  return data
}

export async function getSongList () {
  let data = customStorage.getItem('recommendSongList')
  if (!data) {
    data = await fetchRecommendSongList()
    customStorage.setItem("recommendSongList", data.result)
    return data.result
  }
  return data
}
