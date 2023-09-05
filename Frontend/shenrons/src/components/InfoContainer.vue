<template>
    <section class="grid grid-cols-12 gap-5">
        <div class="bg-[#6666664b] background rounded-md">

        </div>
        <div class=" flex flex-col left gap-5 justify-between">
            <p class="text-5xl">
                Join a growing community of Dragon Ball Z fans
            </p>

            <p class="text-xl">
                Our customers love us! Don't just take our word for it – read what they have to say about 'Shenron's Tiny Trinkets.' These reviews are a testament to our commitment to quality and the Dragon Ball Z community.
            </p>

            <p class="py-2 px-4 bg-white rounded-sm w-fit text-black text-sm">
                Want to know More?
                <br>
                CHeck out our <router-link to="/" class="text-red-500">FAQ's</router-link>
            </p>
        </div>
        <img src="https://i.postimg.cc/nc320GkD/pngwing-com-2023-08-30-T090953-2-min.png" alt="logo">
        <div class="right flex flex-col justify-between">
            <div class="card1 flex flex-col bg-white rounded-md text-black p-2 w-[70%] gap-2 self-end">
                <div class="flex gap-2">
                    <img src="https://i.postimg.cc/yxHsdSrV/Ellipse-8-min.png" alt="User1" class="h-8">
                        <h5 class="text-2xl font-bold">Rian S.</h5>                    
                    <img src="https://i.postimg.cc/nc320GkD/pngwing-com-2023-08-30-T090953-2-min.png" alt="Logo" class="h-5 ms-auto">
                </div>
                <h6 class="text-sm font-bold">
                   <span>"</span>Dream store for Dragon Ball Z fans. Great variety and service!<span>"</span>
                </h6>
            </div>
            <div class="card1 flex flex-col bg-white rounded-md text-black p-2 w-[70%] gap-2 self-center">
                <div class="flex gap-2">
                    <img src="https://i.postimg.cc/nrZFcw3R/Ellipse-9-min.png" alt="User1" class="h-8">
                        <h5 class="text-2xl font-bold">Claire J.</h5>                    
                    <img src="https://i.postimg.cc/nc320GkD/pngwing-com-2023-08-30-T090953-2-min.png" alt="Logo" class="h-5 ms-auto">
                </div>
                <h6 class="text-sm font-bold">
                   <span>"</span>Fast delivery, fantastic products - my son loves them!"<span>"</span>
                </h6>
            </div>
            <div class="card1 flex flex-col bg-white rounded-md text-black p-2 w-[70%] gap-2 self-end">
                <div class="flex gap-2">
                    <img src="https://i.postimg.cc/RhRM3Q8M/Ellipse-10-min.png" alt="User1" class="h-8">
                        <h5 class="text-2xl font-bold">Ethan L.</h5>                    
                    <img src="https://i.postimg.cc/nc320GkD/pngwing-com-2023-08-30-T090953-2-min.png" alt="Logo" class="h-5 ms-auto">
                </div>
                <h6 class="text-sm font-bold">
                   <span>"</span>Impressive quality and customization feature! Perfect for collectors!<span>"</span>
                </h6>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    section{
        grid-template-rows: repeat( 12, 1fr );
        isolation: isolate;
    }

    .background{
        grid-column: 2 / 11;
        grid-row:  1 / -1;
    }

    .left{
        grid-column: 1 / 7;
        grid-row: 2 / -2;
        filter: drop-shadow(-8px 8px 2px #000);
    }

    section > img{
        grid-column: 4 / 9;
        grid-row: 2 / -2;
        opacity: 0.06;
    }

    h6 > span{
        color: rgb(254, 25, 25);
    }

    .right{
        grid-column: 7 / 13;
        grid-row: 2 / -2;
        filter: drop-shadow(-8px 8px 2px #000);
    }

</style>