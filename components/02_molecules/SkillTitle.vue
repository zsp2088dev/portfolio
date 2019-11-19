<template>
  <div class="skill-title">
    <sub-title-text :title="title"></sub-title-text>
  </div>
</template>

<script>
import SubTitleText from '../01_atoms/text/SubTitleText'
export default {
  name: 'SkillTitle',
  components: { SubTitleText },
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
