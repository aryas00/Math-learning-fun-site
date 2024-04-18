import './App.css';
import Header from './Header.js';
import Game from './AdditionGame.js';
import MatchingExercise from './MatchingExercise.js';
import ProgressTracker from './ProgressTracker.js';
import Footer from './Footer.js';
function App() {
  return (
      <div className="App">
      <Header />
      <main>
        <Game />
        <MatchingExercise />
        <ProgressTracker />
      </main>
      <Footer />
    </div>
   
  );
}

export default App;
