import './App.css';
import RockPaperScissor from './components/RockPaperScissor'
import TicTacToe from './components/TicTacToe'

function App() {
  return (
    <div className="App">
      <main>
        <RockPaperScissor />
        <TicTacToe />
      </main>
    </div>
  );
}

export default App;
