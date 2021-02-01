<template>
<div>
	<div class="title">
		<h1>{{msg}}</h1>
	</div>
	<product-item :products="cart"></product-item>
</div>
</template>

<style>
.product {
	border-bottom: 1px solid black;
}

.product__image {
	width: 100px;
	height: 100px;
}
</style>

<script>
import ProductItem from '@/components/products/ProductItem.vue';
export default {
	name: 'home',
	components: {
		'product-item': ProductItem
	},
	data() {
		return {
			msg: 'Welcome to the Cart Page'
		}
	},
	computed: {
		cart() {
			return this.$store.state.cart;
		}
	},
	methods: {
		removeFromCart(productId) {
			this.$store.commit('REMOVE_FROM_CART', {
				productId
			});
		}
	}
}
</script>
