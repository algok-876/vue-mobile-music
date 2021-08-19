function handle (e) {
  if (this.wave) return
  // 为父元素设置绝对定位和超出隐藏
  this.style.position = 'relative'
  this.style.overflow = 'hidden'
  this.wave = true
  // wave容器
  const wave = document.createElement('div')
  wave.className = 'wave'
  // 起始位置为用户点击的位置
  wave.style.left = e.clientX - this.offsetLeft + 'px'
  // 动画结束后删除元素
  wave.addEventListener('animationend', () => {
    wave.remove()
    this.wave = false
    this.style.position = ''
    this.style.overflow = ''
  })
  this.appendChild(wave)
}

export default {
  created(el, binding, vnode, prevVnode) {
    el.addEventListener('click', handle)
  },
  beforeUnmount(el) {
    el.removeEventListener('click', handle)
  },
}

