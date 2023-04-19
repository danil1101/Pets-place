import { createApp } from 'vue';
import router from './router';
import './index.scss';
import App from './App.vue';
import { store } from './store';
import { Quasar } from 'quasar';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

createApp(App)
  .use(router)
  .use(store)
  .use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  })
  .mount('#app');
