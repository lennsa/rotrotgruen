<template>
  <div class="container">
    <img class="right-image" src="/static/letter-small.png">
    <div class="buttons">
      <a></a>
    </div>
    <h1 class="container-item">{{ letter.title }}</h1>
    <div class="container-item">
      <p>{{ letter.description }}</p>
      <SignButton></SignButton>
    </div>
  </div>
</template>

<script>
import SignButton from '.././components/SignButton'

export default {
  name: 'Letter',
  data () {
    return {
      letter: {
        title: '',
        description: ''
      }
    }
  },
  created () {
    const postData = {
      identifier: this.$openletter.letterId
    }
    this.$http.post(this.$openletter.apiURL + this.$openletter.getLetterURI, postData).then(res => {
      this.letter = res.body.letter
    }).catch(res => {
      this.letter = {
        title: 'Brief',
        description: 'Der Brief konnte nicht geladen werden.'
      }
    })
  },
  components: {
    SignButton
  }
}
</script>

<style scoped>
.right-image {
  float: right;
  width: 60%;
  height: auto;
}
</style>
