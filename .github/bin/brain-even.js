#!/usr/bin/env node
import readlineSync from 'readline-sync';

const playGame = () => {
  console.log('Welcome to the Brain Even Game!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const getRandomNumber = () => Math.floor(Math.random() * 100);

  const isEven = (number) => number % 2 === 0;

  for (let i = 0; i < 3; i++) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === 'yes' && isEven(number)) {
      console.log('Correct!');
    } else if (answer === 'no' && !isEven(number)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(number) ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();