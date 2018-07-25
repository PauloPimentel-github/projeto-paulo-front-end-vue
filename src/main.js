// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTheMask from 'vue-the-mask'
import VeeValidate from 'vee-validate'
//import attributesAr from './strings/validator/attributes/pt_BR.js';
//import attributesEn from './strings/validator/attributes/pt_PT.js';
import VueResource from 'vue-resource'

Vue.use(VueTheMask)
Vue.use(VeeValidate)
Vue.use(VueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
