<template>
  <h2>
    {{ row.title }}
  </h2>
  <h3>
    {{ brands.brandByProduct(row).title }}
  </h3>
</template>

<script setup>
  import { loadResources } from '@/utils/Base'
  defineProps({
    row: { type: Object },
  })
  const { brands } = await loadResources()
</script>

<style lang="scss" module>
</style>
