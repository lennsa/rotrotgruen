<template>
  <div class="container">
    <h1 class="container-item">Kontakt.</h1>
    <div class="image-background container-item">
      <div class="box">
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 375 375" version="1.2">
          <defs><clipPath id="a"><path d="M0 63.723h375v255H0zm0 0"/></clipPath></defs>
          <g clip-path="url(#a)">
            <path d="M367.5 63.723H7.5c-4.14 0-7.5 3.359-7.5 7.5v240c0 4.148 3.36 7.5 7.5 7.5h360c4.148 0 7.5-3.352 7.5-7.5v-240c0-4.141-3.352-7.5-7.5-7.5zm-7.5 240H15v-225h345zm0 0" fill="#ffffff"/>
          </g>
          <path d="M217.5 153.723h90c4.148 0 7.5-3.36 7.5-7.5 0-4.141-3.352-7.5-7.5-7.5h-90c-4.148 0-7.5 3.359-7.5 7.5 0 4.14 3.352 7.5 7.5 7.5zm0 0M217.5 198.723h90c4.148 0 7.5-3.36 7.5-7.5 0-4.141-3.352-7.5-7.5-7.5h-90c-4.148 0-7.5 3.359-7.5 7.5 0 4.14 3.352 7.5 7.5 7.5zm0 0M217.5 243.723h90c4.148 0 7.5-3.352 7.5-7.5 0-4.149-3.352-7.5-7.5-7.5h-90a7.492 7.492 0 00-7.5 7.5c0 4.148 3.352 7.5 7.5 7.5zm0 0M52.5 258.723c4.14 0 7.5-3.352 7.5-7.5 0-28.946 23.55-52.5 52.5-52.5s52.5 23.554 52.5 52.5c0 4.148 3.36 7.5 7.5 7.5 4.14 0 7.5-3.352 7.5-7.5 0-28.27-17.477-52.485-42.172-62.528 7.434-6.855 12.172-16.59 12.172-27.472 0-20.68-16.824-37.5-37.5-37.5s-37.5 16.82-37.5 37.5c0 10.882 4.738 20.617 12.172 27.472C62.477 198.738 45 222.953 45 251.223c0 4.148 3.36 7.5 7.5 7.5zm37.5-97.5c0-12.407 10.094-22.5 22.5-22.5s22.5 10.093 22.5 22.5c0 12.402-10.094 22.5-22.5 22.5S90 173.625 90 161.223zm0 0" fill="#ffffff"/>
        </svg>
        <p>Kontaktiere uns via E-Mail: {{ emails.info }}</p>
        <a class="button" :href="'mailto:' + emails.info">
          Sende Email
        </a>
        <h2>Verantwortlich</h2>
        <p>
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br>
          Jonas Dau<br>
          Julius-Leber-Str. 16<br>
          33615 Bielefeld
        </p>
        <h2>Verlinkungen</h2>
        <p>
          Links zu Seiten dritter überprüfen wir und teilen sie nach bestem Wissen und Gewissen.<br>
          Auf mögliche Änderungen des Inhalts haben wir jedoch keinen Einfluss.<br>
          Für die Inhalte auf verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seite verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      emails: this.$emails
    }
  }
}
</script>

<style scoped>
.image-background {
  background-color: var(--black);
  background-image: url("/static/contact.jpg");
  background-size: cover;
  text-align: center;
}

.box {
  display: inline-block;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(10px);
  -o-backdrop-filter: blur(10px);
  -moz-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  color: var(--white);
  font-weight: 600;
  padding: 2rem;
  width: 500px;
  min-width: 80%;
  margin: auto;
  margin-top: 15rem;
  margin-bottom: 15rem;
}

.button {
  padding: 0.5rem 1rem;
  display: inline-block;
  background-color: var(--green);
  color: inherit;
  text-decoration: none;
}

svg {
  width: 100px;
  height: 100px;
  margin-top: -16px;
  margin-bottom: -16px;
}

h2 {
  color: inherit;
  text-transform: uppercase;
}
</style>
