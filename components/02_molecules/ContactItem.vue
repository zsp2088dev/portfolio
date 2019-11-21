<template>
  <div class="contact-item">
    <service-icon :service="service" />
    <item-text :item="account" />
  </div>
</template>

<script>
import ServiceIcon from '../01_atoms/icon/ServiceIcon'
import ItemText from '../01_atoms/text/ItemText'
export default {
  name: 'ContactItem',
  components: { ItemText, ServiceIcon },
  props: {
    account: {
      type: String,
      default: ''
    },
    service: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style scoped lang="scss">
.contact-item {
  display: inline-flex;
  padding-bottom: 0.5rem;
}
.service-icon {
  padding-right: 1rem;
}
</style>
