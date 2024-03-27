import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Staff_Attendance_Management_system/",
  plugins: [react()],
})
