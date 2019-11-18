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

<style scoped></style>
