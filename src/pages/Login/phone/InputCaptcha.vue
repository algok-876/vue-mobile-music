<template>
  <div class="captcha">
    <p>请输入验证码</p>
    <p class="info">
      <span>已发送至 {{safePhoneNumber}}</span>
      <van-button
        v-if="countDownEnd"
        round
        size="mini"
        type="default"
        @click="getCaptcha"
      >获取验证码</van-button>
      <span v-else>{{current.seconds}} s</span>
    </p>
    <van-password-input
      :value="captcha"
      :mask="false"
      :focused="showKeyboard"
      :length="4"
      @focus="showKeyboard = true"
    />
    <van-number-keyboard
      v-model="captcha"
      :show="showKeyboard"
      :maxlength="4"
      @blur="showKeyboard = false"
    />
    <van-overlay :show="showOverlay">
      <van-loading size="44px" text-size="16px" vertical  color="#0094ff">登录中...</van-loading>
    </van-overlay>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, computed } from "vue"
import { validCaptcha, phoneLogin, sendCaptcha } from '@/api/user'
import { useCountDown } from '@vant/use';
import customStorage from '@/utils/customStorage'
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Toast } from 'vant'
const store = useStore()
const router = useRouter()

const phone = computed(() => store.state.login.inputPhone)
if (!phone.value) router.push({name: 'InputPhone'})
// 隐藏电话号码
const safePhoneNumber = phone.value.slice(0, 3) 
+ '*'.repeat(4) 
+ phone.value.slice(-4, phone.value.length)
// 验证码
const captcha = ref('')
// 键盘显示
const showKeyboard = ref(true)
// 遮罩层显示
const showOverlay = ref(false)

// 倒计时组件
const total = customStorage.getItem('total')  // 上次剩余的倒计时 总数
const lastTime = customStorage.getItem('lastTime') // 上次停止计时时的时间戳
const remainTime = total - (new Date().getTime() - lastTime) // 计算剩余倒计时
const countDownEnd = ref(false)
if (remainTime <= 0) {
  countDownEnd.value = true
}
const countDown = useCountDown({
  time: remainTime <= 0 ? 0 : remainTime,
  onChange (currentTime) {
    // 每次倒计时变化时更新保存在localstorage里的数据
    customStorage.setItem('total', currentTime.total)
    customStorage.setItem('lastTime', +new Date())
  },
  onFinish () {
    countDownEnd.value = true
  }
});
// 供模板使用的倒计时
const current = ref(countDown.current)
countDown.start()

// 获取验证码
const getCaptcha = () => {
  sendCaptcha(phone.value).then(res => {
    // 成功获取验证码后，开始计时
    countDownEnd.value = false
    countDown.reset(60 * 1000)
    countDown.start()
  }).catch(error => {
    // 发送失败
    console.log(error)
  })
}

onMounted(() => {
  if (countDownEnd.value === true) {
    // 进入页面并且没有上次倒计时结束后, 自动获取验证码
    getCaptcha()
  }
})

watch(captcha, async (newValue) => {
  if (newValue.length === 4) {
    // 验证码输入完成之后自动登录
    // 验证验证码是否正确
    validCaptcha(phone.value, captcha.value)
    .then(async res => {
      // 验证成功
      showOverlay.value = true
      showKeyboard.value = false
      // 登录
      store.dispatch('user/phoneLogin', {
        phone: phone.value,
        captcha: captcha.value
      })
      .then(res => {
        Toast.success('登录成功')
        router.push('/')
      })
      .catch(error => {
        // 登录出错
        captcha.value = ''
      })
      .finally(() => {
        // 关闭遮罩层、打开软键盘
        showOverlay.value = false
        showKeyboard.value = true
      })
    })
    .catch(error => {
      // 验证码错误
      captcha.value = ''
    })
  }
})
</script>

<style lang="scss" scoped>
.captcha{
  .info{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: $text-color-gray-3;
  }
  .van-password-input{
    margin: 0;
  }
  .van-overlay{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>