module.exports = {
    'env': {
        'browser': true,
        // 'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 13,
        'sourceType': 'module'
    },
    'rules': {
        'quotes': ['error', 'single'], // 字符串单引号还是双引号,可修复
        'no-multi-spaces': ['error', { ignoreEOLComments: false }], // 不允许出现多个空格,而且注释前后也不能有多个空格,可修复
        'block-spacing': 'error',
        'no-trailing-spaces': 'error', //禁止使用行尾空白,
        'space-infix-ops':'error', // 要求在操作符周围有空格,
        'arrow-spacing':'error',
        'no-var':'error'

    }
};
