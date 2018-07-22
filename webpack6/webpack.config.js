/**
 * Created by zhaochuanchuan on 2018/7/5.
 */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: "production"
};
