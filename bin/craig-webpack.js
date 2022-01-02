#!/usr/bin/env node

const spawn = require('cross-spawn');

const result = spawn.sync('cross-env', ['NODE_ENV=production', 'webpack'], {
    stdio: 'inherit'
});

process.exit(result.status);