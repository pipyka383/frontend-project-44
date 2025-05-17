import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('your name?');
  console.log(`Hello, ${name}!`);
};

module.exports = greetUser;
