<template>
  <div class="card-text">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'CardText',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
