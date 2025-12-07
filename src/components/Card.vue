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
  width: calc(100% / 2 - 1rem);
  margin: 0 1rem 1rem 0;
  cursor: pointer;
  display: inline-block;
  :global(.n-card-header) {
    flex-direction: column;
  }
  :global(.n-card__content) {
    text-align: center;
  }
}

@media (max-width: 400px) {
  .card {
    :global(.n-rate__item) {
      font-size: initial;
    }
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .card {
    width: calc(100% / 3 - 1rem);
  }
}
@media (min-width: 1024px) {
  .card {
    width: calc(100% / 4 - 1rem);
  }
}
@media (min-width: 1400px) {
  .card {
    width: calc(100% / 6 - 1rem);
  }
}
</style>
