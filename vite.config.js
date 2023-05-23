import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { Script } from 'node:vm'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})


// module.exports = {
//   devServer: {
//     proxy: {
//       '^/botapi': {
//         target: 'https://localhost:7003',
//         changeOrigin: true
//       },
//     }
//   }
// }