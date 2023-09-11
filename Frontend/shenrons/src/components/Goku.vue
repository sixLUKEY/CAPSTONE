<template>
  <section class="flex px-20 py-5 gap-12" id="goku">
    <div class="flex-2">
      <img src="https://i.postimg.cc/D0PTLyNr/goku-min.png" alt="goku" />
    </div>
    <div class="flex-[5] flex flex-col gap-5 relative">
      <div class="flex justify-end items-end gap-5">
        <div class="flex flex-col text-end">
          <h1 class="text-7xl text-[#067EE6] font-bold">
            Son <span class="text-primary">Goku</span>
          </h1>
          <h4 class="text-3xl">"The Saiyan Hero"</h4>
        </div>
        <img
          src="https://i.postimg.cc/7ZMBgtqy/goku-Avi-min.png"
          alt="goku avatar"
        />
      </div>
      <div class="flex gap-12">
        <div class="flex-[3] flex flex-col gap-5 justify-between">
          <p class="text-xl">
            Goku, often hailed as the "Saiyan Hero," is the central and beloved
            protagonist of the Dragon Ball series. He is a pure-hearted,
            cheerful warrior with an insatiable appetite for improvement and a
            fierce commitment to protecting his friends and the Earth. Goku's
            character is defined by his unwavering determination, boundless
            optimism, and the unbreakable bond he shares with his friends and
            family. As a Saiyan, his journey involves constant training and
            pushing the limits of his power. Goku's iconic transformations, such
            as Super Saiyan, mark his evolution as a fighter, making him a
            symbol of resilience and heroism in the Dragon Ball universe.
          </p>
          <div class="flex gap-10">
            <div class="flex flex-col items-center flex-1 justify-between">
              <h3 class="text-3xl">Alternate Forms</h3>
              <div class="flex h-full altImg items-center">
                <img
                  src="https://i.postimg.cc/BQGHxxNT/gokualt-min.png"
                  alt="goku"
                />
                <img
                  src="https://i.postimg.cc/fTjX5Jg6/gokualt2-min.png"
                  alt="goku2"
                />
              </div>
            </div>
            <div class="flex-1 flex flex-col text-center gap-5">
              <h3 class="text-3xl">Goku's Items</h3>
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
                More for Goku
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col imgContainer gap-5 bgImg">
          <div class="flex-1">
            <img
              src="https://i.postimg.cc/DZqmZGq5/gokubg-min.png"
              alt="gokubg"
            />
          </div>
          <div class="flex-1">
            <img
              src="https://i.postimg.cc/8cNcrC4G/gokubg2-min.png"
              alt="gokubg2"
            />
          </div>
          <div class="flex-1">
            <img
              src="https://i.postimg.cc/QCmtgrYT/gokubg3-min.png"
              alt="gokubg3"
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
