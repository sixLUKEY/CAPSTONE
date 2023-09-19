<template>
    <main class="min-h-[80vh]">
        <div class="flex gap-5 ms-auto w-fit text-4xl router relative items-center">
            <router-link to="/admin/items">
                Items
            </router-link>
            <router-link to="/admin/users">
                Users
            </router-link>
        </div>
        <router-view class="h-[50vh] overflow-scroll routeView pe-3"/>
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

    a{
        color: rgba(255, 255, 255, 0.236);
        transition: 0.2s;
    }

    a.router-link-exact-active{
        color: var(--primary-color);
    }

    .routeView::-webkit-scrollbar{
        display: block;
        width: 10px;
        height: 0px;
    }

    .routeView::-webkit-scrollbar-thumb{
        background-color: #feb415;
        border-radius: 999px;
    }

    .routeView::-webkit-scrollbar-thumb:hover{
        background-color: #feb415e9;
    }

</style>