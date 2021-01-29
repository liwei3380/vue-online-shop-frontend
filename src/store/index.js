import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	strict: true,
	state: {
		// bought items
		cart: [],
		// ajax loader
		showLoader: false,
		// selected product
		product: {},
		// all products
		products: [],
		// all manufacturers
		manufacturers: [],
	},
	mutations,
	actions
})
console.log(store, 'store')
export default store
