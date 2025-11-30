import { defineStore } from 'pinia'

export default defineStore('state', {
  state: () => ({
    openedCard: null,
    cart: [],
  }),
  getters: {
    getCartElements() {
      return [...new Set(this.cart)]
    },
    getCartElementQuantity() {
      return (item) => this.cart.filter(e => e.id === item.id).length
    },
  },
  actions: {
    closeCard() {
      this.openedCard = null
    },
    update(val, item) {
      const old = this.cart.filter(e => e.id === item.id).length
      if (old < val) {
        //add
        for (let i = old; i < val; i++) {
          this.cart.push(item)
        }
      } else if (old > val) {
        //delete
        for (let i = old; i > val; i--) {
          const index = this.cart.findIndex(e => e.id === item.id)
          this.cart.splice(index, 1)
        }
      }
    },
  },
})