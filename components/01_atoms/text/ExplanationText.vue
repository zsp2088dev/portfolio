<template>
  <div class="explanation-text">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'ContentsText',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
