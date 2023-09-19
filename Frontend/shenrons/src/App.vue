<template>
  <Navbar/>
  <router-view/>
  <Footer/>
  <SuccessPop/> 
  <ErrorPop/>
</template>

<script>

  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  import SuccessPop from './components/SuccessPop.vue';
  import ErrorPop from './components/ErrorPop.vue'

  export default {
    components: {
      Navbar,
      Footer,
      SuccessPop,
      ErrorPop
    },
    mounted(){
      this.$store.dispatch('fetchProducts')
      this.$store.dispatch('fetchUsers')
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

html{
  scroll-behavior: smooth;
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

@media screen and (min-width:300px) {
  main{
    margin: 12px;
  }
}


@media screen and (min-width: 640px){
  main{
    margin: 3rem 1.25rem;
  }
}

@media screen and (min-width: 768px){
  main{
    margin: 3rem 1.25rem;
  }
}

@media screen and (min-width: 1024px){
  main{
    margin: 3rem 5rem;
  }
}

@media screen and (min-width: 1280px){
  main{
  margin: 3rem 20rem;
  }
}

.alert{
  transform: translateX(0px) !important;
}

</style>
