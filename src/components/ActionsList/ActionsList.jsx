import React from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {actionSuccess, changeStatus, deleteAction} from "../../redux/dashboardReducer";
import Loader from "../Loader/Loader";
import { actionsAPI } from "../../api/api";

const ActionsList = (props) => {
    console.log("AсtionsList", props);

    const switcherHandler = (actionId, status) => {
        console.log("switcherHandler", actionId);
        props.changeStatus(actionId, status);

        //отправить запрос к API
    }

    const deleteHandler = (id) => {
        actionsAPI.deleteAction(id).then(res => {
            props.deleteAction(id);
        });
        
    }

    if(!props.actions){
        return <Loader />
    }

    return (
        <>
        <div className="actions">

            {props.actions.map(action => {
                return (
                    <div className="actions-item" key={action.id}>
                        <div className="action-card">
                            <div className="action-card__img">
                                {action.img
                                    ? <img src={action.img} alt=""/>
                                    : <div className='img-square'></div>}
                            </div>
                            <div className="action-card__body">
                                <div className="action-card__head">
                                    <div className="action-card__title">
                                        <h3>{action.title}</h3>
                                        {action.status && <NavLink to={action.city + "/actions/" + action.id } className="action-card__link">
                                                http://localhost:3000/{action.city}/actions/{action.id}
                                            </NavLink>}
                                        
                                    </div>
                                    
                                    <div className="action-card__text">{action.description}</div>
                                </div>
                                <ul className="action-card-property">
                                    <li className="action-card-property__item">
                                        <div className="action-card-property__card">
                                            <div className="action-card-property__title">Цена</div>
                                            <div>Новая цена: {action.newPrice}</div>
                                            <div>Старая цена: {action.oldPrice}</div>
                                        </div>                                        
                                    </li>
                                    <li className="action-card-property__item">
                                        <div className="action-card-property__card">
                                            <div className="action-card-property__box row">
                                                <div className="action-card-property__title">Город:</div>
                                                <div>{action.city.name}</div>
                                            </div>
                                            <div className="action-card-property__box">
                                                <div className="action-card-property__title">Кафе:</div>
                                                {/* <div> 
                                                    {
                                                    action.organizations.map(cafe => {
                                                        return (<div>{cafe.name} </div>)
                                                    })}
                                                </div> */}
                                            </div>
                                            
                                            
                                        </div>
                                    </li>
                                    <li className="action-card-property__item">
                                        <div className="action-card-property__card">
                                            <div className="action-card-property__title">Время действия:</div>
                                            <div>10:00 — 16:00</div>                                            
                                        </div>
                                    </li>
                                </ul>
                                <div className="action-card__status">
                                        {/* {action.status
                                            ? <span className="action-card__status--green"></span>
                                            : <span className="action-card__status--red"></span>
                                        } */}
                                        <div className="action-card-operation">
                                            
                                            <div className="action-card-operation__item">
                                                <div className="c-icon"></div>
                                            </div>
                                            <div className="action-card-operation__item" onClick={() => deleteHandler(action.id)}>
                                                <div className="c-icon">&timer;</div>
                                            </div>
                                            <div className="action-card-operation__item">
                                                <div id="" className="c-switcher">
                                                    <input checked={action.status} onChange={() => switcherHandler(action.id, !action.status)}  id={"c-switcher-" + action.id} className="c-switcher__input" type="checkbox" value="" />
                                                    <label  htmlFor={"c-switcher-" + action.id} className="c-switcher__label">                                                
                                                        <span className="c-switcher__circle"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        actions: state.dashboard.actions
    }
}

export default connect(mapStateToProps, {changeStatus, deleteAction} )(ActionsList);