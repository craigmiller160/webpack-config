const merge = require('webpack-merge');
const base = require('./modules/webpack.base');
const analyze = require('./modules/webpack.analyze');
const html = require('./modules/webpack.html');
const css = require('./modules/webpack.css');
const cssExtract = require('./modules/webpack.cssExtract');

const modules = [
    base,
    html,
    css
];

if (process.env.ANALYZE === 'true') {
    modules.push(analyze);
}

if (process.env.NODE_ENV === 'production') {
    modules.push(cssExtract);
}

module.exports = merge(modules);
