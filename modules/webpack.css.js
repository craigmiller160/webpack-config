const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postCssConfig = require('../files/postcss.config');

const isProduction = () => process.env.NODE_ENV === 'production';

const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        postcssOptions: postCssConfig
    }
};

const loaders = (isCssModule) => ([
    isProduction() ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
            importLoaders: isProduction() ? 2 : 1,
            modules: isCssModule
        }
    },
    isProduction() ? postCssLoader : null,
    'resolve-url-loader'
].filter((loader) => loader));

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: loaders(false),
                sideEffects: true
            },
            {
                test: /\.module\.css$/,
                use: loaders(true)
            }
        ]
    }
};
