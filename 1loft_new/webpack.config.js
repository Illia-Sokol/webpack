const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devServer = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCss = require('./webpack/css-extract');

const PATHS = {
    src: path.join(__dirname, 'src'),
    app: path.join(__dirname, 'app'),
}

const common = merge([
{
     entry: {
        'index': PATHS.src + '/pages/index/index.js',
        'blog': PATHS.src + '/pages/blog/blog.js'
    },
    output: {
        path: PATHS.app,
        filename: 'js/[name].js'
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
    ]
},
    pug()
]);

module.exports = function(env) {
    if ( env === 'production') {
        return merge([
            common,
            // css(),
            extractCss()
        ]);
    }
    if ( env === 'development' ) {
        return merge([
            common,
            devServer(),
            sass(),
            css()
        ])
    }
}