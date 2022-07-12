import { createStore } from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

// 三个模块
import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'
export default createStore({
  modules: {
    cart,
    user,
    category
  },
  // 配置插件
  plugins: [createPersistedstate({
    key: 'erabbit-pc-vue-project',
    paths: ['user', 'cart']
  })
  ]
})
