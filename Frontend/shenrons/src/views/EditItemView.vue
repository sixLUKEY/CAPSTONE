<template>
     <main class="min-h-[60vh] flex flex-col gap-5">

        <h2>{{ product.prodName }} | <span class="text-secondary">#{{ product.prodID }}</span></h2>

    <div class="flex flex-col">
      <label for="name">Product Name</label>
      <input type="text" name="name" id="name" v-model="product.prodName" />
    </div>

    <div class="flex flex-col">
      <label for="model">Product Model</label>
      <input type="text" name="model" id="model" v-model="product.model" />
    </div>

    <div class="flex flex-col">
      <label for="description">Product Description</label>
      <input
        type="text"
        name="description"
        id="description"
        v-model="product.descr"
      />
    </div>

    <div class="flex flex-col">
      <label for="character">Product Character</label>
      <select
        name="character"
        id="character"
        v-model="product.prodCharacter"
      >
        <option value="all">All</option>
        <option value="Goku">Goku</option>
        <option value="Vegeta">Vegeta</option>
        <option value="Zamasu">Zamasu</option>
        <option value="Cell">Perfect Cell</option>
        <option value="Buu">Kid Buu</option>
        <option value="Jiren">Jiren</option>
        <option value="Frieza">Frieza</option>
      </select>
    </div>

    <div class="flex flex-col">
      <label for="price">Product Price</label>
      <input
        type="number"
        name="price"
        id="price"
        v-model="product.price"
      />
    </div>

    <div class="flex flex-col">
      <label for="level">Product Level</label>
      <input
        type="number"
        max="5"
        id="level"
        name="level"
        v-model="product.prodLevel"
      />
    </div>

    <div class="flex flex-col">
      <label for="url">Product Url</label>
      <input type="url" name="url" id="url" v-model="product.url" />
    </div>

    <div class="flex flex-col">
      <label for="quantity">Product Quantity</label>
      <input
        type="number"
        max="25"
        name="quantity"
        id="quantity"
        v-model="product.quantity"
      />
    </div>

    <button
      class="bg-primary text-white rounded-sm py-2 px-5 text-xl hover:opacity-90 transition w-fit ms-auto"
      @click.prevent="updateProduct"
    >
      Submit
    </button>
  </main>
</template>

<script>
    export default {
        computed: {
            product(){
                return this.$store.state.product
            }
        },
        data(){
            return {
                data: {
                    prodName: '',
                    descr: '',
                    model: '',
                    prodCharacter: '',
                    price: '',
                    prodLevel: '',
                    url: '',
                    quantity: ''
                }
            }
        },
        methods: {
            updateProduct(){
                const data = {
                    id: this.product.prodID,
                    prodName: this.product.prodName,
                    descr: this.product.descr,
                    model: this.product.model,
                    prodCharacter: this.product.prodCharacter,
                    price: this.product.price,
                    prodLevel: this.product.prodLevel,
                    url: this.product.url,
                    quantity: this.product.quantity
                }

                this.$store.dispatch('updateProduct', data)
                .then((success) => {
                    if ( success ){
                        this.$router.push('/admin/products')
                        alert('Updated successfully')
                    } else {
                        alert('something went wrong')
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
            this.$store.dispatch('fetchProduct', this.id),
            this.$store.dispatch('fetchProducts')
        }
    }
</script>

<style scoped>
    input {
  color: black;
}

select {
  color: black;
}

label {
  font-size: 1.25rem;
}

* {
  font-family: "Bebas Neue", sans-serif !important;
}
</style>