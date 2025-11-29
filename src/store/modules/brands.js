import wait from '@/utils/wait'
import brandsJson from '@/json/brands'
import { defineStore } from 'pinia'

const sortOptions = {
  default: e => e,
  byPriceAsc: e => e.regular_price.value,
  byPriceDesc: e => e.regular_price.value,
}

export default defineStore('brandsStore', {
  state: () => ({
    brandsList: [],
    sortBy: sortOptions.default,
    sortOptions,
  }),
  getters: {
    brands (state) {
      return state.brandsList.sort(state.sortBy)
    },
  },
  actions: {
    async downloadBrands () {
      if (!this.brandsList.length)
        await wait(2000)
      this.brandsList = brandsJson
    },
  },
})