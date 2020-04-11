const path = require('path');

module.exports = {
  entry: './src/eins.js',
  output: {
    filename: 'eins.js',
    path: path.resolve(__dirname, 'public')
  }  
};
