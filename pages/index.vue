<template>
  <div class="container">
    <my-profile />
    <my-skills />
    <my-career />
    <my-products />
    <my-contact />
  </div>
</template>
<script>
import MyProfile from '../components/03_organisms/MyProfile'
import MySkills from '../components/03_organisms/MySkills'
import MyCareer from '../components/03_organisms/MyCareer'
import MyProducts from '../components/03_organisms/MyProducts'
import MyContact from '../components/03_organisms/MyContact'
export default {
  components: { MyContact, MyProducts, MyCareer, MySkills, MyProfile }
}
</script>
