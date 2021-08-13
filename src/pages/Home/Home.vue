<template>
  <div class="home">
    首页, {{username}}
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { login } from '@/api/user'
import customStorage from '@/utils/customStorage'
export default {
  setup () {
    const store = useStore()
    return {
      username: computed(() => store.state.user.username)
    }
  }
}
</script>

<style>

</style>