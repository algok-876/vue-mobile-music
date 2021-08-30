<template>
  <div class="login-nav">
    <div class="logo">
      <i class="iconfont icon-musiccloud"></i>
    </div>
    <div class="buttons">
      <van-button round to="/login/phone">手机号登录</van-button>
      <van-button round>邮箱登录</van-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.login-nav{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgb(221,45,30);
  .logo{
    margin-top: 50px;
    width: 66px;
    height: 66px;
    border-radius: 33px;
    background-color: rgba(255, 255, 255, .2);
    text-align: center;
    line-height: 66px;
    i{
      color: #fff;
      font-size: 50px;
    }
  }
  .buttons{
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-bottom: 120px;
    button{
      width: 100%;
      height: 37px;
      color: rgb(221,45,30);
      border: 0;
      margin-top: 15px;
    }
  }
}
</style>
