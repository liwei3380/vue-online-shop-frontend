import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/v1';
const actions = {
	allProducts({
		commit
	}) {
		commit('ALL_PRODUCTS')

		axios.get(`${API_BASE}/products`).then(response => {
			console.log('response', response);
			commit('ALL_PRODUCTS_SUCCESS', {
				products: response.data,
			});
		})
	}
}
export default actions
