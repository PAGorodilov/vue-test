<template>
  <div :class="$style.container">
    <div>header</div>
    <div :class="$style.cards">
      <Card :card="cards[0]" />
    </div>
    <div>addButton</div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Stage',
  components: { Card },
  data: () => ({
    cards: [
      {
        id: 2,
        title: 'Карточка 2',
        stage: 'stage-1',
        project: 'project-1',
        score: 2
      },
    ],
  }),
}
</script>

<style lang="scss" module>
  .container {
    width: 320px;
    background: $color_2;
    border-radius: 4px;
    padding: 12px;
    display: flex;
    gap: 12px;
    flex-direction: column;
  }
  .cards {
    display: flex;
    gap: 8px;
    flex-direction: column;
  }
</style>
