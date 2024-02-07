import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Blog_APP_REACT_REDUX/",
  plugins: [react()],
})
