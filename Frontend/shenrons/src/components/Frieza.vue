<template>
  <section class="flex px-20 py-5 gap-12">
    <div class="flex-2 w-[20%]">
      <img src="https://i.postimg.cc/Bn4frQBW/frieza-Main-min.png" alt="frieza" class="h-full object-cover"/>
    </div>
    <div class="flex-[5] flex flex-col gap-5 relative">
      <div class="flex justify-end items-end gap-5">
        <div class="flex flex-col text-end">
          <h1 class="text-7xl text-[#9E31AE] font-bold">Frieza</h1>
          <h4 class="text-3xl">"The galactic tyrant"</h4>
        </div>
        <img
          src="https://i.postimg.cc/MTfDPqhg/frieza-Avi-min.png"
          alt="frieza avatar"
        />
      </div>
      <div class="flex gap-12">
        <div class="flex-[3] flex flex-col gap-5 justify-between">
          <p class="text-xl">
            Frieza, the "Galactic Tyrant," is a ruthless and iconic antagonist
            in Dragon Ball. As a member of the Frost Demons, he possesses
            immense power and is known for his cruelty. Responsible for
            destroying Planet Vegeta and nearly wiping out the Saiyan race,
            Frieza's unrelenting desire for power and rivalry with Goku define
            his character. His transformations and cunning make him a formidable
            adversary in the series.
          </p>
          <div class="flex gap-10">
            <div class="flex flex-col items-center flex-1 justify-between">
              <h3 class="text-3xl">Alternate Forms</h3>
              <div class="flex h-full altImg">
                <img
                  src="https://i.postimg.cc/GtD1C4fR/frieza-Alt-min.png"
                  alt="friezaAlt"
                  class=" object-contain"
                />
              </div>
            </div>
            <div class="flex-1 flex flex-col text-center gap-5">
              <h3 class="text-3xl">Frieza's Items</h3>
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
                More for Frieza
              </button>
            </div>
          </div>
        </div>
        <div class="flex flex-1 flex-col imgContainer gap-5 bgImg">
          <div class="flex-1">
            <img
              src="https://i.postimg.cc/Nf1wCrT7/friezabg-min.png"
              alt="friezabg"
            />
          </div>
          <div class="flex-1">
            <img
              src="https://i.postimg.cc/bYSPb5w5/friezabg2-min.png"
              alt="friezabg2"
            />
          </div>
          <div class="flex-1">
            <img
              src="https://i.postimg.cc/7YvkNNCZ/friezabg3-min.png"
              alt="friezabg3"
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
