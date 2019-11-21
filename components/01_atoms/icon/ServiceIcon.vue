<template>
  <div class="service-icon">
    <img :src="src" :alt="service" width="32" height="32" />
  </div>
</template>

<script>
export default {
  name: 'ServiceIcon',
  props: {
    service: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    src() {
      return require(`@/assets/icons/icon-${this.service}.svg`)
    }
  }
}
</script>

<style scoped></style>
