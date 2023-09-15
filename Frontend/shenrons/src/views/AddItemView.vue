<template>
  <main class="min-h-[60vh] flex flex-col gap-5">
    <div class="flex flex-col">
      <label for="name">Product Name</label>
      <input type="text" name="name" id="name" v-model="productData.prodName" />
    </div>

    <div class="flex flex-col">
      <label for="model">Product Model</label>
      <input type="text" name="model" id="model" v-model="productData.model" />
    </div>

    <div class="flex flex-col">
      <label for="description">Product Description</label>
      <input
        type="text"
        name="description"
        id="description"
        v-model="productData.descr"
      />
    </div>

    <div class="flex flex-col">
      <label for="character">Product Character</label>
      <select
        name="character"
        id="character"
        v-model="productData.prodCharacter"
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
        v-model="productData.price"
      />
    </div>

    <div class="flex flex-col">
      <label for="level">Product Level</label>
      <input
        type="number"
        max="5"
        id="level"
        name="level"
        v-model="productData.prodLevel"
      />
    </div>

    <div class="flex flex-col">
      <label for="url">Product Url</label>
      <input type="url" name="url" id="url" v-model="productData.url" />
    </div>

    <div class="flex flex-col">
      <label for="quantity">Product Quantity</label>
      <input
        type="number"
        max="25"
        name="quantity"
        id="quantity"
        v-model="productData.quantity"
      />
    </div>

    <button
      class="bg-primary text-white rounded-sm py-2 px-5 text-xl hover:opacity-90 transition w-fit ms-auto"
      @click.prevent="addProduct"
    >
      Submit
    </button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      productData: {
        prodName: "",
        descr: "",
        model: "",
        prodCharacter: "",
        price: "",
        prodLevel: "",
        url: "",
        quantity: "",
      },
    };
  },
  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", this.productData);
    },
  },
};
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
