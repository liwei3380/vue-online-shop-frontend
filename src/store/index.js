import Vue from 'vue';
import Vuex from 'vuex';

import {
	productGetters,
	manufacturerGetters
} from './getters';
import {
	productMutations,
	cartMutations,
	manufacturerMutations
} from './mutations';
import {
	productActions,
	manufacturerActions
} from './actions';
import state from './state.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: true,
	state,
	mutations: {
		...productMutations,
		...cartMutations,
		...manufacturerMutations,
	},
	actions: {
		...productActions,
		...manufacturerActions,
	},
	getters: {
		...productGetters,
		...manufacturerGetters,
	}
})
console.log(store, 'store')
export default store
