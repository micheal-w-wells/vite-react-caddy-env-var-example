import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  /**
   * POC: bake a Caddy template token into the built bundle so Caddy can replace it at serve-time.
   *
   * This keeps React code using `import.meta.env.VITE_ExampleEnvVar` (no runtime window.ENV reads),
   * but avoids hardcoding the real value at build-time.
   */
  define:
    mode === 'production'
      ? {
          'import.meta.env.VITE_ExampleEnvVar': JSON.stringify('{{env "VITE_ExampleEnvVar"}}'),
        }
      : {},
}))
