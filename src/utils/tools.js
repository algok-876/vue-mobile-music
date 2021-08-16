export function playCount (value) {
  value = parseInt(value)
  if (value > 10000) {
    return Math.round(value / 10000, 0) + '万'
  }
  return value
}
