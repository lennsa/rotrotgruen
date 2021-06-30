<template>
  <div class="container">
    <h1 class="container-item">Pressestimmen:</h1>
    <div class="teaser-list">
      <PressTeaser v-for="(teaser, index) in teasers" :teaser="teaser" :key="index"></PressTeaser>
    </div>
  </div>
</template>

<script>
import PressTeaser from '.././components/PressTeaser'

export default {
  name: 'Press',
  data () {
    return {
      teasers: this.$press.teasers
    }
  },
  components: {
    PressTeaser
  }
}
</script>

<style scoped>

.teaser-list {
  padding: 0 8rem 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
  grid-gap: 4rem;
}

@media screen and (max-width: 650px) {
  .teaser-list {
    padding: 0 0 4rem;
  }
}

</style>
