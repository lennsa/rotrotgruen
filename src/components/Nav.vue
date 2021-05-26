<template>
  <div class="nav">
    <ul>
      <router-link v-for="(page, index) in pages" :key="index" tag="li" :to="{name: page.path_name}" exact>
        <a>{{ page.name }}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      pages: this.$nav.pages
    }
  }
}
</script>

<style scoped>
.nav {
  float: right;
  font-family: 'Jost', Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  color : var(--gray);
  font-size: 2rem;
}

ul {
  display: flex;
  flex-flow: wrap;
}

li {
  padding: 0 0.6rem;
  list-style-type: none;
}

li + li {
  border-left: 4px solid var(--gray);
}

li.router-link-active {
  color : var(--black);
}

a {
  color: inherit;
  text-decoration: none;
}

</style>
