module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "react-app",
        "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "react/jsx-filename-extension": [2, {
            "extensions": [".js", ".jsx", "ts", "tsx"]
        }],
        "quotes": [1, "double"],
        "semi": [2, "never"],
        "comma-dangle": [2, "never"],
        "import/no-unresolved": "off"
    }
};