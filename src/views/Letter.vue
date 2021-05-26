<template>
  <div class="container">
    <h1 class="container-item">Liebe Spitzenkandidat*innen von Grünen, SPD und Linken,</h1>
    <div class="container-item">
      {{ letter }}
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
      letter: ''
    }
  },
  created () {
    const postData = {
      letter: {
        identifier: this.$openletter.letterId
      }
    }
    this.$http.post(this.$openletter.apiURL + this.$openletter.getLetterURI, postData).then(res => {
      this.letter = res.body
    }).catch(res => {})
  },
  components: {
    SignButton
  }
}
</script>

<style scoped>

</style>
