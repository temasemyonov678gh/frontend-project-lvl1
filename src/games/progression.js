import readlineSync from 'readline-sync';
import userName from '../../bin/brain-games.js';
import { randomNum10, randomNum } from '../random.js';

const generateProgression = () => {
    const result = [];
    const plus = randomNum10();
    let number = randomNum();
    for (let i = 0; i < 10; i += 1) {
        result.push(number);
        number += plus;
    }
    return result;
};

const brainProgression = () => {
    console.log('What number is missing in the progression?');
    for (let i = 1; i <= 3; i += 1) {
        const progression = generateProgression();
        const changeNumber = randomNum10();
        const result = progression[changeNumber];
        progression[changeNumber] = '..';
        let question = '';
        let count = 0;
        for (const number of progression) {
            question += number + ' ';
        }
        const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
        if (isNaN(Number(answer))) {
            console.log(`Read game instruction!`);
            break;
        }
        if (Number(result) === Number(answer)) {
            console.log('Correct!');
            count += 1;
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${userName}!`);
            break;
        }
    }
};

export default brainProgression;