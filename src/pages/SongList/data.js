import { fetchSongListDetail, fetchSongDetail } from '@/api/songlist'

export async function getSongListDetails (sontListId) {
  const songListDetail = await fetchSongListDetail(sontListId)
  const trackIds = songListDetail.playlist.trackIds.map((track) => track.id)
  const songDetails = await fetchSongDetail(trackIds.join(','))
  return {
    songlist: songListDetail.playlist,
    songs: songDetails.songs
  }
}
