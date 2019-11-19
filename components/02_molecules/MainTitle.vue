<template>
  <div class="main-title">
    <main-title-text />
    <main-title-line />
  </div>
</template>

<script>
import MainTitleText from '../01_atoms/text/MainTitleText'
import MainTitleLine from '../01_atoms/line/MainTitleLine'
export default {
  name: 'MainTitle',
  components: { MainTitleLine, MainTitleText }
}
</script>

<style scoped></style>
