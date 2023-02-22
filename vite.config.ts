import {resolve} from 'path'
import {defineConfig} from 'vite'
import alias from '@rollup/plugin-alias'
import react from '@vitejs/plugin-react-swc'

const projectRootDir = resolve(__dirname)

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [react(), alias()],
 server: {
  port: 3000,
 },
 build: {
  outDir: 'build',
 },
 resolve: {
  alias: {
   '@': resolve(projectRootDir, 'src'),
  },
 },
})
