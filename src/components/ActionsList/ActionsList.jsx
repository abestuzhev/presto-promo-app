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
                                    <div className="action-card__title">{action.title}</div>
                                    <div className="action-card__status">
                                        {action.status
                                        ? <span className="action-card__status--green"></span>
                                        : <span className="action-card__status--red"></span>
                                    }
                                    </div>
                                </div>
                                <div className="action-card__text">{action.composition}</div>
                                <ul className="action-card-property">
                                    <li className="action-card-property__item">
                                        <span>Новая цена: {action.newPrice}</span>
                                    </li>
                                    <li className="action-card-property__item">
                                        <span>Старая цена: {action.oldPrice}</span>
                                    </li>
                                    <li className="action-card-property__item">
                                        <span>Кафе: {
                                            action.organizations.map(cafe => {
                                                return (<i>{cafe.name} </i>)
                                            })
                                        }</span>
                                    </li>
                                    <li className="action-card-property__item">
                                        <span>Город: {action.city.name}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ActionsList;