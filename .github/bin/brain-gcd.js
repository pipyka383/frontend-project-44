#!/usr/bin/env node
import readlineSync from 'readline-sync';

const playGame = () => {
  console.log('Welcome to the Brain GCD Game!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const getRandomNumber = () => Math.floor(Math.random() * 100);

  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  for (let i = 0; i < 3; i++) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const result = gcd(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
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