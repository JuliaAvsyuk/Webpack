var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules:
            [
                {
                    test: /\.s[ac]ss$/i,
                    use: ExtractTextPlugin.extract(
                        {
                            fallback: 'style-loader',
                            use:
                                ['css-loader', 'sass-loader']
                        }
                    )
                }
                
            ]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'style.css'}),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
};