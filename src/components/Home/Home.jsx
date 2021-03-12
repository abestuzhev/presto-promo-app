import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { generalAPI } from "../../api/api";
import ActionHome from "./ActionHome";
import Loader from "../Loader/Loader";

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            // должно прийти число или null
            actionId: +this.props.match.params.actionId
            // isActive: this.props.actions.forEach( a => {
            //         if(a.id === +this.props.match.params.actionId){
            //             return a.status
            //         }
            //     }
            // )
        }
        this.handleAction = this.handleAction.bind(this);
    }

    handleAction(){
        return this.props.actions.map(action => {
            // debugger
            if(this.state.actionId === +action.id){
                if(!action.status){
                    return <Redirect to="/" />
                }

                return <ActionHome {...action} key={action.id}/>
            }
            console.log("ActionHome write")
        });
    }
    
    render(){
        console.log("actionId", this.state.actionId);
        if(!this.props.actions){
            return <Loader />
        }

        return (
            <div className="layout">
                {this.handleAction()}
            </div>
        )
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
)(Home);