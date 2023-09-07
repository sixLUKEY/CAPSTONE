<template>
  <main class=" min-h-screen">    
    <div class="relative w-full min-h-[60vh]">
        <a href="#goku" class="absolute 1star w-[25%] left-[30%] bottom-0">
            <img src="https://i.postimg.cc/HkwGsTFH/1-star-min.png" alt="1 star">
        </a>
        <a href="#jiren" class="absolute w-[15%] right-1/2 top-0">
            <img src="https://i.postimg.cc/cCvyswG5/2-star-min.png" alt="2 star">
        </a>
        <a href="#vegeta" class="absolute w-[18%] bottom-[25%] left-0">
            <img src="https://i.postimg.cc/pr3Nyr2V/3-star-1-min-1.png" alt="3 star">
        </a>
        <a href="#zamasu" class="absolute w-[12%] left-[12%] top-[5%]">
            <img src="https://i.postimg.cc/JzVVLs6P/4-star-min.png" alt="4 star">
        </a>
        <a href="#cell" class="absolute w-[20%] right-0">
            <img src="https://i.postimg.cc/4dNRSjLG/5-star-min.png" alt="5 star">
        </a>
        <a href="#frieza" class="absolute w-[12%] right-[10%] bottom-[10%]">
            <img src="https://i.postimg.cc/VLbQpqRJ/6-star-2-min.png" alt="6 star">
        </a>
        <a href="#buu" class="absolute w-[15%] bottom-[40%] left-[60%]">
            <img src="https://i.postimg.cc/h4YR2y9F/7-star-1-min-1.png" alt="7 star">
        </a>
    </div>
  </main>
  
  <Goku class="my-48" id="goku"/>
  <Jiren class="my-48" id="jiren"/>
  <Vegeta class="my-48" id="vegeta"/>
  <Zamasu class="my-48" id="zamasu"/>
  <Cell class="my-48" id="cell"/>
  <Frieza class="my-48" id="frieza"/>
  <Buu class="my-48" id="buu"/>

  <div class="flex flex-col fixed right-5 top-1/2">
    <a href="#goku">goku</a>
    <a href="#jiren">jiren</a>
    <a href="#vegeta">vegeta</a>
    <a href="#zamasu">zamasu</a>
    <a href="#cell">cell</a>
    <a href="#frieza">frieza</a>
    <a href="#buu">buu</a>
  </div>
</template>

<script>
import Frieza from '@/components/Frieza.vue';
import Zamasu from '@/components/Zamasu.vue';
import Goku from '@/components/Goku.vue';
import Jiren from '@/components/Jiren.vue';
import Vegeta from '@/components/Vegeta.vue';
import Cell from '@/components/Cell.vue';
import Buu from '@/components/Buu.vue';


export default {
    components: { Zamasu, Frieza, Goku, Jiren, Cell, Vegeta, Buu }
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
