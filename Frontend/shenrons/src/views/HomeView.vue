<template>
  <main>
    <!-- Hero Section -->
    <Hero />
    

    <!-- Featured Section -->  
    <h2 class="md:text-6xl relative w-fit my-12 sm:my-24 sm:text-4xl text-3xl" id="featured">Item of the Week</h2>
  </main>
  
  <FeaturedItem/>
  
  <main>
    <!-- Featured Characters -->
    <h2 class="md:text-6xl relative w-fit mt-48 mb-12 sm:mb-24 sm:text-4xl text-3xl">Featured Characters</h2>
    <FeaturedCharacters/>

    <InfoContainer class="my-48"/>
    
  </main>
  
</template>

<script>
import Hero from "@/components/Hero.vue"
import FeaturedItem from "@/components/FeaturedItem.vue"
import FeaturedCharacters from "@/components/FeaturedCharacters.vue"
import InfoContainer from "@/components/InfoContainer.vue";

export default {
  components: {
    Hero,
    FeaturedItem,
    FeaturedCharacters,
    InfoContainer
  },
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

@media screen and ( max-width: 300px) {
  
}

</style>
