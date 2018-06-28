<template>
  <div class="home-mobile">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="wrap1">
          <div class="header">你随意</div>
          <div class="title" >
            <swiper :options="swiperOption1" ref="mySwiper" >
              <swiper-slide class="slide" v-for="item in configDatas[0].pageOneData" :key="item.id">{{item.title}}</swiper-slide>
            </swiper>
          </div>
          <carousel :interval="10000" type="card" @change="changes">
            <carousel-item v-for="item in 4" :key="item">
              <h3>{{ item }}</h3>
            </carousel-item>
          </carousel>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="wrap2">
          <div class="header">小女子干了</div>
          <div class="title" >
            <swiper :options="swiperOption2" ref="mySwiperT" >
              <swiper-slide class="slide" v-for="item in configDatas[0].pageTwoData" :key="item.id">{{item.title}}</swiper-slide>
            </swiper>
          </div>
          <carousel-3d width="200" autoplay bias="left" perspective="0" dir="right"  @before-slide-change="changesPageT" style="border：solid 1px red;transform: rotate(90deg);">
            <slide :index="0">
              Slide 1 Content
            </slide>
            <slide :index="1">
              Slide 2 Content
            </slide>
            <slide :index="2">
              Slide 3 Content
            </slide>
          </carousel-3d>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Carousel, CarouselItem } from 'element-ui'
import { Carousel3d, Slide } from 'vue-carousel-3d'
import configData from './props'
export default {
  name: 'Home',
  components: {
    swiper,
    swiperSlide,
    Carousel,
    CarouselItem,
    Carousel3d,
    Slide
  },
  data () {
    return {
      configDatas: configData,
      swiperOption: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption1: {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption2: {
        spaceBetween: 30,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import './home.mobile';
</style>
