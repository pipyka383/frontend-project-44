#!/usr/bin/env node
const readlineSync = require('readline-sync');

const playGame = () => {
  console.log('Welcome to the Brain Calc Game!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const getRandomNumber = () => Math.floor(Math.random() * 100);

  const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    return operators[Math.floor(Math.random() * operators.length)];
  };

  const calculate = (num1, num2, operator) => {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      default:
        return null;
    }
  };

  for (let i = 0; i < 3; i++) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operator = getRandomOperator();
    const result = calculate(num1, num2, operator);

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === result) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();