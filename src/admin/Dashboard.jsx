import React from "react";
import { NavLink } from "react-router-dom";
import ActionsList from "../components/ActionsList/ActionsList";


class Dashboard extends React.Component {

    render(){
        return (
            <>
                <header className="header">
                    <div className="layout">
                        <div className="navigation">
                            <ul className="navigation__list">
                                <div className="navigation__item">
                                    <div className="logo"></div>
                                </div>
                                <li className="navigation__item ember-view">
                                    <NavLink to="/" className="navigation__link active ember-view">Home</NavLink>
                                </li>
                                {/* <li id="" className="navigation__item ember-view">
                            <a href="#/dashboard" className="navigation__link active ember-view">Настройки</a>
                        </li> */}
                            </ul>
                            <div className="user-bar">
                                <ul className="user-bar__list">
                                    <li className="user-bar__item user-bar__item--parent">
                                        <div className="user-bar__company-name-wrapper">
                                            <span className="user-bar__user-name"><a href="#">Выход</a></span>
                                        </div>
                                        <ul className="user-bar__child-list">
                                            
                                            <li className="user-bar__child-item">
                                                <button className="user-bar__child-link user-bar__child-link log-out">
                                                    Выход
                                                </button>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="page-content">
                    <div className="layout">
                        <div className="page-header">
                            <h1 className="page-title">Список акций</h1>
                            <button className="c-btn">Создать акцию</button>
                        </div>

                        <ActionsList />

                    </div>
                </div>
            </>
        )
    }
}



export default Dashboard;