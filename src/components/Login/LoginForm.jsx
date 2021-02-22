import React from "react";

const LoginForm = (props) => {
    return (
        <form action="" className="c-form">
            <div className="c-form__item">
                <label className="c-label" htmlFor="">Логин</label>
                <input className="c-input" type="text"/>
            </div>
            <div className="c-form__item">
                <label className="c-label" htmlFor="">Пароль</label>
                <input className="c-input" type="password"/>
            </div>
            <div className="c-form__footer">
                <div className="c-form__item">
                    <button className="c-btn" type="submit">Войти</button>
                </div>
                <div className="c-form__item">
                    <div className="c-checkbox">
                        <input type="checkbox" id="authRememberMe"/>
                        <label htmlFor="authRememberMe">Запомнить меня на этом компьютере</label>
                    </div>                
                </div>
            </div>
            
        </form>
    )
}

export default LoginForm;