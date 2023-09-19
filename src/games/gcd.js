import readlineSync from 'readline-sync';
import userName from '../../bin/brain-games.js';
import { randomNum } from '../random.js';

const gcd = (operand1, operand2) => {
    let a = operand1;
    let b = operand2;
    while (a !== b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    const GCD = a;
    return GCD;
};

const brainGcd = () => {
    console.log('Find the greatest common divisor of given numbers.');
    let count = 0;
    for (let i = 1; i <= 3; i += 1) {
        const operand1 = randomNum();
        const operand2 = randomNum();
        const result = gcd(operand1, operand2);
        const answer = readlineSync.question(`Question: ${operand1} ${operand2}\nYour answer: `);
        if (isNaN(Number(answer))) {
            console.log('Read game instruction!');
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
export default brainGcd;
