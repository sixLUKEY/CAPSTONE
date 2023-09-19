<template>
    <tr class="text-lg border-black/10 border-b-2">
    <th class="py-8">{{ user.userID }}</th>
    <td class="">{{ user.firstName }}</td>
    <td class="">
        {{ user.lastName }}
    </td>
    <td>
        {{ user.userAge }}
    </td>
    <td>{{ user.gender }}</td>
    <!-- <td v-if="user.userRole === 'admin' " class="text-red-500">Admin</td> -->
    <td>{{ user.userRole }}</td>
    <td class="gap-5 items-center">
      <!-- <router-link :to="{name:'admin user edit', params:{id:user.userID} }" class="text-green-400">Edit</router-link> / <button class="text-red-400" @click="deleteUser( user.userID )" >Delete</button> -->
      <button class="hover:text-green-500 transition">Edit</button> / <button @click="deleteUser( user.userID )" class="hover:text-secondary transition">Delete</button>
    </td>
  </tr>
</template>

<script>
    export default {
        props: [
          'user'
        ],
        methods: {
          async deleteUser( id ){
            const response = await this.$store.dispatch('deleteUser', id)

            if ( response ){
              this.$store.dispatch('fetchUsers')
              await new Promise((resolve) => {
            this.$store.dispatch('successPop')  
            resolve()
          })
            } else {
              await new Promise((resolve) => {
            this.$store.dispatch('errorPop')
            resolve()
          })
            }
          }
        }
    }
</script>

<style scoped>



   
</style>