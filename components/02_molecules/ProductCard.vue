<template>
  <div class="product-card">
    <sub-title-text :title="title"></sub-title-text>
    <explanation-text :text="text"></explanation-text>
    <date-text :year="year" :month="month"></date-text>
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

<style scoped></style>
