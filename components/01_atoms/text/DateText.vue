<template>
  <div class="date-text">
    <span>{{ year }}</span>
    <span class="date-text-string"> 年 </span>
    <span>{{ month }}</span>
    <span class="date-text-string"> 月 </span>
  </div>
</template>

<script>
export default {
  name: 'DateText',
  props: {
    year: {
      type: Number,
      default: 2019
    },
    month: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style scoped></style>
