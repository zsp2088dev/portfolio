<template>
  <div class="my-contact">
    <div class="my-contact-title">
      <main-title-text title="CONTACT" />
    </div>

    <div class="my-contact-contents">
      <explanation-text>
        基本的にはTwitterのDMにてご連絡のほどよろしくお願いいたします。
        メールでの対応も可能ですが、TwitterのDMを利用したほうが返信が早いかと思います。
        ご連絡お待ちしております。
      </explanation-text>
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <contact-item :account="item.account" :service="item.service" />
        </li>
      </ul>
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
      items: [
        {
          service: 'twitter',
          account: '@zsp2088dev'
        },
        {
          service: 'github',
          account: 'zsp2088dev'
        },
        {
          service: 'mail',
          account: 'zsp2088dev@gmail.com'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.my-contact-title {
  color: $title-color;
  background-color: $primary-color;
  padding: $title-padding;
}

.my-contact-contents {
  margin: $contents-margin;
}

.explanation-text {
  margin-bottom: 8.5%;
}

ul {
  display: inline-block;
  padding-left: 0;
}
ul li {
  text-align: left;
}
</style>
