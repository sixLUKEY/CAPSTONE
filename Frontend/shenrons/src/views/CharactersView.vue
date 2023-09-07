<template>
  <main class=" min-h-screen">    
    <div class="relative w-full min-h-[60vh]">
        <router-link to="/" class="absolute 1star w-[25%] left-[30%] bottom-0">
            <img src="https://i.postimg.cc/HkwGsTFH/1-star-min.png" alt="1 star">
        </router-link>
        <router-link to="/" class="absolute w-[15%] right-1/2 top-0">
            <img src="https://i.postimg.cc/cCvyswG5/2-star-min.png" alt="2 star">
        </router-link>
        <router-link to="/" class="absolute w-[18%] bottom-[25%] left-0">
            <img src="https://i.postimg.cc/pr3Nyr2V/3-star-1-min-1.png" alt="3 star">
        </router-link>
        <router-link to="/" class="absolute w-[12%] left-[12%] top-[5%]">
            <img src="https://i.postimg.cc/JzVVLs6P/4-star-min.png" alt="4 star">
        </router-link>
        <router-link to="/" class="absolute w-[20%] right-0">
            <img src="https://i.postimg.cc/4dNRSjLG/5-star-min.png" alt="5 star">
        </router-link>
        <router-link to="/" class="absolute w-[12%] right-[10%] bottom-[10%]">
            <img src="https://i.postimg.cc/VLbQpqRJ/6-star-2-min.png" alt="6 star">
        </router-link>
        <router-link to="/" class="absolute w-[15%] bottom-[40%] left-[60%]">
            <img src="https://i.postimg.cc/h4YR2y9F/7-star-1-min-1.png" alt="7 star">
        </router-link>
    </div>
  </main>
  
  <Zamasu/>
</template>

<script>
import Zamasu from '@/components/Zamasu.vue';


export default {
    components: { Zamasu }
};

</script>

<style scoped>

a > img{
    filter: grayscale();
    transition: 0.2s;
    position: relative;
}

a:hover > img{
    scale: 1.04;
    transform: rotateZ(-5deg);
    filter: drop-shadow(0px 0px 20px #dad84c94);
}

a > img::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: white;
    width: 100px;
    height: 5px;
}

</style>
