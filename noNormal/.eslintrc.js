module.exports = {
    "root":true,
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
        // 'sourceType': 'script'
    },
    "globals":{
        "abc":"readonly"
    },
    "rules": {
        "quotes": ["error", "double"]

    }
};
