<template>
    <main class="min-h-[80vh]">
        <h2 class="text-5xl relative w-fit mx-auto sm:mx-0 mb-10">Your Cart</h2>
        <div class="h-[350px] overflow-scroll flex flex-col gap-2 cartScroll pe-2">
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
        <div class="w-[95%] bg-[#feb41552] h-[1px] my-5 mx-auto">

        </div>
        <div class="flex justify-between items-center">
            <p class="text-xl">
                Total: R5200
            </p>
            <router-link to="/checkout">
                <button class="bg-primary px-5 py-3 rounded-sm hover:opacity-90 transition">
                    <p>
                        Proceed to checkout
                    </p>
                </button>
            </router-link>
        </div>
    </main>
</template>

<script>

    import CartItem from '@/components/CartItem.vue'

    export default {
        components: {
            CartItem
        },
        computed: {
           
        },
        mounted(){
            
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

h2::before {
  content: "";
  position: absolute;
  width: 60%;
  height: 2px;
  bottom: 0;
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

.cartScroll::-webkit-scrollbar{
        display: block;
        width: 5px;
        height: 0px;
    }

    .cartScroll::-webkit-scrollbar-thumb{
        background-color: #feb415;
        border-radius: 999px;
    }

    .cartScroll::-webkit-scrollbar-thumb:hover{
        background-color: #feb415e9;
    }

</style>