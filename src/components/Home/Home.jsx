import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { generalAPI } from "../../api/api";
import ActionHome from "./ActionHome";

class Home extends React.Component {
    

    componentDidMount(){
        // generalAPI.getToken();
        // generalAPI.testRequest();

        // получение id из url
        const actionId = this.props.match.params.actionId;
        console.log("actionId", actionId);
    }
    

    
    render(){
        return (
            <div className="layout">
                <ActionHome {...this.props.actions[1]}/>
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