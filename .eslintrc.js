module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "es6": true,
        "jest/globals": true
    },
    "parserOptions": {
        "ecmaFeatures": {
        "modules": true,
        "jsx": true
        }
    },
    "settings": {
        "react": {
            "pragma": "h"
        }
    },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "jest"
    ],
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/no-unknown-property": [2, {"ignore" : ["class"]}],
        "react/prefer-stateless-function": 0,
        "react/prop-types": 0,
        "global-require": 0,
    },
};
