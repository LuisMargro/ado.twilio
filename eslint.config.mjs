import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import globals from 'globals'
import jsdoc from 'eslint-plugin-jsdoc'

export default defineConfig(
  // 1. Ignorar carpetas de compilación y entorno
  {
    ignores: ['dist/', 'build/', 'node_modules/', '.env', 'eslint.config.mjs'],
  },
  
  eslint.configs.recommended,
  tseslint.configs.recommended,
  jsdoc.configs['flat/recommended-typescript'],

  {
    languageOptions: {
      // Habilita las variables globales de Node (process.env, __dirname, etc.)
      globals: {
        ...globals.node,
      },
      parserOptions: {
        // Apunta a tsconfig.json para reglas que requieren información de tipos
        project: true, 
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      //Regla para requerir documentacion
      'jsdoc/require-description': 'warn',
      'jsdoc/check-values': 'error',
      
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/naming-convention': 'error',

      'semi': ["error", "always"],
      'quotes': [2, 'single', { 'avoidEscape': true}],
      'max-lines': ['error', 150],
      'no-else-return': 'error',
      'no-nested-ternary': 'error',
      'max-depth': ['error', 3],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1 }],
      'block-spacing': ['error', 'always']
    },
  }
)