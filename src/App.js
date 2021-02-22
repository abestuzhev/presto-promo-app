import './scss/style.scss';
import Dashboard from './admin/Dashboard';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import {connect} from "react-redux";

function App(props) {
  return (
    <div className="App">

      <Route exact path="/admin">
        <Dashboard {...props}/>
      </Route>

      <Route exact path="/">
        
        <Header />
        <Home />
      </Route>


    </div>
  );
}

const mapStateToProps = (state) => {
 return {
     actions: state.dashboard.actions
 }
}

export default connect(mapStateToProps)(App);
