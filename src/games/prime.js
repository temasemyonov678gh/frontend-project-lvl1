import readlineSync from 'readline-sync';
import userName from '../../bin/brain-games.js';
import { randomNum } from '../random.js';

const isPrime = (num) => {
    const number = Number(num);
    for (let i = 2; i < number; i += 1) {
        if (number % i === 0) {
            return 'no';
        }
    }
    return 'yes';
};

const brainPrime = () => {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let count = 0;
    for (let i = 1; i <= 3; i += 1) {
        const number = randomNum() + 2;
        const result = isPrime(number);
        const answer = readlineSync.question(`Question: ${number}\nYour answer: `);
        if (result === answer) {
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
export default brainPrime;
