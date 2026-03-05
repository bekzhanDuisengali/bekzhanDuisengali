import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const feedBase = (env.VITE_AVIVA_FEED_BASE || '').replace(/\/+$/, '');

    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: feedBase
          ? {
              '/aviva-feed': {
                target: feedBase,
                changeOrigin: true,
                secure: true,
                rewrite: (p) => p.replace(/^\/aviva-feed/, ''),
              },
            }
          : undefined,
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
