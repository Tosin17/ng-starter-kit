const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:'./app/app.js',
    output: {
        // Path has to be absolute
        path: path.resolve(__dirname, 'app/dist'),
        filename: 'app.bundle.js',
        publicPath: '/dist/',
    },
    // Set up rules for our modules
    module: {
        rules: [
            {
                // If module is a .js file
                test: /\.js$/,
                exclude: /(node_modules | bower_components)/,
                // See babel-loader options in babelrc.js

                // Loaders are used in reverse-order. e.g tee-loader(babel-loader(source))
                use: [
                    'tee-loader',
                    'babel-loader'
                ]
            }
        ]
    },
    // Resolve the loader's location so webpack can load it -- ideally this should be in the modules object
    resolveLoader: {
        alias: {
            'tee-loader': path.resolve(__dirname, 'tee-loader.js')
        }
    },
    devServer: {
        // Make app/ the root folder
        contentBase: [
            path.resolve(__dirname, 'app'),
            path.resolve(__dirname, 'app/klondike/*.html')
        ],
        // Point dev server output to the dist folder
        publicPath: '/dist/',
        // Watch * all files in app/
        watchContentBase: true,
        hot: true,
        overlay: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};