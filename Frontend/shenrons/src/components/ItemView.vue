<template>
  <div class="flex flex-col gap-12">
    <div class="flex justify-between">
      <router-link to="/items">
        <svg
          width="24"
          height="44"
          viewBox="0 0 24 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.1208 40.0042C23.3009 40.1842 23.4436 40.3979 23.5411 40.6331C23.6385 40.8683 23.6886 41.1204 23.6886 41.375C23.6886 41.6296 23.6385 41.8816 23.5411 42.1168C23.4436 42.352 23.3009 42.5657 23.1208 42.7458C22.9408 42.9258 22.7271 43.0686 22.4919 43.166C22.2567 43.2634 22.0046 43.3136 21.7501 43.3136C21.4955 43.3136 21.2434 43.2634 21.0082 43.166C20.773 43.0686 20.5593 42.9258 20.3793 42.7458L1.00428 23.3708C0.824136 23.1908 0.681229 22.9771 0.583725 22.7419C0.486222 22.5067 0.436035 22.2546 0.436035 22C0.436035 21.7454 0.486222 21.4932 0.583725 21.258C0.681229 21.0228 0.824136 20.8091 1.00428 20.6292L20.3793 1.2542C20.7428 0.890644 21.2359 0.686401 21.7501 0.686401C22.2642 0.686401 22.7573 0.890644 23.1208 1.2542C23.4844 1.61775 23.6886 2.11084 23.6886 2.62498C23.6886 3.13912 23.4844 3.63221 23.1208 3.99576L5.1142 22L23.1208 40.0042Z"
            fill="white"
          />
        </svg>
      </router-link>
      <svg
        width="49"
        height="45"
        viewBox="0 0 49 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.4375 0C30.9203 0 26.9653 2.08174 24.5 5.60054C22.0347 2.08174 18.0797 0 13.5625 0C9.96675 0.00434338 6.51942 1.53707 3.97684 4.26191C1.43426 6.98675 0.00405286 10.6812 0 14.5347C0 30.9448 22.7041 44.2276 23.6709 44.7762C23.9258 44.9231 24.2106 45 24.5 45C24.7894 45 25.0742 44.9231 25.3291 44.7762C26.2959 44.2276 49 30.9448 49 14.5347C48.9959 10.6812 47.5657 6.98675 45.0232 4.26191C42.4806 1.53707 39.0333 0.00434338 35.4375 0ZM24.5 40.9784C20.5056 38.4841 3.5 27.1212 3.5 14.5347C3.50347 11.6758 4.56474 8.93504 6.45107 6.9135C8.33741 4.89195 10.8948 3.75461 13.5625 3.75088C17.8172 3.75088 21.3894 6.17958 22.8813 10.0805C23.0131 10.4245 23.2374 10.7187 23.5256 10.9257C23.8138 11.1328 24.153 11.2433 24.5 11.2433C24.847 11.2433 25.1862 11.1328 25.4744 10.9257C25.7626 10.7187 25.9869 10.4245 26.1187 10.0805C27.6106 6.17255 31.1828 3.75088 35.4375 3.75088C38.1052 3.75461 40.6626 4.89195 42.5489 6.9135C44.4353 8.93504 45.4965 11.6758 45.5 14.5347C45.5 27.1025 28.49 38.4817 24.5 40.9784Z"
          fill="white"
        />
      </svg>
    </div>
    <div class="flex sm:gap-10 lg:gap-24">
      <div class="flex-[2] flex items-center">
        <img
          src="https://i.postimg.cc/3ryMPJL1/pngwing-com-2023-08-28-T203106-1.png"
          alt="dragonball"
        />
      </div>
      <div class="flex-[3] flex flex-col justify-between">
        <div class="flex justify-between items-end">
          <h3 class=" sm:text-4xl md:text-5xl lg:text-6xl">Dragon Ball</h3>
          <h5 class="lg:text-3xl sm:text-2xl text-[#B5B5B5]">All</h5>
        </div>
        <h5 class="lg:text-4xl md:text-3xl sm:text-2xl text-primary text-end">4 Star - Original</h5>
        <p class="md:text-xl sm:txt-lg">
          The 4-Star Dragon Ball: A classic symbol of adventure and friendship
          in Dragon Ball Z. This replica faithfully captures its iconic
          four-star design. Perfect for collectors and character customization.
        </p>
        <div class="flex justify-between">
            <button class="rounded-sm text-primary bg-transparent border border-primary py-2 px-4 font-bold">
                Add to Cart +
            </button>
            <h3 class="lg:text-5xl md:text-4xl sm:text-3xl">
                R 9500
            </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
