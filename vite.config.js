import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@layouts',
        replacement: path.resolve(__dirname, 'src/reactjs/layouts')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/reactjs/components')
      },
      {
        find: '@css',
        replacement: path.resolve(__dirname, 'src/styles')
      }
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss']
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 👇 permet à Sass de comprendre les imports via alias
        //includePaths: [path.resolve(__dirname, 'src/styles')],
        additionalData: `@use '@css/base/sass-variables' as *;`  // Vérifie si le fichier sass-variables est bien dans @css/base/
      },
    },
  },
});
