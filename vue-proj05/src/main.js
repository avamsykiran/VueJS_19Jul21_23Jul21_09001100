import { createApp } from 'vue'
import App from './App.vue'
import router from './routing'
import store from './state'
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        message: {
            hello: 'hello world'
        }
    },
    hi: {
        message: {
            hello: 'नमस्ते दुनिया'
        }
    }
}

const i18n = createI18n({
    locale: 'hi',
    fallbackLocale: 'en',
    globalInjection: true,
    messages,
})

const app = createApp(App);

app.use(router);
app.use(store);
app.use(i18n);

app.mount('#app')
