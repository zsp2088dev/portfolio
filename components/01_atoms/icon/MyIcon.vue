<template>
  <div class="my-icon">
    <img :src="path" alt="icon-me" />
  </div>
</template>

<script>
export default {
  name: 'MyIcon',
  computed: {
    path() {
      return require(`@/assets/icons/icon-me.jpg`)
    }
  }
}
</script>

<style scoped></style>
