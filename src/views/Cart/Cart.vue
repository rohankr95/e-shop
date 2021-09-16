<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Cart</h4>
      </div>
    </div>
<!-- <div v-if="carts"> -->
    <div v-for="itr in len" :key="itr" class="row mt-2 pt-3 justify-content-around">
      <div class="col-2"></div>
      <div class="col-md-3 embed-responsive embed-responsive-16by9">
        <img v-bind:src="carts[itr-1].imageUrl" class="w-100 card-img-top embed-responsive-item">
      </div>
      <div class="col-md-5 px-3">
        <div class="card-block px-3">
          <button @click="showDetails(itr-1)">{{carts[itr-1].productName}}></button>
          <!-- <h6 class="card-title" @click="showDetails(itr-1)">{{cartItem[itr-1].productName}}</h6> -->
<!--          <p id="item-description" class="card-text font-italic mb-0">{{cartItem[itr-1].pDescription.substring(0,90)}}...</p>-->
          <p id="item-price" class="mb-0 font-weight-bold"><sup>$</sup>{{carts[itr-1].price}} per unit</p>
          <p id="item-quantity" class="mb-0">
            Quantity :
            <input size="1" class="p-0 h-25 border-bottom border-top-0 border-left-0 border-right-0" v-model="carts[itr-1].quantity" @change="updateItem(carts[itr-1].cartId,carts[itr-1].quantity)"/></p>
          <p id="item-total-price" class="mb-0">Total Price : <sup>$</sup><span class="font-weight-bold">{{carts[itr-1].price*carts[itr-1].quantity}}</span></p>
          <br><a href="#" class="text-right" @click="deleteItem(itr)">Remove From Cart</a>
        </div>
      <!-- </div> -->
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
      carts: [],
      len:0,
      totalcost:0,
      cartId:10
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
      this.$router.push({ name: 'ShowDetails', params: { id : this.carts[itr].productId } })
     },

    //  goToShowDetail () {
    //       this.$router.push('/product/show/' + this.productId)
    //     },

     checkout(){
      this.$router.push({ name: 'Checkout',params:{id:this.len}})
     },

     listCartItems(){
      const self = this
      axios.get("http://10.177.68.12:8085/cart/10").then((response) => {
        if(response.status==200){
          console.log(response)
          self.carts=response.data;
          self.len = self.carts.length
          self.totalcost = self.carts.totalCost
          let i;
          for(i=0;i<self.len;i++){
            self.carts.push({
              imageUrl:self.carts[i].imageUrl,
              productName:self.carts[i].productName,
              price:self.carts[i].price,
              quantity:self.carts[i].quantity ,
              cartId:self.carts[i].cartId,
              productId:self.carts[i].productId,
              // userId:this.carts.cartItems[i].userId
            })
          }
          console.log(self)
        }
      },
      (error)=>{
        console.log(error)
      });

    },

    deleteItem(index){
      const id = this.carts[index - 1].productId
      axios.get(`http://10.177.68.12:8085/product/cart/delete/${id}`)
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
        if(this.carts[i].id === itemId){
          break
        }
      }
      this.carts[i].pQuantity = quantity
      let userId = this.carts[i].userId
      let productId = this.carts[i].pId
      axios.put(`${this.baseURL}cart/update/${itemId}/?token=${this.token}`,{
        id:itemId,
        userId,
        productId,
        quantity
      }).then(() => {
        this.listCartItems()
      })

    },

  // const totalcost=(){
  // let total = 0;
  // this.carts.forEach((item, i){
  //      total += item.price * item.quantity;
  // });
  // }

  },

  mounted() {
    // this.token = localStorage.getItem("token");
    this.listCartItems();
    console.log('i am cart')
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
