import Vue from 'vue'
import Router from 'vue-router'
import { isMobile, IEVersion } from '../assets/js/util'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HOME',
      meta: {
        title: 'HOME'
      },
      component: resolve => {
        if (isMobile()) {
          require(['@/pages/mobile/home/home.vue'], resolve) // 走移动端路由
        } else {
          let ieVersion = IEVersion()
          if (ieVersion === 9) { // 降低性能，走IE9页面
            require(['@/pages/pc/home/home.ie9.vue'], resolve) // 走PC-IE9页面
          } else {
            require(['@/pages/pc/home/home.vue'], resolve) // 走PC端路由
          }
        }
      }
    }
  ]
})
