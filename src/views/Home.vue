<template>
  <div class="container home-container">
    <div class="header">
      <span>Brief an die Spitzenkandidat*innen von SPD, Grünen und die Linke</span>
      <h1>Für eine Rot-Rot-Grüne Koalition!</h1>
      <router-link :to="{name: 'Sign'}" exact>Mitunterzeichner*in<br>werden</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return { }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-container {
  background: linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6) ), url("~@/assets/home.jpg") center no-repeat;
  background-size: cover;
  vertical-align: middle;
  min-height: 100vh;
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

.header a {
  font-family: 'Jost', Helvetica, Arial, sans-serif;
  background-color: var(--green);
  color: var(--white);
  text-transform: uppercase;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  text-decoration: none;
  display: inline-block;
}
</style>
