module.exports = {
  parser: '@typescript-eslint/parser', // 定义ESLint的解析器
  // extends: [
  //   'plugin:react/recommended', // 使用eslint-plugin-react的推荐规则
  //   'plugin:@typescript-eslint/recommended', // 使用@typescript-eslint/eslint-plugin的推荐规则
  //   'prettier/@typescript-eslint', // 使用eslint-config-prettier来禁用@typescript-eslint/eslint-plugin中与prettier冲突的ESLint规则    // 启用eslint-plugin-prettier和eslint-config-prettier。这会将prettier错误作为ESLint错误来展示。确保这个配置放到数组的最后。
  //   'plugin:prettier/recommended'
  // ],
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  plugins: ['@typescript-eslint', 'eslint-plugin-react-hooks', 'eslint-plugin-react'], //定义了该eslint文件所依赖的插件
  env: {
    //指定代码的运行环境
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
    mocha: true
  },
  settings: {
    //自动发现React的版本，从而进行规范react代码
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    // 自定义的一些规则
    'prettier/prettier': 'error',
    'linebreak-style': ['error', 'unix'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'error',
    'valid-typeof': [
      'warn',
      {
        requireStringLiterals: false
      }
    ],
    'react/no-unstable-nested-components': 'off'
  }
};
