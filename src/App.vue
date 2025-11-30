<template>
  <Header />
  <router-view v-slot="{ Component, route }">
    <template v-if="Component">
      <transition mode="out-in" name="page-fade">
        <main :class="$style.main" :key="route.path">
          <KeepAlive>
            <suspense>
              <component :is="Component"></component>

              <template #fallback>
                <Skeleton />
              </template>
            </suspense>
          </KeepAlive>
        </main>
      </transition>
    </template>
  </router-view>
  <Footer />
</template>

<script setup>
  import Skeleton from '@/views/Skeleton.vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>

<style module lang="scss">
:global(#app) {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // background-color: $background;
  display: flex;
  // align-content: center;
  // justify-content: center;
  min-height: 100vh;
  // flex-wrap: wrap;
  flex-direction: column;
}
.main {
  flex-grow: 1;
  display: flex;
}
</style>
