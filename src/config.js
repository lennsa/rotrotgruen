import Vue from 'vue'

Vue.prototype.$openletter = {
  apiURL: 'http://localhost:3000/',
  signURI: 'signer/sign',
  getSignatoriesURI: 'signer/getInfo',
  getLetterURI: 'letter/getById',
  letterId: 1
}

Vue.prototype.$pdf = '/static/Offener_Brief.pdf'
Vue.prototype.$shareURL = 'https://twitter.com/intent/tweet?text=Ein%20offener%20Brief%20fordert%20die%20%F0%9F%94%B4%F0%9F%94%B4%F0%9F%9F%A2-Kandidat*innen%20auf,%20sich%20offen%20f%C3%BCr%20ein%20gemeinsames,%20progressives%20B%C3%BCndnis%20zu%20zeigen.%0A%0ASchau%20ihn%20dir%20an%20und%20unterschreibe%20auch!%0AF%C3%BCr%20eine%20%23KlimaKoa%0A%23NieMehrCDU%0A%0Awww.klimakoa.de'

Vue.prototype.$emails = {
  info: 'info@klimakoa.de'
}

Vue.prototype.$nav = {
  pages: [
    {name: 'Offener Brief', path_name: 'Letter'},
    {name: 'Unterzeich​ner*innen', path_name: 'Signatories'},
    // {name: 'Presse', path_name: 'Press'},
    {name: 'Kontakt', path_name: 'Contact'}
  ]
}

Vue.prototype.$press = {
  teasers: [
    // {
    //   name: 'Zeit',
    //   image: '/static/home.jpg',
    //   logo: '/static/home.jpg',
    //   text: 'Lorem IpsumLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    // },
    // {
    //   name: 'Zeit',
    //   image: '/static/home.jpg',
    //   logo: '/static/home.jpg',
    //   text: 'Lorem IpsumLorem ipsum dolor sit amet, consetetur sadipscing elitr,'
    // },
    // {
    //   name: 'Zeit',
    //   image: '/static/home.jpg',
    //   logo: '/static/home.jpg',
    //   text: 'Lorem IpsumLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    // },
    // {
    //   name: 'Zeit',
    //   image: '/static/home.jpg',
    //   logo: '/static/home.jpg',
    //   text: 'Lorem IpsumLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    // }
  ]
}

Vue.prototype.$signatories = {
  firstSignatories: [
    // {name: 'Torsten', organization: 'Ort'},
    // {name: 'Torsten', organization: 'Ort'},
    // {name: 'Torsten', organization: 'Ort'},
    // {name: 'Torsten', organization: 'Ort'},
    // {name: 'Torsten', organization: 'Ort'},
    // {name: 'Torsten', organization: 'Ort'},
    // {name: 'Torsten', organization: 'Ort'},
    // {name: 'Torsten', organization: 'Ort'},
    // {name: 'Torsten', organization: 'Ort'},
    // {name: 'Torsten', organization: 'Ort'},
    // {name: 'Torsten', organization: 'Ort'},
    // {name: 'Torsten', organization: 'Ort'}
  ]
}

export default null
