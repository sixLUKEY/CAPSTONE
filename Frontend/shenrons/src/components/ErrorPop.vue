<template>
    <div class="fixed bg-secondary px-5 py-2 bottom-[10%] right-[5%] flex items-center justify-center rounded-sm pointer-events-none" id="error">
        <p class="text-2xl w-fit">
            An error occured!
        </p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    #error{
        transform: translateX(1000px);
        transition: 0.2s;
    }

</style>