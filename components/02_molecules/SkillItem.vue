<template>
  <div class="skill-item">
    <sub-title-text :title="title" />
    <ul>
      <li v-for="(skill, index) in skills" :key="index">
        <item-text :item="skill" />
      </li>
    </ul>
  </div>
</template>

<script>
import SubTitleText from '../01_atoms/text/SubTitleText'
import ItemText from '../01_atoms/text/ItemText'
export default {
  name: 'SkillItem',
  components: { ItemText, SubTitleText },
  props: {
    title: {
      type: String,
      default: ''
    },
    skills: {
      type: Object,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped></style>
