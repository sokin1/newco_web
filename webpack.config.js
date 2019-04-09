const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/client/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.client.js'
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
            // { test: /\.css$/, use: [
            //     { loader: 'style-loader'},
            //     { loader: 'css-loader', options: {
            //         modules: true
            //     }},
            //     { loader: 'sass-loader' }
            // ]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}