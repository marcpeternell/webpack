const path = require('path');

module.exports = {
  entry: {
	  eins: './src/eins.js',
	  zwei: './src/zwei.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  }  
};
