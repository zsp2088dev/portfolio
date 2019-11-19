<template>
  <div class="contact-item">
    <service-icon></service-icon>
    <item-text :item="item"></item-text>
  </div>
</template>

<script>
import ServiceIcon from '../01_atoms/icon/ServiceIcon'
import ItemText from '../01_atoms/text/ItemText'
export default {
  name: 'ContactItem',
  components: { ItemText, ServiceIcon },
  props: {
    item: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
