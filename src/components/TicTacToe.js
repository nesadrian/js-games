import React, { useState } from 'react'
import ScoreBoard from './ScoreBoard';
import SquareTTT from './SquareTTT';

export default function TicTacToe() {
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [board, setBoard] = useState([
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9']
  ]);

  return (
    <section>
      <ScoreBoard playerScore={playerScore} cpuScore={cpuScore}/>
      {board.map(square => <SquareTTT value={square}/>)}
    </section>
  )
};
