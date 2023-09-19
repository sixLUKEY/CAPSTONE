<template>
  <main class="min-h-[600px] flex justify-center my-12">
    <form @submit.prevent="userLogin" class="flex flex-col gap-3">
      <h2 class="text-5xl mx-auto w-fit mb-8 relative z-20 text-primary">Login</h2>

      <div class="flex flex-col gap-2 justify-between text-center">
        <label for="email">Email Address</label>
        <input class="bg-transparent border border-light text-white w-72" type="email" name="email" id="email" v-model="userEmail" />
      </div>

      <div class="flex flex-col gap-2 justify-between text-center">
        <label for="password">Password</label>
        <input class="bg-transparent border border-light text-white" type="password" name="password" id="password" v-model="userPass" />
      </div>

      
      <button type="submit" class="bg-primary text-2xl w-fit px-5 py-1 mx-auto my-5 rounded-sm hover:opacity-90 transition">Login</button>
      
      <h5 class="text-xl font-bold text-center my-5">Or</h5>

      <router-link to="/register" class="text-center text-primary text-3xl hover:opacity-90 transition">
        Register
      </router-link>
    </form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      userEmail: "",
      userPass: "",
    };
  },
  beforeCreate() {
    this.$store.dispatch("cookieCheck");
  },
  methods: {
    async userLogin() {
      try {
        const payload = {
          userEmail: this.userEmail,
          userPass: this.userPass,
        };

        const response = await this.$store.dispatch("login", payload);

        if (response.success === true && response.token && response.result) {
          await new Promise((resolve) => {
            this.$store.dispatch('successPop')  
            resolve()
          })
          this.$router.push("/home");
        } else {
          await new Promise((resolve) => {
            this.$store.dispatch('errorPop')
            resolve()
          })
        }
      } catch (err) {
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
input {
  padding: 0.125rem;
  border-radius: 0.125rem;
}

label{
  font-size: 1.5rem;
  font-family: "Bebas Neue", sans-serif !important;
}


</style>
