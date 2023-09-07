<template>
    <section class="flex px-20 py-5 gap-12">
        <div class="flex-2">
            <img src="https://i.postimg.cc/x1YP8Gb4/zamasu-min.png" alt="zamasu">
        </div>
        <div class="flex-[5] flex flex-col gap-5 relative">
            <div class="flex justify-end items-end gap-5">
                <div class="flex flex-col text-end ">
                    <h1 class="text-7xl text-[#E98088] font-bold">
                        Zamasu <span class="text-4xl text-[#878787]">( Goku Black )</span>
                    </h1>
                    <h4 class="text-3xl">
                        "The Malevolent Fusion"
                    </h4>
                </div>
                <img src="https://i.postimg.cc/Pf7SK8v6/zamasu-avatar-min.png" alt="zamasu avatar">
            </div>
            <div class="flex gap-12">
                <div class="flex-[3] flex flex-col gap-5 justify-between">
                    <p class="text-xl ">
                        Zamasu Black is a fusion character from Dragon Ball Super, created when the Supreme Kai apprentice Zamasu merges with an alternate version of Goku. This fusion grants him Goku's appearance and abilities but with Zamasu's malevolent personality. Zamasu Black originates from a timeline where he despises mortals and uses the Time Ring to travel through time and eliminate them. His campaign poses a grave threat to the multiverse, and his immortality makes him a nearly invincible adversary. The conflict involving Zamasu Black raises complex moral and philosophical questions, making him a significant and memorable character in the Dragon Ball series.
                    </p>
                    <div class="flex gap-10">
                        <div class="flex flex-col items-center flex-1 justify-between">
                            <h3 class="text-3xl">
                                Alternate Forms
                            </h3>
                            <div class="flex h-full altImg items-center">
                                <img src="https://i.postimg.cc/7ZDwwjzY/pngwing-com-2023-08-29-T123128-1-min.png" alt="zam">
                                <img src="https://i.postimg.cc/85qg3YDG/pngwing-com-2023-08-29-T122831-1-min.png" alt="zam2">
                            </div>
                        </div>
                        <div class="flex-1 flex flex-col text-center gap-5">
                            <h3 class="text-3xl">
                                Zamasu's Items
                            </h3>
                            <div class=" bg-[#1E1E1E] w-full h-full rounded-md p-3 flex flex-col gap-5 max-h-[280px] itemBox">
                                <div class="p-3 bg-[#343434] rounded flex flex-col gap-2">
                                    <img src="https://i.postimg.cc/3ryMPJL1/pngwing-com-2023-08-28-T203106-1.png" alt="dragonBall" class="w-2/3 mx-auto">
                                    <h4 class="text-2xl">
                                        Dragon Ball
                                    </h4>
                                </div>
                                <div class="p-3 bg-[#343434] rounded flex flex-col gap-2">
                                    <img src="https://i.postimg.cc/3ryMPJL1/pngwing-com-2023-08-28-T203106-1.png" alt="dragonBall" class="w-2/3 mx-auto">
                                    <h4 class="text-2xl">
                                        Dragon Ball
                                    </h4>
                                </div>
                                <div class="p-3 bg-[#343434] rounded flex flex-col gap-2">
                                    <img src="https://i.postimg.cc/3ryMPJL1/pngwing-com-2023-08-28-T203106-1.png" alt="dragonBall" class="w-2/3 mx-auto">
                                    <h4 class="text-2xl">
                                        Dragon Ball
                                    </h4>
                                </div>
                            </div>
                            <button class=" bg-secondary text-white font-bold w-full rounded-sm mx-auto py-2 px-5 text-xl mt-auto hover:opacity-90 transition">
                                More for Zamasu
                            </button>
                        </div>
                    </div>
                </div>
                <div class="flex flex-1 flex-col imgContainer gap-5 bgImg">
                    <div class="flex-1">
                        <img src="https://i.postimg.cc/Pf2YXGQ0/zamasubg-min.png" alt="zamasubg">
                    </div>
                    <div class="flex-1">
                        <img src="https://i.postimg.cc/m2n99Qqw/zamasubg2-min.png" alt="zamasubg2">
                    </div>
                    <div class="flex-1">
                        <img src="https://i.postimg.cc/Hxgdj4Mj/zamasubg3-min.png" alt="zamasubg3">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    img{
        max-height: 100%;
    }

    .imgContainer div img{
        height: 100%;
        object-fit: cover;
        border-radius: 0.25rem;
    }

    .altImg img{
        transition: 0.2s;
    }

    .altImg img:hover{
        scale: 1.05;
        filter: drop-shadow( -10px 10px 10px  #6b6b6b4b);
    }
    

    .bgImg div img:hover {
    opacity: 1;
    scale: 1.05;
}

.bgImg div img{
 opacity: 0.4;
    transition: 0.2s;
}

    .itemBox{
        overflow-y: scroll;
    }

    .itemBox::-webkit-scrollbar{
        display: block;
        width: 10px; 
    }
    

    .itemBox::-webkit-scrollbar-thumb{
        background-color: #6F6F6F;
        border-radius: 1rem;  
    }

    ::-webkit-scrollbar-thumb:hover {
  background: #676767; 
}
    
</style>