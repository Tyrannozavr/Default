import * as mdicons from '@mdi/js'

const mdi: Record<string, string> = {}
Object.keys(mdicons).forEach((key) => {
    const value = (mdicons as Record<string, string>)[key]
    mdi[
        key
            .replace(/([A-Z])/g, '-$1')
            .toLowerCase()
            .replace(/([0-9]+)/g, '-$1')
        ] = value
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        '@pinia/nuxt', // required
        '@nuxtjs/tailwindcss',
        'vuetify-nuxt-module',
        'pinia-plugin-persistedstate/nuxt',
    ],
    vite: {
    },
    ssr: true,
    runtimeConfig: {
        public: {
            apiBaseURL: 'http://localhost:8000/api',
        },
    },
    imports: {
        dirs: [
            'repositories'
        ]
    },
    css: ['~/assets/css/main.css'],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    "overrides": {
        "vue": "latest"
    }
})
