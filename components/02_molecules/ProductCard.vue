<template>
  <div class="product-card">
    <sub-title-text></sub-title-text>
    <explanation-text></explanation-text>
    <date-text></date-text>
  </div>
</template>

<script>
import SubTitleText from '../01_atoms/text/SubTitleText'
import DateText from '../01_atoms/text/DateText'
import ExplanationText from '../01_atoms/text/ExplanationText'
export default {
  name: 'ProductCard',
  components: { ExplanationText, DateText, SubTitleText }
}
</script>

<style scoped></style>
