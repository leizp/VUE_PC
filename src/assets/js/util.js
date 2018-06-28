// 判断IE浏览器版本
export function IEVersion () {
  let userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
  let isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 // 判断是否IE<11浏览器
  let isEdge = userAgent.indexOf('Edge') > -1 && !isIE // 判断是否IE的Edge浏览器
  let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
  if (isIE) {
    let reIE = new RegExp('MSIE (\\d+\\.\\d+)')
    reIE.test(userAgent)
    let fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion === 7) {
      return 7
    } else if (fIEVersion === 8) {
      return 8
    } else if (fIEVersion === 9) {
      return 9
    } else if (fIEVersion === 10) {
      return 10
    } else {
      return 6 // IE版本<=7
    }
  } else if (isEdge) {
    return 'edge' // edge
  } else if (isIE11) {
    return 11 // IE11
  } else {
    return -1 // 不是ie浏览器
  }
}

// 百度统计代码
export function baiDuCount () {
  console.log('百度统计')
}

// js判断 是移动端 还是 PC端
export function isMobile () {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) { // 移动端打开
    return true
  } else { // PC端打开
    return false
  }
}
