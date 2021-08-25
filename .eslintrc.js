module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "extends": [
        "airbnb-base"
      ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "import/extensions": [
            "error",
            {
              "js": "always",
              "json": "sometimes"
            }
        ]
    }
    
};