import React from "react";
import { Field, reduxForm } from 'redux-form';

const CreateActionForm = (props) => {
    return (
        <form className="c-form" onSubmit={props.handleSubmit}>
            
            <div className="c-form-grid">
                <div className="c-form-grid__item">
                    <label htmlFor="" className="c-label">Поле 1</label>
                    <Field component="input" name="actionTitle" type="text" className="c-input"/>
                </div>
                <div className="c-form-grid__item">
                    <label htmlFor="" className="c-label">Поле 1</label>
                    <Field component="input" name="actionDescription" type="text" className="c-input"/>
                </div>
            </div>
            
            <div className="c-form-item">
                <button type="submit" className="c-btn">Создать</button>
            </div>
        </form>
    )
}



export default reduxForm({form: 'createAction'})(CreateActionForm);