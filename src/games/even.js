import readlineSync from 'readline-sync';
import userName from '../../bin/brain-games.js';
import { randomNum } from '../random.js';

const brainEven = () => {
  let result = 0;
  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = randomNum();
    const question = readlineSync.question(`Question: ${randomNumber} \nYour answer: `);
    if (randomNumber % 2 === 0 && question === 'no') {
      console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      break;
    }
    if (randomNumber % 2 !== 0 && question === 'yes') {
      console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    }
    if (question === 'yes' || question === 'no') {
      console.log('Correct!');
      result += 1;
    } else {
      console.log('Read game instruction!');
      break;
    }
  }
  if (result === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export default brainEven;
