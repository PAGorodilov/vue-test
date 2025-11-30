<template>
  <Catalog>
    <template #filters>
      filters
    </template>
    <Product />
    <Card
      v-for="card in products.products"
      :card="card"
    />
  </Catalog>
</template>

<script setup>
  import Product from '@/views/Product.vue'
  import Catalog from '@/components/Catalog.vue'
  import Card from '@/components/Card.vue'
  import { loadResources } from '@/utils/Base'
  const { brands, products } = await loadResources()
</script>

<style lang="scss" module>
</style>
