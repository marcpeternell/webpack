const path = require('path');

module.exports = {
  entry: {
	  start: './src/eins.js',
	  service: './src/zwei.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  }  
};
