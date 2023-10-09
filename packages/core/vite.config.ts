import { nodeExternals } from 'rollup-plugin-node-externals'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        target: 'node14',
        lib: {
            entry: ['./src/index.ts', './bin/nginx-config-formatter.ts'],
            formats: ['cjs', 'es']
        }
    },
    plugins: [
        dts({
            copyDtsFiles: true
        }),
        {
            // https://vite-rollup-plugins.patak.dev/#rollup-plugin-node-externals
            ...nodeExternals(),
            enforce: 'pre'
        }
    ]
})
