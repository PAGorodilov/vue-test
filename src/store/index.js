import { defineStore } from 'pinia'

import useBrandsStore from './modules/brands'
import useProductsStore from './modules/products'
// console.log(useBrandsStore(), useProductsStore());

export default {
  useBrandsStore,
  useProductsStore,
}
