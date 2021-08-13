import CustomStroage from './CustomStorage'

const customStorage = new CustomStroage()
customStorage.bootStrap({
  timeout: 12 * 60 * 1000
})

export default customStorage
