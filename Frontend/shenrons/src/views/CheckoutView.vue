<template>
  <main class="min-h-[80vh]">
    <h2 class="text-5xl relative w-fit mx-auto sm:mx-0 mb-5">Checkout</h2>

    <div class="flex flex-col sm:flex-row gap-5">
      <div class="flex flex-col flex-1">
        <p class="text-2xl">Shipping Details</p>
        <div class="w-full h-[1px] bg-[#6F6F6F] rounded-full"></div>
        <div class="justify-between flex my-3 text-lg">
            <p>Luke Evertson</p>
            <p class="text-primary">Marcoslukerojo@gmail.com</p>
        </div>
        <p class="mb-5">
            6 suikerbekkie lane
            <br>
            Cape Town 7349
            <br>
            South Africa
        </p>
        <p class="text-2xl">
            Payment Details
        </p>
        <div class="w-full h-[1px] bg-[#6F6F6F] rounded-full"></div>
        <label for="cardholder" class="my-3">Name of Cardholder</label>
        <input type="text" class="border mb-1 border-[#6F6F6F] bg-transparent text-white px-3 py-1 rounded-sm">
        <label for="cardholder" class="my-3">Card Number</label>
        <input type="number" class="border mb-1 border-[#6F6F6F] bg-transparent text-white px-3 py-1 rounded-sm">
        
        <div class="flex justify-between gap-3">
            <div class="flex flex-col">
                <label for="cardholder" class="my-3">Expiration Date</label>
                <input type="text" class="border border-[#6F6F6F] bg-transparent text-white px-3 py-1 rounded-sm max-w-[150px] sm:max-w-none">
            </div>
            <div class="flex flex-col">
                <label for="cardholder" class="my-3">CVV Code</label>
                <input type="text" class="border border-[#6F6F6F] bg-transparent text-white px-3 py-1 rounded-sm max-w-[150px] sm:max-w-none">
            </div>
        </div>
        <!-- <button class="rounded-sm bg-primary text-white px-2 py-1 mt-5 hidden sm:block">
            Confirm Purchase
        </button> -->
      </div>
      <div class="flex-1 flex flex-col">  
        <p class="text-2xl">Your Order</p>
        <div class="w-full h-[1px] bg-[#6F6F6F] rounded-full"></div>
        <div class="max-h-[290px] my-3 overflow-scroll pe-3 itemBox">
            <CheckoutItem/>
            <CheckoutItem/>
            <CheckoutItem/>
            <CheckoutItem/>
            <CheckoutItem/>
            <CheckoutItem/>
            <CheckoutItem/>
        </div>
        <div class="flex justify-between mt-3 text-lg">
            <p>
                Subtotal
            </p>
            <p>
                R 16500
            </p>
        </div>
        <div class="flex justify-between text-lg">
            <p>
                Shipping
            </p>
            <p>
                R 500
            </p>
        </div>

        <div class="w-full h-[1px] bg-[#6F6F6F] rounded-full mt-2"></div>
        <div class="flex justify-between text-xl my-1">
            <p>
                Total
            </p>
            <p>
                R 17000
            </p>
        </div>
        <div class="w-full h-[1px] bg-[#6F6F6F] rounded-full"></div>
        <div class="w-12 h-[1px] bg-[#6F6F6F] ms-auto rounded-full my-2"></div>
        <!-- <button class="bg-transparent border-primary border text-primary rounded-sm px-2 py-1 mt-5 hidden sm:block">
            Add Promo Code
        </button> -->
      </div>
    </div>
    <div class="flex mt-5 mb-10 gap-5">
        <button class="rounded-sm bg-primary text-white px-2 py-1 w-full hover:opacity-90 transition">
            Confirm Purchase
        </button>
        <button class="bg-transparent border-primary border text-primary w-full rounded-sm px-2 py-1 hover:opacity-90 transition">
            Add Promo Code
        </button>
    </div>
  </main>
</template>

<script>

import CheckoutItem from '@/components/CheckoutItem.vue'

export default {
    components: {
        CheckoutItem
    }
};

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

input, label {
  font-family: 'Bebas Neue', sans-serif !important;
}

.itemBox::-webkit-scrollbar{
        display: block;
        width: 5px;
        height: 0px;
    }

    .itemBox::-webkit-scrollbar-thumb{
        background-color: #feb415;
        border-radius: 999px;
    }

    .itemBox::-webkit-scrollbar-thumb:hover{
        background-color: #feb415e9;
    }

</style>
