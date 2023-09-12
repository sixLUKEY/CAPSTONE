<template>
    <main class="min-h-[50vh]">
        <div class="flex gap-5 ms-auto w-fit text-4xl router relative items-center">
            <router-link to="/admin/items">
                Items
            </router-link>
            <router-link to="/admin/users">
                Users
            </router-link>
        </div>
        <router-view class="h-[50vh] overflow-scroll"/>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    main{
        font-family: 'Bebas Neue', sans-serif !important;
    }

    /* .router::after{
        content: '';
        position: absolute;
        bottom: -10%;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: var(--secondary-color);
    } */

    a{
        color: rgba(255, 255, 255, 0.236);
        transition: 0.2s;
    }

    a.router-link-exact-active{
        color: var(--primary-color);
    }

</style>