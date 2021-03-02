import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="layout">
               <div className="navigation">
                    <ul className="navigation__list">
                        <div className="navigation__item">                            
                            <div className="logo"></div>
                        </div>
                        {/* <li id="" className="navigation__item ember-view">
                            <NavLink to="/" className="navigation__link active ember-view">Главная</NavLink>
                        </li> */}
                        <li className="navigation__item ember-view">
                            <NavLink to="/admin" className="navigation__link active ember-view">Dashboard</NavLink>
                        </li>
                        <li className="navigation__item ember-view">
                            <NavLink to="/login" className="navigation__link active ember-view">Логин</NavLink>
                        </li>
                    </ul>
                    
               </div>
            </div>
         </div>
    )
}

export default Header;