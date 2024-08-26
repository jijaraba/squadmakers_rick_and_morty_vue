import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify";
import {resolve} from "path";


// https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                    @import "@/assets/scss/_variables.scss";
                    @import "@/assets/scss/_reset.scss";
                    @import "@/assets/scss/rick_and_morty.scss";
                `,
            },
        },
    },
    plugins: [
        vue(),
        vuetify({
            autoImport: true,
            styles: {
                configFile: './src/assets/scss/settings.scss',
            },
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        chunkSizeWarningLimit: 1600,
    },
})
