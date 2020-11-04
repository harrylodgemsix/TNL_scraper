import resolve from '@rollup/plugin-node-resolve';
import { eslint } from 'rollup-plugin-eslint';
import { uglify } from 'rollup-plugin-uglify';
import babel from '@rollup/plugin-babel';
import { readdirSync } from 'fs';

export default readdirSync('src').map((filePath) => ({
  input: `src/${filePath}`,
  output: {
    dir: 'dist',
    format: 'iife',
  },
  plugins: [
    eslint(),
    resolve(),
    // Workaround: Babel ignores .babelrc for transpiling external modules (LemonPI helpers)
    babel({ babelHelpers: 'inline', presets: [['@babel/preset-env', { targets: 'defaults' }]] }),
    uglify({ output: { comments: /^!|changelog/gi } }),
  ],
}));
