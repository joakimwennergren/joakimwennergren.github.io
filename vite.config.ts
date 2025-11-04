import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss(),],
    server: {
        port: 3000, // Change this if you want a different dev server port
        hmr: {
            overlay: false
        }
    },
});