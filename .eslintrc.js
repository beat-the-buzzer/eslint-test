module.exports = {
  env: {
    browser: true,
    commonjs: false,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    $: 1, // 将 $ 设为全局，使得页面中的 $ 不会报错
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 0, // 关闭该条规则，允许使用 console 开发阶段用于调试
    'linebreak-style': 0, // 关闭该条规则，Windows 系统上 git 的默认行为是在检出文件时将 LF 换行转换为 CRLF，但在提交更改时将换行符存储为 LF
  },
};
