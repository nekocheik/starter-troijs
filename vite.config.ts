import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// import checker from 'vite-plugin-checker';
import eslintPlugin from 'vite-plugin-eslint';
import svgLoader from 'vite-svg-loader';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import AutoImport from 'unplugin-auto-import/vite';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import Components from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: ['**/*.vue'],
    }),
    // checker({ vueTsc: true }),
    eslintPlugin(),
    svgLoader(),
    ViteYaml(),
    AutoImport({
      include: ['./src/**/*.ts', './src/**/*.vue'],
      /* options */
      imports: [
        'vue',
        'pinia',
        'vue-router',
        {
          '@/hooks/useEnv': ['ENV'],
          '@/modules/busEvent/index': ['$busEvent'],
          '@/helpers/storeHelpers': ['$store'],
          axios: [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
        },
      ],
      vueTemplate: true,
      dts: 'src/auto-imports.d.ts',
      resolvers: [],
    }),
    Components({
      dts: './src/imports-components.d.ts',
      resolvers: [],
    }),
  ],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({ process: true, buffer: true }),
        // NodeModulesPolyfillPlugin({ buffer: true, }),
      ],
    },
  },
  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // minify: true,
    rollupOptions: {
      plugins: [nodePolyfills()],
    },
  },
});
