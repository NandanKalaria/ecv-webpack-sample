const path = require('path')
const webpack = require('webpack')

/**
 * [hash]
 * [chunkhash]
 * [name]
 * [id]
 * [query]
 * [contenthash]
 */

module.exports = {
    mode: 'development',

    module:{
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
            }
        ],
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    entry: {
        home: './src/index.js',
        dashboard: './src/dashboard.js',
        trial: './src/trial.ts'
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
    },
    devServer:{
        port: 1234,
        contentBase: path.join(__dirname, 'dist'),
        hot: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
    // this is actually the configuration webpack uses
}