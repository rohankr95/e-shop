<template>
<!--  For HomePage-->
  <div class="card product-card">
    <img :src="product.productImage" class="card-img-top" alt="image" @click="showDetails">
    <div class="card-body">
      <p class="name" @click="showDetails">{{product.name}}</p>
      <p class="card-text">{{product.description}}</p>
        <h5 class="card-title">{{product.productCategory}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name : "ProductCard",
  props : ["product"],
  methods : {
    showDetails(){
      this.$router.push({ name: 'ShowDetails', params: { id : this.product.id } })
    }
  }
}
</script>

<style scoped>
.card{
  width : 50px;
  height : 100px;
}



.product-card img:hover{
  cursor:pointer;
  
}

.product-card .name:hover{
  cursor:pointer;
}

p.name{
  font-family: 'Courgette', cursive;
  font-size : 30px;
}

</style>
