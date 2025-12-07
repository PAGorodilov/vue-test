<template>
  <section :class="$style.filters">
    <div
      v-if="isDesktop"
      :class="$style.filterContainer"
    >
      <slot name="filters" />
    </div>
    <NDrawer
      v-else
      v-model:show="openFilter"
      :class="$style.filterDrawer"
      placement="left"
      close-on-esc
    >
      <NDrawerContent closable>
        <slot name="filters" />
      </NDrawerContent>
    </NDrawer>
  </section>
  <section :class="$style.catalogSection">
    <h1 :class="$style.header">Catalog</h1>
    <TransitionGroup name="list" tag="div" :class="$style.tags">
      <slot name="tags" />
      <NTag
        v-if="!isDesktop"
        tertiary
        key="filter"
        :class="$style.filterButton"
        @click="openFilter = !openFilter"
      >
        <NIcon>
          <FunnelOutline />
        </NIcon>
      </NTag>
    </TransitionGroup>
    <slot />
    <slot name="other" />
  </section>
</template>

<script setup>
  import { NTag, NButton, NIcon, NDrawer, NDrawerContent } from 'naive-ui'
  import { FunnelOutline } from '@vicons/ionicons5'
  import { ref } from 'vue'

  const openFilter = ref(false);

  const mediaQuery = window.matchMedia('(min-width: 768px)')
  const isDesktop = ref(mediaQuery.matches)
  mediaQuery.addListener(({ matches }) => isDesktop.value = matches)
</script>

<style lang="scss" module>
.filters {
  display: none;
  flex-basis: 20%;
  padding: 0 1rem 1rem 1rem;
  border-right: 1px solid #1111111e;
  .filterContainer {
    display: flex;
    gap: 0.3rem;
    flex-direction: column;
    position: sticky;
    top: 1rem;
  }
}
.filterDrawer {
  :global(.n-drawer-body-content-wrapper) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
.catalogSection {
  padding: 0 0 1rem 1rem;
  flex-basis: 100%;
  .header {
    line-height: 100%;
    margin-top: 0;
  }
  .tags {
    min-height: 3rem;
    display: flex;
    gap: 0.5rem;
    position: relative;
    flex-wrap: wrap;
    padding-bottom: 1rem;
  }
}

@media (min-width: 768px) {
  .filters {
    display: block;
  }
  .catalogSection {
    flex-basis: 80%;
  }
}
</style>