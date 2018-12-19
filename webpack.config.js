const path = require('path');
const argv = require('yargs').argv;
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const isDevelopment = argv.mode === 'development';
// const isProduction = !isDevelopment;
const distPath = path.join(__dirname, '/build');

const config = {
  entry: {
    main: './src/js/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: distPath
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: 'html-loader'
    }, {
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
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
        },
        'sass-loader'
      ]
    },]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // optimization: isProduction ? {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       sourceMap: true,
  //       uglifyOptions: {
  //         compress: {
  //           inline: false,
  //           drop_console: true
  //         },
  //       },
  //     }),
  //   ],
  // } : {},
  devServer: {
    contentBase: distPath,
    port: 9000,
    compress: true,
    open: true,
    hot: true
  }
};

module.exports = config;
