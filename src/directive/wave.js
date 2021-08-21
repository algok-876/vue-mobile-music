function wave (e, speed) {
  if (this.wave) return
  let rate = 0
  if (speed === 'default' || !speed) {
    rate = 20
  } else if (speed === 'slow') {
    rate = 10
  } else if (speed === 'fast') {
    rate = 30
  } else if (typeof speed === 'number') {
    rate = speed
  }
  // 为父元素设置绝对定位和超出隐藏
  this.style.position = 'relative'
  this.style.overflow = 'hidden'
  this.wave = true
  // wave容器
  const wave = document.createElement('div')
  wave.className = 'wave'
  setTimeout(() => {
    wave.style.transform = `scaleX(${rate})`
    wave.style.opacity = 0
  }, 0);
  // 起始位置为用户点击的位置
  wave.style.left = e.clientX - this.offsetLeft + 'px'
  // 动画结束后删除元素
  wave.addEventListener('transitionend', () => {
    wave.remove()
    this.wave = false
    this.style = {}
  })
  this.appendChild(wave)
}

export default {
  created(el, binding, vnode, prevVnode) {
    el.addEventListener('click', function (e) {
      wave.call(this, e, binding.value)
    })
  }
}

