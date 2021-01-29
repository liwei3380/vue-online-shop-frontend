import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import products from '@/pages/products'
import cart from '@/pages/cart';
import detail from '@/pages/detail';

// Admin Components
import Index from '@/pages/admin/index';
import New from '@/pages/admin/new';
import Products from '@/pages/admin/products';
import Edit from '@/pages/admin/edit';
import Manufacturers from '@/pages/admin/manufacturers'
import NewManufacturers from '@/pages/admin/newManufacturers';
import EditManufacturers from '@/pages/admin/editManufacturers';

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/home',
			name: 'home',
			component: home
		},
		{
			path: '/products',
			name: 'products',
			component: products
		},
		{
			path: '/cart',
			name: 'cart',
			component: cart
		},
		{
			path: '/detail/:id',
			name: 'detail',
			component: detail,
		},
		{
			path: '/admin',
			name: 'admin',
			component: Index,
			children: [{
					path: 'new',
					name: 'New',
					component: New,
				},
				{
					path: '',
					name: 'Products',
					component: Products,
				},
				{
					path: 'edit/:id',
					name: 'Edit',
					component: Edit,
				},
				{
					path: 'manufacturers',
					name: 'Manufacturers',
					component: Manufacturers,
				},
				{
					path: 'manufacturers/new',
					name: 'NewManufacturers',
					component: NewManufacturers,
				},
				{
					path: 'manufacturers/edit/:id',
					name: 'EditManufacturers',
					component: EditManufacturers,
				},
			]
		}
	]
})
