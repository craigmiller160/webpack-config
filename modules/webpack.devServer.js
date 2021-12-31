const path = require('path');

module.exports = {
    devServer: {
        compress: true,
        hot: true,
        historyApiFallback: {
            index: process.env.WEBPACK_PUBLIC_PATH || '/'
        }
    }
};
