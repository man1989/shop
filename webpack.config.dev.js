const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const mode = "development";
process.env.NODE_ENV = mode;

module.exports = {
    mode: mode,
    target: "web", //default is web
    entry: "./src/index.js",
    devtool: "cheap-module-source-map",
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        stats: "minimal",
        contentBase: [path.resolve(__dirname, 'src/images'), path.resolve(__dirname, 'apiServer/data/images')],
        contentBasePublicPath: "/images",
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        https: false,
        port: 8082
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            favicon: "./src/images/shop-icon-32.png"
        })
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_module/,
            use: ["babel-loader", "eslint-loader"]
        },
        {
            test: /\.(css)$/,
            use: ["style-loader", "css-loader"]
        },
        {
            test: /\.(svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: false,
                    },
                },
            ]
        }]
    }
}