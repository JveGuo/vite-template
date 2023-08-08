module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        '@typescript-eslint/no-unused-vars': 1,// 没有使用的变量 warning
        'no-magic-numbers': [1, { ignore: [0, 1, 2] }], // magic number waring
        indent: [
            1,
            4,
            {
                SwitchCase: 1,
                VariableDeclarator: 'first',
                ArrayExpression: 1,
                ObjectExpression: 1,
                ignoredNodes: ['ConditionalExpression']
            }
        ], // 缩进统一为4个空格
        quotes: [1, 'single'], // 强制使用一致的反勾号、双引号或单引号
        '@typescript-eslint/no-invalid-this': 0,
        'comma-dangle': ['error', 'never'], // 禁止使用尾随逗号
        '@typescript-eslint/no-loss-of-precision': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/consistent-type-assertions': 0,
        '@typescript-eslint/no-require-imports': 0
    }
};
