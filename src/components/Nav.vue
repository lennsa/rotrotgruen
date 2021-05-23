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
      pages: [
        {name: 'Offener Brief', path_name: 'Letter'},
        {name: 'Unterzeichner*innen', path_name: 'Signatories'},
        {name: 'Presse', path_name: 'Press'},
        {name: 'Kontakt', path_name: 'Contact'}
      ]
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
  font-size: 1.5em;
}

ul {
  display: flex;
}

li {
  padding: 0.1em 0.5em;
  list-style-type: none;
}

li + li {
  border-left: 3px solid var(--gray);
}

li.router-link-active {
  color : var(--black);
}

a {
  color: inherit;
  text-decoration: none;
}

</style>
