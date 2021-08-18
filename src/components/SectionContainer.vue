<template>
  <div class="section-container">
    <div class="s-header">
      <div class="title">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div class="button">
        <slot name="button">
          <van-button round plain type="default" size="mini">
            <span class="more">更多</span>
            <van-icon name="arrow" />
          </van-button>
        </slot>
      </div>
    </div>
    <div class="s-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  setup () {

  }
}
</script>

<style lang="scss" scoped>
.section-container{
  .s-header{
    padding: 15px 15px 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title{
      font-size: 18px;
      font-weight: bold;
    }
    .button{
      .more{
        font-size: 12px;
      }
    }
  }
  .s-content{
  }
}
</style>