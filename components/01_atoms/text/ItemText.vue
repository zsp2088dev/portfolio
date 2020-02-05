<template>
  <div class="item-text">
    <span>{{ item }}</span>
  </div>
</template>

<script>
export default {
  name: 'ItemText',
  props: {
    item: {
      type: String,
      default: ''
    }
  }
}
</script>
