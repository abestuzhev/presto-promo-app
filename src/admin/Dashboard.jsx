import React from "react";
import { NavLink } from "react-router-dom";

const Dashboard = (props) => {
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
                                       <ul className="user-bar__partner-settings">
                                           <li className="user-bar__partner-settings-item">
                                                <a href="#/outlets" id="ember105" className="user-bar__child-link ember-view">Торговые точки</a>
                                            </li>
                                           <li className="user-bar__partner-settings-item">
                                                <a href="#/employees" id="ember106" className="user-bar__child-link ember-view">Сотрудники</a>
                                            </li>                         
                                        </ul>
                                    </li>
                                    <li className="user-bar__child-item">
                                        <a href="#/features" className="user-bar__child-link user-bar__child-link features ember-view">Решения для бизнеса</a>
                                    </li>
                                    <li className="user-bar__child-item">
                                       <a href="#/user-settings" id="ember108" className="user-bar__child-link ember-view">Профиль</a>
                                   </li>
                                    <li className="user-bar__child-item">
                                        <a href="#/support" id="ember109" className="user-bar__child-link ember-view">Поддержка</a>
                                  </li>
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
                
                <div className="table">

                    <div className="row header">
                        <div className="cell">
                            Изображение
                        </div>
                        <div className="cell">
                            Название
                        </div>
                        <div className="cell">
                            Описание
                        </div>
                        <div className="cell">
                            Новая цена
                        </div>
                        <div className="cell">
                            Старая цена
                        </div>
                        <div className="cell">
                            Статус
                        </div>
                        <div className="cell">
                            ред
                        </div>
                    </div>

                    <div className="row">

                    </div>


                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard;