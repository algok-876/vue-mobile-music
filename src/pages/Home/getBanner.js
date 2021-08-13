import { fetchBanner } from '@/api/home'
import customStorage from '@/utils/customStorage'

export default async function getBanner () {
  let data = customStorage.getItem('banner')
  if (!data) {
    data = await fetchBanner()
    customStorage.setItem("banner", data.banners)
    return data.banners
  }
  return data
}
