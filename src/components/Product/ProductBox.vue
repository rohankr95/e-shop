<template>
  <div class="card h-100">
       <img :src="product.productImage" alt="Product image" style="width:50% height:400px" >
      <div class="container">
       
        <!-- <router-link :to="{ name: 'ShowDetails' }">
          <button > Show details</button>
        </router-link> -->
        <button @click="goToShowDetail"> Show details</button>
        <h4><b>{{product.productName}}</b></h4> 
        <h4><b>Available: {{product.productQuantity}}</b></h4>
        <h4><b>$ {{product.productPrice}}</b></h4> 
        <h4>{{product.productCategory}}</h4> 
      </div>

    <!-- <div class="embed-responsive embed-responsive-16by9">
      <img class="card-img-top embed-responsive-item" :src="product.imageURL" alt="Product Image">
    </div> -->
    <!-- <div class="card-body">
      <router-link :to="{ name: 'ShowDetails', params: { id : product.id } }">
        <h5 class="card-title">{{product.productName}}</h5>
         <h5 class="card-title">{{product.productQuantity}}</h5>
          <h5 class="card-title">{{product.productImage}}</h5>
           <h5 class="card-title">{{product.productPrice}}</h5>
            <h5 class="card-title">{{product.productCategory}}</h5>
        </router-link>
      <p class="card-text"><sup>$</sup>{{product.productName}}</p> -->
      <!-- <p class="card-text font-italic">{{product.description.substring(0,65)}}...</p> -->
      <!-- <router-link id="edit-product" :to="{name : 'EditProduct', params : {id : product.id} }" v-show="$route.name=='MerchantProduct'">
        Edit
      </router-link>
    </div> -->
  </div>
</template>

<script>
export default {
    name : "ProductBox",
    props : ["product"],
    methods : {
        showDetails(){
            this.$router.push({ name: 'ShowDetails', params: { id : this.product.productId } })
        },
        goToShowDetail () {
          this.$router.push('/product/show/' + this.product.productId)
        }
    },
    created () {
      console.log('i am card')
    }
}
</script>

<style scoped>

.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 350px;
  height: 400px !important;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

.container {
  padding: 2px ;
}

/* .embed-responsive .card-img-top {
  object-fit: cover;
}

a {
  text-decoration: none;
}

.card-title {
  color: #484848;
  font-size: 1.1rem;
  font-weight: 400;
}

.card-title:hover {
  font-weight: bold;
}

.card-text {
  font-size: 0.9rem;
}

#edit-product {
  float: right;
} */



</style>
