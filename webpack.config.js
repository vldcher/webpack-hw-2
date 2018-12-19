const path = require('path');
const argv = require('yargs').argv;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const distPath = path.join(__dirname, '/build');

module.exports = {
  entry: {
    main: './src/index.js',
    styles: './src/styles.scss',
  },

  output: {
    filename: 'bundle.js',
    path: distPath
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { 
            loader: "babel-loader",
            options: {
            presets: ["@babel/preset-env"]
            },
          }, 'eslint-loader'
        ]
      },
      {
        test: /\.ts$/,
        loader: "ts-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "postcss-loader")
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin('styles.css')
  ],

  devServer: {
    contentBase: distPath,
    port: 9000,
    compress: true,
    open: false,
    hot: true
  },
};
