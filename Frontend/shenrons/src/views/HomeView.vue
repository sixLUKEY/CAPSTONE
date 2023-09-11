<template>
  <main>
    <!-- Hero Section -->
    <Hero />

    <div class="my-24 flex flex-col items-center">
      <h5 class="w-fit text-xl">Scroll</h5>
      <svg
        width="25"
        height="25"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.7076 12.7074L16.7076 22.7074C16.6147 22.8004 16.5044 22.8742 16.383 22.9245C16.2616 22.9748 16.1315 23.0007 16.0001 23.0007C15.8687 23.0007 15.7385 22.9748 15.6171 22.9245C15.4957 22.8742 15.3854 22.8004 15.2926 22.7074L5.29257 12.7074C5.10493 12.5198 4.99951 12.2653 4.99951 11.9999C4.99951 11.7346 5.10493 11.4801 5.29257 11.2924C5.48021 11.1048 5.7347 10.9994 6.00007 10.9994C6.26543 10.9994 6.51993 11.1048 6.70757 11.2924L16.0001 20.5862L25.2926 11.2924C25.3855 11.1995 25.4958 11.1258 25.6172 11.0756C25.7386 11.0253 25.8687 10.9994 26.0001 10.9994C26.1315 10.9994 26.2616 11.0253 26.383 11.0756C26.5044 11.1258 26.6147 11.1995 26.7076 11.2924C26.8005 11.3854 26.8742 11.4957 26.9245 11.617C26.9747 11.7384 27.0006 11.8686 27.0006 11.9999C27.0006 12.1313 26.9747 12.2614 26.9245 12.3828C26.8742 12.5042 26.8005 12.6145 26.7076 12.7074Z"
          fill="white"
        />
      </svg>
    </div>

    <!-- Featured Section -->  
    <h2 class="md:text-6xl relative w-fit my-24 sm:text-4xl">Item of the Week</h2>
  </main>
  
  <FeaturedItem/>
  
  <main>
    <!-- Featured Characters -->
    <h2 class="md:text-6xl relative w-fit mt-48 mb-24 sm:text-4xl">Featured Characters</h2>
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

</style>
