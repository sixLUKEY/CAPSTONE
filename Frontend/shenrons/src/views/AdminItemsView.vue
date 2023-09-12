<template>
    <div class="flex flex-col my-12">
        <table class="w-full text-center">
            <thead class="text-xl">
                <tr class=" sm:text-xl sticky top-0 bg-black text-primary">
                    <th class="py-3">ID</th>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Price</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody>
                <AdminItem/>
                <AdminItem/>
                <AdminItem/>
                <AdminItem/>
                <AdminItem/>
                <AdminItem/>
                <AdminItem/>
            </tbody>
           
        </table>
    </div>
</template>

<script>

    import Loader from '@/components/Loader.vue';
    import AdminItem from '@/components/AdminProduct.vue'

    export default {
        components: {
            Loader,
            AdminItem
        }
    }
</script>

<style scoped>

</style>