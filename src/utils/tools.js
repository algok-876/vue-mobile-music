export function figurePlayCount (value) {
  value = parseInt(value)
  if (value > 10000) {
    return Math.round(value / 10000, 0) + '万'
  }
  return value
}

export function debounce (fn, wait, immediate) {
  let timer = null
  return function () {
    const context = this
    const args = [].slice.call(arguments)
    if (timer) {
      clearTimeout(timer)
    }
    if (immediate) {
      let callNow = !timer
      timer = setTimeout(() => {
        timer = null
      }, wait);

      if (callNow) fn.apply(context, args)
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, wait);
    }
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, wait);
  }
}

