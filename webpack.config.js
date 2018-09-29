const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry:'./app/app.js',
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
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: [
            path.resolve(__dirname, 'app'),
            path.resolve(__dirname, 'app/**/*.html')
        ],
        publicPath: '/dist/',
        watchContentBase: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
