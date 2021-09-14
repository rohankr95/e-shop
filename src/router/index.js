import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

 import Admin from '../views/Admin/Admin.vue'
import Product from '../views/Product/Product.vue'
import AddProduct from '../views/Product/AddProduct.vue'
import EditProduct from '../views/Product/EditProduct.vue'
import ShowDetails from '../views/Product/ShowDetails.vue'
import Cart from '../views/Cart/Cart.vue'
import Checkout from '../views/Checkout/Checkout.vue'
import Order from '../views/Orders/Order.vue'

import Category from '../views/Category/Category.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import EditCategory from '../views/Category/EditCategory.vue'
import ListProducts from '../views/Category/ListProducts.vue'

import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'

import MerchantSignup from '../views/MerchantSignup.vue'
import MerchantSignin from '../views/MerchantSignin.vue'

import Success from '../helper/payment/Success.vue'
import Failed from '../helper/payment/Failed.vue'

import OrderItemView from '../views/Orders/OrderItemView.vue'

import PageNotFound from '../views/PageNotFound.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //Admin routes
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product
  },
  {
    path: '/admin/product/add',
    name: 'AddProduct',
    component: AddProduct
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct,
  },
  {
    path : '/product/show/:id',
    name : 'ShowDetails',
    component: ShowDetails
  },
  //Category routes
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/admin/category',
    name: 'AdminCategory',
    component: Category
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory
  },
  {
    path: '/admin/category/:id',
    name: 'EditCategory',
    component: EditCategory
  },
  {
    path : '/category/show/:id',
    name : 'ListProducts',
    component: ListProducts
  },
  //Page Not found
  {
    path : '/:catchAll(.*)',
    name : 'PageNotFound',
    component : PageNotFound
  },
  //Signin and Signup
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  //Merchants Signin and Signup
  {
    path: '/MerchantSignup',
    name: 'MerchantSignup',
    component: MerchantSignup
  },
  
  {
    path: '/MerchantSignin',
    name: 'MerchantSignin',
    component: MerchantSignin
  },
  
  {
    path : '/cart',
    name : 'Cart',
    component : Cart
  },
  {
    path : '/checkout',
    name : 'Checkout',
    component : Checkout
  },
  {
    path : '/order',
    name : 'Order',
    component : Order
  },
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component:Success
  },
  {
    path: '/payment/failed',
    name: 'FailedPayment',
    component:Failed
  },
  {
    path:'/order/:id', 
    name:'OrderItemView',
    component:OrderItemView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

//scroll to top after every route change
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router
