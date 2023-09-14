<template>
  <div class="flex flex-col bg-white p-3 rounded-md gap-3">
    <div class="flex justify-between items-center font-bold">
      <h4 class="text-secondary text-xl">#{{ product.prodID }}</h4>
      <h4 class="text-dark text-xl">{{ product.prodCharacter }}</h4>
      <router-link :to="{ name: 'singleItem', params: { id: product.prodID }}">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="hover:scale-125 transition"
        >
          <path
            d="M16.5094 1.25V13.0313C16.5094 13.2716 16.4145 13.5021 16.2457 13.6721C16.0768 13.842 15.8478 13.9375 15.609 13.9375C15.3702 13.9375 15.1412 13.842 14.9723 13.6721C14.8035 13.5021 14.7086 13.2716 14.7086 13.0313V3.43746L1.84012 16.3912C1.67118 16.5612 1.44204 16.6568 1.20311 16.6568C0.964189 16.6568 0.73505 16.5612 0.566104 16.3912C0.397159 16.2211 0.302246 15.9905 0.302246 15.75C0.302246 15.5095 0.397159 15.2789 0.566104 15.1088L13.4357 2.15625H3.90422C3.66542 2.15625 3.43641 2.06077 3.26756 1.89082C3.09871 1.72086 3.00385 1.49035 3.00385 1.25C3.00385 1.00965 3.09871 0.77914 3.26756 0.609185C3.43641 0.43923 3.66542 0.34375 3.90422 0.34375H15.609C15.8478 0.34375 16.0768 0.43923 16.2457 0.609185C16.4145 0.77914 16.5094 1.00965 16.5094 1.25Z"
            fill="#646464"
          />
        </svg>
      </router-link>
    </div>
    <router-link :to="{ name: 'singleItem', params: { id: product.prodID }}">
      <img
        :src="product.url"
        :alt="product.prodName"
        class="hover:scale-[1.01] transition hover:drop-shadow-xl"
      />
    </router-link>
    <div class="font-bold">
      <h3 class="text-black text-2xl">{{ product.prodName }}</h3>
      <h4 class="text-[#6F6F6F] text-xl">{{ product.model }}</h4>
    </div>
    <div class="flex justify-between">
      <h3 class="text-black text-3xl self-center font-bold">R{{ product.price }}</h3>
      <button class="p-3 rounded-full bg-primary text-4xl font-bold add h-fit">
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 14V2"
            stroke="rgb(223 37 48)"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M2 8L14 8"
            stroke="rgb(223 37 48)"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <svg
        width="40"
        height="50"
        viewBox="-5 -5 90 60"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        id="heart"
        class="cursor-pointer hover:scale-110 transition"
        @click="active"
      >
        <path
          d="M29.6096 49.3184V49.3184L29.5981 49.3184C29.3401 49.3199 29.0844 49.2705 28.8456 49.1729C28.6074 49.0756 28.3907 48.9324 28.2078 48.7513C28.2074 48.7509 28.2069 48.7505 28.2065 48.75L5.21391 25.7279C5.21336 25.7273 5.21281 25.7268 5.21226 25.7262C2.51367 22.9985 1 19.3164 1 15.4793C1 11.6426 2.51343 7.96073 5.21162 5.23312C7.93142 2.52225 11.6149 1 15.4551 1C19.2962 1 22.9806 2.52302 25.7006 5.23516C25.7007 5.23527 25.7008 5.23538 25.7009 5.23549L28.8967 8.43128L29.6038 9.13839L30.3109 8.43128L33.5067 5.23549C33.5068 5.23538 33.507 5.23527 33.5071 5.23516C36.2271 2.52302 39.9115 1 43.7526 1C47.5928 1 51.2763 2.52227 53.9961 5.23316C56.6943 7.96076 58.2077 11.6426 58.2077 15.4793C58.2077 19.3164 56.694 22.9986 53.9954 25.7263C53.9948 25.7268 53.9943 25.7273 53.9938 25.7279L31.0012 48.75C31.0008 48.7504 31.0004 48.7508 31 48.7512C30.8171 48.9323 30.6004 49.0756 30.3621 49.1729C30.1233 49.2705 29.8676 49.3199 29.6096 49.3184Z"
          fill="white"
          stroke="black"
          stroke-width="5"
          class="transition heart"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    active(){
      const heartFill = document.querySelector('.heart')
      heartFill.classList.toggle('active')
    }
  },
  props: [
    'product'
  ]
};
</script>

<style scoped>
.add svg {
  transition: 0.2s;
}

.add:hover svg {
  transform: rotateZ(90deg);
}

.active{
  fill: var(--secondary-color);
  stroke: var(--secondary-color);
}

</style>
