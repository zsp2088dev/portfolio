<template>
  <div class="career-card">
    <frame-line></frame-line>
    <sub-title-text></sub-title-text>
    <explanation-text></explanation-text>
    <date-text></date-text>
    <frame-line></frame-line>
  </div>
</template>

<script>
import FrameLine from '../01_atoms/line/FrameLine'
import SubTitleText from '../01_atoms/text/SubTitleText'
import DateText from '../01_atoms/text/DateText'
import ExplanationText from '../01_atoms/text/ExplanationText'
export default {
  name: 'CareerCard',
  components: { ExplanationText, DateText, SubTitleText, FrameLine }
}
</script>

<style scoped></style>
