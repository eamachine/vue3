import Vue from 'vue'
import store from '@/store'
import VueI18Next from '@panter/vue-i18next'
import i18next from 'i18next'
import axios from 'axios'

/**
 * Carga un archivo de idioma y lo agrega como recurso a i18next.
 *
 * @param {string} language - El idioma a ser cargado
 *
 * @returns {Promise} La promesa de carga del archivo de idioma
 */
const loadLanguage = async (language) => {
  return axios.post('http://localhost:8000/serviceTraduccion', { 'idioma': language })
    .then(response => {
      const resources = response.data
      i18next.addResourceBundle(language, 'translation', resources)
      return resources
    })
    .catch(error => console.log(error))
}

// Inicializa el motor de internacionalización.
i18next.init({
  lng: 'es'
})

// // Carga idioma español y marcamos i18n como activo.
// loadLanguage('es').then(() => {
//   store.commit('i18nReady')
// })

Vue.use(VueI18Next)
export default new VueI18Next(i18next)

loadLanguage('en')
loadLanguage('es')
loadLanguage('fr')
