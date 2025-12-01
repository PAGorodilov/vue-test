<template>
  <Catalog>
    <template #filters>
      <NButton
        type="primary"
        v-for="brand in brands.brands"
        @click="products.filters.add(brand.id)"
      >
        {{ brand.title }}
      </NButton>
    </template>
    <template #tags>
      <NTag
        v-for="filter in [...products.filters]"
        :key="filter"
        closable
        @close="products.filters.delete(filter)"
      >
        {{ brands.getBrandById(filter).title }}
      </NTag>
    </template>
    <template #other>
      <Product />
    </template>
    <TransitionGroup name="list" tag="div" :class="$style.catalog">
      <Card
        v-for="card in products.products"
        :key="card.id"
        :card="card">{{card.id}}
      </Card>
    </TransitionGroup>
  </Catalog>
</template>

<script setup>
  import { NTag, NButton } from 'naive-ui'
  import Product from '@/views/Product.vue'
  import Catalog from '@/components/Catalog.vue'
  import Card from '@/components/Card.vue'
  import { loadResources } from '@/utils/Base'

  const { brands, products } = await loadResources()
</script>

<style lang="scss" module>
  .catalog {
    // gap: 1rem;
    // display: flex;
    // flex-wrap: wrap;
    position: relative;
    min-height: 100%;
  }
</style>
