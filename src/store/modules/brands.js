import wait from '@/utils/wait'
import brandsJson from '@/json/brands'
import { defineStore } from 'pinia'


export default defineStore('brandsStore', {
  state: () => ({
    brandsList: [],
  }),
  getters: {
    brands () {
      return this.brandsList
    },
    brandByProduct () {
      return (product) => this.brandsList.find(e => e.id === product.brand)
    },
    getBrandById() {
      return (id) => this.brandsList.find(e => e.id === id)
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