<template>
  <div class="main-title-text">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'MainTitleText',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
