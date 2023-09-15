<template>
    <header class="flex flex-col sm:flex-row gap-5 sm:gap-0">
        <div class=" flex flex-col flex-1 md:gap-10 sm:gap-5 order-2 sm:order-1 mt-52 sm:mt-0">
            <h1 class="lg:text-7xl text-primary md:text-6xl sm:text-5xl">
                Shenron's Tiny Trinkets
            </h1>
            <p class=" lg:text-xl w-[90%] md:text-lg sm:text-base">
                Discover a world of epic collectibles and accessories inspired by your favorite DBZ characters. 
            </p>
            <div class="lg:text-2xl flex gap-5 md:text-xl sm:text-lg">
                <router-link to="/items" class="exploreLink">
                    <button class="bg-primary px-3 py-1 rounded-sm explore relative">Explore</button>
                </router-link>
                <router-link to="/contact" class="contactLink">
                    <button class="border border-tertiary px-3 py-1 text-tertiary rounded-sm hover:text-white hover:bg-tertiary transition">Contact Us</button>
                </router-link>
            </div>
        </div>
        <Shenron class="mt-10 sm:mt-0 sm:order-2 "/>
    </header>
</template>

<script>

    import Shenron from './Shenron.vue';

    export default {
        components: {
            Shenron
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
</style>