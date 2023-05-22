import 'normalize.css'
import 'vuetify/styles'
import './assets/main.scss'


import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
        themes: {
            light: {
              dark: true,
              colors: {
                primary: colors.blue.lighten1,
                secondary: colors.green.accent3, 
              }
            },
          },
    },
})
const app = createApp(App)
app.use(vuetify)
app.use(router)

app.mount('#app')

  