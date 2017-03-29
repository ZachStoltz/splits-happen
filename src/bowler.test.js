const Bowler = require('./Bowler');
const Frame = require('./Frame');

describe('Splits Happen tests', () => {
  let bowler;
  
  beforeEach(() => {
    bowler = new Bowler();
  });
  
  it('calculates a perfect game', () => {
    const frames = [];
    
    for(let i = 0; i < 9; i++) {
      const frame = new Frame(i + 1, 10);
      frames.push(frame);
    }
    // create 10th frame
    frames.push(new Frame(10,10,10,10));
    
    const score = bowler.calculateScore(frames);
    
    expect(score).toEqual(300);
  });
  
  it('calculates a full game of splits', () => {
    const frames = [];
    
    for(let i = 0; i < 9; i++) {
      const frame = new Frame(i + 1, 5, 5);
      frames.push(frame);
    }
    // create 10th frame
    frames.push(new Frame(10,5,5,5));
    
    const score = bowler.calculateScore(frames);
    
    expect(score).toEqual(150);
  });
  
  it('calculates game 9-9-9-9-9-9-9-9-9-9-', () => {
    const frames = [];
    
    for(let i = 0; i < 9; i++) {
      const frame = new Frame(i + 1, 9, 0);
      frames.push(frame);
    }
    // create 10th frame
    frames.push(new Frame(10, 9, 0, 0));
    
    const score = bowler.calculateScore(frames);
    
    expect(score).toEqual(90);
  });
  
  it('calculates game X7/9-X-88/-6XXX81', () => {
    const frames = [
      new Frame(1, 10),
      new Frame(2, 7, 3),
      new Frame(3, 9),
      new Frame(4, 10),
      new Frame(5, 0, 8),
      new Frame(6, 8, 2),
      new Frame(7, 0, 6),
      new Frame(8, 10),
      new Frame(9, 10),
      new Frame(10, 10, 8, 1),
    ];
    
    const score = bowler.calculateScore(frames);
    
    expect(score).toEqual(167);
  });
});
