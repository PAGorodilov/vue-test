<template>
  <h2>
    {{ formatPrice(row.regular_price) }}
  </h2>
</template>

<script setup>
  import { useState } from '@/utils/Base'
  defineProps({
    row: { type: Object },
  })
  const { formatPrice } = useState()
</script>

<style lang="scss" module>
</style>
