<template>
  <div :class="$style.container">
    Card
  </div>
</template>

<script setup>
export default {
  name: 'Card',
  props: {
    card: Object,
  },
}
</script>

<style lang="scss" module>
  .container {
    background: $color_4;
    border-radius: 4px;
    height: 120px;
  }
</style>
