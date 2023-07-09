import { createStore } from 'vuex'

export default createStore({
  state: {
    is_logged_in: false,
    user_data: {
      full_name: 'reza',
    },
    // role: ''

  },
  getters: {
  },
  mutations: {
  //   login
    login(state) {
      state.is_logged_in = true
      // state.user_data = user_data
      // state.role = role
    },
  //   logout
    logout(state) {
      state.is_logged_in = false
      state.user_data = []
      state.role = ''
    },

  },
  actions: {
  },
  modules: {
  }
})
