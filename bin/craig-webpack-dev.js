#!/usr/bin/env node

const spawn = require('cross-spawn');

spawn.sync('cross-env', ['NODE_ENV=development', 'webpack-dev-server'], {
    stdio: 'inherit'
});
