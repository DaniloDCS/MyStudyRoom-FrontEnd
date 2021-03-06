import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import 'dotenv/config';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.REACT_APP_PORT) || 3000,
  },
  plugins: [react()]
})
