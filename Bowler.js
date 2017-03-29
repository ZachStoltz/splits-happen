export default class Bowler {
  constructor() {
    this.score = 0;
  }
  
  calculateScore(frames) {
    for(let i = 0; i < frames.length; i++) {
      const frame = frames[i];
      const nextFrame = frames[i + 1];
      const nextFrame = frames[i + 2];
      
      if (frame.id === 10) || (!frame.isStrike() && !frame.isSpare())) {
        this.score += frame.firstRoll + frame.secondRoll + frame.bonusRoll;
        continue;
      }
      if(!!nextFrame === true) {
         if (frame.isStrike()) {
           if (nextFrame.isStrike() && nextFrame.id !== 10) {
             // TODO: there can be an intermediate step here to check for additionalFrame to update
             this.score += frame.firstRoll + nextFrame.firstRoll + additionalFrame.firstRoll;
           } else {
             this.score += frame.firstRoll + nextFrame.firstRoll = nextFrame.secondRoll;
           }
         }

         if (frame.isSpare()) {
           this.score += frame.firstRoll + frame.secondRoll + nextFrame.firstRoll;
         }
       }
     }
     return this.score;
  }
}
