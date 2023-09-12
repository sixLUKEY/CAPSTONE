<template>
    <tr class="text-lg border-black/10 border-b-2">
    <th class="py-8">115</th>
    <td class="">Luke</td>
    <td class="">
        Evertson
    </td>
    <td>
        22
    </td>
    <td>M</td>
    <!-- <td v-if="user.userRole === 'admin' " class="text-red-500">Admin</td> -->
    <td>User</td>
    <td class="gap-5 items-center">
      <!-- <router-link :to="{name:'admin user edit', params:{id:user.userID} }" class="text-green-400">Edit</router-link> / <button class="text-red-400" @click="deleteUser( user.userID )" >Delete</button> -->
      Edit / Delete
    </td>
  </tr>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>



   
</style>