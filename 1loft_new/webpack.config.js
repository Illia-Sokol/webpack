const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    app: path.join(__dirname, 'app'),
}

const common = {
     entry: {
        'index': PATHS.src + '/pages/index/index.js',
        'blog': PATHS.src + '/pages/blog/blog.js'
    },
    output: {
        path: PATHS.app,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index'],
            template: PATHS.src + '/pages/index/index.pug',
        }),
        new HtmlWebpackPlugin({
            filename: 'blog.html',
            chunks: ['blog'],
            template: PATHS.src + '/pages/blog/blog.pug',
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
    },
}

const commonDevelopment = {
    devServer: {
        stats: 'errors-only',
        port: 9000
    }
}

module.exports = function(env) {
    if ( env === 'production') {
        return common;
    }
    if ( env === 'development' ) {
        return Object.assign(
            {},
            common,
            commonDevelopment
        )
    }
}