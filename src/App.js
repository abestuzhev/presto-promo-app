import './scss/style.scss';
import React from "react";
import Dashboard from './admin/Dashboard';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {Route, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import Login from './components/Login/Login';
import {compose} from "redux";
import Cover from './components/Cover/Cover';

class App extends React.Component {

    render(){
        return (
            <div className="App">

                <Route exact path="/admin">
                    <Dashboard />
                </Route>

                

                <Route exact path={"/:city/actions/:actionId"}>
                    <Home />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route exact path="/">
                    <Header />
                    <Cover />
                </Route>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
 return {
     actions: state.dashboard.actions
 }
}

export default compose(
    connect(mapStateToProps),
    withRouter
)(App);
