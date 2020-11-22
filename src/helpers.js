export const getCpuChoiceRPS = () => {
  const randNum = Math.random();
  if(randNum < 0.33) {
    return 'rock';
  }
  else if(randNum > 0.66) {
    return 'paper'
  }
  else {
    return 'scissor'
  }
};

export const getWinnerRPS = (playerChoice, cpuChoice) => {
  if(playerChoice === cpuChoice) {
    return 'draw'
  }
  else if(playerChoice === 'rock') {
    return cpuChoice === 'scissor' ? 'player' : 'cpu';
  }
  else if(playerChoice === 'paper') {
    return cpuChoice === 'rock' ? 'player' : 'cpu';
  }
  else {
    return cpuChoice === 'paper' ? 'player' : 'cpu';
  }
}
