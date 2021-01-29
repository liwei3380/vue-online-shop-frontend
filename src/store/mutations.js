const mutations = {
	ADD_TO_CART(state, payload) {
		const {
			product
		} = payload;
		state.cart.push(product)
	},
	REMOVE_FROM_CART(state, payload) {
		const {
			productId
		} = payload
		state.cart = state.cart.filter(product => product._id !== productId)
	},
	ALL_PRODUCTS(state) {
		state.showLoader = true;
	},
	ALL_PRODUCTS_SUCCESS(state, payload) {
		const {
			products
		} = payload;

		state.showLoader = false;
		state.products = products;
	}
}

export default mutations
