const initialState = {
  userId: null,
  admin: false,
  roles: [],
  loggingIn: false
}

const getters = {
  roles: (state: any) => state.roles,
  roleCount: (state: any) => state.roles.length,
  loggingIn: (state: any) => state.loggingIn
}

// actions
const actions = {
  login({commit, state}: {commit: any, state: any}, authInfo: object) {
    commit('requestLogin', authInfo);
    setTimeout(() => {
      commit('completeLogin', authInfo)
    }, 1000)
  },
  logout({commit, state}: {commit: any, state: any}) {
    setTimeout(() => {
      commit('completeLogout')
    }, 1000)
  },
}

// mutations
const mutations = {
  requestLogin(state: any) {
    state.loggingIn = true
  },
  completeLogin(state: any, authInfo: typeof state) {
    state.loggingIn = false
    state.userId = authInfo.userId
    state.admin = authInfo.admin
    state.roles = authInfo.roles
  },
  completeLogout(state: any) {
    state.userId = null;
    state.admin = null;
    state.roles = null
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations
}