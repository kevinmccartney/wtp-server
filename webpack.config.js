const path = require('path');

module.exports = {
  entry: './node_modules/wtp-client/dist/app',

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'src/public')
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
