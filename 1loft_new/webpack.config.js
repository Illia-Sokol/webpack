const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    app: path.join(__dirname, 'app'),
}

module.exports = {
    entry: PATHS.src + '/index.js',
    output: {
        path: PATHS.app,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.src + '/index.pug',
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }
        ]
    }
}