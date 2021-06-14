import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    color: 'blue'
  },
  mutations: {
    decreaseCounter(state, number){
      state.counter -= number
    },
    increaseCounter(state, number){
      state.counter += number
      setters.test
    },
    setColor(state, color){
      state.color = color
    }
  },
  actions: {
    decreaseCounter({ commit }){
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('decreaseCounter', response.data)
      })
    },
    increaseCounter( {commit} ){
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
        commit('increaseCounter', response.data)
      })
    },
    setColor({commit}, color){
      commit('setColor', color)
    }
  },
  modules: {
  }
})
