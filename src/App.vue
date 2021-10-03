<template>
  <div id="main">
    <router-view></router-view>
  </div>
  <van-tabbar
    v-model="active"
    class="van-hairline--top"
    active-color="#ff4141"
    inactive-color="#6b6969"
    v-if="$store.state.page.tabbarVisible"
  >
    <van-tabbar-item to="/">
      <span>发现</span>
      <template #icon>
        <i class="iconfont icon-wangyiyunyinle"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/mine">
      <span>我的</span>
      <template #icon>
        <i class="iconfont icon-yinfu"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/following">
      <span>关注</span>
      <template #icon>
        <i class="iconfont icon-wodeguanzhu"></i>
      </template>
    </van-tabbar-item>
    <van-tabbar-item to="/cloud-village">
      <span>云村</span>
      <template #icon>
        <i class="iconfont icon-fenleiorguangchangorqita" style="font-size: 20px"></i>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { computed, ref } from "vue";
const active = ref(0)
</script>

<style>
  #main {
    flex: 1;
  }
  .van-tabbar i{
    font-size: 24px;
  }
</style>