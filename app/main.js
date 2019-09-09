import Vue from 'nativescript-vue';
import App from './components/App';
import store from './store';
import { AwesomeLoaders } from 'nativescript-awesome-loaders';

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production');
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient);
Vue.registerElement('AwesomeLoaders', () => require('nativescript-awesome-loaders').AwesomeLoaders);

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start();
