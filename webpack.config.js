const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of your application
  entry: './src/index.js',

  // Output configuration
  output: {
    filename: 'bundle.js', // The name of the bundled file, can be named as main.js, bundle.js, etc.
    path: path.resolve(__dirname, 'dist'), // The directory where the bundle will be stored, 'dist' is a standar !
  },
  resolve: { // Extensions webpack should auto resolve.
    extensions: ['.js'] // When you import any js module, no need to include file extension
  },

  // Module rules for handling different file types
  module: {
    rules: [
      {
        test: /\.css$/, // For CSS files
        use: [
          'style-loader', // Injects CSS into the DOM via a <style> tag
          'css-loader', // Interprets @import and url() like import/require() and will resolve them
        ],
      },
      {
        test: /\.js$/, // For JavaScript files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: 'babel-loader', // Transpiles JavaScript files using Babel
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
        inject: true, // Inject all assets into the given template
        template: './public/index.html', // Path to the HTML file used as a template
        filename: './index.html' // Output filename
    })
  ]
};