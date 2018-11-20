import Vue from 'vue'
import Vuex from 'vuex'
import auth from 'store/modules/auth'
import home from 'store/modules/home'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    auth,
    home
  },
  strict: debug,
})

// if ((module as any).hot) {
//   // accept actions and mutations as hot modules
//   (module as any).hot.accept(['./mutations', './modules/a'], () => {
//     // require the updated modules
//     // have to add .default here due to babel 6 module output
//     const newMutations = require('./mutations').default
//     const newModuleA = require('./modules/a').default
//     // swap in the new modules and mutations
//     store.hotUpdate({
//       mutations: newMutations,
//       modules: {
//         a: newModuleA
//       }
//     })
//   })
// }

export default store;