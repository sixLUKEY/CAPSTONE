<template>
    <div class="fixed bg-tertiary px-5 py-2 bottom-[10%] left-[5%] flex items-center justify-center rounded-sm pointer-events-none" id="success">
        <p class="text-2xl w-fit">
            Success!
        </p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    #success{
        transform: translateX( -1000px );
        transition: 0.2s;
    }

</style>