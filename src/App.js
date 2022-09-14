import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
    </div>
  );
}

export default App;
