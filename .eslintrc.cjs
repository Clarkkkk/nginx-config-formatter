module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        es6: true,
        node: true
    },
    extends: [
        'standard'
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    rules: {
        indent: ['error', 4],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }]
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            extends: [
                'standard',
                'plugin:@typescript-eslint/recommended'
            ],
            plugins: ['@typescript-eslint'],
            rules: {
                indent: ['error', 4],
                'space-before-function-paren': ['error', {
                    anonymous: 'always',
                    named: 'never',
                    asyncArrow: 'always'
                }],
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
                'no-unused-expressions': 'off',
                '@typescript-eslint/no-unused-expressions': ['warn', { allowShortCircuit: true }]
            }
        }
    ]
}
