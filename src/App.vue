<template>
  <router-view v-slot="{ Component, route }">
    <template v-if="Component">
      <Header />
      <main>
        <transition mode="out-in" name="page-fade">
          <KeepAlive>
            <suspense>
              <component :key="route.path" :is="Component"></component>

              <template #fallback>
                <Skeleton />
              </template>
            </suspense>
          </KeepAlive>
        </transition>
      </main>
      <Footer />
    </template>
  </router-view>
</template>

<script setup>
  import Skeleton from '@/views/Skeleton.vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>

<style lang="scss" module>
#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // background-color: $background;
  // display: flex;
  // align-content: center;
  // justify-content: center;
  // height: 100vh;
  // flex-wrap: wrap;
}
</style>
