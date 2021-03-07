import React from "react";
import { NavLink } from "react-router-dom";
import { actionsAPI } from "../../api/api";
import { generateId } from "../utils/utils";
import CreateActionForm from "./CreateActionForm";


class CreateAction extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            actionTitle: "Акция № 1"
        }
    }

    onSubmit = values => {
        values.actionId = generateId();
        console.log("values", values);

        const formData = new FormData();
        const valuesKeys = Object.keys(values);

        valuesKeys.forEach( (key) => {
            formData.append(key, values[key]);
        });


        actionsAPI.createAction(formData).then(res => {
            console.log("actionsAPI", res.data);
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
                        
                        <CreateActionForm value={this.state} onSubmit={this.onSubmit}/>
                    </div>
                </div>
            </div>
            
            
        )
        
        
    }
}

export default CreateAction;