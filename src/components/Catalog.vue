<template>
  <section :class="$style.filters">
    <div :class="$style.filterContainer">
      <slot name="filters" />
    </div>
  </section>
  <section :class="$style.catalogSection">
    <h1 :class="$style.header">Catalog</h1>
    <TransitionGroup name="list" tag="div" :class="$style.tags">
      <slot name="tags" />
    </TransitionGroup>
    <slot />
    <slot name="other" />
  </section>
</template>

<script setup>
</script>

<style lang="scss" module>
.filters {
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
.catalogSection {
  padding: 0 0 1rem 1rem;
  flex-basis: 80%;
  .header {
    line-height: 100%;
    margin-top: 0;
  }
  .tags {
    min-height: 3rem;
    display: flex;
    gap: 0.5rem;
    position: relative;
  }
}
</style>