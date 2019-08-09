import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.mjs',

  output: {
    format: 'esm',
    file: 'dist/createTransition.mjs'
  },

  plugins: [
    babel()
  ]
}
