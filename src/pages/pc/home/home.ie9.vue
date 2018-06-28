<template>
  <div class="home-pc">
    <div class="pc-ie9">
      <div class="audience">
        <div class="header">你猜</div>
        <div class="swiper-title" >
          <!-- 兼容IE9 -->
          <div class="ie9Change">
              <h3 class="manTitle">{{pageOneIE9Data.title}}</h3>
              <h5 class="subTitle">{{pageOneIE9Data.subtitle}}</h5>
          </div>
        </div>
        <div class="swiper-wrap">
          <carousel :interval="10000" type="card" @change="changes" height="60vh">
            <carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </carousel-item>
          </carousel>
        </div>
        <div class="btn">
          <button @click="fnDownloadApp">哈哈</button>
        </div>
      </div>
      <div class="anchor">
        <div class="header">你猜</div>
        <div class="swiper-title" >
          <!-- 兼容IE9 -->
          <div class="ie9Change">
              <h3 class="manTitle">{{pageTwoIE9Data.title}}</h3>
              <h5 class="subTitle">{{pageTwoIE9Data.subtitle}}</h5>
          </div>
        </div>
        <div class="swiper-wrap">
          <carousel :interval="10000" type="card" @change="changesPageT" height="60vh">
            <carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </carousel-item>
          </carousel>
        </div>
        <div class="btn">
          <a href=""  download="filename">
            <button @click="fnDownCiscik">
              啊哈哈
            </button>
          </a>
        </div>
      </div>
    </div>
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
import { Carousel, CarouselItem } from 'element-ui'
import configData from './props'
export default {
  name: 'Home',
  components: {
    Carousel,
    CarouselItem
  },
  data () {
    return {
      showAppMask: false,
      showCiscikMask: false,
      configDatas: configData,
      pageOneIE9Data: configData[0].pageOneData[0],
      pageTwoIE9Data: configData[0].pageTwoData[1]
    }
  },
  computed: {
  },
  created () {
  },
  beforeDestroy () {
  },
  methods: {
    changes (index) {
      this.pageOneIE9Data = configData[0].pageOneData[index]
    },
    changesPageT (index) {
      this.pageTwoIE9Data = configData[0].pageTwoData[index]
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
@import './home.pc.ie9.scss';
</style>
