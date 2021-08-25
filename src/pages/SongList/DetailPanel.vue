<template>
  <div class="songlist-detail" @click="close">
    <div class="close">
      <van-icon name="cross" color="#fff" size="0.6651rem" @click="close"/>
    </div>
    <div class="cover van-hairline--surround">
      <img :src="coverUrl" alt="">
    </div>
    <p class="name">{{name}}</p>
    <div class="tags">
      <span>标签：</span>
      <span class="tag" v-for="(tag, index) in tags" :key="index">
        {{tag}}
      </span>
    </div>
    <p class="description">
      {{description}}
    </p>
    <button class="save-cover-btn">
      保存封面
    </button>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted } from 'vue'
export default {
  props: {
    coverUrl: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  setup (props, context) {
    onMounted(() => {
      document.body.className = 'lock-scroll'
    })
    onBeforeUnmount(() => {
      document.body.className = ''
    })

    const close = () => {
      context.emit('close')
    }

    return {
      close
    }
  }
}
</script>

<style lang="scss" scoped>
.songlist-detail{
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  overflow-y: scroll;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 20px;
  background-color: rgb(255, 219, 171);
  align-items: center;
  color: #fff;
  .close{
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .cover{
    margin-top: 40px;
    width: 180px;
    height: 180px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    margin: 25px auto;
    img{
      width: 100%;
      display: block;
    }
  }
  .tags{
    align-self: flex-start;
    font-size: 14px;
    .tag{
      display: inline-block;
      line-height: 24px;
      width: 45px;
      text-align: center;
      border-radius: 16px;
      background-color: rgba(255, 255, 255, .2);
      margin-right: 10px;
      font-size: 12px;
      letter-spacing: 2px;
    }
  }
  .name{
    width: 270px;
    text-align: center;
    margin: 0 auto 20px;
    font-size: 16px;
    text-align: center;
  }
  .description{
    align-self: flex-start;
    line-height: 1.6;
    font-size: 12px;
    height: 20%;
  }
  .save-cover-btn{
    display: block;
    position: relative;
    margin: 0 auto;
    background-color: transparent;
    height: 34px;
    width: 100px;
    font-size: 14px;
    border-radius: 17px;
    letter-spacing: 2px;
    border: 1px solid #f2f2f2;
    overflow: hidden;
    &:active{
      border: none;
      &::after{
        display: block;
      }
    } 
    &::after{
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      display: none;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, .6);
      z-index: 10;
    }
  }
}
</style>