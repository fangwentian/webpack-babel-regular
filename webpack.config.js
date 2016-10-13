var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        entry: './js/entry.js'
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'javascript/[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx','.css']
    },
    module: {
        loaders: [
            { test: /\.js|jsx$/, loader: 'babel', include: path.join(__dirname, '/js') },
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader"), include: path.join(__dirname, '/css') }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'index',
            filename: "template/index.html",
            template: path.join(__dirname, 'index.html'),
            inject: true,
            hash: true,
            chunks: ['entry']
        }),
        new ExtractTextPlugin("css/[name]-[contenthash].css")
    ],
    watch: true
}
