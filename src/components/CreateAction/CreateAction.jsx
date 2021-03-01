import React from "react";
import { NavLink } from "react-router-dom";
import CreateActionForm from "./CreateActionForm";


class CreateAction extends React.Component {


    onSubmit = values => {
        console.log("CreateAction", values)
    }

    render(){
        return (
            <div className="page-content">
                <div className="layout">
                    <div className="page-operation">
                        <div className="page-header">
                            <h1 className="page-title">Создать акцию</h1>
                            <NavLink className="c-btn" to="/admin">Назад</NavLink>
                        </div>
                        
                        <CreateActionForm onSubmit={this.onSubmit}/>
                    </div>
                </div>
            </div>
            
            
        )
        
        
    }
}

export default CreateAction;