<template>
  <div class="my-contact">
    <div class="my-contact-title">
      <main-title-text title="CONTACT" />
    </div>

    <div class="my-contact-contents">
      <explanation-text>
        基本的にはTwitterのDMにてご連絡のほどよろしくお願いいたします。
        メールでの対応も可能ですが、Twitterを利用したほうが返信が早いかと思います。
      </explanation-text>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <contact-item :account="item.account" />
        </li>
      </ul>
      <contact-item item="zsp2088dev@g" />
      <contact-item />
    </div>
  </div>
</template>

<script>
import MainTitleText from '../01_atoms/text/MainTitleText'
import ExplanationText from '../01_atoms/text/ExplanationText'
import ContactItem from '../02_molecules/ContactItem'
export default {
  name: 'MyContact',
  components: { ContactItem, ExplanationText, MainTitleText },
  data: () => {
    return {
      items: [{ account: '@zsp2088dev' }, { account: 'zsp2088dev@gmail.com' }]
    }
  }
}
</script>

<style scoped></style>
