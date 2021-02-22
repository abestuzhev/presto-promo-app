import React from "react";

const ActionHome = (props) => {
    console.log("ActionHome", props);
    return (
        <div className="action-box">
            <div className="presto-sale__body">

                <div className="action-label">Уникальное предложение!</div>

                <h2 className="action-title">{props.title}</h2>

                <div className="action-text">
                    Акция действует только на самовынос из кафе в ТРЦ Макси. Заказ будет ждать вас через 30 минут
                </div>



                <div className="action-footer">
                    <button type="button" className="action-btn" id="pay">Купить онлайн</button>

                    <div className="action-note">
                        *Акция действует только на самовынос по адресу: 
                        Срок действия акции ограничен. С акциями и бонусами не пересекается.
                    </div>

                    {/* <div class="presto-sale-order">
                        <div className="presto-sale-order__name"></div>
                        <div className="presto-sale-order__number"></div>
                    </div> */}
                </div>

            </div>
            <div className="presto-sale-img">
                <div className="presto-sale-img__figure"></div>
                {/* <div className="presto-sale__composition-icon js-composition">i</div>
                <div className="presto-sale__composition">
                    Колбаски Чоризо, томатный соус, сыр Моцарелла, орегано
                </div> */}
                {/* <div className="presto-sale-img__card"></div> */}
            </div>
        </div>
    )
}

export default ActionHome;