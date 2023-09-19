<template>
    <header class=" relative flex flex-col sm:flex-row gap-5 sm:gap-0 sm:mb-0 mb-[350px]">
        <div class=" mt-16 gap-8 text-center sm:text-start z-20 absolute sm:static flex flex-col flex-1 md:gap-10 sm:gap-5 order-2 sm:order-1 sm:mt-0">
            <h1 class=" text-4xl lg:text-7xl text-primary md:text-6xl sm:text-5xl heading">
                Shenron's Tiny Trinkets
            </h1>
            <p class="text-lg lg:text-xl w-[90%] md:text-lg sm:text-base mx-auto sm:mx-0 subHeading">
                Discover a world of epic collectibles and accessories inspired by your favorite DBZ characters. 
            </p>
            <div class="lg:text-2xl sm:gap-5 flex justify-evenly sm:justify-start md:text-xl sm:text-lg text-lg">
                <router-link to="/items" class="exploreLink">
                    <button class="bg-primary px-8 py-1 sm:px-3 sm:py-1 rounded-sm explore relative">Explore</button>
                </router-link>
                <router-link to="/contact" class="contactLink">
                    <button class="border border-tertiary px-5 py-1 sm:px-3 sm:py-1 text-tertiary rounded-sm hover:text-white hover:bg-tertiary transition">Contact Us</button>
                </router-link>
            </div>
        </div>
        <Shenron class=" opacity-5 sm:opacity-100 absolute sm:static z-10 mt-10 sm:mt-0 sm:order-2 " id="shenron"/>
    </header>

    <div class="my-24 flex flex-col items-center scroll cursor-pointer" @click="scrollElement">
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
</template>

<script>

    import Shenron from './Shenron.vue';
    import { gsap } from 'gsap'

    export default {
        components: {
            Shenron
        },
        mounted(){
            let tl = gsap.timeline({ defaults: { duration: 0.5 } })

            tl.from('.heading', { opacity: 0, y: -30 })
            .from('.subHeading', { opacity: 0, x: -30 }, "-=0.2")
            .from('.exploreLink', { opacity: 0, y: -30 }, "-=0.5")
            .from('.contactLink', { opacity: 0, y: 30 }, "-=0.5")
            .from('#shenron', { opacity: 0})
            .from('.scroll', { opacity: 0, y: -30 })
        },
        methods: {
            scrollElement(){
                const view = document.getElementById('featured')
                view.scrollIntoView()
        }
        }
    }
</script>

<style scoped>

    @media screen and (max-width: 300px) {
        .explore::after{
            content: '' !important;
        }
    }
    .explore::after{
        content: url('https://i.postimg.cc/gkZkDppq/pngwing-com-2023-08-26-T184528-1.png');
        position: absolute;
        top: -60%;
        right: -15%;
        transition: 0.2s;
    }

    .exploreLink:hover .explore::after{
        transform: rotateZ( 5deg );
        scale: 1.1;
    }

    svg {
        animation: pulse 4s linear forwards;
        transition: 0.2s;
    }
    

    @keyframes pulse {
        0%, 100%{
            transform: translateY(0);
            opacity: 1;
        }
        90%{
            transform: translateY(10px);
            opacity: 0;
        }
    }
</style>