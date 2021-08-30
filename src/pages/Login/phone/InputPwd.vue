<template>
  <div class="login-pwd">
    <van-form @submit="pwdLogin">
      <van-field
        v-model="password"
        placeholder="请输入密码"
        label="密码"
        name="password"
        type="password"
      ></van-field>
      <van-button native-type="submit" :disabled="password === ''" round>登录</van-button>
    </van-form>
  </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"
import { Toast } from 'vant'
import md5 from 'md5'

const store = useStore()
const router = useRouter()
// 手机号
const phone = computed(() => store.state.login.inputPhone)
// 手机号为空则返回输入手机号页面
if (!phone.value) router.push({name: 'InputPhone'})
// 密码
const password = ref('')
// 用户密码登录
const pwdLogin = () => {
  Toast.loading({
    duration: 0,
    message: '登录中'
  })
  store.dispatch('user/phoneLogin', {
    phone: phone.value,
    md5_password: md5(password.value)
  }).then(res => {
    Toast.clear()
    Toast.success('登录成功')
    router.push('/')
  }).catch(error => {
    // 登录失败
    Toast.clear()
    password.value = ''
  })
}
</script>

<style lang="scss" scoped>
.login-pwd{
  button{
    width: 100%;
    height: 37px;
    margin-top: 35px;
    background-color: rgb(221,45,30);
    color: #fff;
    border: 0;
  }
}
</style>
