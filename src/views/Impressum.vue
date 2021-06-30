<template>
  <div class="container">
    <h1 class="container-item">Impressum</h1>
    <h2 class="container-item">Verantwortlich</h2>
    <p class="container-item">
      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br>
      Jonas Dau<br>
      Julius-Leber-Str. 16<br>
      33615 Bielefeld
    </p>
    <h2 class="container-item">Verlinkungen</h2>
    <p class="container-item">
      Links zu Seiten dritter überprüfen wir und teilen sie nach bestem Wissen und Gewissen.<br>
      Auf mögliche Änderungen des Inhalts haben wir jedoch keinen Einfluss.<br>
      Für die Inhalte auf verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seite verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
    </p>
    <h2 class="container-item">Webentwicklung</h2>
    <p class="container-item">
      <b>Design:</b><br>
      Jonas Dau
    </p>
    <p class="container-item">
      <b>Umsetzung:</b><br>
      Lennart Suwe
    </p>
    <p class="container-item">
      <b>Unterschriften Backend:</b><br>
      Jonathan Fritz
    </p>
  </div>
</template>

<script>
export default {
  name: 'Impressum',
  data () {
    return { }
  }
}
</script>

<style scoped>
h2 {
  font-size: 2rem;
}

p {
  display: inline-block;
  margin-block-start: 0;
}

</style>
