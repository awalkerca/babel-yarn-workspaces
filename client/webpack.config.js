const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function config () {
    const config = {
        entry: './app/main.jsx',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'static/[name].bundle.js',
            publicPath: '/'
        },
        mode: process.env.NODE_ENV || 'development',
        optimization: {
            usedExports: true
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: ['node_modules', 'app']
        },
        devServer: {
            contentBase: path.join(__dirname, 'build'),
            historyApiFallback: true,
            port: 8080
        },
        module: {
            rules: [
                {
                    test: /\.(jsx|js)?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.(scss|sass)?$/,
                    use: [
                        {
                            loader: 'style-loader' // creates style nodes from JS strings
                        },
                        {
                            loader: 'css-loader' // translates CSS into CommonJS
                        },
                        {
                            loader: 'sass-loader' // compiles Sass to CSS
                        }
                    ]
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html'
            }),
            new webpack.NoEmitOnErrorsPlugin()
        ]
    };

    return config;
}

module.exports = config;
