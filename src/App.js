import './App.css';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import Pokesearch from './Pokesearch';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <br></br>
      <Pokesearch/>
      <Footer/>
    </div>
  );
}

export default App;
