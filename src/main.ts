import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router';
import Button from '@/components/Button.vue';
import ModalWrapper from '@/components/modals/ModalWrapper.vue';
import VueRellax from 'vue-rellax';
import VSelect from 'vue-select';
import { AButton, AIcon } from '@/components';
import AMediaQuery from '@/components/AMediaQuery.vue';

if (window.location.href.includes('www')) {
  window.location.href = window.location.href.replace('www', '');
}

// import "@types/vue-select";
import 'vue-select/dist/vue-select.css';
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app
  .use(pinia)
  .use(VueRellax)
  // .component('AInput', AInput)
  .component('GButton', Button)
  .component('AMediaQuery', AMediaQuery)
  .component('AButton', AButton)
  .component('AButton', AIcon)
  .component('VSelect', VSelect)
  .component('ModalWrapper', ModalWrapper)
  .use(router)
  .mount('#app');
