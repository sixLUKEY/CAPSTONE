<template>
  <main class="min-h-[600px] flex justify-center my-12">
    <form @submit.prevent="register" class="flex flex-col gap-5">
      <h2 class="text-5xl relative w-fit mx-auto mb-8 text-primary">Register</h2>

      <div class="w-full flex flex-col gap-3">
          <div class="flex flex-col gap-2 justify-between text-center">
            <label for="firstName">First Name</label>
            <input class="bg-transparent border border-light text-white w-72" type="text" name="firstName" id="firstName" v-model="firstName" />
          </div>
    
          <div class="flex flex-col gap-2 justify-between text-center">
            <label for="lastName">Last Name</label>
            <input class="bg-transparent border border-light text-white w-72" type="text" name="lastName" id="lastName" v-model="lastName" />
          </div>
    
          <div class="flex flex-col gap-2 justify-between text-center">
            <label for="age">Age</label>
            <input class="bg-transparent border border-light text-white w-72" type="number" name="age" id="age" v-model="userAge" />
          </div>
    
          <div class="flex flex-col gap-2 justify-between text-center">
            <label for="gender">Gender</label>
            <select class="bg-transparent border border-light text-white w-72" name="gender" id="gender" v-model="gender">
              <option class="text-black" value="M">Male</option>
              <option class=" text-black" value="F">Female</option>
            </select>
          </div>
          
        
        
            <div class="flex flex-col gap-2 justify-between text-center">
              <label for="email">Email</label>
              <input class="bg-transparent border border-light text-white w-72" type="email" name="email" id="email" v-model="userEmail" />
            </div>
            
            <div class="flex flex-col gap-2 justify-between text-center">
              <label for="password">Password</label>
              <input class="bg-transparent border border-light text-white w-72" type="password" name="password" id="password" v-model="userPass" />  
            </div>
            <button type="submit" class="bg-primary text-2xl w-fit px-5 py-1 mx-auto my-5 rounded-sm hover:opacity-90 transition">Register</button>
      
      <h5 class="text-xl font-bold text-center my-5">Or</h5>

      <router-link to="/" class="text-center text-primary text-3xl hover:opacity-90 transition">
        Login
      </router-link>
      </div>


    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      userAge: "",
      gender: "",
      userEmail: "",
      userPass: "",
      userProfile: "",
    };
  },
  methods: {
    async register() {
      try {
        const response = await this.$store.dispatch("register", {
          firstName: this.firstName,
          lastName: this.lastName,
          userAge: this.userAge,
          gender: this.gender,
          userEmail: this.userEmail,
          userPass: this.userPass,
          userProfile: this.userProfile,
        });

        if (response.success) {
          await new Promise((resolve) => {
            this.$store.dispatch('successPop')  
            resolve()
          })
        } else {
          await new Promise((resolve) => {
            this.$store.dispatch('errorPop')
            resolve()
          })
        }
        this.$router.push("/");
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>

label{
  font-family: "Bebas Neue", sans-serif !important;
  font-size: 1.25rem;
}

input {
  padding: 0.125rem;
  border-radius: 0.125rem;
}

select{
  border-radius: 0.125rem;
}

option{
  font-weight: bold;
}


</style>
