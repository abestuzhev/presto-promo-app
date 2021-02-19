import './scss/style.scss';
import Dashboard from './admin/Dashboard';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      

      <Route exact path="/admin">
        <Dashboard />
      </Route>

      <Route exact path="/">
        
        <Header />
        <Home />
      </Route>


    </div>
  );
}

export default App;
