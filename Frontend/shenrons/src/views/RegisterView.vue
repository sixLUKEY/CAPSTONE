<template>
  <main class="min-h-[60vh]">
    <form @submit.prevent="register">
      <h2 class="text-5xl">Register</h2>

      <label for="firstName">First Name:</label>
      <input type="text" name="firstName" id="firstName" v-model="firstName" />

      <label for="lastName">Last Name</label>
      <input type="text" name="lastName" id="lastName" v-model="lastName" />

      <label for="age">Age</label>
      <input type="number" name="age" id="age" v-model="userAge" />

      <label for="gender">Gender</label>
      <select name="gender" id="gender" v-model="gender">
        <option value="M">Male</option>
        <option value="F">Female</option>
      </select>

      <label for="role">role</label>
      <select name="role" id="role" v-model="userRole">
        <option value="user">user</option>
        <option value="admin">admin</option>
      </select>

      <label for="email">email</label>
      <input type="email" name="email" id="email" v-model="userEmail" />

      <label for="password">password</label>
      <input type="password" name="password" id="password" v-model="userPass" />

      <label for="profile">Profile Image</label>
      <input type="url" name="profile" id="profile" v-model="userProfile" />

      <button type="submit">Register</button>
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
      userRole: "",
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
          userRole: this.userRole,
          userEmail: this.userEmail,
          userPass: this.userPass,
          userProfile: this.userProfile,
        });

        if (response.success) {
          await alert("success");
        } else {
          alert("error");
        }
        this.$router.push("/login");
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
}
</style>
