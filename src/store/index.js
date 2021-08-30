import { createStore, createLogger } from 'vuex'
import user from '@/store/modules/user'
import songlist from '@/store/modules/songlist'
import login from '@/store/modules/login'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    user,
    songlist,
    login
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
