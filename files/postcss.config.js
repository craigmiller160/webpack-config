const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');

// TODO this needs to go in a separate library to be shared between base config and SCSS config
module.exports = {
    plugins: [
        postcssImport,
        postcssFlexbugsFixes,
        postcssPresetEnv({ stage: 3 })
    ]
};
