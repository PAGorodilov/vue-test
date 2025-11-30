<template>
  <header :class="$style.header">
    <RouterLink to="/">
      <img src="@/assets/images/logo.png" />
    </RouterLink>
    <NFloatButton position="fixed" :class="$style.cart">
      <RouterLink to="/cart">
        <NBadge :value="new Set(state.cart).size" :offset="[6, -8]">
          <NIcon>
            <CartOutline />
          </NIcon>
        </NBadge>
      </RouterLink>
    </NFloatButton>
    <NDivider />
  </header>
</template>

<script setup>
  import { CartOutline } from '@vicons/ionicons5'
  import { NFloatButton, NBadge, NIcon, NDivider } from 'naive-ui'
  import { useState } from '@/utils/Base'
  const { state } = useState()
</script>

<style lang="scss" module>
.cart {
  top: 1rem;
  right: 1rem;
  z-index: 1;
}
.header {
  display: flex;
  width: 100vw;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
}
</style>
