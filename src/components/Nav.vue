<template>
  <div class="nav">
    <router-link class="logolink" :to="{name: 'Home'}"><img src="/static/logo.svg"></router-link>
    <ul>
      <router-link v-for="(page, index) in pages" :key="index" tag="li" :to="{name: page.path_name}" exact>
        <a class="navlink">{{ page.name }}</a>
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
  font-family: 'Jost', Helvetica, Arial, sans-serif;
  text-transform: uppercase;
  color : var(--gray);
  font-size: 2rem;
}

.logolink {
  float: left;
}

img {
  width: 160px;
  height: 160px;
  margin: -0.8rem 0;
}

ul {
  margin: 2rem 0;
  float: right;
  display: flex;
  flex-flow: wrap;
  padding-left: 4rem;
  padding-right: 1rem;
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

.navlink {
  color: inherit;
  text-decoration: none;
}

@media screen and (max-width: 1200px) {
  ul {
    flex-direction: column;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
  }

  li + li {
    border-left: 0 solid var(--gray);
    border-top: 4px solid var(--gray);
  }
}

</style>
