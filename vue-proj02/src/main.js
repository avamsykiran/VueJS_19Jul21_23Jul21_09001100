import { createApp } from 'vue'
import App from './App.vue'
import MessageBox from './components/MessageBox.vue';

let app = createApp(App);

app.component('MessageBox',MessageBox);

app.mount('#app')
