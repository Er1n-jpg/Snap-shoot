import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                faq: 'FAQ.html',
                prizes: 'Prizes.html',
                what: 'What.html',
            }
        }
    }
})