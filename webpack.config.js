const {
    resolve
} = require('path');
const {
    CheckerPlugin
} = require('awesome-typescript-loader');
const webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    context: resolve(__dirname, 'src'),
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './index.tsx'
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
    },
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/',
        port: 3000,
        historyApiFallback: true
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.jsx?$/,
                use: ['babel-loader', ],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', ]
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CheckerPlugin()
    ]
};