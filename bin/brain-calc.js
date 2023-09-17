import readlineSync from 'readline-sync';
import userName from './brain-games.js';

const randomOperator = () => {
    const operator = Math.floor(Math.random() * 10);
    if (operator < 33) {
        return '-';
    } else if (operator > 66) {
        return '+';
    } else {
        return '*';
    }
};

const brainCalc = () => {
    let count = 0;
    for (let i = 1; i <= 3; i += 1) {
        const operator = randomOperator();
        const operand1 = Math.round(Math.random() * 100);
        const operand2 = Math.round(Math.random() * 100);
        let result = 0;
        let answer;
        if (operator === '*') {
            result = operand1 * operand2;
            answer = readlineSync.question(`Question: ${operand1} * ${operand2}\nYour answer: `);
        }
        if (operator === '+') {
            result = operand1 + operand2;
            answer = readlineSync.question(`Question: ${operand1} + ${operand2}\nYour answer: `);
        } 
        if (operator === '-') {
            result = operand1 - operand2;
            answer = readlineSync.question(`Question: ${operand1} - ${operand2}\nYour answer: `);
        }
        if (isNaN(Number(answer))) {
            console.log(`Read game instruction!`);
            break;
        }
        if (result === Number(answer)) {
            console.log('Correct!');
            count += 1;
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
            break;
        }
        
    }
    if (count === 3) {
        console.log(`Congratulations, ${userName}!`);
    }
};
brainCalc();


