import { defineStore } from 'pinia'

export default defineStore('state', {
  state: () => ({
    openedCard: null,
    cart: [],
  }),
  getters: {
  },
  actions: {
    closeCard() {
      this.openedCard = null
    },
    // addToCart(item) {
    //   console.log(this.cart, item)
    //   if (!this.cart.find(e => e.id === item.id)) {
    //     this.cart.push(item)
    //   }
    // }
  },
})