<template>
  <div class="container">
    <h1 hidden="hidden">Erstunterzeichner*innen:</h1>
    <h2 class="container-item">Erstunterzeichner*innen:</h2>
    <div class="signatories container-item">
      <p v-for="(signator, index) in firstSignatories" :key="index" class="container-item">
        <span class="name">{{ signator.name }}</span> {{ signator.organization }}
      </p>
    </div>
    <h2 class="container-item">Mitunterzeichner*innen: <span>{{ signatorieCount }}</span></h2>
    <div class="container-item">
      <SignButton></SignButton>
    </div>
    <div class="signatories container-item" v-if="show" >
      <p v-for="(signator, index) in signatories" :key="index" class="container-item">
        <span class="name">{{ signator.name }}</span> {{ signator.organization }}
      </p>
    </div>
    <div class="container-item" v-if="!show && signatorieCount" >
      <button @click.prevent="expand()" class="sign-button expand">Unterstützer*innen anzeigen</button>
    </div>
  </div>
</template>

<script>
import SignButton from '.././components/SignButton'

export default {
  name: 'Signatories',
  data () {
    return {
      firstSignatories: this.$signatories.firstSignatories,
      signatories: null,
      signatorieCount: 0,
      show: false
    }
  },
  created () {
    const postData = {
      letter: {
        identifier: this.$openletter.letterId
      }
    }
    this.$http.post(this.$openletter.apiURL + this.$openletter.getSignatoriesURI, postData).then(res => {
      if (res.body.success) {
        this.signatories = []
        this.signatorieCount = res.body.signeeInformation.signeeCount
        res.body.signeeInformation.names.forEach(name => {
          this.signatories.push({name: name, organization: ''})
        })
      }
    }).catch(res => {})
  },
  methods: {
    expand () {
      this.show = true
    }
  },
  components: {
    SignButton
  }
}
</script>

<style scoped>
.signatories {
  column-count: 2;
  font-family: 'Jost', Helvetica, Arial, sans-serif;
  width: fit-content;
  padding: 2rem 6rem;
}

.signatories p {
  margin: 0;
  padding: 0;
}

.name {
  color: var(--green);
}

.expand {
  font-family: 'Jost', Helvetica, Arial, sans-serif;
  background-color: var(--gray);
  color: var(--white);
  text-transform: uppercase;
  font-size: 1.5rem;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  border: 0;
  cursor: pointer;
}

h2 {
  margin-bottom: 0;
}
</style>
