<template>
  <NDrawer
    placement="right"
    close-on-esc
    :width="500"
    :show="state.openedCard !== null"
    @update:show="state.openedCard = null"
  >
    <NDrawerContent closable>
      <NCard v-if="currentProduct">
        <template #cover>
          <img :src="getImageUrl(currentProduct.image)">
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
          <Tags />
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
  import Tags from '@/components/Tags.vue'
  import Buy from '@/components/Buy.vue'
  const props = defineProps({
    card: { type: Object },
  })
  const { state, getImageUrl, formatPrice } = useState()
  const { brands, products } = await loadResources()

  const currentProduct = computed(() => {
    return products.productById(state.openedCard)
  })
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
@media (max-width: 600px) {
  :global(.n-drawer) {
    width: 100%!important;
  }
}
</style>
