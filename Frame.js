export default class Frame {
  constructor(id, firstRoll = 0, secondRoll = 0, bonusRoll = 0) {
    this.id = id;
    this.firstRoll = firstRoll;
    this.secondRoll = secondRoll;
    this.bonusRoll = bonusRoll;
  }
  
  isStrike() {
    return this.firstRoll === 10;
  }
  
  isSpare() {
    return !this.isStrike() && (this.firstRoll + this.secondRoll === 10);
  }
}
