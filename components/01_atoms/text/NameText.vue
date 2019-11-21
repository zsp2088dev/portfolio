<template>
  <div class="name-text">
    <span class="text">{{ name }}</span>
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

<style scoped lang="scss">
span {
  font-size: 2rem;
  font-family: 'DIN Condensed', serif;
  border-bottom: solid 2px $text-color;
  padding-bottom: 3px;
}
</style>
