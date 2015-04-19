'use strict'

var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: './web_modules/main.jsx',
    output: {
        filename: 'main.min.js',
        path: './public/js'
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        root: [
            path.resolve('node_modules'),
            path.resolve('web_modules')
        ],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader',
                exclude: /node_modules/
            }
        ]
    }
};