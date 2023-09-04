<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>

  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: {
      Navbar,
      Footer
    }
  }

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Almendra:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

:root{
  --primary-color: #FEB415;
  --secondary-color: #DF2530;
  --tertiary-color: #48C03F;
  --light-color: #FFFFFF;
  --dark-color: #080808;
}

::-webkit-scrollbar{
  display: none;
}

#app {
  font-family: 'Almendra', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--dark-color);
  color: var(--light-color);
  min-height: 100vh;
}

p{
  font-family: 'Bebas Neue', sans-serif !important;
}

main{
  margin: 5rem 20rem;
}


</style>
