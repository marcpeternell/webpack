const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
      filename: 'app.js',
      path: path.resolve(__dirname, 'public')
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [ 'style-loader', 'css-loader' ]
        },
        { 
          test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
          use: 'url-loader' 
        }
      ]
    }
};
