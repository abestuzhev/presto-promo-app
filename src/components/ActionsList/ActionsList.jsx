const ActionsList = (props) => {
    console.log("AсtionsList", props);
    return (
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
                                        <a href={"http://localhost:3000/" + action.city.url + "/actions/" + action.id } className="action-card__link">http://localhost:3000/{action.city.url}/actions/{action.id}</a>
                                    </div>
                                    
                                    <div className="action-card__text">{action.composition}</div>
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
                                                <div> {
                                                    action.organizations.map(cafe => {
                                                        return (<div>{cafe.name} </div>)
                                                    })
                                                }</div>
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
                                            <div className="action-card-operation__item">
                                                <div className="c-icon"></div>
                                            </div>
                                            <div className="action-card-operation__item">
                                                <div id="" className="c-switcher">
                                                    <input id={"c-switcher-" + action.id} className="c-switcher__input" type="checkbox" value="" />
                                                    <label htmlFor={"c-switcher-" + action.id} className="c-switcher__label">                                                
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
    )
}

export default ActionsList;