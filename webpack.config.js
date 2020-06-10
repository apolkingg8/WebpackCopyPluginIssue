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