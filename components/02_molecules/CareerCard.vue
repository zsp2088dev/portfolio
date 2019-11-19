<template>
  <div class="career-card">
    <frame-line></frame-line>
    <sub-title-text :title="title"></sub-title-text>
    <explanation-text :text="text"></explanation-text>
    <date-text :year="year" :month="month"></date-text>
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
  components: { ExplanationText, DateText, SubTitleText, FrameLine },
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
