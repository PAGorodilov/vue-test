<template>
  <NInputNumber
    @click.stop=""
    v-if="state.cart.includes(item)"
    button-placement="both"
    :value="state.cart.filter(e => e.id === item.id).length"
    @update:value="update"
  />
  <NButton v-else @click.stop="state.cart.push(item)">
    <NIcon>
      <CartOutline />
    </NIcon>
    {{ formatPrice(item.regular_price) }}
  </NButton>
</template>

<script setup>
  import { CartOutline } from '@vicons/ionicons5'
  import { NButton, NIcon, NInputNumber } from 'naive-ui'
  import { useState } from '@/utils/Base'
  import Buy from '@/components/Buy.vue'
  const props = defineProps({
    item: { type: Object },
  })
  const { state, formatPrice } = useState()

  const update = (val) => {
    const old = state.cart.filter(e => e.id === props.item.id).length
    if (old < val) {
      //add
      state.cart.push(props.item)
    } else if (old > val) {
      //delete
      const index = state.cart.findIndex(e => e.id === props.item.id)
      state.cart.splice(index, 1)
    }
  }
</script>

<style lang="scss" module>
.card {
  flex-basis: calc(30% - 1px);
  flex-grow: 1;
  cursor: pointer;
}
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
