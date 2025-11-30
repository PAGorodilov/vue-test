<template>
  <div :class="$style.cart">
    <h1>Shopping Cart</h1>
    <NDataTable
      :columns="columns"
      :data="state.getCartElements"
      :pagination="false"
      :bordered="false"
      :class="$style.table"
    />
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
  </div>
</template>

<script setup>
  import { NDataTable, NButton } from 'naive-ui'
  import { useState, loadResources } from '@/utils/Base'
  import { h, useCssModule } from 'vue'
  import ProductCell from '@/components/table-elements/ProductCell.vue'
  import PriceCell from '@/components/table-elements/PriceCell.vue'
  import QuantityCell from '@/components/table-elements/QuantityCell.vue'
  import TotalCell from '@/components/table-elements/TotalCell.vue'
  import DeleteButton from '@/components/table-elements/DeleteButton.vue'

  const $style = useCssModule()
  const { state, getImageUrl, formatPrice } = useState()
  const { brands, products } = await loadResources()

  const columns = [
    {
      title: '',
      sortOrder: false,
      key: 'image',
      className: $style.imageCol,
      render: (row) => h(
        'img',
        {
          src: getImageUrl(row.image),
          class: $style.image,
        },
      ),
    },
    {
      title: 'Item',
      key: 'title',
      render: (row) => h(ProductCell, { row }),
    },
    {
      title: 'Price',
      sortOrder: false,
      key: 'regular_price',
      className: $style.priceCol,
      render: (row) => h(PriceCell, { row }),
    },
    {
      title: 'Qty',
      sortOrder: false,
      key: 'id',
      className: $style.qtyCol,
      render: (row) => h(QuantityCell, { row }),
    },
    {
      title: 'Total',
      sortOrder: false,
      key: 'sum',
      className: $style.sumCol,
      render: (row) => h(TotalCell, { row }),
    },
    {
      title: '',
      sortOrder: false,
      key: 'delete',
      className: $style.delCol,
      render: (row) => h(DeleteButton, { row, onClick: () => state.update(0, row) }),
    }
  ]
</script>

<style lang="scss" module>
.cart {
  width: 100%;
  padding: 1rem;
}
.table {
  .imageCol {
    width: 12rem;
  }
  .qtyCol {
    width: 7rem;
  }
  .priceCol, .qtyCol, .sumCol, .delCol {
    text-align: center;
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
</style>
