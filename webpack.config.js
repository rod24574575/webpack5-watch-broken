/* eslint-env node */
const path = require('path');

module.exports = {
  resolve: {
    extensions: [ '.js', '.ts' ],
    symlinks: false,
  },
  entry: './packages/test-entry/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'test.js',
    libraryTarget: 'commonjs2',
  },
  target: 'node',
  watchOptions: {
    ignored: /node_modules\/(?!test)/,
  },
};
