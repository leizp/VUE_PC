<template>
  <div class="demo">
    <swiper :options="swiperOption">
      <swiper-slide>
        <div class="wrap1">
          <!-- <swiper :options="swiperOption1">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper> -->
          <carousel :interval="4000" type="card" height="200px">
            <carousel-item v-for="item in 6" :key="item">
              <h3>{{ item }}</h3>
            </carousel-item>
          </carousel>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="wrap2">
          <!-- <swiper :options="swiperOption3">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper> -->
          <carousel-3d width="200">
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
import { IEVersion } from '../../assets/js/util'
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
      swiperOption: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      swiperOption1: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperOption3: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  created () {
    // IE浏览器版本太低时 需要提示更新
    let ieVersion = IEVersion()
    if ([5, 6, 7, 8, 9].indexOf(ieVersion) !== -1) {
      alert('请更新您的浏览器到最新版')
    }
  },
  beforeDestroy () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../style/config.base.scss';
  .demo {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $demo-background-color;
    box-sizing: border-box;
    .swiper-container {
      width: 100%;
      height: 100%;
      overflow: hidden;
      box-sizing: border-box;
      .wrap1,.wrap2{
        margin: 0 auto;
        height: 80%;
        box-sizing: border-box;
      }
      .wrap1 {
         width: 100%;
         background: greenyellow;
        .el-carousel__item h3 {
          color: #475669;
          font-size: 14px;
          opacity: 0.75;
          line-height: 200px;
          margin: 0;
        }
        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }
        .el-carousel__item:nth-child(2n+1) {
          background-color: #d3dce6;
        }
      }
      .wrap2 {
         width: px2rem(750px);
         background: palevioletred;
      }
    }
  }
</style>
