<template>
  <main>    
    <div class="relative w-full min-h-[60vh] ballRouter">
        <router-link to="/characters/goku" href="#goku" class="absolute 1star w-[25%] left-[30%] bottom-0" @click="scrollElement">
            <img src="https://i.postimg.cc/HkwGsTFH/1-star-min.png" alt="1 star">
        </router-link>
        <router-link to="/characters/jiren" class="absolute w-[15%] right-1/2 top-0" @click="scrollElement">
            <img src="https://i.postimg.cc/cCvyswG5/2-star-min.png" alt="2 star">
        </router-link>
        <router-link to="/characters/vegeta" class="absolute w-[18%] bottom-[25%] left-0" @click="scrollElement">
            <img src="https://i.postimg.cc/pr3Nyr2V/3-star-1-min-1.png" alt="3 star">
        </router-link>
        <router-link to="/characters/zamasu" class="absolute w-[12%] left-[12%] top-[5%]" @click="scrollElement">
            <img src="https://i.postimg.cc/JzVVLs6P/4-star-min.png" alt="4 star">
        </router-link>
        <router-link to="/characters/cell" class="absolute w-[20%] right-0" @click="scrollElement">
            <img src="https://i.postimg.cc/4dNRSjLG/5-star-min.png" alt="5 star">
        </router-link>
        <router-link to="/characters/frieza" class="absolute w-[12%] right-[10%] bottom-[10%]" @click="scrollElement">
            <img src="https://i.postimg.cc/VLbQpqRJ/6-star-2-min.png" alt="6 star">
        </router-link>
        <router-link to="/characters/buu" class="absolute w-[15%] bottom-[40%] left-[60%]" @click="scrollElement">
            <img src="https://i.postimg.cc/h4YR2y9F/7-star-1-min-1.png" alt="7 star">
        </router-link>
    </div>
  </main>
  
  <router-view class="my-12" id="view"/>

  <div class="flex flex-col fixed right-5 top-1/2 floatNav gap-3">
    <router-link to="/characters/goku" ></router-link>
    <router-link to="/characters/jiren" ></router-link>
    <router-link to="/characters/vegeta" ></router-link>
    <router-link to="/characters/zamasu" ></router-link>
    <router-link to="/characters/cell" ></router-link>
    <router-link to="/characters/frieza" ></router-link>
    <router-link to="/characters/buu" ></router-link>
  </div>
</template>

<script>

export default {
    methods: {
        scrollElement(){
            setTimeout( () => {
                const view = document.getElementById('view')
                view.scrollIntoView()
            }, 50)
        }
    }
};

</script>

<style scoped>

a > img{
    filter: grayscale( 99% );
    transition: 0.2s;
    position: relative;
}

a:hover > img{
    scale: 1.04;
    transform: rotateZ(-5deg);
    filter: drop-shadow(0px 0px 20px #dad84c94);
}

.ballRouter a.router-link-exact-active img{
    filter: none;
    filter: drop-shadow(0px 0px 20px #dad84c94);
}
.floatNav{
    transform: translateY( -50% );
}

.floatNav a{
    width: 20px;
    height: 20px;
    border: solid 2px white;
    border-radius: 999px;
    transition: 0.2s;
}

.floatNav a:hover{
    scale: 1.2;
}

.floatNav a.router-link-exact-active{
    background-color: var(--primary-color);
    position: relative;
}

.floatNav a.router-link-exact-active::after{
    content: url('https://i.postimg.cc/Z53yBMJf/pngwing-com-2023-08-28-T203106-2.png');
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate( 50%, -45%);
}



</style>
