<template>
    <div class="flex flex-col my-12">
        <table class="w-full text-center relative">
            <thead>
                <tr class=" sm:text-xl sticky top-0 bg-dark text-primary">
                    <th class="py-3">ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody class="my-5" v-if="users">
                <AdminUser
                v-for="user of users"
                :key="user.userID"
                :user="user"
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
    import AdminUser from '@/components/AdminUser.vue'

    export default {
        components: {
            Loader,
            AdminUser
        },
        computed: {
            users(){
                return this.$store.state.users
            }
        },
        mounted(){
            this.$store.dispatch("fetchUsers")
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