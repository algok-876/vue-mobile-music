<template>
  <div class="content">
    <template v-if="loginStatus">
      <div class="user">
        <div class="avatar">
          <img :src="userProfile.avatarUrl" alt="">
        </div>
        <span class="nickname">
          {{userProfile.nickname}}
          <van-icon name="arrow" />
        </span>
      </div>
      <ul class="operation-list">
        <li class="item">
          <span>我的消息</span>
          <van-icon name="arrow" />
        </li>
        <li class="item">
          <span>云贝中心</span>
          <van-icon name="arrow" />
        </li>
        <li class="item">
          <span>创作者消息</span>
          <van-icon name="arrow" />
        </li>
      </ul>
      <van-button
        block
        plain
        type="warning"
        class="logout-btn"
        @click="logout"
      >退出登录/关闭</van-button>
    </template>
    <div class="unlogin" v-else>
      <van-button type="success" block to="/login">登录</van-button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { Dialog } from 'vant';

const store = useStore()
// 用户信息
const userProfile = computed(() => store.state.user.profile)
// 用户账户
const account = computed(() => store.state.user.account)
// 用户登录状态
const loginStatus = computed(() => store.state.user.logined)
// 退出登录
const logout = () => {
  Dialog.confirm({
    message: '确认退出登录吗？'
  }).then(() => {
    store.dispatch('user/logout')
  })
}
</script>

<style lang="scss" scoped>
.content {
  box-sizing: border-box;
  padding: 30px 15px 0 15px;
  min-height: 100%;
  background-color: #f6f6f8;
  .user{
    display: flex;
    align-items: center;
    .avatar{
      width: 35px;
      height: 35px;
      overflow: hidden;
      border-radius: 50%;
      margin-right: 10px;
      img{
        width: 100%;
      }
    }
    .nickname{
      font-size: 14px;
      color: $text-color-gray-4;
      letter-spacing: 1px;
    }
  }

  .operation-list{
    list-style: none;
    padding: 0 10px;
    margin-top: 25px;
    border-radius: 10px;
    background-color: #fff;
    color: $text-color-gray-5;
    font-size: 14px;
    .item{
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:not(:last-child){
        border-bottom: 1px solid rgb(233, 233, 233);
      }
    }
  }

  .logout-btn{
    border-radius: 10px;
    border: 0;
    margin-top: 25px;
  }
}
</style>