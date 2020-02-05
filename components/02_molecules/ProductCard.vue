<template>
  <div class="product-card">
    <sub-title-text :title="title" />
    <explanation-text>{{ text }}</explanation-text>
    <date-text :year="year" :month="month" />
  </div>
</template>

<script>
import SubTitleText from '../01_atoms/text/SubTitleText'
import DateText from '../01_atoms/text/DateText'
import ExplanationText from '../01_atoms/text/ExplanationText'
export default {
  name: 'ProductCard',
  components: { ExplanationText, DateText, SubTitleText },
  props: {
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    year: {
      type: Number,
      default: 2019
    },
    month: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped lang="scss">
.product-card {
  padding: 0.5em 1em;
  margin: 2em 0;
  color: $title-color;
  background: $secondary-color;
  border: solid 1px $secondary-color;
  border-radius: 10px;
  width: 250px;
  height: 180px;
}

.sub-title-text {
  padding: 1rem 0;
}
.explanation-text {
  padding-bottom: 1rem;
}
</style>
