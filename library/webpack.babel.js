const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const plugins = [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({patterns: [{ from: './package.json' }]})
];

const config = {
    watch: !!process.env.WATCH,
    devtool: 'hidden-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve('./dist'),
        filename: 'library.min.js',
        libraryTarget: 'var',
        library: 'Library'
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins,
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = config;
