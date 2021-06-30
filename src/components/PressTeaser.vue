<template>
  <div class="press-teaser">
    <img class="image" :src="teaser.image" aria-hidden="true">
    <img class="logo" :src="teaser.logo" aria-hidden="true">
    <p class="text">{{ teaser.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'PressTeaser',
  props: ['teaser'],
  data () {
    return { }
  }
}
</script>

<style scoped>

.press-teaser {
  background-color: var(--white);
}

.image {
  width: 100%;
  height: auto;
}

.logo {
  margin: -2rem 2rem;
  height: 4rem;
  width: Auto;
}

.text {
  margin: 0;
  padding: 2rem;
}

</style>
