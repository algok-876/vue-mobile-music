<template>
  <div class="phone-login">
    <header class="">
      <div class="left">
        <van-icon
          name="arrow-left"
          size="26px"
          v-if="route.meta.step === 'pwd'"
          @click="$router.back()"
        />
        <van-icon
          v-else
          name="cross"
          size="26px"
          @click="$router.push('/login')"
        />
        <span>手机号登录</span>
      </div>
      <div class="right">
        <van-button
          v-if="route.meta.step === 2"
          round
          size="mini"
          type="default"
          :to="{ name: 'InputPwd' }"
        >密码登录</van-button>
      </div>
    </header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute()
const store = useStore()
onBeforeUnmount(() => {
  store.commit('login/clearInputPhone')
})
console.log(route)
</script>

<style lang="scss">
.phone-login{
  padding: 10px 20px;
  color: $text-color-gray-5;
  header{
    margin: 0 -4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left{
      display: flex;
      align-items: center;
      span{
        display: inline-block;
        margin-left: 15px;
        font-size: 16px;
      }
    }
    
  }
  .content{
    margin-top: 40px;
  }
}
</style>
