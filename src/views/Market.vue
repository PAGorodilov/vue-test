<template>
  <Catalog>
    <template #filters>
      filters
    </template>
    <Card
      v-for="card in products.products"
      :card="card"
    />
  </Catalog>
</template>

<script setup>
  import Catalog from '@/components/Catalog.vue'
  import Card from '@/components/Card.vue'
  import { loadResources } from '@/utils/Base'
  const { brands, products } = await loadResources()
</script>

<style lang="scss" module>
</style>
