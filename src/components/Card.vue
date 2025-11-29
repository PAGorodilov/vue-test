<template>
  <div>
    {{ card.title }}
  </div>
</template>

<script setup>
  defineProps({
    card: { type: Object },
  });
</script>

<style lang="scss" module>
</style>
