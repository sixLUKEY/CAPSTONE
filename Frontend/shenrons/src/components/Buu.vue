<template>
  <section class="flex px-20 py-5 gap-12">
    <div class="flex-2">
      <img src="https://i.postimg.cc/NLqV6Yxk/buu-Char-min.png" alt="buu" />
    </div>
    <div class="flex-[5] flex flex-col gap-5 relative">
      <div class="flex justify-end items-end gap-5">
        <div class="flex flex-col text-end">
          <h1 class="text-7xl text-[#E97F99] font-bold">
            Kid <span class="text-white">Buu</span>
          </h1>
          <h4 class="text-3xl">“The Unpredictable Menace”</h4>
        </div>
        <img
          src="https://i.postimg.cc/HxnfH6xX/buu-Avi-min.png"
          alt="kid buu avatar"
        />
      </div>
      <div class="flex gap-12">
        <div class="flex-[3] flex flex-col gap-5 justify-between">
          <p class="text-xl">
            Kid Buu, often referred to as the "Unpredictable Menace," is a
            chaotic and destructive force in the Dragon Ball series. Unlike
            other versions of Buu, Kid Buu lacks restraint and is driven solely
            by his destructive nature. He is a relentless, sadistic villain who
            revels in chaos and destruction. His character is marked by his
            unpredictability, making him one of the most formidable adversaries
            our heroes face. Kid Buu's reign of terror culminates in a fierce
            battle to save the universe, showcasing his raw power and the
            unrelenting challenge he poses.
          </p>
          <div class="flex gap-10">
            <div class="flex flex-col items-center flex-1 justify-between">
              <h3 class="text-3xl">Alternate Forms</h3>
              <div class="flex h-full altImg items-center">
                <img
                  src="https://i.postimg.cc/TPRzNdvk/buualt-min.png"
                  alt="buualt"
                />
                <img
                  src="https://i.postimg.cc/T3q8cyFL/buualt2-min.png"
                  alt="buualt2"
                />
              </div>
            </div>
            <div class="flex-1 flex flex-col text-center gap-5">
              <h3 class="text-3xl">Kid Buu's Items</h3>
              <div
                class="bg-[#1E1E1E] w-full h-full rounded-md p-3 flex flex-col gap-5 max-h-[280px] itemBox"
              >
                <div class="p-3 bg-[#343434] rounded flex flex-col gap-2">
                  <img
                    src="https://i.postimg.cc/3ryMPJL1/pngwing-com-2023-08-28-T203106-1.png"
                    alt="dragonBall"
                    class="w-2/3 mx-auto"
                  />
                  <h4 class="text-2xl">Dragon Ball</h4>
                </div>
                <div class="p-3 bg-[#343434] rounded flex flex-col gap-2">
                  <img
                    src="https://i.postimg.cc/3ryMPJL1/pngwing-com-2023-08-28-T203106-1.png"
                    alt="dragonBall"
                    class="w-2/3 mx-auto"
                  />
                  <h4 class="text-2xl">Dragon Ball</h4>
                </div>
                <div class="p-3 bg-[#343434] rounded flex flex-col gap-2">
                  <img
                    src="https://i.postimg.cc/3ryMPJL1/pngwing-com-2023-08-28-T203106-1.png"
                    alt="dragonBall"
                    class="w-2/3 mx-auto"
                  />
                  <h4 class="text-2xl">Dragon Ball</h4>
                </div>
              </div>
              <button
                class="bg-secondary text-white font-bold w-full rounded-sm mx-auto py-2 px-5 text-xl mt-auto hover:opacity-90 transition"
              >
                More for Kid Buu
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col imgContainer gap-5 bgImg">
          <div class="flex-1">
            <img
              src="https://i.postimg.cc/3NDV0W2w/buubg-min.png"
              alt="buubg"
            />
          </div>
          <div class="flex-1">
            <img
              src="https://i.postimg.cc/3wnPPsK3/buubg2-min.png"
              alt="buubg2"
            />
          </div>
          <div class="flex-1">
            <img
              src="https://i.postimg.cc/cHzPJfgj/buubg3-min.png"
              alt="buubg3"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  max-height: 100%;
}

.imgContainer div img {
  height: 100%;
  object-fit: cover;
  border-radius: 0.25rem;
}

.altImg img {
  transition: 0.2s;
}

.altImg img:hover {
  scale: 1.05;
  filter: drop-shadow(-10px 10px 10px #6b6b6b4b);
}

.bgImg div img:hover {
    opacity: 1;
    scale: 1.05;
}

.bgImg div img{
 opacity: 0.4;
    transition: 0.2s;
}

.itemBox {
  overflow-y: scroll;
}

.itemBox::-webkit-scrollbar {
  display: block;
  width: 10px;
}

.itemBox::-webkit-scrollbar-thumb {
  background-color: #6f6f6f;
  border-radius: 1rem;
}

::-webkit-scrollbar-thumb:hover {
  background: #676767;
}
</style>
