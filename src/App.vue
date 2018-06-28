<template>
  <div id="app" >
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { IEVersion, isMobile } from './assets/js/util'
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    // IE浏览器版本太低时 需要提示更新
    let ieVersion = IEVersion()
    if ([5, 6, 7, 8].indexOf(ieVersion) !== -1) {
      alert('请更新您的浏览器到最新版')
    }
    if (isMobile()) {
      console.log('欢迎来到此刻家族')
    } else {
      console.log('欢迎来到此刻家族')
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import './style/reset.css';
@import './style/config.base.scss';
</style>
