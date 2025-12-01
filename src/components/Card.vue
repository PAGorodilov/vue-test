<template>
<div :class="$style.card">
<NCard @click="state.openedCard = card.id">
    <template #cover>
      <img :src="getImageUrl(card.image)" :class="$style.image">
    </template>
    <template #header>
      {{ card.title }}
    </template>
    <template #header-extra>
      {{ brandName }}
    </template>
    <template #footer>
      <Tags />
    </template>
    <template #action>
      <Buy :item="card" />
    </template>
    <NRate readonly :default-value="card.rate" />
  </NCard>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { NCard, NRate } from 'naive-ui'
  import { useState, loadResources } from '@/utils/Base'
  import Buy from '@/components/Buy.vue'
  import Tags from '@/components/Tags.vue'
  const props = defineProps({
    card: { type: Object },
  })
  const { state, getImageUrl } = useState()
  const brandName = ref('test');
  loadResources().then(({brands}) => {
    brandName.value = brands.brandByProduct(props.card).title
  })
</script>

<style lang="scss" module>
.card {
  width: calc(100% / 3 - 1rem);
  flex-grow: 0;
  margin: 0 1rem 1rem 0;
  cursor: pointer;
  display: inline-block;
}
</style>
