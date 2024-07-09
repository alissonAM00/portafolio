import { createStore } from 'vuex'


export default createStore({
  state: {
    proyectos:[]
  },
  getters: {
    allProyectos: state=> state.proyectos
  },
  mutations: { 
    SET_PROYECTOS(state, proyectos){
      state.proyectos= proyectos
    }
  },
  actions: {
    async fetchProyectos({commit}){
      try {
        const response = await fetch ("/proyectos.json");
        const data = await response.json();
        commit("SET_PROYECTOS", data);
      } catch (error) {
        console.log(error)
        
      }
    }
  },
  modules: {
  }
})
