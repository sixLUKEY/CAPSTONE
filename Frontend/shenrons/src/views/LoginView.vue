<template>
    <form @submit.prevent="userLogin">
        <h2 class="text-5xl">Login</h2>

        <label for="email">Email:</label>
        <input type="email" name="email" id="email" v-model="userEmail">

        <label for="password">Password</label>
        <input type="password" name="password" id="password" v-model="userPass">

        <button type="submit">Login</button>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                userEmail: '',
                userPass: ''
            }
        },
        beforeCreate(){
            this.$store.dispatch('cookieCheck')
        },
        methods: {
            async userLogin(){
                try {
                    const payload = {
                        userEmail : this.userEmail,
                        userPass: this.userPass
                    }

                    const response = await this.$store.dispatch('login', payload)
                    console.log( response )

                    if ( response.success === true && response.token && response.result ){
                        alert("logged in")
                        this.$router.push('/')
                    } else {
                        alert('Error occurred')
                    }
                } catch ( err ){
                    console.error( err )
                }
            }
        }
    }
</script>

<style scoped>
    input{
        color: black;
    }
</style>