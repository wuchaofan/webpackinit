var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        './src/main.js'
    ],
    output: {
        path: __dirname,
        filename: "dist/bundle.js"
    },
    // devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use:[
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                    { loader: 'postcss-loader' }
                ]

                // use: ExtractTextPlugin.extract({
                //     fallback: 'style-loader',
                //     use:[
                //         {
                //             loader: 'css-loader',
                //             options: {
                //                 modules: true
                //             }
                //         },
                //         { loader: 'postcss-loader' },
                // ]})
            }
            
        ]
    },
    plugins: [ 
        // new ExtractTextPlugin({
        //         filename: 'dist/build.css',
        //         allChunks: true,
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            title: 'Weather'
            // serviceWorkerLoader: `<script>${fs.readFileSync(path.join(__dirname,
                // './service-worker-dev.js'), 'utf-8')}</script>`
        })
    ],
    devServer: {
        // contentBase: path.join(__dirname, "dist"),
        // compress: true,
        hot: true,
        port: 9000
    }

};