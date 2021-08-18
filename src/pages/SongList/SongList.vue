<template>
  <van-nav-bar title="标题" left-text="返回" left-arrow>
    <template #right>
      <van-icon name="search" size="25" />
    </template>
  </van-nav-bar>
</template>

<script>
import { getSongListDetails } from './data'
import { onMounted, reactive } from 'vue'
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const state = reactive({
      // 歌单基本信息
      songlist: null,
      // 歌单下歌曲的信息
      songs: []
    })

    onMounted(async () => {
      // 获取歌单和歌曲数据
      const { songlist, songs } = await getSongListDetails(props.id)
      state.songlist = songlist
      state.songs = songs
    })
  }
}
</script>

<style>

</style>
