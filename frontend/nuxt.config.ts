import vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import regexpPlugin from 'rollup-plugin-regexp'
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
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
        '@pinia/nuxt', // required
        'pinia-plugin-persistedstate/nuxt',
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    ssr: true,
    runtimeConfig: {
        public: {
            apiBaseURL: '/api/v1',
        },
    },
})
