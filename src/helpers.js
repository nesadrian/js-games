export const getCpuChoice = () => {
  const randNum = Math.random();
  switch(randNum) {
    case(randNum < 0.33):
      return 'rock';
    case(randNum > 0.66):
      return 'paper'
    default:
      return 'scissor'
  }
};
