#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!'); 
const name = readlineSync.question('Text your name: ');
const resultName = `Hello, ${name}`;
console.log(resultName);
