import React from "react";
import CreateActionForm from "./CreateActionForm";


class CreateAction extends React.Component {


    onSubmit = values => {
        console.log("CreateAction", values)
    }

    render(){
        return (
            <div className="page-content">
                <div className="layout">
                    <div className="create">
                        <CreateActionForm onSubmit={this.onSubmit}/>                
                    </div>
                </div>
            </div>
            
            
        )
        
        
    }
}

export default CreateAction;