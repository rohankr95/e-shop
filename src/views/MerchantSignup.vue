<template>
  <div class="container">
      <!--    Logo Div-->
    <div class="row">
      <div class="col-12 text-center pt-3">
        <router-link :to="{name : 'Home'}">
          <img id="logo" src="../assets/Cafeshots.png" />
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12 justify-content-center d-flex flex-row pt-5">
        <div id="signup-div" class="flex-item border">
          <h2 class="pt-4 pl-4">Merchant Create Account</h2>
          <form @submit="MerchantSignup" class="pt-4 pl-4 pr-4">
            <div class="form-group">
              <label>FirstName</label>
              <input type="firstname" class="form-control" v-model="firstname" required>
            </div>
            <div class="form-group">
              <label>LastName</label>
              <input type="lastname" class="form-control" v-model="lastname" required>
            </div>
            <div class="form-group">
              <label>Mobile Number</label>
              <input type="number" class="form-control" v-model="number" required>
            </div>
            <div class="form-group">
              <label>Address</label>
              <input type="text" class="form-control" v-model="Adress" required>
            </div>
            <button type="submit" class="btn btn-primary mt-2 py-0">Create Account</button>
          </form>
          <hr>
          <small class="form-text text-dark pt-2 pl-4 text-center">Already Have an Account?</small>
          <p class="text-center"><router-link class="btn btn-dark text-dark text-center mx-auto px-5 py-1 mb-2" :to="{name: 'MerchantSignin'}">SignIn Here</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MerchantSignup',
  props : ["baseURL"],
  data() {
    return {
      email: null,
      name: null,
      username: null,
      password: null,
      passwordConfirm: null
    }
  },
  methods : {
    async signup(e) {
      e.preventDefault();
      if (this.password === this.passwordConfirm) {
        const user = {
          email: this.email,
          name: this.firstname,
          username: this.username,
          password: this.password
        }

        await axios({
          method : 'post',
          url : this.baseURL + "user/MerchantSignup",
          data : JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(res => {
          this.$router.replace("/");
          swal({
            text: "User signup successful. Please Login",
            icon: "success",
            closeOnClickOutside: false,
          });
        })
        .catch(err => {
          console.log(err);
        });
      } else {
        swal({
          text: "Error! Passwords are not matching",
          icon: "error",
          closeOnClickOutside: false,
        });
      }
    }
  }
}
</script>

<style scoped>

.btn-dark {
  background-color: #e7e9ec;
  color: #000;
  font-size: smaller;
  border-radius: 0;
  border-color: #adb1b8 #a2a6ac #a2a6ac;
}

.btn-primary {
  /* background-color: #f0c14b;
  color: black;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 0; */
  border:none;
  outline: none;
  height: 50px;
  width:100%;
  background-color: black;
  color: white;
  border-radius: 4px;
  font-weight: bold;
}
.btn-primary:hover{

  background-color: white;
  border: 1px solid;
  color: black;
        
}

#logo {
  width: 150px;
}

@media only screen and (min-width: 992px) {
  #signup-div {
    width: 40%;
  }
}
.container{
  background-color:rgb(131, 168, 238);
  background-size: cover !important;
  padding: 50px;
  
}

</style>
