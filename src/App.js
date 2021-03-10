import './scss/style.scss';
import React from "react";
import Dashboard from './admin/Dashboard';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import {Route, withRouter, Switch } from 'react-router-dom';
import {connect} from "react-redux";
import Login from './components/Login/Login';
import {compose} from "redux";
import Cover from './components/Cover/Cover';
import CreateAction from './components/CreateAction/CreateAction';
import { generalAPI, actionsAPI } from './api/api';
import { actionSuccess } from './redux/dashboardReducer';

class App extends React.Component {

    componentDidMount(){
        generalAPI.getOrganizations();
        generalAPI.getСities();


        // console.log("App", this.props);

        actionsAPI.getActions().then(res => {
            this.props.actionSuccess(res.data);
        });
        
        
    }

    render(){
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/admin">
                        <Dashboard />
                    </Route>

                    <Route exact path="/admin/create_action">
                        <CreateAction />
                    </Route>



                    <Route exact path={"/:city/actions/:actionId"}>
                        <Home />
                    </Route>

                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="*">
                        <Header />
                        <Cover />
                    </Route>
                </Switch>


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
    connect(mapStateToProps, {actionSuccess}),
    withRouter
)(App);
