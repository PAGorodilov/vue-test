import store from '@/store'

export function useState() {
  const { useState } = store
  const state = useState()

  const formatPrice = (({ currency = 'USD', value = '0' } = {}) => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      currencyDisplay: 'symbol',
    })
    return formatter.format(value)
  })
  const getImageUrl = (image) => {
    return image ? require(`@/assets${ image }`) : ''
  }
  return { state, formatPrice, getImageUrl }
}
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
