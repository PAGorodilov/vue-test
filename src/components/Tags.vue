<template>
  <NSpace>
    <NTag
      v-for="tag in ['red','blue','cyan']"
      :class="$style.tag"
      :bordered="false"
      :color="{color:tag}"
    />
  </NSpace>
</template>

<script setup>
  import { NTag, NSpace } from 'naive-ui'
</script>

<style lang="scss" module>
.tag {
  aspect-ratio: 1;
}
</style>
