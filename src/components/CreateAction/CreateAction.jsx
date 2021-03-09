import React from "react";
import { NavLink } from "react-router-dom";
import { actionsAPI } from "../../api/api";
import { generateId } from "../utils/utils";
import CreateActionForm from "./CreateActionForm";


class CreateAction extends React.Component {

    onSubmit = values => {
        const formData = new FormData();
        const valuesKeys = Object.keys(values);
        // values.actionId = generateId();
        // values.status = "1";

        valuesKeys.forEach( (key) => {
            formData.append(key, values[key]);
        });

        formData.append("actionId", generateId());
        formData.append("status", true);
        
        // console.log("values", values);


        actionsAPI.createAction(formData).then(res => {
            actionsAPI.getActions().then(res => {
                this.props.actionSuccess(res.data);
            });
        });
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