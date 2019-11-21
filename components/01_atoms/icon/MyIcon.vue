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
      return require(`@/assets/icon-me.jpg`)
    }
  }
}
</script>

<style scoped></style>
