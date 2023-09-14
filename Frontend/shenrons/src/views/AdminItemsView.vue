<template>
    <div class="flex flex-col my-12">
        <router-link to="/admin/addItem" class="bg-primary text-white rounded-sm py-2 px-5 text-xl w-fit ms-auto me-5 my-5 hover:opacity-90 transition">Add Item</router-link>
        <table class="w-full text-center">
            <thead class="text-xl">
                <tr class=" sm:text-xl sticky top-0 bg-dark text-primary">
                    <th class="py-3">ID</th>
                    <th>Name</th>
                    <th>Model</th>
                    <th>Character</th>
                    <th>Price</th>
                    <th>Actions</th>

                </tr>
            </thead>
            <tbody v-if="products">
                <AdminItem
                v-for="product of products"
                :key="product.prodID"
                :product="product"
                />
            </tbody>
            <tbody v-else>
                <Loader/>
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
        },
        computed: {
            products(){
                return this.$store.state.products
            }
        },
        mounted(){
            this.$store.dispatch("fetchProducts")
        }
    }
</script>

<style scoped>

</style>