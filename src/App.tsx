import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Backrooms } from './components/Backrooms';
import { useGlobalAudio } from './hooks/useAudio';

function App() {
  useGlobalAudio();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/backrooms" element={<Backrooms />} />
      </Routes>
    </Router>
  );
}

export default App;
