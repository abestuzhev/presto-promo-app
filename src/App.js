import './scss/style.scss';
import Dashboard from './admin/Dashboard';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import {connect} from "react-redux";
import Login from './components/Login/Login';

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

      <Route exact path={"/:city/actions/:actionId"}>
        
        <Home />
        
      </Route>

      <Route path="/login">
        <Login />
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
