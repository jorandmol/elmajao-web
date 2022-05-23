import './App.css';
import Home from './pages/Home';
import { Route } from "wouter";
import Header from './components/layout/Header';
import ListGif from './pages/GifList';
import GifDetails from './pages/GifDetails';

function App() {
  
  return (
    <div className="App text-center">
      <Header />
      <Route component={Home} path="/" />
      <Route component={ListGif} path="/:keyword" />
      <Route component={GifDetails} path="/gif/:gifId" />
    </div>
  );
}

export default App;
