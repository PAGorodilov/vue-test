<template>
  <NDrawer
    placement="right"
    close-on-esc
    :width="500"
    :class="$style.product"
    :show="state.openedCard !== null"
    @update:show="state.openedCard = null"
  >
    <NDrawerContent closable>
      <NCard v-if="currentProduct" class="">
        <template #cover>
          <img :src="getImageUrl(currentProduct.image)" class="">
        </template>
        <template #header>
          {{ currentProduct.title }}
        </template>
        <template #header-extra>
          {{ brands.brandByProduct(currentProduct).title }}
        </template>
        <NRate readonly :default-value="currentProduct.rate" />
        <p>
          {{ currentProduct.description }}
        </p>
        <template #footer>
          colors
        </template>
        <template #action>
          <Buy :item="currentProduct" />
        </template>
      </NCard>
    </NDrawerContent>
  </NDrawer>
</template>

<script setup>
  import { computed } from 'vue'
  import { useState, loadResources } from '@/utils/Base'
  import { CartOutline } from '@vicons/ionicons5'
  import { NDrawer, NDrawerContent, NCard, NButton, NIcon, NRate } from 'naive-ui'
  import Buy from '@/components/Buy.vue'
  const props = defineProps({
    card: { type: Object },
  })
  const { state, getImageUrl, formatPrice } = useState()
  const { brands, products } = await loadResources()

  const currentProduct = computed(() => {
    return products.productById(state.openedCard)
  })

//   "type": "simple",
//     "id": 1,
//     "sku": "s1",
//     "title": "Product 1",
//     "regular_price": {
//       "currency": "USD",
//       "value": 27.12
//     },
//     "image": "/images/1.png",
//     "brand": 9
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
