<template>
  <div class="main-title-text">
    <h1>
      <span class="title">{{ title }}</span>
    </h1>
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

<style scoped lang="scss">
.title {
  font-family: 'DIN Condensed', serif;
  border-bottom: $title-bottom;
}
</style>
