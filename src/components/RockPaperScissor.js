import React, { useState } from 'react'
import ScoreBoard from './ScoreBoard';
import rock from '../images/rock.jpg'
import paper from '../images/paper.jpg'
import scissor from '../images/scissor.jpg'
import { getCpuChoiceRPS, getWinnerRPS } from '../helpers'

export default function RockPaperScissor() {
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);

  const handleClick = (playerChoice) => {
    const cpuChoice = getCpuChoiceRPS();
    const winner = getWinnerRPS(playerChoice, cpuChoice);
    if(winner === 'player') setPlayerScore(playerScore + 1)
    else if(winner === 'cpu') setCpuScore(cpuScore + 1)
  }

  return (
    <section>
      <ScoreBoard playerScore={playerScore} cpuScore={cpuScore}/>
      <img src={rock} alt="rock" onClick={() => handleClick('rock')}/>
      <img src={paper} alt="paper" onClick={() => handleClick('paper')}/>
      <img src={scissor} alt="scissor" onClick={() => handleClick('scissor')}/>
    </section>
  )
};
