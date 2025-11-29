import wait from '@/utils/wait'
import productsJson from '@/json/products'
import { defineStore } from 'pinia'

const sortOptions = {
  default: e => e.title,
  byPriceAsc: e => e.regular_price.value,
  byPriceDesc: e => e.regular_price.value,
}

export default defineStore('productsStore', {
  state: () => ({
    productsList: [],
    sortBy: sortOptions.default,
    sortOptions,
  }),
  getters: {
    products (state) {
      return state.productsList.sort(state.sortBy)
    },
  },
  actions: {
    async downloadProducts() {
      if (!this.productsList.length)
        await wait(2000)
      this.productsList = productsJson
    },
  },
})
