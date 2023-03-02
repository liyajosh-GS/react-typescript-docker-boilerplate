
module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      "plugin:react/recommended",
      "airbnb",
      "prettier",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
      warnOnUnsupportedTypeScriptVersion: true,
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
    rules: {
      "react/require-default-props": "off",
      "react/prop-types": 0,
      "arrow-body-style": 0,
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"],
      "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
        },
      ],
      "react/react-in-jsx-scope": "off",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: ["function-declaration", "arrow-function"],
          unnamedComponents: "arrow-function",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-empty-interface": [
        "error",
        {
          "allowSingleExtends": true
        }
      ],
      "react/jsx-no-duplicate-props": [1, { "ignoreCase": false }],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"]
    },
    settings: {
      "import/resolver": {
        typescript: {},
      },
    },
  };
  