import { createStore } from 'vuex'

export default createStore({
  state: {
    is_logged_in: false,
    user_data: {
      full_name: 'reza',
      username: 'reza1899',
      email: 'example@gmail.com',
      companyName : "megashid",
      companyNameFa: "مگاشید"
    },
    role: 'user'

  },
  getters: {
  },
  mutations: {
  //   login
    login(state,role,user_data) {
      state.is_logged_in = true
      state.user_data = user_data
      state.role = role
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
