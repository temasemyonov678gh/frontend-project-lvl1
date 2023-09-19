const randomNum = () => {
  const number = Math.ceil(Math.random() * 100);
  return number;
};
const randomOperator = () => {
  const operator = Math.floor(Math.random() * 100);
  if (operator < 33) {
    return '-';
  } else if (operator > 66) {
    return '+';
  } else {
    return '*';
  }
};
const randomNum10 = () => {
  const number = Math.floor(Math.random() * 10);
  return number;
};

export { randomNum, randomOperator, randomNum10 };
