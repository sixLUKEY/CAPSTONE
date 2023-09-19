<template>
  <main class="flex flex-col min-h-[80vh] gap-5">
    <div class="flex gap-5">
      <h2 class="text-5xl">{{ user.firstName }} {{ user.lastName }} | <span class="text-secondary">#{{ user.userID }}</span></h2>
    </div>
    <div class="flex flex-col items-center">
        <h3 class="text-3xl my-12 underline-offset-4 underline">Edit your info</h3>
        <div class="w-full flex gap-5">
        <div class="flex-1 flex flex-col gap-5">
          <div class="flex flex-col">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" v-model="user.firstName" />
          </div>
    
          <div class="flex flex-col">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" v-model="user.lastName" />
          </div>
    
          <div class="flex flex-col">
            <label for="age">Age</label>
            <input type="number" name="age" id="age" v-model="user.userAge" />
          </div>
    
          <div class="flex flex-col">
            <label for="gender">Gender</label>
            <select name="gender" id="gender" v-model="user.gender">
              <option value="M">Male</option>
              <option value="F">Female</option>
            </select>
          </div>
          
        </div>
        
        
          <div class="flex-1 flex flex-col gap-5">
            <div class="flex flex-col">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" v-model="user.userEmail" />
            </div>
            
            <div class="flex flex-col">
              <label for="password">Password</label>
              <input type="password" name="password" id="password" v-model="user.userPass" />  
            </div>

            <button @click="updateUser" class="roundedn-sm bg-primary font-bold py-2 px-5 w-fit my-auto mx-auto hover:opacity-90 transition">
                Submit Changes
            </button>
          </div>
        
      </div>
    </div>
  </main>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.userData;
    },
    userData() {
      return this.$store.state.userData;
    },
    userRole() {
      return this.$store.state.userRole;
    },
  },
  data(){
    return {
        data: {
            firstName: '',
            lastName: '',
            userEmail: '',
            userPass: '',
            userAge: '',
            gender: ''
        }
    }
  },
  methods: {
    updateUser(){
        const data = {
            id: this.user.userID,
            firstName: this.user.firstName,
            lastName: this.user.lastName,
            userRole: this.user.userRole,
            userEmail: this.user.userEmail,
            userPass: this.user.userPass,
            userAge: this.user.userAge,
            gender: this.user.gender
        }

        this.$store.dispatch('updateUser', data)
        .then((success) => {
            if ( success ){
                this.$router.push('/home')
                this.$store.dispatch('successPop')  
            } else {
              this.$store.dispatch('errorPop')
            }
        })
        .catch(( err ) => {
            console.error( err )
        })
    }
  },
  props: [
    'id'
  ],
  mounted(){
    this.$store.dispatch('fetchUser', this.id),
    this.$store.dispatch('fetchUser')
  }
};
</script>

<style scoped>
img {
  max-width: 200px;
}

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
</style>
