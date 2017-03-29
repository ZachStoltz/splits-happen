const Bowler = require('./src/Bowler');
const Frame = require('./src/Frame');
let frames = [];
const bowler = new Bowler();

for (let i = 1; i <= 10; i++) {
  const firstRoll = Math.floor(Math.random() * 11);
  let secondRoll;
  let bonusRoll;

  if (firstRoll !== 10) {
    secondRoll = Math.floor(Math.random() * (11 - firstRoll));
  }
  if (i === 10) {
    if (firstRoll === 10) {
      secondRoll = Math.floor(Math.random() * 11);
      bonusRoll = Math.floor(Math.random() * 11);
    } else {
      secondRoll = Math.floor(Math.random() * (11 - firstRoll));

      if (firstRoll + secondRoll === 10) {
        bonusRoll = Math.floor(Math.random() * 10);
      }
    }
  }
  frames.push(new Frame(i, firstRoll, secondRoll, bonusRoll));
}
const score = bowler.calculateScore(frames);

console.log('Bowling Score: ', score);