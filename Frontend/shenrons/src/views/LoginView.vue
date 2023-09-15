<template>
  <main class="min-h-[60vh] flex justify-center">
    <form @submit.prevent="userLogin" class="flex flex-col gap-5">
      <h2 class="text-5xl mx-auto w-fit mb
      
      -12 relative z-20">Login</h2>

      <div class="flex gap-5 justify-between">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" v-model="userEmail" />
      </div>

      <div class="flex gap-5 justify-between">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" v-model="userPass" />
      </div>

      
      <button type="submit" class="bg-primary text-2xl w-fit px-5 py-1 mx-auto my-5 rounded-sm hover:opacity-90 transition">Login</button>
      <p class="text-center">Don't have an account? <span class="hover:text-secondary transition underline"><router-link to="/register">Register</router-link></span></p>
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
          alert("logged in");
          this.$router.push("/home");
        } else {
          alert("Error occurred");
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
  color: black;
  padding: 0.125rem;
  border-radius: 0.125rem;
}

label{
  font-size: 1.5rem;
}

h2::before {
  content: "";
  position: absolute;
  width: 60%;
  height: 2px;
  bottom: -5%;
  left: 0;
  background-color: var(--primary-color);
  border-radius: 999px;
}

h2::after {
  content: "";
  position: absolute;
  width: 60%;
  height: 2px;
  bottom: -15%;
  right: 0;
  background-color: var(--secondary-color);
  border-radius: 999px;
}
</style>
