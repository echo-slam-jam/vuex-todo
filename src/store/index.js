import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';

Vue.use(Vuex)
const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

export default new Vuex.Store({
  state: {
  	count: 0,
  	editing: null,
  	getId: '',
  	tasklist: [
          {
            id: 1,
            name: 'sample task 1',
            date: 'sample date 1'
          },
          {
            id: 2,
            name: 'sample task 2',
            date: 'sample date 2'
          },
          {
            id: 3,
            name: 'sample task 3',
            date: 'sample date 3'
          },
        ],    
  },
  getters: {
  	parity: state => state.count % 2 === 0 ? 'even' : 'odd'
  },

  mutations: {
  	updateTask (state, name) {
            this.state.tasklist.name = name
        },
  	increment (state) {
  		state.count++;
  	},
  	decrement (state) {
  		state.count--;
  	},
  	createTask (state, {name, date}){
  		//let date = new Date(); = timestamp date today
  		let createId = state.tasklist.length + 1;
		state.tasklist.push ({id: createId, name, date});
	},
	deleteTask (state, id) {
		//problem din to kasi pagdating sa isa nlang ung natitira nagiging 0 yung id nya pero iba yung id property nya HAHA
		state.tasklist.splice(id - 1, 1);
	},
	//object.assign = merge/copy elements of source to target object.assign(target, source) 
	editMode (state, task) {
		this.cachedTask = Object.assign({}, task);
		state.editing = task.id;
	},
	cancelEdit (state, task) {
		Object.assign(task, this.cachedTask);
		state.editing = null;
	},
	editTask (state, {name, date}) {
		//how do I pass the current row ID?
		state.tasklist[1].name = name;
		state.tasklist[1].date = date;
		state.editing = null;
	}
	
  },
  actions: {
  	//name and date parameters passed as a single object because of single parameter restriction
  	createTask: ({ commit }, {name, date}) => commit ('createTask', {name, date}),
  	deleteTask: ({ commit }, id) => commit ('deleteTask', id),
  	editMode: ({ commit }, task) => commit ('editMode', task),
  	editTask: ({ commit }, {name, date}) => commit ('editTask', {name, date}),
  	cancelEdit: ({ commit }, task) => commit ('cancelEdit', task),
  	increment: ({ commit }) => commit ('increment'),
  	decrement: ({ commit }) => commit ('decrement'),
  	incrementIfOdd: ({ commit, getters }) => getters.parity === 'odd' ? commit ('increment') : false,
  	incrementAsync: ({ commit }) => {
  		setTimeout(() => { commit('increment') }, 1000);
  	},
  },
  modules: {
  },
 plugins: [vuexLocalStorage.plugin]
});
