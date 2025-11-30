<template>
  <NInputNumber
    v-if="state.cart.includes(item)"
    :class="$style.input"
    button-placement="both"
    :value="state.cart.filter(e => e.id === item.id).length"
    @click.stop=""
    @update:value="state.update($event, item)"
  />
  <NButton
    v-else
    :class="$style.input"
    @click.stop="state.cart.push(item)"
  >
    <NIcon :class="$style.cart">
      <CartOutline />
    </NIcon>
    {{ formatPrice(item.regular_price) }}
  </NButton>
</template>

<script setup>
  import { CartOutline } from '@vicons/ionicons5'
  import { NButton, NIcon, NInputNumber } from 'naive-ui'
  import { useState } from '@/utils/Base'
  defineProps({
    item: { type: Object },
  })
  const { state, formatPrice } = useState()
</script>

<style lang="scss" module>
.card {
  flex-basis: calc(30% - 1px);
  flex-grow: 1;
  cursor: pointer;
}
.input {
  width: 100%;
  justify-self: center;
  text-align: center;
}
.cart {
  margin-right: 1rem;
  transform: scale(2);
}
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
