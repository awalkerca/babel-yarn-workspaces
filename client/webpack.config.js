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
                    //include: [path.join(__dirname, 'app')],
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        rootMode: "upward"
                    }
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
