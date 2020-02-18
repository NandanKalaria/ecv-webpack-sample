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
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: 'style-loader', // creates style nodes from JS strings
                  },
                  {
                    loader: 'css-loader', // translates CSS into CommonJS
                  },
                  {
                    loader: 'less-loader', // compiles Less to CSS
                  },
                ],
              },
        ],
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    entry: {
        'js/home': './src/index.js',
        'js/dashboard': './src/dashboard.js',
        'ts/trial': './src/trial.ts'
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