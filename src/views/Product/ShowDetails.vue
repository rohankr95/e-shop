<template>
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-1">
        </div>
        <div class="col-md-4 col-12">
          <img :src="product.productImage" :alt="product.productName" class="img-fluid">
        </div>
        <div class="col-md-6 col-12 pt-3 pt-md-0">
          <h4>{{product.productName}}</h4>
          <h6 class="category font-italic">{{product.productCategory}}</h6>
          <!-- <p><span class="font-weight-bold">Description: -</span> <br>{{product.description}}</p> -->

          <div class="d-flex flex-row justify-content-between">
            <div class="input-group col-md-3 col-4 p-0">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Quantity</span>
              </div>
              <input class="form-control" type="number" v-model="productQuantity"/>
            </div>

            <div class="input-group col-md-3 col-4 p-0">
              <button type="button" id="add-to-cart-button" class="btn" @click="addToCart(this.productId)">
                Add to Cart
                <ion-icon name="cart-outline" v-pre></ion-icon>
              </button>
            </div>
          </div>

          <div class="features pt-3">
            <h5><strong>Product Details</strong></h5>
            <ul>
              <li>{{product.productCategory}}</li>
              <li>$ {{product.productPrice}}</li>
              <li>{{product.productName}}</li>
              <!-- <li>{{product.productRating}}</li> -->
              <!-- <li>ut doloremque dolore corrupti, architecto iusto beatae.</li> -->
            </ul>
          </div>

            <button id="show-cart-button" type="button" class="btn mr-3 p-1 py-0" @click="listCartItems">
              Show Cart
              <ion-icon name="cart-outline" v-pre></ion-icon>
            </button>

        </div>
        <div class="col-md-1">

        </div>

      </div>

    </div>

</template>

<script>
export default {
  data(){
    return {
      product : {},
      category : {},
      id : null,
      token: null,
      productQuantity: 0
    }
  },
  props : ["baseURL","products", "categories"],
  methods:{
    addToCart(productId){
      axios.post("http://10.177.68.12:8085/product/cart/", {
          cart :  {
          cartId: "10",
          productId : this.product.productId,
          quantity : this.productQuantity,
          productName:this.product.productName,
          imageUrl:this.product.productImage,
          price:this.product.productPrice,
          rating:5,
          },
          productId : this.product.productId,
          productQuantity : this.product.produtQuantity,
          productName:this.product.productName,
          imageUrl:this.product.productImage,
          price:this.product.productPrice,
          rating:5,
      }).then((response) => {
        if(response.status==200){
          swal({
            text: "Product Added to the cart!",
            icon: "success",
            closeOnClickOutside: false,
          });
        }
      },(error) =>{
        console.log(error)
      });
    },

    listCartItems(){
      axios.get("http://10.177.68.12:8085/cart/10")
      .then((response) => {
        if(response.status===200){
          this.$router.push('/cart')
        }
      },(error)=>{
        console.log(error)
      });
      
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find(product => product.productId == this.id);
    console.log("i am in show details")
    // this.category = this.categories.find(category => category.id == this.product.categoryId);
    // this.token = localStorage.getItem('token');
  }
}
</script>

<style>
.category {
  font-weight: 400;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

#add-to-cart-button {
  background-color: #febd69;
}

#wishlist-button {
  background-color: #b9b9b9;
  border-radius: 0;
}

#show-cart-button {
  background-color: #131921;
  color: white;
  border-radius: 0;
}
</style>
