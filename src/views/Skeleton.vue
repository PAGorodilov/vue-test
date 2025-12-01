<template>
  <Catalog>
    <template #filters>
      <NSkeleton height="34px" width="100%" :repeat="6" animated />
    </template>
    <template #tags>
    </template>
    <template #other>
    </template>
    <div :class="$style.cat">
      <NSkeleton height="494px" width="calc(100% / 3 - 1rem)" :repeat="6" animated />
    </div>
  </Catalog>
</template>

<script setup>
  import { NSkeleton } from 'naive-ui'
  import Catalog from '@/components/Catalog.vue'
</script>

<style module lang="scss">
.cat {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
