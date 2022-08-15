const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');
module.exports = {
    target: 'web',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index[hash].js',
    },
    //loader
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },

                    {
                        loader: 'postcss-loader'
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ],
    },
    plugins: [
        // 創建html模板
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 抽離css
        new MiniCssExtractPlugin({
            filename: 'index.[hash].css'
        }),
        //打包前清除dist資料夾
        new CleanWebpackPlugin(),
        new CompressionPlugin()
    ],
    mode: 'production',



}
