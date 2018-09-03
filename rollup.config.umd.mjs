import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.mjs',
  output: {
    format: 'umd',
    exports: 'named',
    name: 'createTransition',
    file: 'dist/createTransition.js'
  },
  plugins: [
    babel()
  ]
}
