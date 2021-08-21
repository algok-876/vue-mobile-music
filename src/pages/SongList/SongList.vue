<template>
  <div class="song-list">
    <header>
      <van-nav-bar title="歌单" :fixed="true">
        <template #left>
          <div class="return" @click="$router.back()">
            <i class="iconfont icon-xia"></i>
            <span>返回</span>
          </div>
        </template>
        <template #right>
          <div class="search">
            <i class="iconfont icon-sousuo"></i>
          </div>
        </template>
      </van-nav-bar>
      <div class="placeholder"></div>
    </header>
    <van-skeleton
      title
      avatar
      avatar-shape="square"
      title-width="90%"
      :row="3"
      :loading="!songlist"
      :avatar-size="120"
      :row-width="['100%', '70%', '100%']"
      :round="true"
    >
      <section class="song-list-detail">
        <thumbnail
          :cover-url="songlist.coverImgUrl"
          :play-count="songlist.playCount"
        ></thumbnail>
        <div class="content">
          <p class="name">{{songlist.name}}</p>
          <p class="creator">
            <div class="img">
              <img :src="songlist.creator.avatarUrl" alt="" />
            </div>
            <span>{{songlist.creator.nickname}}</span>
          </p>
          <p class="description" v-wave="'slow'">
            <span class="van-ellipsis">{{songlist.description}}</span>
            <van-icon name="arrow" />
          </p>
        </div>
        <div class="tab">
          <div class="item">
            <i class="iconfont icon-jiatianjiakuangxuanduoxuan-8"></i>
            <span>{{figurePlayCount(songlist.subscribedCount)}}</span>
          </div>
          <div class="item">
            <i class="iconfont icon-pinglun"></i>
            <span>{{songlist.commentCount}}</span>
          </div>
          <div class="item">
            <i class="iconfont icon-fenxiang"></i>
            <span>{{songlist.shareCount}}</span>
          </div>
        </div>
      </section>
    </van-skeleton>
    <section class="songs">
      <div class="top">
        <i class="iconfont icon-bofang"></i>
        <span class="title">播放全部</span>
        <span class="count">({{ songs.length }})</span>
      </div>
      <van-loading
        size="1.1rem"
        color="#a8a8a8"
        type="spinner"
        vertical
        v-if="!songs.length"
        style="margin-top: 2rem"
      >好音乐马上来</van-loading>
      <ul class="list" v-else>
        <li v-for="(song, index) in songs" :key="song.id" v-wave>
          <div class="song-item">
            <div class="left">
              {{ index + 1 }}
            </div>
            <div class="center">
              <p class="name">{{song.name}}</p>
              <span class="info">{{song.ar[0].name}} - {{song.al.name}}</span>
            </div>
            <div class="right">
              <span><i class="iconfont icon-shipin"></i></span>
              <span><i class="iconfont icon-gengduo"></i></span>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { fetchSongListDetail, fetchSongDetail } from '@/api/songlist'
import { onMounted, reactive, toRefs } from 'vue'
import Thumbnail from '@/components/Thumbnail.vue'
import { figurePlayCount } from '@/utils/tools'
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
      const songListDetail = await fetchSongListDetail(props.id)
      state.songlist = songListDetail.playlist
      const trackIds = songListDetail.playlist.trackIds.map((track) => track.id)
      const songDetails = await fetchSongDetail(trackIds.join(','))
      state.songs = songDetails.songs
    })

    return {
      ...toRefs(state),
      figurePlayCount
    }
  },
  components: {
    Thumbnail
  }
}
</script>

<style lang="scss">
.song-list{
  header{
    position: relative;
    .return {
      display: flex;
      align-items: center;
      i{
        display: inline-block;
        margin-right: 5px;
        font-size: 16px;
      }
      span{
        font-size: 14px;
      }
    }
    .search{
      i{
        font-size: 22px;
      }
    }
    .placeholder{
      height: 61px;
    }
  }

  .song-list-detail{
    display: flex;
    padding: 0 20px 40px;
    position: relative;
    // border-bottom: 1px solid #f2f2f2;
    .content{
      flex-shrink: 0;
      width: 200px;
      margin-left: 25px;
      font-size: 16px;
      p{
        margin: 5px 0;
      }
      .creator{
        display: flex;
        margin: 0;
        align-items: center;
        .img{
          width: 30px;
          height: 30px;
          border-radius: 15px;
          overflow: hidden;
          margin-right: 16px;
          img{
            width: 100%;
          }
        }
        span{
          
          font-size: 14px;
          color: rgb(168, 168, 168);
        }
      }
      .description{
        display: flex;
        // justify-content:;
        color: rgb(168, 168, 168);
        align-items: center;
        span{
          display: inline-block;
          width: 170px;
          font-size: 14px;
        }
      }
    }

    .tab{
      position: absolute;
      overflow: hidden;
      bottom: -20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 70%;
      height: 40px;
      border-radius: 20px;
      box-shadow: 0px 2px 12px 0px #f2f2f2;
      font-size: 14px;
      .item{
        width: 33%;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $text-color-gray-5;
        span{
          font-weight: 300;
          display: inline-block;
          margin-left: 8px;
        }
        &:not(:last-child){
          border-right: 1px solid #ccc;
        }
      }
    }
  }

  // 歌曲列表
  .songs {
    .top{
      padding: 15px;
      margin-top: 25px;
      color: $text-color-gray-5;
      .title{
        display: inline-block;
        margin: 0 5px;
        font-weight: 600;
        font-size: 16px;
      }
      .count{
        font-size: 12px;
        color: $text-color-gray-3;
      }
    }
    .list{
      li{
        padding: 15px;
      }
      .song-item{
        display: flex;
        align-items: center;
        .left{
          width: 40px;
          color: $text-color-gray-2;
          font-size: 14px;
        }
        .center{
          flex: 1;
          color: $text-color-gray-5;
          .name{
            margin: 0;
            font-size: 16px;
          }
          .info{
            font-size: 14px;
            color: $text-color-gray-2;
          }
        }
        .right{
          width: 55px;
          display: flex;
          justify-content: space-between;
          i{
            font-size: 18px;
            color: $text-color-gray-2;
          }
        }
      }
    }
  }
}
</style>
