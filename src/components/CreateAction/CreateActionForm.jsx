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
                <div className="c-form-box">
                    <label htmlFor="" className="c-label">id блюда в системе iikoBiz</label>
                    <Field component="input" name="actionProductId" type="text" className="c-input"/>
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
                        <Field name="actionCity" component="select" type="select-multiple" className="c-selector">
                            <option></option>
                            <option value="arkhangelsk">Архангельск</option>
                            <option value="tula">Тула</option>
                        </Field>
                    </div>
                    <div className="c-form-grid__item">
                        <label htmlFor="" className="c-label">Кафе</label>
                        <Field name="actionCafe" component="select" type="select-multiple" className="c-selector">
                            <option></option>
                            <option value="17aa8a63-fe59-470f-bf78-d633c454f329">Кафе на Дзержинского 7</option>
                            <option value="dfae61dd-1666-4068-b3fb-3cc65be4e0fd">ТРЦ Макси, пр. Ленинградский, 38</option>
                        </Field>
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