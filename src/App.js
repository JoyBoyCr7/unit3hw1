import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <Header></Header>
      <Main></Main>
      <Footer name="Ronard"></Footer>
    </div>
  );
}

export default App;
