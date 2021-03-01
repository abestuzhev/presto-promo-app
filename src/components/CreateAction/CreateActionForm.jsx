import React from "react";
import { Field, reduxForm } from 'redux-form';

const CreateActionForm = (props) => {
    return (
        <form className="c-form" onSubmit={props.handleSubmit}>
            
            <div className="c-form__item">
                
                <div className="c-form-box">
                    <label htmlFor="" className="c-label">Заголовок акции</label>
                    <Field component="input" name="actionTitle" type="text" className="c-input"/>
                </div>
                <div className="c-form-box">
                    <label htmlFor="" className="c-label">Состав блюда</label>
                    <Field component="input" name="actionDescription" type="text" className="c-input"/>
                </div>
            </div>
            <div className="c-form__item">
                <div className="c-form-grid">
                    <div className="c-form-grid__item">
                        <label htmlFor="" className="c-label">Старая цена</label>
                        <Field component="input" name="actionOldPrice" type="text" className="c-input"/>
                    </div>
                    <div className="c-form-grid__item">
                        <label htmlFor="" className="c-label">Новая цена</label>
                        <Field component="input" name="actionNewPrice" type="text" className="c-input"/>
                    </div>
                </div>
            </div>
            <div className="c-form__item">
                <div className="c-form-grid">
                    <div className="c-form-grid__item">
                        <label htmlFor="" className="c-label">Город</label>
                        <Field component="input" name="actionCity" type="text" className="c-input"/>
                    </div>
                    <div className="c-form-grid__item">
                        <label htmlFor="" className="c-label">Кафе</label>
                        <Field component="input" name="actionCafe" type="text" className="c-input"/>
                    </div>
                </div>
            </div>
            <div className="c-form__item">
                <div className="c-form-grid">
                    <div className="c-form-grid__item">
                        <label htmlFor="" className="c-label">Дата</label>
                        <Field component="input" name="actionDate" type="text" className="c-input"/>
                    </div>
                </div>
            </div>

            
            
            <div className="c-form__item">
                <button type="submit" className="c-btn">Создать</button>
            </div>
        </form>
    )
}



export default reduxForm({form: 'createAction'})(CreateActionForm);