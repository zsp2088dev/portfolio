<template>
  <div class="my-name">
    <sub-title-text></sub-title-text>
    <sub-title-line></sub-title-line>
  </div>
</template>

<script>
import SubTitleText from '../01_atoms/text/SubTitleText'
import SubTitleLine from '../01_atoms/line/SubTitleLine'
export default {
  name: 'MyName',
  components: { SubTitleLine, SubTitleText }
}
</script>

<style scoped></style>
