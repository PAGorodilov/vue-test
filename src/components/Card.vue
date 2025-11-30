<template>
  <NCard :class="$style.card" @click="state.openedCard = card.id">
    <template #cover>
      <img :src="getImageUrl(card.image)" :class="$style.image">
    </template>
    <template #header>
      {{ card.title }}
    </template>
    <template #header-extra>
      {{ brands.brandByProduct(card).title }}
    </template>
    <template #footer>
      <Tags />
    </template>
    <template #action>
      <Buy :item="card" />
    </template>
    <NRate readonly :default-value="card.rate" />
  </NCard>
</template>

<script setup>
  import { computed } from 'vue'
  import { NCard, NRate } from 'naive-ui'
  import { useState, loadResources } from '@/utils/Base'
  import Buy from '@/components/Buy.vue'
  import Tags from '@/components/Tags.vue'
  const props = defineProps({
    card: { type: Object },
  })
  const { state, getImageUrl } = useState()
  const { brands } = await loadResources()
</script>

<style lang="scss" module>
.card {
  flex-basis: calc(30% - 1px);
  flex-grow: 1;
  cursor: pointer;
}
</style>
