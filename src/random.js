const randomNum = () => {
    const number = Math.round(Math.random() * 100);
    return number;
};
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

export {randomNum, randomOperator};