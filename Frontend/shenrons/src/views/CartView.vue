<template>
    <main class="min-h-[60vh]">
        <div v-for="product in cart" :key="product.id">
            <p>{{ product.prodName }}</p>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'setCart',
        computed: {
            cart(){
                return this.$store.state.cart
            },
            user(){
                return this.$sore.state.userData
            }
        },
        mounted(){
            this.$store.dispatch('fetchCart', this.user.userID)
        },
        methods: {
            removeFromCart( cartID ){
                const userID = this.user.userID

                this.$store.dispatch('removeFromCart', { userID, cartID })
                .then(() => {
                    alert('Item removed successfully')
                })
                .catch(( err ) => {
                    console.error( err )
                })
            }
        }
    }
</script>

<style scoped>

</style>