let webpack = require('webpack')
let WebpackCopyPlugin = require('copy-webpack-plugin')
let path = require('path')
let isDev = process.env['NODE_ENV'] !== 'production'

let config = {
    target: "electron-renderer",
    entry: path.join(__dirname, 'source', 'foo.ts'),
    output: {
        path: path.join(__dirname, 'packed'),
        filename: "foo.js",
    },
    mode: 'production',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: "ts-loader",
                    options: {

                    }
                }],
            },
            {
                test: /\.(css|sass)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
            }
        ]
    },
    plugins: [
        new WebpackCopyPlugin({
            patterns: [{
                from: path.join(__dirname, 'source', 'foo.ts'),
                to: path.join(__dirname, 'packed', 'foo.ts'),
            }, {
                from: path.join(__dirname, 'source', 'dir'),
                to: path.join(__dirname, 'packed', 'dir'),
                toType: 'dir',
            }]
        })
    ]
}

module.exports = config