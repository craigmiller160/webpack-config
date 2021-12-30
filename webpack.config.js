const merge = require('webpack-merge');
const base = require('./modules/webpack.base');
const analyze = require('./modules/webpack.analyze');
const html = require('./modules/webpack.html');
const css = require('./modules/webpack.css');
const cssExtract = require('./modules/webpack.cssExtract');
const devServer = require('./modules/webpack.devServer');
const sourceMap = require('./modules/webpack.sourcemap');
const resources = require('./modules/webpack.resources');
const javascript = require('./modules/webpack.javascript');

const modules = [
    base,
    html,
    css,
    resources,
    javascript
];

if (process.env.ANALYZE === 'true') {
    modules.push(analyze);
}

if (process.env.NODE_ENV === 'production') {
    modules.push(cssExtract);
}

if (process.env.NODE_ENV === 'development') {
    modules.push(devServer);
    modules.push(sourceMap);
}

module.exports = merge(modules);
