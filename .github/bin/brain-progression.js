#!/usr/bin/env node
import readlineSync from 'readline-sync';

const playGame = () => {
  console.log('Welcome to the Brain Progression Game!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const getRandomNumber = () => Math.floor(Math.random() * 100);

  const generateProgression = (length) => {
    const start = getRandomNumber();
    const step = getRandomNumber();
    const progression = [];

    for (let i = 0; i < length; i++) {
      progression.push(start + i * step);
    }

    return progression;
  };

  for (let i = 0; i < 3; i++) {
    const length = Math.floor(Math.random() * 6) + 5;
    const progression = generateProgression(length);
    const hiddenIndex = Math.floor(Math.random() * length);
    const hiddenNumber = progression[hiddenIndex];
    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === hiddenNumber) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

playGame();