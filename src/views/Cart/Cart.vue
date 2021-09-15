<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Cart</h4>
      </div>
    </div>
<div v-if="carts">
    <div v-for="itr in len" :key="itr" class="row mt-2 pt-3 justify-content-around">
      <div class="col-2"></div>
      <div class="col-md-3 embed-responsive embed-responsive-16by9">
        <img v-bind:src="cartItem[itr-1].productImage" class="w-100 card-img-top embed-responsive-item">
      </div>
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <h6 class="card-title" @click="showDetails(itr-1)">{{cartItem[itr-1].productName}}</h6>
<!--          <p id="item-description" class="card-text font-italic mb-0">{{cartItem[itr-1].pDescription.substring(0,90)}}...</p>-->
          <p id="item-price" class="mb-0 font-weight-bold"><sup>$</sup>{{cartItem[itr-1].productPrice}} per unit</p>
          <p id="item-quantity" class="mb-0">
            Quantity :
            <input size="1" class="p-0 h-25 border-bottom border-top-0 border-left-0 border-right-0" v-model="cartItem[itr-1].productQuantity" @change="updateItem(cartItem[itr-1].cartId,cartItem[itr-1].productQuantity)"/></p>
          <p id="item-total-price" class="mb-0">Total Price : <sup>$</sup><span class="font-weight-bold">{{cartItem[itr-1].productPrice*cartItem[itr-1].productQuantity}}</span></p>
          <br><a href="#" class="text-right" @click="deleteItem(cartItem[itr-1].cartId)">Remove From Cart</a>
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col-12"><hr></div>
    </div>
</div>
    <div class="total-cost pt-2 text-right">
      <h5>Total Cost : $ {{totalcost}}</h5>
      <button :disabled="isDisabled()" class="button_check" @click="checkout()" >Confirm Order</button>
    </div>
  </div>



</template>

<script>

export default {

  data() {
    return {
      carts: 0,
      len:0,
      totalcost:0,
      cartItem : [],
      Id:-1
    }
  },

  name: 'Cart',
  props: ["baseURL"],

  methods: {

     isDisabled(){
       if(this.len === 0){
         return true;
       }
       return false;
     },

     showDetails(itr){
      this.$router.push({ name: 'ShowDetails', params: { id : this.cartItem[itr].productId } })
     },

     checkout(){
      this.$router.push({ name: 'Checkout',params:{id:this.len}})
     },

     listCartItems(){
      axios.get("http://10.177.68.12:8085/cart/show/10").then((response) => {
        if(response.status==200){
          this.carts=response.data;
          this.len = Object.keys(this.carts.cartItems).length
          this.totalcost = this.carts.totalCost
          let i;
          for(i=0;i<this.len;i++){
            this.cartItem.push({
              productImage:this.carts.cartItems[i].product.productImage,
              productName:this.carts.cartItems[i].product.productName,
              productPrice:this.carts.cartItems[i].product.productPrice,
              productQuantity:this.carts.cartItems[i].product.productQuantity ,
              cartId:this.carts.cartItems[i].cartId,
              productId:this.carts.cartItems[i].product.productId,
              userId:this.carts.cartItems[i].userId
            })
          }
        }
      },
      (error)=>{
        console.log(error)
      });

    },

    deleteItem(itemId){
      axios.delete(`${this.baseURL}cart/delete/${itemId}/?token=${this.token} `)
        .then((response)=>{
          if(response.status==200){
            this.$router.go(0);
          }
        },(error)=>{
          console.log(error)
        })
    },

    updateItem(itemId,quantity){
      let i
      for(i=0;i<this.len;i++){
        if(this.cartItem[i].id === itemId){
          break
        }
      }
      this.cartItem[i].pQuantity = quantity
      let userId = this.cartItem[i].userId
      let productId = this.cartItem[i].pId
      axios.put(`${this.baseURL}cart/update/${itemId}/?token=${this.token}`,{
        id:itemId,
        userId,
        productId,
        quantity
      }).then(() => {
        this.listCartItems()
      })

    }

  },

  mounted() {
    this.token = localStorage.getItem("token");
    this.listCartItems();
  },
};

</script>

<style scoped>
h4, h5 {
  font-family: 'Roboto', sans-serif;
  color: #484848;
  font-weight: 700;
}

.embed-responsive .card-img-top {
  object-fit: cover;
}

#item-price {
  color: #232F3E;
}

#item-quantity{
  float: left;
}

#item-total-price {
  float: right;
}

</style>
