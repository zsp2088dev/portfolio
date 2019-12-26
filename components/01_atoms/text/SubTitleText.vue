<template>
  <div class="sub-title-text">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SubTitleText',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 1.25rem;
}
</style>
