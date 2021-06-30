<template>
  <div class="container home-container">
    <div class="header">
      <span>Brief an die Spitzenkandidat*innen von SPD, Grünen und die Linke</span>
      <h1>Für eine Rot-Rot-Grüne Koalition!</h1>
      <SignButton></SignButton>
    </div>
  </div>
</template>

<script>
import SignButton from '.././components/SignButton'

export default {
  name: 'home',
  data () {
    return { }
  },
  components: {
    SignButton
  }
}
</script>

<style scoped>
.home-container {
  background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url("/static/home.jpg");
  background-size: cover;
  vertical-align: middle;
}

.header {
  margin-top: 25vh;
  text-align: center;
}

.header span {
  font-family: 'Jost', Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  color: var(--white);
  text-transform: uppercase;
}

.header h1 {
  font-family: 'Jost', Helvetica, Arial, sans-serif;
  font-size: 5rem;
  color: var(--white);
  margin-top: 0;
}

@media screen and (max-width: 700px) {
  .header span {
    font-size: 1rem;
  }

  .header h1 {
    font-size: 3rem;
  }
}
</style>
