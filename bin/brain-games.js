#!/usr/bin/env node

require('../dist/cli.js');

console.log('Welcome to the Brain Games!')

const name = welcomeUser()

console.log(`Hello, ${name}!`)