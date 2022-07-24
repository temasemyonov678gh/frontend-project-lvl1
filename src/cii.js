const exportName = () => {
    name = readlineSync.question('Text your name: ');
    const resultName = `Hello, ${name}`;
    console.log(resultName);
}
export default exportName;