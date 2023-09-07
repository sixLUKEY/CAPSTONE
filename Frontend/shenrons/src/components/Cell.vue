<template>
  <section class="flex px-20 py-5 gap-12">
    <div class="flex-2">
      <img src="https://i.postimg.cc/Jn3rCKz1/cell-Char-min.png" alt="perfect cell" />
    </div>
    <div class="flex-[5] flex flex-col gap-5 relative">
      <div class="flex justify-end items-end gap-5">
        <div class="flex flex-col text-end">
          <h1 class="text-7xl text-[#48C03F] font-bold">
            Perfect <span class="text-[#9E31AE]">Cell</span>
          </h1>
          <h4 class="text-3xl">"The Ultimate Android"</h4>
        </div>
        <img
          src="https://i.postimg.cc/MGtp4dP1/cell-Avi-min.png"
          alt="cell avatar"
        />
      </div>
      <div class="flex gap-12">
        <div class="flex-[3] flex flex-col gap-5 justify-between">
          <p class="text-xl">
            Perfect Cell is a bio-engineered android created by Dr. Gero in the
            Dragon Ball Z series. Initially imperfect, Cell absorbs other
            androids to achieve his perfect form, gaining immense power. He
            initiates the Cell Games, a martial arts tournament, to challenge
            Earth's warriors. The saga culminates in a dramatic battle where
            Gohan defeats Cell, saving the Earth. Cell's character is defined by
            his quest for perfection, his role in iconic battles, and his
            eventual defeat, making him a significant figure in the series.
          </p>
          <div class="flex gap-10">
            <div class="flex flex-col items-center flex-1 justify-between">
              <h3 class="text-3xl">Alternate Forms</h3>
              <div class="flex h-full altImg items-center">
                <img
                  src="https://i.postimg.cc/Qd35ZYbz/cell-Alt-min.png"
                  alt="cellalt"
                />
                <img
                  src="https://i.postimg.cc/44jVBxhs/cell-Alt2-min.png"
                  alt="cellalt2"
                />
              </div>
            </div>
            <div class="flex-1 flex flex-col text-center gap-5">
              <h3 class="text-3xl">Cell's Items</h3>
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
                More for Cell
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col imgContainer gap-5 bgImg">
          <div class="flex-1">
            <img
              src="https://i.postimg.cc/V5yfMTvP/cellbg-min.png"
              alt="cellbg"
            />
          </div>
          <div class="flex-1">
            <img
              src="https://i.postimg.cc/vH99jwW9/cellbg2-min.png"
              alt="cellbg2"
            />
          </div>
          <div class="flex-1">
            <img
              src="https://i.postimg.cc/tRsF3xJB/cellbg3-min.png"
              alt="cellbg3"
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
