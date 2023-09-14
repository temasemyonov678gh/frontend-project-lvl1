import readlineSync from 'readline-sync';

const sayName = () => {
    const userName = readlineSync.question('May I have your name?');
    console.log(`Hello, ${userName}!`);
};

export { sayName };