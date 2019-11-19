<template>
  <div class="product-card">
    <sub-title-text></sub-title-text>
    <explanation-text></explanation-text>
    <sub-title-line></sub-title-line>
    <date-text></date-text>
  </div>
</template>

<script>
import SubTitleText from '../01_atoms/text/SubTitleText'
import SubTitleLine from '../01_atoms/line/SubTitleLine'
import DateText from '../01_atoms/text/DateText'
import ExplanationText from '../01_atoms/text/ExplanationText'
export default {
  name: 'ProductCard',
  components: { ExplanationText, DateText, SubTitleLine, SubTitleText }
}
</script>

<style scoped></style>
