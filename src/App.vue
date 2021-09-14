<template>
  <Navbar :key="key"  v-if="!['Signup', 'Signin','MerchantSignin','MerchantSignup'].includes($route.name)"/>
  <div style="min-height: 60vh" >
  <!-- <Home v-if="!['Signup', 'Signin'].includes($route.name)"/> -->
  <router-view 
    :baseURL="baseURL"
    :products="products"
    :categories="categories"
    @fetchData = "fetchData"
    @refreshNav = "refreshNav">
  </router-view>
  </div>
  <Footer v-if="!['Signup', 'Signin','MerchantSignin','MerchantSignup'].includes($route.name)"/>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
export default {
  data() {
    return {
       baseURL : "http://10.177.68.28:8083/",
      products : null,
      categories : null,
      key : 0
    }
  },
  
  components : {Footer, Navbar},
  methods : {
    async fetchData() {
      // fetch products
      await axios.get(this.baseURL + "/product/allproducts")
      .then(res => this.products = res.data)
      .catch(err => console.log(err))

      //fetch categories
      // await axios.get(this.baseURL + "category/")
      // .then(res => this.categories = res.data)
      // .catch(err => console.log(err))
    },
    refreshNav() {
      this.key += 1;
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>

<style>
html{
  overflow-y: scroll;
}
</style>
