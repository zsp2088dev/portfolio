<template>
  <div class="skill-item">
    <item-title-text :title="title" />
    <ul>
      <li v-for="(skill, index) in skills" :key="index">
        <div class="item">
          <span class="circle"></span>
          <item-text :item="skill" />
        </div>
      </li>
    </ul>
    <p></p>
  </div>
</template>

<script>
import ItemText from '../01_atoms/text/ItemText'
import ItemTitleText from '../01_atoms/text/ItemTitleText'
export default {
  name: 'SkillItem',
  components: { ItemTitleText, ItemText },
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

<style scoped lang="scss">
.skill-item {
  width: 220px;
  border: solid 2px $text-color;
}
.item-title-text {
  padding: 1rem;
}
.item {
  text-align: left;
  padding: 0 2rem;
}
.circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  background-color: $primary-color;
  text-align: left;
}
.item-text {
  display: inline-block;
  padding: 0.3rem 0;
}
p {
  padding-bottom: 1rem;
}
</style>
