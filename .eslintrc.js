module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    withDefaults: 'readonly',
  },
  extends: ['@vue/typescript/recommended', 'eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    'no-undef': 0,
    'no-console': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/custom-event-name-casing': 0,
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    'vue/require-default-prop': 0,
    'vue/no-v-html': 0,
    'vue/prop-name-casing': 0,
    'vue/no-setup-props-destructure': 0,
    'vue/v-on-event-hyphenation': 0,
    'vue/attribute-hyphenation': 0,
    'vue/no-unused-vars': [
      'error',
      {
        ignorePattern: '^_',
      },
    ],
    'space-before-function-paren': 'off',
    'one-var': 'off',
    quotes: 'off',
    'quote-props': 'off',
    'object-curly-newline': 'off',
    'no-unused-vars': 'warn',
    // 'comma-dangle': ['warn', 'always-multiline'],
    'comma-dangle': [
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'no-new': 'off',
    'object-property-newline': 'off',
    eqeqeq: 'warn',
    'no-multiple-empty-lines': 'off',

    '@typescript-eslint/ban-ts-comment': 'warn',
    // '@typescript-eslint/ban-ts-comment': ['warn', {
    //   'ts-ignore': 'allow-with-description',
    // }],
    // 'vue/valid-template-root': 'off',
    'vue/no-multiple-template-root': 'off',

    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': ['off'],
  },
};
