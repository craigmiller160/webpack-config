const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|bmp|svg)$/,
                include: /images[\\\/].*\.(png|jpe?g|gif|bmp|svg)$/,
                exclude: /fonts/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 30000,
                            name: `[name].[hash:8].[ext]`,
                            outputPath: '/assets/images'
                        }
                    }
                ]
            },
            {
                test: /\.ico/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            },
            {
                test: /\.(eot|otf|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                include: /fonts[\\\/].*\.(eot|otf|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
                exclude: /images/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: `[name].[hash:8].[ext]`,
                        outputPath: '/assets/fonts/',
                    }
                }
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(process.cwd(), 'public'),
                    to: path.resolve(process.cwd(), 'build'),
                    noErrorOnMissing: true
                }
            ]
        })
    ]
};
