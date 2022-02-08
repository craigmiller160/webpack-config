const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    performance: {
        maxEntrypointSize: 1000000,
        maxAssetSize: 1000000
    },
    optimization: {
        usedExports: true,
        minimize: true,
        splitChunks: {
            chunks: 'all',
            maxSize: 1000000,
            minSize: 500000
        },
        minimizer: [
            new CssMinimizerPlugin({
                minimizerOptions: {
                    preset: [
                        'default',
                        {
                            discardComments: {
                                removeAll: true
                            }
                        }
                    ]
                }
            }),
            new TerserPlugin()
        ]
    }
};
