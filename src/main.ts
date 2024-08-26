import {createApp} from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import RickCard from 'squadmakers-components'
import pinia from "@/plugins/pinia.ts";
import vuetify from "@/plugins/vuetify.ts";
import router from "@/router";

import App from './App.vue'

import 'squadmakers-components/dist/style.css'

const app = createApp(App);
pinia.use(piniaPluginPersistedstate);
app.use(RickCard);
app.use(vuetify);
app.use(pinia);
app.use(router);
app.mount('#app')
