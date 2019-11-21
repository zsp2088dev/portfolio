<template>
  <div class="my-profile">
    <div class="my-profile-title">
      <main-title-text title="PROFILE" />
    </div>

    <div class="my-profile-contents">
      <my-icon />
      <my-name />
      <explanation-text>
        静岡大学 大学院 総合科学技術研究科 情報学専攻修士1年。
        大学院卒業後はWeb系企業に就職したいと考えており、ソフトウェア技術について幅広く学んでいる最中。
      </explanation-text>

      <explanation-text>
        プログラミングは大学に入ってから学び始め、現在(2019月11月)ではGo、Python、Nuxt.jsあたりの技術に触れている。
        現在ではソフトウェア設計に興味があり、学んだ技術を生かしてソフトウェア制作を行っている。
      </explanation-text>
    </div>
  </div>
</template>

<script>
import MainTitleText from '../01_atoms/text/MainTitleText'
import MyIcon from '../01_atoms/icon/MyIcon'
import MyName from '../02_molecules/MyName'
import ExplanationText from '../01_atoms/text/ExplanationText'
export default {
  name: 'MyProfile',
  components: { ExplanationText, MyName, MyIcon, MainTitleText }
}
</script>

<style scoped lang="scss">
.my-profile-title {
  color: $title-color;
  background-color: $primary-color;
  padding: $title-padding;
}
</style>
