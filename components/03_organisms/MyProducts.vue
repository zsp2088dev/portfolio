<template>
  <div class="my-products">
    <div class="my-products-title">
      <main-title-text title="PRODUCTS" />
    </div>

    <div class="my-products-contents">
      <explanation-text>
        過去に制作したシステムWebサイト等をまとめました。
        新たに制作したものは今後ここに追加していきます。
        現在では仮想通貨自動取引システムであるCATS (Crypto Auto Trading System)
        を制作しています。
        本システムは、拡張性、変更容易性、可読性の高いシステムの実現を目的としており、
        クリーンアーキテクチャとGo言語を使用して制作している最中です。
      </explanation-text>

      <ul>
        <li v-for="(item, index) in items" :key="index">
          <product-card
            :title="item.title"
            :text="item.text"
            :year="item.year"
            :month="item.month"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MainTitleText from '../01_atoms/text/MainTitleText'
import ExplanationText from '../01_atoms/text/ExplanationText'
import ProductCard from '../02_molecules/ProductCard'
export default {
  name: 'MyProducts',
  components: { ProductCard, ExplanationText, MainTitleText },
  data: () => {
    return {
      items: [
        {
          title: 'Portfolio Site',
          text:
            'Nuxt.js, Vuetify, CircleCIを使用してポートフォリオサイトを作成しました。',
          year: 2019,
          month: 3
        },
        {
          title: 'Book MS',
          text:
            'Nuxt.js, Firebase, Atomic Design, を使用して書籍管理アプリを作成しました。',
          year: 2019,
          month: 3
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.my-products-title {
  color: $title-color;
  background-color: $primary-color;
  padding: $title-padding;
}

.my-products-contents {
  margin: $contents-margin;
}

.explanation-text {
  padding-bottom: 5%;
}

li {
  display: inline-block;
  padding: 0 1rem;
}
</style>
