<template>
  <NInputNumber
    v-if="state.cart.includes(row)"
    button-placement="both"
    :value="state.getCartElementQuantity(row)"
    @update:value="state.update($event, row)"
  />
</template>

<script setup>
  import { useState } from '@/utils/Base'
  import { NInputNumber } from 'naive-ui'
  defineProps({
    row: { type: Object },
  })
  const { state, formatPrice } = useState()
</script>

<style lang="scss" module>
</style>
