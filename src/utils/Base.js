// import { useRoute } from 'vue-router'
// import { computed } from 'vue'
import store from '@/store'

// export function useUtils() {
//   return {  }
// }
export async function loadResources() {
  const { useBrandsStore, useProductsStore } = store
  const brands = useBrandsStore()
  const products = useProductsStore()
  await Promise.all([
    brands.downloadBrands(),
    products.downloadProducts(),
  ])
  return { brands, products }
}
