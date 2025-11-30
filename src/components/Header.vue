<template>
  <header :class="$style.header">
    <RouterLink to="/">
      <img src="@/assets/images/logo.png" />
    </RouterLink>
    <RouterLink to="/cart">
      <NFloatButton position="fixed" :class="$style.cart">
        <NBadge :value="state.getCartElements.length" :offset="[6, -8]">
          <NIcon>
            <CartOutline />
          </NIcon>
        </NBadge>
      </NFloatButton>
    </RouterLink>
    <NDivider :class="$style.divider" />
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
  width: 100%;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  flex-direction: column;
  box-sizing: border-box;
  .divider {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
