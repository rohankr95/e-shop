<template>
    <div id="background-div" class="page-holder bg-cover">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev" href="#">&#10094; </a>
    <a class="next" @click="next" href="#">&#10095;</a>
  </div>     
  <div id="start-shopping" class="container">
    <div class="row">
      <div class="col-12 text-left">
        <h2 class="pt-3">Top Categories</h2>
      </div>
    </div>
    <div class="row">
      <h1 style="text-align: center; color:red; margin:auto;" v-if="!this.category_size">No Categories Found</h1>
      <div v-for="index in this.category_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <CategoryBox :category="categories[index-1]">
        </CategoryBox>
      </div>
    </div>
  </div>

  <hr>
  <div class="container">
    <div class="row">
      <div class="col-12 text-left">
        <h2 class="pt-3">Top Products</h2>
      </div>
    </div>
    <div class="row">
      <h1 style="text-align: center; color:red; margin:auto;" v-if="!this.product_size">No Product Found</h1>
      <div v-for="index in this.product_size" :key="index" class="col-md-6 col-xl-4 col-12 pt-3  justify-content-around d-flex">
        <ProductBox :product="products[index-1]">
        </ProductBox>
      </div>
    </div>
  </div>



</template>

<script>
import ProductCard from "../components/Product/ProductCard.vue"
import CategoryCard from "../components/Category/CategoryCard.vue"
import ProductBox from "../components/Product/ProductBox";
import CategoryBox from "../components/Category/CategoryBox";
export default {
  name: 'Home',
  components : {ProductCard, CategoryCard, ProductBox, CategoryBox},
  props : ["baseURL", "products", "categories"],
  emits : ["fetchData", "refreshNav"],
  data(){
    return{
      category_size:0,
      product_size:0,
      images: [
       " https://cdn.pixabay.com/photo/2016/11/19/11/33/footwear-1838767_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/03/12/09/18/tomatoes-4050245_1280.jpg",
        "https://cdn.pixabay.com/photo/2019/02/09/10/14/tin-can-3984776_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/04/08/18/46/shopping-mall-1316787_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/19/15/40/clothes-1839935_1280.jpg"
      ],
      timer: null,
      currentIndex: 0
    }
  },
  mounted(){
    // this.startSlide();
    // this.category_size = Object.keys(this.categories).length
    // if(this.category_size>3){
    //  this.category_size/=2
    //  this.category_size = Math.floor(this.category_size)
    // }
    // this.product_size = Object.keys(this.products).length
    // if(this.product_size>8){
    //   this.product_size/=2
    //   this.product_size = Math.floor(this.product_size)
    // }
  },
  methods: { 
    startSlide: function () {
      this.timer = setInterval(this.next,4000)
    },

    next: function () {
      this.currentIndex += 1
    },
    prev: function () {
      this.currentIndex -= 1
    }
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length]
    }
  }
}

</script>

<style>


.page-holder {
  min-height: 100vh;
}

.bg-cover {
  background-size: cover !important;
}

/* #background-div {
  background: url(../assets/homepage2.jpg)
} */

  .fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:600px;
  width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

#heading {
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  opacity: 0.8;
  font-family: 'Josefin Sans', sans-serif;
}

#content {
  opacity: 0.5;
  width:100%;
direction: right;
 height : 30px;
 background-color: rgb(141, 187, 230);
 padding: 0px !important;
 margin: 0px !important;
}

h2 {
  font-family: 'Josefin Sans', sans-serif;
}
</style>
