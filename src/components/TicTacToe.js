import React, { useState } from 'react'
import ScoreBoard from './ScoreBoard';

export default function TicTacToe() {
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);

  return (
    <section>
      <ScoreBoard playerScore={playerScore} cpuScore={cpuScore}/>
    </section>
  )
};
