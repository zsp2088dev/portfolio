<template>
  <div class="career-card">
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
  name: 'CareerCard',
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
.career-card {
  border-bottom: solid 1px $text-color;
  padding: 2rem 0;
  width: 400px;
}

.sub-title-text {
  margin-bottom: 1.3rem;
}

.explanation-text {
  margin-bottom: 1rem;
}
</style>
