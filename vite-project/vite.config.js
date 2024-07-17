import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://ec2-3-83-254-115.compute-1.amazonaws.com:8020',
      // '/api': {
      //   target: 'http://jsonplaceholder.typicode.com'
      //   changeOrigin: true,
      //   secure: false,
      // },

    },
  },
  // some other configuration
})

