<template>
  <main>
    <div class="flex justify-between">
      <div class="flex flex-col">
        <div class="text-xl">
          Sort By:
          <select
            name="sort"
            id="sortItems"
            v-model="selectedSort"
            class="text-black"
          >
            <option value="sort">Sort</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="toLow">Price: Hi to Low</option>
            <option value="toHigh">Price: Low to Hi</option>
          </select>
        </div>
        <div class="text-xl flex">
          Filter By:
          <button type="button" @click="selectFilter('all')">All</button>
          <button type="button" @click="selectFilter('Vegeta')">Vegeta</button>
          <button type="button" @click="selectFilter('Goku')">Goku</button>
        </div>
      </div>
      <div
        class="bg-primary rounded-full p-3 flex items-center justify-between gap-3"
      >
        <input
          type="search"
          v-model="searchItem"
          placeholder="Search Products..."
          class="bg-transparent text-2xl"
        />
        <button type="submit">
          <svg
            width="20"
            height="20"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.6649 24.0067C16.7501 27.9431 9.55583 27.6333 4.99982 23.0773C0.111388 18.1889 0.111388 10.2631 4.99982 5.3747C9.88825 0.486264 17.814 0.486265 22.7024 5.3747C27.2584 9.93071 27.5682 17.125 23.6319 22.0398L33.1928 31.6007C33.736 32.1439 33.736 33.0245 33.1928 33.5677C32.6496 34.1108 31.769 34.1108 31.2258 33.5677L21.6649 24.0067ZM6.96677 21.1103C3.16466 17.3082 3.16466 11.1438 6.96677 7.34166C10.7689 3.53954 16.9333 3.53954 20.7355 7.34166C24.5348 11.141 24.5376 17.2992 20.7438 21.102C20.741 21.1047 20.7382 21.1075 20.7354 21.1103C20.7326 21.1131 20.7299 21.1159 20.7271 21.1187C16.9243 24.9125 10.7661 24.9097 6.96677 21.1103Z"
              fill="#FFFDFD"
              stroke="#FFFDFD"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="productContainer grid md:grid-cols-3 sm:grid-cols-2 my-24 gap-5"
      v-if="filteredProducts.length > 0"
    >
      <ProductItem
        v-for="product of filteredProducts"
        :key="product.prodID"
        :product="product"
      />
    </div>
    <div v-else>
      <Loader />
    </div>
  </main>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import ItemView from "@/components/ItemView.vue";
import Loader from "@/components/Loader.vue";

export default {
  data() {
    return {
      selectedFilter: "all",
      selectedSort: "sort",
      products: [],
      searchItem: "",
    };
  },
  components: {
    ProductItem,
    ItemView,
    Loader,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    sortedProducts() {
      let sorted = this.products;

      if (this.selectedFilter && this.selectedFilter !== "all") {
        sorted = sorted.filter(
          (product) => product.prodCharacter === this.selectedFilter
        );
      }

      if (this.selectedSort === "alphabetical") {
        sorted.sort((a, b) => a.prodName.localeCompare(b.prodName));
      } else if (this.selectedSort === "toHigh") {
        sorted.sort((a, b) => b.price - a.price);
      } else if (this.selectedSort === "toLow") {
        sorted.sort((a, b) => a.price - b.price);
      }

      return sorted;
    },
    filteredProducts() {
      return this.sortedProducts.filter((product) => {
        product.prodName.toLowerCase().includes(this.searchItem.toLowerCase);
      });
    },
  },
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  methods: {
    selectFilter(filter) {
      this.selectedFilter = filter;
      console.log( this.selectedFilter )
    },
  },
};
</script>

<style scoped>
input::placeholder {
  color: white;
  font-family: "Bebas Neue", sans-serif !important;
}

input {
  font-family: "Bebas Neue", sans-serif !important;
}

input:focus {
  outline: none;
}
</style>
