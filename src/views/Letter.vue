<template>
  <div class="container">
    <img class="right-image" src="/static/letter-small.png">
    <div class="buttons">
      <a class="svg-link" :href="shareURL" target="_blank" title="Teilen">
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 375 375" version="1.2">
          <defs><clipPath id="a"><path d="M21.652 4.336H353v366H21.652zm0 0"/></clipPath></defs>
          <g clip-path="url(#a)">
            <path d="M297.656 263.027c-13.969 0-26.469 5.512-36.027 14.153l-131.074-76.266c.922-4.226 1.656-8.453 1.656-12.863s-.734-8.637-1.656-12.863l129.597-75.524c9.926 9.184 22.977 14.883 37.5 14.883 30.516 0 55.145-24.625 55.145-55.125S328.168 4.289 297.652 4.289c-30.511 0-55.144 24.629-55.144 55.129 0 4.41.73 8.637 1.656 12.863l-129.598 75.524c-9.925-9.188-22.976-14.883-37.5-14.883-30.511 0-55.144 24.625-55.144 55.125 0 30.504 24.633 55.129 55.144 55.129 14.524 0 27.575-5.7 37.485-14.883l130.879 76.441c-.918 3.856-1.47 7.903-1.47 11.942 0 29.586 24.08 53.66 53.677 53.66s53.675-24.074 53.675-53.66c0-29.586-24.082-53.656-53.675-53.656zm0 0" fill="#1b7340"/>
          </g>
        </svg>
      </a>
      <a class="svg-link" :href='pdf' target="_blank" title="Brief PDF">
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 375 375" version="1.2">
          <defs><clipPath id="a"><path d="M23 4.84h329v365.25H23zm0 0"/></clipPath></defs>
          <g clip-path="url(#a)">
            <path d="M96.168 4.84c-19.988 0-36.531 16.539-36.531 36.523v91.313c-20.188 0-36.535 16.344-36.535 36.527v91.313c0 20.18 16.347 36.523 36.535 36.523v36.524c0 19.984 16.543 36.527 36.531 36.527h219.2c19.987 0 36.534-16.543 36.534-36.527V96.153L260.57 4.84zm0 36.523h146.133v73.051h73.066v18.262H96.168zm-36.531 127.84h27.398c15.125 0 27.399 12.27 27.399 27.39 0 15.122-12.274 27.395-27.399 27.395h-9.133v36.528H59.637zm164.398 0h54.8v18.262h-36.534v18.262h29.219v18.261H242.3v36.528h-18.265zm-91.332.426h29.754c28.898 0 43.313 17.375 43.313 38.453v14.086c0 21.332-14.446 38.348-43.563 38.348h-29.504zm-54.8 17.836v18.262h9.132a9.134 9.134 0 009.133-9.133c0-5.04-4.09-9.13-9.133-9.13zm73.066.426v54.359h11.238c11.543 0 25.293-3.496 25.293-20.082v-14.086c0-16.695-13.61-20.191-25.043-20.191zM96.168 297.039h219.2v36.524h-219.2zm0 0" fill="#1b7340"/>
          </g>
        </svg>
      </a>
    </div>
    <h1 class="container-item">{{ letter.title }}</h1>
    <div class="container-item">
      <p>{{ letter.description }}</p>
      <p><a class="more" :href='pdf' target="_blank">Mehr anzeigen</a></p>
      <SignButton></SignButton>
    </div>
  </div>
</template>

<script>
import SignButton from '.././components/SignButton'

export default {
  name: 'Letter',
  data () {
    return {
      letter: {
        title: '',
        description: ''
      },
      pdf: this.$pdf,
      shareURL: this.$shareURL
    }
  },
  created () {
    const postData = {
      identifier: this.$openletter.letterId
    }
    this.$http.post(this.$openletter.apiURL + this.$openletter.getLetterURI, postData).then(res => {
      this.letter = res.body.letter
    }).catch(res => {
      this.letter = {
        title: 'Brief',
        description: 'Der Brief konnte nicht geladen werden.'
      }
    })
  },
  components: {
    SignButton
  }
}
</script>

<style scoped>
.right-image {
  float: right;
  width: 60%;
  height: auto;
}

@media screen and (max-width: 1200px) {
  .right-image {
    width: 100%;
    max-height: 20rem;
    object-fit: cover;
  }
}

svg {
  width: 50px;
  height: 50px;
}

.buttons {
  text-align: right;
}

.svg-link {
  display: inline-block;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
}

.more {
  font-size: 2rem;
  text-transform: uppercase;
  color: var(--green);
  font-family: 'Jost', Helvetica, Arial, sans-serif;
}
</style>
