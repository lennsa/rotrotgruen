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
}

h1, h2 {
  color: var(--green);
  font-size: 2.5em;
  font-family: 'Jost', Helvetica, Arial, sans-serif;
}

.container {
  padding: 5em 1em 1em;
}

</style>
