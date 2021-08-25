<template>
  <div class="songs-search-result">
    <ul class="result">
      <li v-for="(song) in filterSongs" :key="song.id" v-wave>
        <song-item
          :song-name="song.name"
          :singer="song.singer"
          :album="song.album"
        ></song-item>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'
import { useStore } from 'vuex'
import SongItem from '@/components/SongItem.vue'
export default {
  props: {
    searchWord: {
      type: String
    }
  },
  setup (props) {
    const store = useStore()
    const state = reactive({
      filterSongs: []
    })

    // 监听搜索关键字的变化
    watch(() => props.searchWord, (searchWord) => {
      state.filterSongs = []
      if (searchWord === '') {
        return
      }
      const songs = store.getters['songlist/currentSongs']
      const pattern = searchWord.split('').join('|')
      const reg = new RegExp(pattern, 'g')
      // 筛选符合条件的歌曲
      const filterSongsIds = []
      songs.forEach(song =>  {
        if (song.name.includes(searchWord) || song.singer.includes(searchWord) || song.album.includes(searchWord)) {
          filterSongsIds.push(song.id)
        }
      })
      songs.forEach(song =>  {
        if (reg.test(song.name) || reg.test(song.singer) || reg.test(song.album)) {
          // 排除上一次已经筛选过的歌曲
          if (filterSongsIds.indexOf(song.id) < 0) {
            filterSongsIds.push(song.id)
          }
        }
      })
      const filterSongs = []
      filterSongsIds.forEach(id => {
        songs.forEach(song => {
          if (id === song.id) {
            filterSongs.push(song)
          }
        })
      })
      state.filterSongs = filterSongs
    })

    return {
      ...toRefs(state)
    }
  },
  components: {
    SongItem
  }
}
</script>

<style lang="scss" scoped>
.result{
  li{
    padding: 15px;
  }
}

</style>
