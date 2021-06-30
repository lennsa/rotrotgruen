<template>
  <router-link class="sign-button" :to="{name: 'Sign'}" exact>Mitunter​zeichner*in<br>werden</router-link>
</template>

<script>
export default {
  name: 'SignButton',
  data () {
    return { }
  }
}
</script>

<style scoped>
.sign-button {
  font-family: 'Jost', Helvetica, Arial, sans-serif;
  background-color: var(--green);
  color: var(--white);
  text-transform: uppercase;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
}
</style>
