import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
// })
export default defineConfig({
  cacheDir: './.vite_cache' // Stores cache outside node_modules
});
