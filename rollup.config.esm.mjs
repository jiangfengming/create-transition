import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.mjs',
  output: {
    format: 'es',
    file: 'dist/createTransition.mjs'
  },
  plugins: [
    babel()
  ]
}
