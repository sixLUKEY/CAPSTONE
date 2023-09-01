<template>
    <nav class="flex justify-between items-end xl:mx-80 xl:py-5">
        <div class="logo">
            <router-link to="/">
                <img src="https://i.postimg.cc/kg0b1yhV/Group-40.png" alt="Shenron Logo">
            </router-link>
        </div>
        <ul class="flex xl:text-2xl xl:gap-8">
            <li>
                <router-link to="/">
                    Home
                </router-link>
            </li>
            <li>
                <router-link to="/items">
                    Items
                </router-link>
            </li>
            <li>
                <router-link to="/characters">
                    Characters
                </router-link>
            </li>
            <li>
                <router-link to="/about">
                    About
                </router-link>
            </li>
            <li>
                <router-link to="/contact">
                    Contact
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    nav{
        font-family: 'Bebas Neue', sans-serif;
    }

    nav a.router-link-exact-active {
  color: var(--primary-color);
}

nav ul li a{
    position: relative;
    transition: 0.2s;
}

nav ul li a.router-link-exact-active::after{
    content: url('https://i.postimg.cc/Z53yBMJf/pngwing-com-2023-08-28-T203106-2.png');
    position: absolute;
    right: -1.05rem;
    top: 0;
    transform: translateY(-2.5%);
}

</style>