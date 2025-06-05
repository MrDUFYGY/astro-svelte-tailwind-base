// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte({
      // Opciones de Svelte
      compilerOptions: {
        // Configuración de Svelte 4
      },
    }),
  ],
  // Incluir el archivo CSS global
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/global.css";`
        }
      }
    },
    optimizeDeps: {
      exclude: ['@resvg/resvg-js']
    }
  },
  // Configuración específica de Astro
  build: {
    // Opciones de compilación
  },
  // Habilitar el soporte para TypeScript
  typescript: {
    strict: true
  }
});
