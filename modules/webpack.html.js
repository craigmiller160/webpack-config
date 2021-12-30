const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            title: process.env.WEBPACK_HTML_TITLE || 'Webpack Application',
            filename: 'index.html',
            template: process.env.WEBPACK_HTML_TEMPLATE_PATH || path.join(__dirname, '..', 'files', 'index.template.html'),
            minify: true,
            showErrors: true
        })
    ]
};
