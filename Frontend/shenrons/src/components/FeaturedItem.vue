<template>
  <section class="bg-primary -skew-y-[10.5deg] pt-12 pb-32 px-3 sm:px-0">
    <div class="w-fit mx-auto flex skew-y-[10.5deg] stars -translate-y-12 select-none">
        <img src="../assets/Star.png" alt="star">
        <img src="../assets/Star.png" alt="star">
        <img src="../assets/Star.png" alt="star">
        <img src="../assets/Star.png" alt="star">
        <img src="../assets/Star.png" alt="star">
    </div>
        <div class=" bg-white p-5 flex flex-col rounded-sm sm:mx-5 md:mx-5 lg:mx-20 xl:mx-80 skew-y-[10.5deg] featured text-center sm:text-start max-w-[350px] sm:max-w-none mx-auto">
          <div class="sm:flex justify-between font-bold">
            <h3 class="md:text-5xl sm:text-4xl text-[#FFF100] hidden sm:block">
              Saiyan Scouter | <span class="text-secondary">#113</span>
            </h3>
            <h5 class="text-2xl text-[#807F7F]">Vegeta</h5>
          </div>
          <div class="flex flex-col sm:flex-row text-dark gap-5">
            <div class="flex-[5] flex flex-col gap-2 sm:gap-5 order-2 sm:order-[0]">
              <h3 class="text-2xl text-[#FFF100] font-bold sm:hidden">Saiyan Scouter | <span class="text-secondary">#113</span></h3>
              <h5 class="md:text-2xl sm:text-xl font-bold">Limited Edition Pink Reader</h5>
              <p class="md:text-lg sm:text-base hidden sm:block">
                Elevate your Saiyan power level with our authentic Saiyan Scouter -
                a must-have for true Dragon Ball Z fans! This meticulously crafted
                accessory brings the iconic device from the series to life, allowing
                you to channel your inner Saiyan warrior.
              </p>
              <div class="flex justify-between">
                <h4 class="text-2xl sm:text-4xl font-bold">R 520</h4>
                <div class="flex gap-5 items-center">
                  <button
                    class="bg-dark text-light py-2 px-4 rounded-sm font-bold flex items-center gap-3 text-sm sm:text-base"
                  >
                    Add to Cart
                    <span class="plus">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 14V2"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                        <path
                          d="M2 8L14 8"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 51 47"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.4375 1C31.9203 1 27.9653 3.08174 25.5 6.60054C23.0347 3.08174 19.0797 1 14.5625 1C10.9667 1.00434 7.51942 2.53707 4.97684 5.26191C2.43426 7.98675 1.00405 11.6812 1 15.5347C1 31.9448 23.7041 45.2276 24.6709 45.7762C24.9258 45.9231 25.2106 46 25.5 46C25.7894 46 26.0742 45.9231 26.3291 45.7762C27.2959 45.2276 50 31.9448 50 15.5347C49.9959 11.6812 48.5657 7.98675 46.0232 5.26191C43.4806 2.53707 40.0333 1.00434 36.4375 1ZM25.5 41.9784C21.5056 39.4841 4.5 28.1212 4.5 15.5347C4.50347 12.6758 5.56474 9.93504 7.45107 7.9135C9.33741 5.89195 11.8948 4.75461 14.5625 4.75088C18.8172 4.75088 22.3894 7.17958 23.8813 11.0805C24.0131 11.4245 24.2374 11.7187 24.5256 11.9257C24.8138 12.1328 25.153 12.2433 25.5 12.2433C25.847 12.2433 26.1862 12.1328 26.4744 11.9257C26.7626 11.7187 26.9869 11.4245 27.1187 11.0805C28.6106 7.17255 32.1828 4.75088 36.4375 4.75088C39.1052 4.75461 41.6626 5.89195 43.5489 7.9135C45.4353 9.93504 46.4965 12.6758 46.5 15.5347C46.5 28.1025 29.49 39.4817 25.5 41.9784Z"
                      fill="black"
                      stroke="black"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="flex-[4] mx-auto flex justify-center items-center itemImg">
                <img src="../assets/png-transparent-dragon-ball-frieza-vegeta-captain-ginyu-piccolo-radar-fictional-characters-audio-equipment-action-toy-figures1.png" alt="Scouter">
            </div>
          </div>
        </div>    
  </section>
</template>

<script>
export default {};
</script>

<style scoped>


.plus {
  transition: 0.2s;
}

button:hover .plus {
  transform: rotateZ(90deg);
}

img{
    max-height: 100%;
    max-width: 100%;
}

@media screen and (max-width:640px) {
  .stars img{
    height: 40px !important;
  }
}

.stars img{
    height: 60px;
    filter: drop-shadow(-5px 5px 5px #00000087);
    transition: 0.2s;
}

.stars img:hover {
  scale: 1.1;
}

.featured{
    filter: drop-shadow(-5px 5px 5px #00000087);
}

svg{
  transition: 0.2s;
}

svg:hover{
  scale: 1.2;
  fill: red !important;
}

.itemImg{
  max-width: 250px !important;
}

</style>
