import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from './package.json'

const peers = Object.keys(pkg.peerDependencies || {})
const allDeps = [...peers, ...Object.keys(pkg.dependencies || {})]
const extensions = ['.js', '.jsx', '.json']

const main = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: allDeps,
  plugins: [nodeResolve({ extensions })],
}
export default main
