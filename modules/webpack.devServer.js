const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    devServer: {
        contentBase: [
            path.resolve(process.cwd(), 'build')
        ],
        compress: true,
        hot: true,
        historyApiFallback: {
            index: process.env.WEBPACK_PUBLIC_PATH || '/'
        }
    },
    plugins: [
        new HotModuleReplacementPlugin()
    ]
};
