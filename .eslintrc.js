module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
    "no-return-assign": 0,
    "no-param-reassign": 0,
    "react/no-unescaped-entities": 0,
    "react/no-array-index-key": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "consistent-return": 0,
    camelcase: 0,
    "react/prop-types": 0,
    "no-console": 0,
    "no-alert": 0,
    "react/jsx-props-no-spreading": 0,
    "prettier/prettier": "error",
    "react/jsx-filename-extension": 0,
    "import/prefer-default-export": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};