<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

<style>
*{
  box-sizing: border-box;
}

:root {
  --green: rgb(27, 115, 64);
  --red: rgb(201, 39, 39);
  --gray: #A6A6A6;
  --background: rgb(239, 239, 239);
  --black: black;
  --white: white;
}

body {
  margin: 0;
}

#app {
  min-height: 100vh;
  background-color: var(--background);
  font-family: 'Barlow', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
}

h1, h2 {
  color: var(--green);
  font-size: 2.6rem;
  font-family: 'Jost', Helvetica, Arial, sans-serif;
  line-height: 1em;
}

.container {
  padding-top: 10rem;
  min-height: 100vh;
}

.container-item {
  padding-left: 4rem;
  padding-right: 4rem;
}
</style>
