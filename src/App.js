import './App.css';
import Home from './pages/Home/index';
import { Route } from "wouter";
import Header from './components/layout/Header';
import Search from './pages/Search/index';
import Details from './pages/Details/index';

function App() {
  
  return (
    <div className="App text-center">
      <Header />
      <Route component={Home} path="/" />
      <Route component={Search} path="/search/:keyword" />
      <Route component={Details} path="/gif/:gifId" />
    </div>
  );
}

export default App;
