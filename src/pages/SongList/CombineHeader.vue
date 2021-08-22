<template>
  <header class="van-hairline--bottom">
    <div class="left" @click="back">
      <i class="iconfont icon-xia"></i>
      <span v-if="!searching">返回</span>
    </div>
    <template v-if="!searching">
      <div class="center">
        {{ title }}
      </div>
      <div class="right" @click="showSearchInput">
        <i class="iconfont icon-sousuo"></i>
      </div>
    </template>
    <div class="search-box" v-else>
      <input
        type="text"
        class="search-input"
        v-focus
        :value="searchWord"
        @input="onInputChange"
      >
      <van-icon name="cross" :size="18" v-show="searchWord" @click="clearSearchWord"/>
    </div>
  </header>
  <div class="placeholder"></div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'
import { useRouter } from 'vue-router'
import { debounce } from '@/utils/tools'
export default {
  props: {
    title: {
      type: String
    }
  },
  emits: ['search', 'showsearch', 'closesearch'],
  setup (props, context) {
    const emit = context.emit
    const router = useRouter()
    const state = reactive({
      // 搜索状态
      searching: false,
      searchWord: ''
    })
    
    // 返回
    const back = () => {
      if (state.searching) {
        state.searching = !state.searching
        emit('closesearch')
      } else {
        router.back()
      }
    }

    // 通知父组件搜索关键字的变化，防抖
    const noticeInputChange = debounce(function () {
      emit('search', state.searchWord)
    }, 1000, true)
    // 绑定value
    const onInputChange = function (e) {
      state.searchWord = e.target.value
      noticeInputChange()
    }

    // 打开搜索输入框
    const showSearchInput = () => {
      state.searching = true
      emit('showsearch')
    }

    // 一键清除搜索关键字
    const clearSearchWord = () => {
      state.searchWord = ''
      emit('search', '')
    }

    // 监听searching,
    watch(() => state.searching, searching => {
      // 关闭搜索时清空搜索关键字
      if (!searching || state.searchWord !== '') {
        state.searchWord = ''
      }
    })

    return {
      ...toRefs(state),
      back,
      onInputChange,
      showSearchInput,
      clearSearchWord
    }
  },
  directives: {
    focus: {
      mounted (el) {
        el.focus()
      },
      updated (el) {
        el.focus()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
header{
  position: fixed;
  width: 100%;
  background-color: #fff;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 45px;
  .left, .right{
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding: 0 20px;
    font-size: 16px;
    cursor: pointer;
  }
  .left {
    left: 0;
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
  .center {
    flex: 1;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .right {
    right: 0;
    i{
      font-size: 22px;
    }
  }

  .search-box{
    margin-left: 50px;
    width: 305px;
    border-bottom: 1px solid rgb(228, 228, 228);
    position: relative;
    display: flex;
    align-items: center;
    .search-input{
      flex: 1;
      padding: 0;
      height: 25px;
      border: none;
    }
  }
}
.placeholder{
    height: 61px;
}
</style>
