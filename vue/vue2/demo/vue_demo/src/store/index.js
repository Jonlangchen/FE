import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '小白',
    list: [
      {id: 1, content: '第一条'},
      {id: 2, content: '第二条'}
    ],
    xingMing: '小黑',
    count: 1,
    firstName: "qing",
    lastName: "lin"
  },
  getters: {
    listLength: (state) => {
      return state.list.length
    },
    showName: (state) => {
      return state.xingMing === '小白' ? true : false
    },
    fullName(state) {
      return state.firstName + ' ' + state.lastName
    }
  },
  mutations: {
    changeName: (state) => {
      state.xingMing = '小白'
    },
    addCount(state, val) {
      state.count += val
    },
    asyncHandler (state, val) {
        state.count += val;
    },
    addUser(state, username) {
      state.userList.push(username)
    }
  },
  actions: {
    asyncHandler ({commit}, val) {
      setTimeout(() => {
        commit('asyncHandler', val)
      }, 1000);
    }
  },
  modules: {
  }
})
