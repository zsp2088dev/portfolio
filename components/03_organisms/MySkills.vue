<template>
  <div class="my-skills">
    <div class="my-skills-title">
      <main-title-text title="SKILLS" />
    </div>

    <div class="my-skills-contents">
      <explanation-text>
        「Hello World!」をしたことがあるだけのものは除き、
        実際に動かしたり使用しているソフトウェア技術やツール等をピックアップしてみました。
        フロントエンドからバックエンドまで幅広い領域に触れることで、
        ソフトウェアエンジニアとしての能力を底上げしたいと考えています。
      </explanation-text>

      <div class="skills">
        <ul>
          <li v-for="(skills, title) in items" :key="title">
            <skill-item :title="title" :skills="skills" />
          </li>
        </ul>
      </div>

      <p style="margin-bottom: 10%" />
    </div>
  </div>
</template>

<script>
import MainTitleText from '../01_atoms/text/MainTitleText'
import ExplanationText from '../01_atoms/text/ExplanationText'
import SkillItem from '../02_molecules/SkillItem'
export default {
  name: 'MySkills',
  components: { SkillItem, ExplanationText, MainTitleText },
  data: () => {
    return {
      items: {
        Languages: ['Go', 'Python', 'JavaScript'],
        Frameworks: ['Nuxt.js', 'Vue.js', 'Django'],
        Tools: ['Git', 'JetBrains IDE', 'Figma'],
        Architecture: ['Clean Architecture', 'DDD', 'MVC'],
        Server: ['Firebase', 'Heroku', 'Netlify'],
        SaaS: ['GitHub', 'Slack', 'CircleCI']
      }
    }
  }
}
</script>

<style scoped lang="scss">
.my-skills-title {
  color: $title-color;
  background-color: $primary-color;
  padding: $title-padding;
}
.my-skills-contents {
  margin: $contents-margin;
}

.explanation-text {
  padding-bottom: 5%;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  padding: 20px;
}
</style>
