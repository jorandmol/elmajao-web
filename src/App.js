import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Menu from './components/Menu';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row p-3">
          <Menu />
          <Feed />
          <News />
        </div>
      </div>
    </div>
  );
}

export default App;
