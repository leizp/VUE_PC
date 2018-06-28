<template>
  <div class="home-pc">
    <swiper :options="swiperOption" ref="myBoxSwiper">
      <swiper-slide>
        <div class="audience" @mousewheel="fnMousewheelDown">
          <div class="header">你猜</div>
          <div class="swiper-title" >
            <swiper :options="audienceSwiperTitleOption" ref="mySwiper">
              <swiper-slide class="slide" v-for="item in configDatas[0].pageOneData" :key="item.id">
                <h3 class="manTitle">{{item.title}}</h3>
                <h5 class="subTitle">{{item.subtitle}}</h5>
              </swiper-slide>
            </swiper>
          </div>
          <div class="swiper-wrap">
            <carousel :interval="5000" type="card" @change="changes" height="60vh" autoplay >
              <carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </carousel-item>
            </carousel>
          </div>
          <div class="btn">
            <button @click="fnDownloadApp">你猜</button>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="anchor" @mousewheel="fnMousewheelUp">
          <div class="header">你猜</div>
          <div class="swiper-title" >
            <swiper :options="audienceSwiperTitleOption" ref="mySwiperT">
              <swiper-slide class="slide" v-for="item in configDatas[0].pageTwoData" :key="item.id">
                <h3 class="manTitle">{{item.title}}</h3>
                <h5 class="subTitle">{{item.subtitle}}</h5>
              </swiper-slide>
            </swiper>
          </div>
          <div class="swiper-wrap">
            <carousel :interval="5000" type="card" @change="changesPageT" height="60vh" autoplay>
              <carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </carousel-item>
            </carousel>
          </div>
          <div class="btn">
            <a href=""  download="cisik">
              <button @click="fnDownCiscik">
                哈哈
              </button>
            </a>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="app-mask" v-show="showAppMask">
      <div class="cancle-app-mask" @click="fnHideAppMask">X</div>
      下载弹窗
    </div>
    <div class="app-mask" v-show="showCiscikMask">
      <div class="cancle-app-mask" @click="fnHideCiscikMask">X</div>
      此刻弹窗
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Carousel, CarouselItem } from 'element-ui'
import configData from './props'
export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide,
    Carousel,
    CarouselItem
  },
  data () {
    return {
      showAppMask: false,
      showCiscikMask: false,
      configDatas: configData,
      swiperOption: { // fullpage 页面动画
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      audienceSwiperTitleOption: { // 头部标题切换的配置
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      pageOneIE9Data: configData[0].pageOneData[0],
      pageTwoIE9Data: configData[0].pageOneData[1]
    }
  },
  computed: {
    myBoxSwiper () {
      return this.$refs.myBoxSwiper.swiper
    },
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    swiperT () {
      return this.$refs.mySwiperT.swiper
    }
  },
  created () {

  },
  beforeDestroy () {
  },
  methods: {
    changes (index) {
      this.swiper.slideTo(index, 1000)
    },
    changesPageT (index) {
      this.swiperT.slideTo(index, 1000)
    },
    // 监听滚动事件
    fnMousewheelDown (e) {
      this.myBoxSwiper.slideTo(1, 1000)
    },
    fnMousewheelUp (e) {
      this.myBoxSwiper.slideTo(0, 1000)
    },
    // 点击下载app按钮事件
    fnDownloadApp () {
      this.showAppMask = true
    },
    fnHideAppMask () {
      this.showAppMask = false
    },
    fnDownCiscik () {
      this.showCiscikMask = true
    },
    fnHideCiscikMask () {
      this.showCiscikMask = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './home.pc';
</style>
