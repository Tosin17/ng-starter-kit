const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:'./app/src/app.js',
    output: {
        path: path.resolve(__dirname, 'app/dist'),
        filename: 'app.bundle.js',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
              test: /\.html$/,
              use: 'html-loader'
            },
            {
              test: /\.css$/,
              use: ExtractTextPlugin.extract(
                {
                  fallback: 'style-loader',
                  use: ['css-loader']
                })
            },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract(
                {
                  fallback: 'style-loader',
                  use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    devServer: {
        contentBase: [
            path.resolve(__dirname, 'app'),
            path.resolve(__dirname, 'app/**/**/*.html'),
            path.resolve(__dirname, 'app/**/**/*.scss')
        ],
        publicPath: '/dist/',
        watchContentBase: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
          app: [path.resolve(__dirname, 'app/src/app-module.js'), 'default']
        }),
        new ExtractTextPlugin({
          filename: 'style.css',
          disable: false,
          allChunks: true
        })
    ]
};
