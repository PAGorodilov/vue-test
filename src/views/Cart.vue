<template>
  <div :class="$style.cart">
    <h1>Shopping Cart</h1>
    <TransitionGroup name="list" tag="div" :class="$style.tags">
      <div
        v-for="row in state.getCartElements"
        :key="row.id"
        :class="$style.table"
      >
        <img :src="getImageUrl(row.image)" :class="$style.image" />
        <h2 :class="$style.title">
          {{ row.title }}
        </h2>
        <h3 :class="$style.brand">
          {{ brands.brandByProduct(row).title }}
        </h3>
        <PriceCell :class="$style.priceCol" :row="row"></PriceCell>
        <QuantityCell :class="$style.qtyCol" :row="row"></QuantityCell>
        <TotalCell :class="$style.sumCol" :row="row"></TotalCell>
        <DeleteButton :class="$style.delCol" @click="state.update(0, row)" :row="row"></DeleteButton>
      </div>
    </TransitionGroup>
    <h1
      v-if="state.cart.length"
      :class="$style.total"
    >
      Subtotal: {{
        formatPrice({
          currency: state.cart[0].regular_price.currency,
          value: state.cart.reduce((acc, e) => e.regular_price.value + acc, 0)
        })
      }}
      <NButton :class="$style.checkout">
        Checkout
      </NButton>
    </h1>
    <NResult
      v-else
      status="404"
      title="No goods in the chart"
      :class="$style.prompt"
    >
      <h3>Add some goods in sfs</h3>
      <RouterLink to="/">
        <img src="@/assets/images/logo.png" />
      </RouterLink>
    </NResult>
  </div>
</template>

<script setup>
  import { NButton, NResult } from 'naive-ui'
  import { useState, loadResources } from '@/utils/Base'
  import { h, useCssModule } from 'vue'
  import PriceCell from '@/components/table-elements/PriceCell.vue'
  import QuantityCell from '@/components/table-elements/QuantityCell.vue'
  import TotalCell from '@/components/table-elements/TotalCell.vue'
  import DeleteButton from '@/components/table-elements/DeleteButton.vue'

  const $style = useCssModule()
  const { state, getImageUrl, formatPrice } = useState()
  const { brands, products } = await loadResources()
</script>

<style lang="scss" module>
.cart {
  width: 100%;
  padding: 1rem;
}
.tags {
  min-height: 3rem;
  position: relative;
}
.table {
  border-top: 1px solid #1111111e;
  padding: 1rem 0 1rem 0;
  display: grid;
  grid-template-columns: 7rem 1fr 1fr 5rem;
  grid-template-rows: 1fr 0.7fr 0.6fr;
  grid-template-areas:
    "image title title price"
    "image brand brand ."
    "image del qty sum";
  gap: 0.5rem;
  .image {
    grid-area: image;
  }
  .title {
    grid-area: title;
    margin: 0;
    font-size: 1.7rem;
  }
  .brand {
    grid-area: brand;
    margin: 0;
  }
  .priceCol {
    grid-area: price;
    text-align: center;
    margin: 0;
  }
  .qtyCol {
    grid-area: qty;
    text-align: center;
    width: 5rem;
    justify-self: end;
  }
  .sumCol {
    grid-area: sum;
    text-align: center;
    margin: 0;
  }
  .delCol {
    grid-area: del;
    display: none;
    justify-items: center;
  }
}
.total {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
}
.image {
  width: 100%;
}
.checkout {
  width: 12rem;
}
.prompt {
  text-align: center;
}
@media (min-width: 768px) and (max-width: 1023px) {
  .table {
    grid-template-columns: 1fr 2fr 8rem;
    grid-template-rows: 1fr 0.7fr 0.6fr 1fr;
    grid-template-areas:
      "image title price"
      "image brand qty"
      "image . sum"
      "image . del";
    .delCol {
      display: unset;
    }
    .qtyCol {
      width: 100%;
      justify-self: stretch;
    }
  }
}
@media (min-width: 1024px) {
  .table {
    grid-template-columns: 1fr 2fr 8rem 8rem 8rem 3rem;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "image title price qty sum del"
      "image brand . . . .";
    .delCol {
      display: unset;
    }
    .qtyCol {
      width: 100%;
      justify-self: stretch;
    }
    .sumCol, .qtyCol, .priceCol, .title, .delCol {
      align-self: anchor-center;
    }
  }
}
</style>
