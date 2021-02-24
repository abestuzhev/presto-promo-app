import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { generalAPI } from "../../api/api";
import ActionHome from "./ActionHome";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            actionId: +this.props.match.params.actionId
        }
        this.handleAction = this.handleAction.bind(this)
    }

    handleAction(){
        return this.props.actions.map(action => {
            if(this.state.actionId === action.id){
                return <ActionHome {...action}/>
            }
        });
    }
    
    render(){
        console.log("actionId", this.state.actionId);
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
    connect(mapStateToProps, null),
    withRouter
)(Home);