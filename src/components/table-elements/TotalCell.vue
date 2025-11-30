<template>
  <h2>
    {{ formatPrice({
      currency: row.regular_price.currency,
      value: row.regular_price.value * state.getCartElementQuantity(row),
    }) }}
  </h2>
</template>

<script setup>
  import { useState } from '@/utils/Base'
  defineProps({
    row: { type: Object },
  })
  const { state, formatPrice } = useState()
</script>

<style lang="scss" module>
</style>
