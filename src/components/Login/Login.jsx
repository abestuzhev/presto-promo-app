import React from "react";
import LoginForm from "./LoginForm";

class Login extends React.Component {
    render(){
        return (
            <div className="layout">
                <div className="form-page">
                    <div className="form-template">
                        <div className="form-template__title">Авторизация</div>
                        <div className="form-template__body">
                            <LoginForm />
                        </div>
                        
                    </div>                    
                </div>
            </div>
            
            
        )
    }
}

export default Login;