<template>
    <div class="flex flex-col my-12">
        <table class="w-full text-center relative">
            <thead>
                <tr class=" sm:text-xl sticky top-0 bg-black text-primary">
                    <th class="py-3">ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody class="my-5">
                <AdminUser/>
                <AdminUser/>
                <AdminUser/>
                <AdminUser/>
                <AdminUser/>
                <AdminUser/>
                <AdminUser/>
            </tbody>
            <!-- <tbody class="w-full flex items-center justify-center">
                <Loader class="my-24"/>
            </tbody> -->
           
        </table>
    </div>
</template>

<script>

    import Loader from '@/components/Loader.vue';
    import AdminUser from '@/components/AdminUser.vue'

    export default {
        components: {
            Loader,
            AdminUser
        }
    }
</script>

<style scoped>
    
    /* th:first-of-type{
        text-align: start;
    }

    th:last-of-type{
        text-align: end;
    } */

</style>