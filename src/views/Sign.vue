<template>
  <div class="container">
    <h1>Mitunterzeichner*in werden</h1>

    <div v-if="success" class="success">
      Danke für deine Unterstützung!
    </div>

    <div v-if="!initial && !success" class="error">
      Etwas ist schiefgelaufen.
    </div>

    <form v-if="!success">
      <div class="input">
        <label>E-Mail:</label><br>
        <input v-model="email" placeholder="E-Mail *" required> *
      </div>
      <div class="input">
        <label>Name:</label><br>
        <input v-model="name" placeholder="Dein Name">
      </div>
      <div class="input">
        <label>Organization:</label><br>
        <input v-model="organization" placeholder="Deine Organisation">
      </div>
      <button @click.prevent="sendPost()">Unterschreiben</button>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Sign',
  data () {
    return {
      email: '',
      name: '',
      organization: '',
      initial: true,
      success: false
    }
  },
  methods: {
    sendPost () {
      const postData = {
        signer: {
          name: this.name,
          organization: this.organization,
          email: this.email,
          verified: false,
          signing: this.$openletter.letterId
        }
      }
      this.$http.post(this.$openletter.apiURL + this.$openletter.signURI, postData).then(res => {
        this.initial = false
        this.success = res.body.success
      })
    }
  }
}
</script>

<style scoped>

form {
  margin-top: 1rem;
}

.input {
  margin-bottom: 1rem;
}

input {
  padding: 0.5rem;
  width: 20rem;
  border: 2px solid var(--gray);
}
button {
  padding: 0.5rem;
  width: 20rem;
  border: 2px solid var(--green);
  background-color: var(--green);
  color: var(--white)
}

.success {
  padding: 1rem;
  width: 20rem;
  background-color: var(--green);
  color: var(--white);
}

.error {
  padding: 1rem;
  width: 20rem;
  background-color: var(--red);
  color: var(--white);
}

</style>
