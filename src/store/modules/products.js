import wait from '@/utils/wait'
import productsJson from '@/json/products'
import { defineStore } from 'pinia'


export default defineStore('productsStore', {
  state: () => ({
    productsList: [],
    filters: new Set,
  }),
  getters: {
    products () {
      return (this.filters.size ? this.productsList.filter(e => this.filters.has(e.brand)) : this.productsList)
        .sort((a, b) => a.title - b.title)
    },
    productById (state) {
      return (id) => state.productsList.find(e => e.id === id)
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
