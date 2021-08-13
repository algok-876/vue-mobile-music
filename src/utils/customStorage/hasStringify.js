/**
 * 判断数据是否可以被序列化
 * @param {*} data 
 */
export default function hasStringify (data) {
  if (data === undefined) {
    return false
  }

  if (data instanceof Function) {
    return false
  }
  return true
}
