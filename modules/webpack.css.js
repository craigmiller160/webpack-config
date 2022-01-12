const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { postCssLoader } = require('@craigmiller160/postcss-config');
const { isProduction, isDevelopment } = require('../utils/nodeEnvCheck');

const loaders = (isCssModule) => ([
    isProduction() ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
            importLoaders: isProduction() ? 2 : 1,
            modules: isCssModule,
            sourceMap: isDevelopment()
        }
    },
    isProduction() ? postCssLoader : null,
    {
        loader: 'resolve-url-loader',
        options: {
            sourceMap: isDevelopment(),
            // It spams warnings about missing sourceMaps and breaks builds. Doing this for now until permanent solution can be found
            silent: true
        }
    }
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
