require('./utils/readWebpackEnv');
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
const optimize = require('./modules/webpack.optimize');
const { isProduction, isDevelopment } = require('./utils/nodeEnvCheck');

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

if (isProduction()) {
    modules.push(cssExtract);
    modules.push(optimize);
}

if (isDevelopment()) {
    modules.push(devServer);
    modules.push(sourceMap);
}

module.exports = merge(modules);
