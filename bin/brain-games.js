#!/usr/bin/env node

import sayName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = sayName();
export default userName;
