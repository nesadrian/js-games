import React, { useState } from 'react'
import ScoreBoard from './ScoreBoard';
import rock from '../images/rock.jpg'
import paper from '../images/paper.jpg'
import scissor from '../images/scissor.jpg'

export default function RockPaperScissor() {
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);

  return (
    <section>
      <ScoreBoard playerScore={playerScore} cpuScore={cpuScore}/>
      <img src={rock}/>
      <img src={paper}/>
      <img src={scissor}/>
    </section>
  )
};
