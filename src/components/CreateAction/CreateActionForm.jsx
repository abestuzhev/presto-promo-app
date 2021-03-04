import React from "react";
import {Field, reduxForm, FormSection} from 'redux-form';
import CheckboxGroup from "../common/CheckboxGroup";

const CreateActionForm = (props) => {
    let optionsList = [
        {
            id: "17aa8a63-fe59-470f-bf78-d633c454f329",
            name: 'Кафе на Дзержинского 7'
        },
        {
            id: "dfae61dd-1666-4068-b3fb-3cc65be4e0fd",
            name: 'ТРЦ Макси, пр. Ленинградский, 38'
        }
    ]
    return (
        <form className="c-form" onSubmit={props.handleSubmit}>

            <div className="c-form__item">

                <div className="c-form-box">
                    <label htmlFor="" className="c-label">Заголовок акции</label>
                    <Field component="input" name="actionTitle" value="Акция № 1" type="text" className="c-input"/>
                </div>
                <div className="c-form-box">
                    <label htmlFor="" className="c-label">Состав блюда</label>
                    <Field component="textarea" name="actionDescription" value="Состав блюда в несколько строк"
                           type="textarea" row="6" className="c-textarea"/>
                </div>
                <div className="c-form-box">
                    <label htmlFor="" className="c-label">id блюда в системе iikoBiz</label>
                    <Field component="input" name="actionProductId" value="" type="text" className="c-input"/>
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
                        {/* <Field name="actionCity" component="select" type="select-multiple" className="c-selector">
                            <option value="arkhangelsk">Архангельск</option>
                            <option value="tula">Тула</option>
                        </Field> */}
                        <Field name="actionCity" component={"input"} type="radio" value="arkhangelsk"
                               className="c-radio"/>Архангельск
                        <Field name="actionCity" component={"input"} type="radio" value="tula" className="c-radio"/>Тула
                        {/* <Field name="actionCity" component={"input"} type={"checkbox"} className="c-selector">Архангельск</Field> */}
                    </div>
                    <div className="c-form-grid__item">
                        <label htmlFor="" className="c-label">Кафе</label>
                        <Field name="cafe" component={CheckboxGroup} options={optionsList} className="c-checkbox"/>

                        {/*<FormSection name="cafe">*/}
                        {/*<Field name="dzerzhinskogo7" component={"input"} type="checkbox" value="17aa8a63-fe59-470f-bf78-d633c454f329" className="c-checkbox" />Кафе на Дзержинского 7*/}
                        {/*<Field name="leningradskij38" component={"input"} type="checkbox" value="dfae61dd-1666-4068-b3fb-3cc65be4e0fd" className="c-checkbox" />ТРЦ Макси, пр. Ленинградский, 38*/}
                        {/*</FormSection>*/}

                        {/* <Field name="actionCafe" component="select" type="select-multiple" className="c-selector">
                            <option value="17aa8a63-fe59-470f-bf78-d633c454f329">Кафе на Дзержинского 7</option>
                            <option value="dfae61dd-1666-4068-b3fb-3cc65be4e0fd">ТРЦ Макси, пр. Ленинградский, 38</option>
                        </Field> */}
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