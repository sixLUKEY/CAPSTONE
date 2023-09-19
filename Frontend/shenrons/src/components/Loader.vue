<template>
  <img
    src="https://i.postimg.cc/HkwGsTFH/1-star-min.png"
    alt="loader dragon ball"
    class="max-w-[100px]"
  />
</template>

<script>
export default {};
</script>

<style scoped>

img{
    max-height: 100px;
    animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
