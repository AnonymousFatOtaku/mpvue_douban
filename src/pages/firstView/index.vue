<template>
  <div id="firstViewContainer">
    <!-- 使用indicator-dots设置是否显示小圆点，在前面添加冒号:强制解析表达式 -->
    <swiper @change="handleChange" :indicator-dots="index !== 3" indicator-color="pink" indicator-active-color="green">
      <swiper-item>
        <img src="/static/imgs/firstView/1.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/2.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/3.jpg" alt="">
      </swiper-item>
      <swiper-item>
        <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
      </swiper-item>
    </swiper>
    <!-- 频繁切换使用v-show，否则v-if -->
    <button class="btn" v-show="index === 3">开始体验</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        index: 0
      }
    },
    methods: {
      // 实时计算小圆点下标
      handleChange(event) {
        this.index = event.mp.detail.current // 更新index的状态值
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #firstViewContainer
    width 100%
    height 100%
    swiper
      width 100%
      height 100%
      img
        width 100%
        height 100%
    .btn
      width 280rpx
      height  80rpx
      text-align center
      line-height 80rpx
      position absolute
      bottom 20rpx
      left 50%
      margin-left -140rpx
      background rgba(255, 255, 255, .5)
</style>
