import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), visualizer()],
  resolve: { alias: [{ find: '@', replacement: '/src' }] },
  build: {
    minify: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[hash].js',
        manualChunks: {
          react: ['react'],
          reactDom: ['react-dom'],
          reactRouterDom: ['react-router-dom'],
          styledComponents: ['styled-components'],
          antDesign: ['@ant-design/icons'],
          antdForm: ['antd/lib/form', 'antd/es/form'],
          antdTypography: ['antd/lib/typography', 'antd/es/typography'],
        },
      },
    },
  },
})
