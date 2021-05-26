<template>
  <div class="container">
    <h1 class="container-item">Mitunterzeichner*in werden</h1>

    <div v-if="success" class="container-item">
      <div class="success">
        Danke für deine Unterstützung!
      </div>
    </div>

    <div v-if="!initial && !success" class="container-item">
      <div class="error">
        Etwas ist schiefgelaufen.
      </div>
    </div>

    <form class="container-item" v-if="!success">
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
      <button @click.prevent="sendPost()" :disabled="disabled">Unterschreiben</button>
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
      success: false,
      disabled: false
    }
  },
  methods: {
    sendPost () {
      this.disabled = true
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
        this.disabled = false
        this.initial = false
        this.success = res.body.success
      }).catch(res => {
        this.disabled = false
        this.initial = false
      })
    }
  }
}
</script>

<style scoped>

form {
  margin-top: 1em;
}

.input {
  margin-bottom: 1em;
}

input {
  padding: 0.5em;
  width: 20em;
  border: 2px solid var(--gray);
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
}

button {
  padding: 0.5em;
  width: 20em;
  border: 2px solid var(--green);
  background-color: var(--green);
  color: var(--white);
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
}

button:disabled {
  border: 2px solid var(--gray);
  background-color: var(--gray);
}

.success {
  padding: 1em;
  width: 20em;
  background-color: var(--green);
  color: var(--white);
}

.error {
  padding: 1em;
  width: 20em;
  background-color: var(--red);
  color: var(--white);
}

</style>
