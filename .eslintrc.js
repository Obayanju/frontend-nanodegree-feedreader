module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2016
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  },
  globals: {
    $: true,
    Handlebars: true,
    describe: true,
    it: true,
    expect: true,
    beforeEach: true,
    allFeeds: true
  }
};
