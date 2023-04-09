import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        include: ['**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        outputTruncateLength: 250,
        outputDiffLines: 30,
        threads: false
    }
})
