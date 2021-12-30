const merge = require('webpack-merge');
const base = require('./modules/webpack.base');
const analyze = require('./modules/webpack.analyze');

const modules = [
    base
];

if (process.env.ANALYZE === 'true') {
    modules.push(analyze);
}

module.exports = merge(modules);
