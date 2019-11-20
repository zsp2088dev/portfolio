<template>
  <div class="my-career">
    <div class="my-career-title">
      <main-title-text title="CAREER" />
    </div>

    <div class="my-career-contents">
      <explanation-text />
      <ul>
        <li v-for="(item, index) in items" :key="index">
          <career-card
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
import CareerCard from '../02_molecules/CareerCard'
export default {
  name: 'MyCareer',
  components: { CareerCard, ExplanationText, MainTitleText },
  data: () => {
    return {
      items: [
        {
          title: 'freee インターンシップ',
          text: 'ハッカソン形式でインターン生とチーム開発',
          year: 2019,
          month: 8
        },
        {
          title: 'giftee インターンシップ',
          text: 'Railsを使用してLINE BOTを制作',
          year: 2019,
          month: 9
        },
        {
          title: 'Fringe81 インターンシップ',
          text: '事前課題で作成したソフトウェアをブラッシュアップ',
          year: 2019,
          month: 9
        }
      ]
    }
  }
}
</script>

<style scoped></style>
