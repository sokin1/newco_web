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
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, include: path.join(__dirname, 'src/'), use: [
                'style-loader',
                // { loader: 'css-loader', options: {
                //     modules: true
                // }},
                // { loader: 'sass-loader' },
                {
                    loader: 'typings-for-css-modules-loader',
                    options: {
                        modules: true,
                        namedExport: true,
                        sass: true,
                        camelCase: true
                    }
                }
            ]},
            { test: /\.(png|svg|jpg|gif)$/, use: [{ loader: 'file-loader' }]}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}