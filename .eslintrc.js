module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    plugins: ['prettier', 'html'],
    extends: 'eslint:recommended',
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-unused-vars': [0],
        'no-console': [0],
    },
};
