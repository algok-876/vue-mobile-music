import hasStringify from './hasStringify'

export default class CustomStorage {
  constructor (config) {
    if (!window) {
      throw new Error('当前环境非浏览器，无法消费全局window实例。')
    }
    if (!window.localStorage) {
        throw new Error('当前环境非无法使用localStorage')
    }
    if (!window.sessionStorage) {
        throw new Error('当前环境非无法使用sessionStorage')
    }

    this.readStorage = null
  }

  
  /**
   * 初始化CustomStorage
   * @param {*} config 配置项
   */
  bootStrap (config) {
    // 合并配置
    this.config = Object.assign({
      mode: 'local',
      timeout: 60 * 1000
    }, config)

    switch (this.config.mode) {
      case 'session':
        this.readStorage = window.sessionStorage
        break;
  
      case 'local':
        this.readStorage = window.localStorage
        break;
    
      default:
        throwErrorMessage('当前配置的mode未再配置区内，可以检查传入配置。')
        break;
    }
  }

  /**
   * 存储本地数据
   * @param {*} key 设置当前存储key
   * @param {*} value 设置当前存储value
   */
  setItem (key, value) {
    if (hasStringify(value)) {
      const saveData = {
        timestamp: new Date().getTime(),
        data: value
      }
      this.readStorage.setItem(key, JSON.stringify(saveData))
    } else {
      throw Error("需要存储的data不支持JSON.stringify方法，请检查当前数据")
    }
  }

  /**
   * 获取本地数据
   * @param {*} key 存储的key
   * @returns 
   */
  getItem (key) {
    if (!this.hasItem(key)) return null
    const content = JSON.parse(this.readStorage.getItem(key))
    if (content.timestamp && (new Date().getTime() - content.timestamp) > this.config.timeout) {
      console.log('storage已经过期, key: ' + key)
      this.removeItem(key)
      return null
    } else {
      return content.data || null
    }
  }

  hasItem (key) {
    return this.readStorage.hasOwnProperty(key)
  }

  /**
   * 移除本地数据
   * @param {*} key 需要移除的key
   */
  removeItem (key) {
    if (this.hasItem(key)) {
      this.readStorage.removeItem(key)
    }
  }

  /**
   * 返回当前storage大小
   * @returns length
   */
  size () {
    return this.readStorage.length
  }

  /**
   * 改变已有的本地数据
   * @param {String} key 
   * @param {Function} onChange 改变数据的回调
   */
  changeItem (key, onChange) {
    const data = this.getItem(key)
    this.setItem(key, onChange(data))
  }
}