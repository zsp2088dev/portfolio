<template>
  <div class="item-title-text">
    <h2>
      <span>{{ title }}</span>
    </h2>
  </div>
</template>

<script>
export default {
  name: 'ItemTitleText',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
span {
  font-family: 'DIN Condensed', serif;
  border-bottom: solid 2px $text-color;
}
</style>
