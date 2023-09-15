<template>
    <tr class="text-lg border-black/10 border-b-2">
    <th class="py-8">{{ product.prodID }}</th>
    <td class="max-w-[100px]">{{ product.prodName }}</td>
    <td class="max-w-[100px] model">
        {{ product.model }}
    </td>
    <td>
        {{ product.prodCharacter }}
    </td>
    <td>{{ product.price }}</td>
    <td class="gap-5 items-center">
      <!-- <router-link :to="{name: 'admin edit', params:{id:product.prodID}}" class="text-green-400">Edit</router-link> / <button class="text-red-400" @click="deleteProduct( product.prodID )" >Delete</button> -->
      <router-link :to="{ name: 'admin edit item', params: { id: product.prodID }}" class="hover:text-green-500 transition">Edit</router-link> / <button @click="deleteProduct( product.prodID )" class="hover:text-secondary transition">Delete</button>
    </td>
  </tr>
</template>

<script>
    export default {
        props: [
          'product'
        ],
        methods: {
          async deleteProduct( id ){
            const response = await this.$store.dispatch("deleteProduct", id)

            if ( response ){
              this.$store.dispatch('fetchProducts')
              alert('Product deleted successfully!')
            } else {
              alert('Failed to delete product')
            }
          }
        }
    }
</script>

<style scoped>

</style>