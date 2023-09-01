<template>
    <div class="flex-1 relative">
        <img src="https://i.postimg.cc/13qpFXJG/pngwing-com-2023-09-01-T123730-018-min.png" alt="Shenron" class="w-full z-10 absolute shenron">
        <img src="https://i.postimg.cc/KY3R1xg3/pngwing-com-2023-09-01-T124152-824-min.png" alt="1 star" class="absolute w-[10%] bottom-[5%] left-[5%] ">
        <img src="https://i.postimg.cc/3RMWpVgS/pngwing-com-2023-08-29-T085939-1-min.png" alt="2 star" class="absolute w-[15%] top-[5%] right-[5%] z-20">
        <img src="https://i.postimg.cc/yxjNMN2t/3-star-1-min.png" alt="3 star" class="absolute w-[5%] top-[8%] left-[20%] ">
        <img src="https://i.postimg.cc/90CMg9gy/pngwing-com-2023-09-01-T124206-564-min.png" alt="4 star" class="absolute w-[20%] top-[50%] left-[50%] z-20">
        <img src="https://i.postimg.cc/qRdMgnTW/pngwing-com-2023-09-01-T124218-848-min.png" alt="5 star" class="absolute w-[12%] top-[30%] z-20">
        <img src="https://i.postimg.cc/HxQntzzp/6-star-1-min.png" alt="6 star" class="absolute w-[5%] left-[25%] bottom-[40%]">
        <img src="https://i.postimg.cc/TY36CxJy/7-star-1-min.png" alt="7 star" class="absolute w-[10%] right-[3%] bottom-[2%] ">
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    .absolute:nth-child(2){
        animation: float 1s infinite linear;
    }

    .absolute:nth-child(3){
        animation: float 2s infinite 0.6s linear;
    }

    .absolute:nth-child(4){
        animation: float 1.2s infinite linear;
    }

    .absolute:nth-child(5){
        animation: float 2s infinite linear;
    }

    .absolute:nth-child(6){
        animation: float 2s infinite 0.5s linear;
    }

    .absolute:nth-child(7){
        animation: float 2.5s infinite linear;
    }

    .absolute:nth-child(8){
        animation: float 3s infinite linear;
    }

    .shenron{
        animation: float 5s infinite linear;
    }




    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50%{
            transform: translateY(5px);
        }
        100%{
            transform: translateY(0px);
        }
    }
</style>