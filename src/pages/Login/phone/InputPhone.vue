<template>
  <div class="text">
    <p>登录后体验更多精彩</p>
    <span>未注册手机号登录后将自动创建帐号</span>
  </div>
  <van-form @submit="submit">
    <van-field
      v-model="phone"
      placeholder="请输入手机号"
      label="手机号"
      name="phone"
      type="number"
      maxlength="11"
      clearable
      colon
      :rules="[{required: true, message: '请填写手机号'}]"
    ></van-field>
    <van-button native-type="submit" round>下一步</van-button>
  </van-form>
</template>

<script setup>
const emit = defineEmits(['inputPhone'])
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter()
const store = useStore()
const phone = ref('')
const submit = () => {
  store.commit('login/changeInputPhone', phone.value)
  router.push({name: 'InputCaptcha'})
}
</script>

<style lang="scss" scoped>
.text{
  p{
    font-size: 18px;
    margin-bottom: 5px;
  }
  span{
    font-size: 12px;
    color: $text-color-gray-3;
  }
}
form {
  margin-top: 40px;
  button{
    width: 100%;
    height: 37px;
    background-color: rgb(221,45,30);
    color: #fff;
    border: 0;
    margin-top: 15px;
  }
}
</style>