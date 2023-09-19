const randomNum = () => {
  const number = Math.ceil(Math.random() * 100);
  return number;
};
const randomOperator = () => {
  const operator = Math.floor(Math.random() * 100);
  const operators = ['-', '+', '*'];
  let count = 0;
  if (operator < 33) {
    count = 0;
  } else if (operator > 66) {
    count = 1;
  } else {
    count = 2;
  }
  return operators[count];
};
const randomNum10 = () => {
  const number = Math.floor(Math.random() * 10);
  return number;
};

export { randomNum, randomOperator, randomNum10 };
