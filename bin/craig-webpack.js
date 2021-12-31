#!/usr/bin/env node

const spawn = require('cross-spawn');

spawn.sync('cross-env', ['NODE_ENV=production', 'webpack'], {
    stdio: 'inherit'
});
