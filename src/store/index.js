import { createStore, createLogger } from 'vuex'
import user from '@/store/modules/user'
import songlist from '@/store/modules/songlist'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    user,
    songlist
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
