const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public')
  },

  //neu
  module: {
    //hier definieren wir unsere Regeln
    rules: [
    {
      // bei Tests geben wir an welche Dateitypen bearbeitet werden sollen. In diesem Beispiel alle .js Dateien (diese werden mit einer regex ausgewählt)
      test: /\.js$/,
      // welche Ordner sollen nicht berücksichtigt werden.
      exclude: /(node_modules)/,
      // bei use werden die Loader angegeben
      use: {
        loader: 'babel-loader',
        //zusätzlich können gewissen Optionen definiert werden.
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
  ////////////
}
};
