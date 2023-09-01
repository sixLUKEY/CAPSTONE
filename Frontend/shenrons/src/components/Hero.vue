<template>
    <header class="flex">
        <div class=" flex flex-col flex-1 gap-10">
            <h1 class="text-7xl text-primary">
                Shenron's Tiny Trinkets
            </h1>
            <p class=" text-xl w-[90%]">
                Discover a world of epic collectibles and accessories inspired by your favorite DBZ characters. 
            </p>
            <div class="text-2xl flex gap-5">
                <button class="bg-primary px-3 py-1 rounded-sm explore relative">Explore</button>
                <button class="border border-tertiary px-3 py-1 text-tertiary rounded-sm">Contact Us</button>
            </div>
        </div>
        <Shenron/>
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
    .explore::after{
        content: url('https://i.postimg.cc/gkZkDppq/pngwing-com-2023-08-26-T184528-1.png');
        position: absolute;
        top: -60%;
        right: -15%;
    }
</style>