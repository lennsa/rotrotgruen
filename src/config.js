import Vue from 'vue'

Vue.prototype.$openletter = {
  apiURL: 'http://localhost:3000/',
  signURI: 'signer/sign',
  getSignatoriesURI: 'signer/getInfo',
  getLetterURI: 'letter/getById',
  letterId: 1
}

Vue.prototype.$pdf = '/static/letter.pdf';

Vue.prototype.$emails = {
  info: 'info@klimakoa.de',
  press: 'presse@klimakoa.de'
}

Vue.prototype.$nav = {
  pages: [
    {name: 'Offener Brief', path_name: 'Letter'},
    {name: 'Unterzeich​ner*innen', path_name: 'Signatories'},
    {name: 'Presse', path_name: 'Press'},
    {name: 'Kontakt', path_name: 'Contact'}
  ]
}

Vue.prototype.$press = {
  teasers: [
    {
      name: 'Zeit',
      image: '/static/home.jpg',
      logo: '/static/home.jpg',
      text: 'Lorem IpsumLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      name: 'Zeit',
      image: '/static/home.jpg',
      logo: '/static/home.jpg',
      text: 'Lorem IpsumLorem ipsum dolor sit amet, consetetur sadipscing elitr,'
    },
    {
      name: 'Zeit',
      image: '/static/home.jpg',
      logo: '/static/home.jpg',
      text: 'Lorem IpsumLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    },
    {
      name: 'Zeit',
      image: '/static/home.jpg',
      logo: '/static/home.jpg',
      text: 'Lorem IpsumLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
    }
  ]
}

Vue.prototype.$signatories = {
  firstSignatories: [
    {name: 'Torsten', organization: 'Ort'},
    {name: 'Torsten', organization: 'Ort'},
    {name: 'Torsten', organization: 'Ort'},
    {name: 'Torsten', organization: 'Ort'},
    {name: 'Torsten', organization: 'Ort'},
    {name: 'Torsten', organization: 'Ort'},
    {name: 'Torsten', organization: 'Ort'},
    {name: 'Torsten', organization: 'Ort'},
    {name: 'Torsten', organization: 'Ort'},
    {name: 'Torsten', organization: 'Ort'},
    {name: 'Torsten', organization: 'Ort'},
    {name: 'Torsten', organization: 'Ort'}
  ]
}

export default null
