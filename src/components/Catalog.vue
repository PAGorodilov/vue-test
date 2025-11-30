<template>
  <section>
    <slot name="filters" />
  </section>
  <section>
    <h1>Catalog</h1>
    <div :class="$style.catalog">
      <slot />
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss" module>
.catalog {
  display: flex;
  flex-wrap: wrap;
}
</style>