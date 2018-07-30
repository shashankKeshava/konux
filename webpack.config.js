'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonPaths = {
    public: path.resolve(__dirname, 'public/'),
    src: path.resolve(__dirname, 'src/'),
    templateSrc: `${path.resolve(__dirname, 'src/')}/index.html`,
    templatePublic: `${path.resolve(__dirname, 'public/')}/index.html`,
};

module.export = {
    entry: commonPaths.src,
    devServer: {
        contentBase: commonPaths.public,
        port: 8080,
        stats: 'minimal',
    },
    devtool: 'soirce-map',
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
                    plugin: [
                        'transform-decorators-legacy',
                        'transform-class-properties',
                    ],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Konux Use Case',
            template: commonPaths.templateSrc,
            filename: commonPaths.templatePublic,
            inject: true,
        }),
    ],
};
