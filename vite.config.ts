import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
        hmr: {
            overlay: false
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                // 支持内联 JavaScript
                javascriptEnabled: true
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@pages': resolve(__dirname, 'src/pages'),
            '@components': resolve(__dirname, 'src/components'),
            '@assets': resolve(__dirname, 'src/assets'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@layouts': resolve(__dirname, 'src/layouts'),
            '@utils': resolve(__dirname, 'src/utils'),
            '@common': resolve(__dirname, 'src/common'),
            '@hooks': resolve(__dirname, 'src/hooks'),
            '@types': resolve(__dirname, 'src/types')
        }
    }
});
