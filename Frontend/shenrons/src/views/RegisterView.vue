<template>
  <main class="min-h-[60vh]">
    <form @submit.prevent="register" class="flex flex-col gap-5">
      <h2 class="text-5xl relative w-fit mx-auto mb-5">Register</h2>

      <div class="w-full flex gap-5">
        <div class="flex-1 flex flex-col gap-5">
          <div class="flex flex-col">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" v-model="firstName" />
          </div>
    
          <div class="flex flex-col">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" v-model="lastName" />
          </div>
    
          <div class="flex flex-col">
            <label for="age">Age</label>
            <input type="number" name="age" id="age" v-model="userAge" />
          </div>
    
          <div class="flex flex-col">
            <label for="gender">Gender</label>
            <select name="gender" id="gender" v-model="gender">
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          
        </div>
        
        
          <div class="flex-1 flex flex-col gap-5">
            <div class="flex flex-col">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" v-model="userEmail" />
            </div>
            
            <div class="flex flex-col">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" v-model="userPass" />  
            </div>
          </div>
        
      </div>

      <button type="submit" class="text-2xl rounded-sm bg-primary py-1 px-5 w-fit hover:opacity-90 transition mx-auto my-5">Register</button>

      <p class="text-center">Already have an account? <span class="hover:text-secondary transition underline"><router-link to="/">Log In</router-link></span></p>

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
          await alert("success");
        } else {
          alert("error");
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
  font-size: 1.25rem;
}

input {
  color: black;
  padding: 0.125rem;
  border-radius: 0.125rem;
}

select{
  color: black;
  border-radius: 0.125rem;
}

option{
  font-weight: bold;
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
