<template>
  <div class="explanation-text">
    <p>
      <slot />
    </p>
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
