const path = require('path');

module.exports = {
    resolve: {
        extensions: [
            '.js', '.jsx', '.json'
        ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: path.resolve(process.cwd(), 'src'),
                exclude: path.resolve(process.cwd(), 'node_modules'),
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
