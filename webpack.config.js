const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDevMode = process.env.NODE_ENV === 'development'

const config = {
    mode:isDevMode ? 'development' : 'production',
    output:{
        filename:isDevMode ? 'assets/js/[name].js' : 'assets/js/[name].[hash].js',
        path:path.resolve(__dirname,'build'),
    },
    module:{
        rules:[
            {
                enforce:'pre',
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'eslint-loader',
                    options:{
                        fix:false
                    }
                }
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader',
                    options:{
                        minimize:!isDevMode
                    }
                }
            },
            {
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  name: isDevMode ? '[name].[ext]':'[contentHash].[ext]',
                  outputPath:'assets/img',
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin({
            filename:isDevMode ? 'assets/css/[name].css' : 'assets/css/[name].[hash].css',
            chunkFilename:isDevMode ? 'assets/css/[id].css' : 'assets/css/[id].[hash].css'
        })
    ],
    devServer:{
        open:false,
        index:'',
        contentBase:path.resolve(__dirname,'build'),
    }
}

if (isDevMode) {
    config.devServer.open = true
    config.devServer.index = 'index.html'
}

module.exports = config