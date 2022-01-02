#!/usr/bin/env node

const spawn = require('cross-spawn');

const result = spawn.sync('cross-env', ['NODE_ENV=development', 'webpack-dev-server'], {
    stdio: 'inherit'
});

process.exit(result.status);
