import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="layout">
               <div className="navigation">
                    <ul className="navigation__list">
                        <div className="navigation__item">                            
                            <div className="logo"></div>
                        </div>
                        <li id="" className="navigation__item ember-view">
                            <a href="#" className="navigation__link active ember-view">Главная</a>
                        </li>
                        <li className="navigation__item ember-view">
                            <a href="#admin" className="navigation__link active ember-view">Dashboard</a>
                        </li>
                        
                    </ul>
                    
               </div>
            </div>
         </div>
    )
}

export default Header;