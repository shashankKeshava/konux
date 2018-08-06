'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonPaths = {
    public: path.resolve(__dirname, 'public/'),
    src: path.resolve(__dirname, 'src/'),
    assets: path.resolve(__dirname, 'assets/'),
};

module.exports = {
    entry: ['babel-polyfill', commonPaths.src],
    devServer: {
        contentBase: commonPaths.public,
        port: 8080,
        stats: 'minimal',
    },
    devtool: 'source-map',
    output: {
        path: commonPaths.public,
        filename: 'konux.bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-0', 'react'],
                    plugins: [
                        'transform-decorators-legacy',
                        'transform-class-properties',
                    ],
                },
            },
            {
                test: /\.(gif|jpe?g|png|ico)$/,
                loader: 'url-loader?limit=10000',
            },
            {
                test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
                loader: 'url-loader?limit=10000',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Konux Coding Test',
            template: commonPaths.src + '/index.html',
            filename: commonPaths.public + '/index.html',
            inject: true,
            favicon: commonPaths.assets + '/konux.ico',
        }),
    ],
};
