<template>
  <div class="name-text">
    <span>{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'NameText',
  props: {
    name: {
      type: String,
      default: 'Kazuki Yamagata'
    }
  }
}
</script>

<style scoped></style>
