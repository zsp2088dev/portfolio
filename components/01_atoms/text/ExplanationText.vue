<template>
  <div class="explanation-text">
    <span>
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'ExplanationText',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
