<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-light">
<!--    Logo-->
    <router-link class="navbar-brand" :to="{name : 'Home'}">
      <img id="logo" src="../assets/Cafeshots.png" />
    </router-link>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
<!--      Search Bar-->
      <form class="form-inline ml-auto mr-auto">
        <div class="input-group">
          <input size="100" type="text" class="form-control" placeholder="Search Items" aria-label="Username" aria-describedby="basic-addon1">
          <div class="input-group-prepend">
            <span class="input-group-text" id="search-button-navbar">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </span>
          </div>
        </div>
      </form>

<!--      DropDowns-->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Browse
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="dropdown-item" :to="{name : 'Home'}" >Home</router-link>
            <router-link class="dropdown-item" :to="{name : 'Product'}">Product</router-link>
            <router-link class="dropdown-item" :to="{name : 'Category'}">Category</router-link>
          </div>
        </li>





        <li class="nav-item dropdown">
          <a class="nav-link text-dark dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Accounts
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <!-- <router-link class="dropdown-item" v-if="!token" :to="{name: 'Signin'}">Wishlist</router-link>
            <router-link class="dropdown-item" v-else :to="{name : 'Wishlist'}" >Wishlist</router-link> -->
            <router-link class="dropdown-item" v-if="!token" :to="{name: 'MerchantSignin'}">Merchant</router-link>
            <router-link class="dropdown-item" v-else :to="{name: 'Admin'}"></router-link>
            <router-link class="dropdown-item" v-if="!token" :to="{name: 'Signin'}">Log In</router-link>
            <router-link class="dropdown-item" v-if="!token" :to="{name: 'Signup'}">Sign Up</router-link>
            <a class="dropdown-item" v-if="token" href="#" @click="signout">Sign Out</a>
          </div>
        </li>

        <li class="nav-item">
          <router-link class="nav-link text-dark" :to="{name : 'Order'}">Orders</router-link>
        </li>
        <li class="nav-item">
          <router-link class="text-dark" :to="{name : 'Cart'}"><i class="fa fa-shopping-cart" style="font-size:36px"></i></router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name : "Navbar",
  data() {
    return {
      token: null
    }
  },
  methods: {
    signout() {
      localStorage.removeItem('token');
      this.token = null;
      this.$router.push({name:'Home'});
      swal({
        text: "Logged you out. Visit Again",
        icon: "success",
        closeOnClickOutside: false,
      });
    }
  },
  mounted() {
    this.token = localStorage.getItem('token');
  }
}
</script>

<style scoped>
  #logo {
    width: 100px;
    height: 20%;
    margin-left: 15px;
    margin-right: 15px;
  }

  .nav-link {
    color: rgb(153, 74, 74);
  }
  .navbar {
    background-color: #60A5FA !important;
  }
  .dropdown-menu{
    background-color: rgb(245, 204, 127);
    box-shadow: 12px 12px 22px rgb(231, 223, 223);
  }
  .dropdown-menu:hover{
    background-color:rgba(185, 172, 172, 0.788);
            border: 1px solid;
            color: black;
  }

  #search-button-navbar {
    background-color:rgb(245, 204, 127)  !important;
    border-color:rgb(245, 204, 127) !important;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
</style>
