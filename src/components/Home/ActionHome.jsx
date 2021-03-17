import React, {useState} from "react";
import Counter from "../Counter/Counter";
import Modal from "../Modal/Modal";

const ActionHome = (props) => {
    console.log("ActionHome", props);

    const [isShowModal, setToggleModal] = useState(false);
    const [totalSum, setTotalSum] = useState(props.newPrice);


    const countHandler = (value) => {
        setTotalSum(value * props.newPrice);
    }


    return (

        <>
            {isShowModal &&
            <Modal show={isShowModal} handleClose={() => setToggleModal(false)}>
                <div className="c-modal--small">
                    <div className="c-modal__body">
                        <div className="c-modal-box">
                            <div className="c-modal-title">Выберите количество:</div>
                            <div className="c-modal-counter">
                                <div className="c-modal-counter__col">
                                    <Counter limit={{min:1, max:5}} countHandler={countHandler}/>
                                </div>
                                <div className="c-modal-counter__col">
                                    <span>Сумма к оплате:</span>
                                    <div className="c-modal-counter__sum">{totalSum}</div>
                                </div>
                            </div>
                        </div>
                        <div className="c-modal-box">
                            <div className="c-modal-title">Выберите кафе:</div>

                        </div>
                    </div>
                    <div className="c-modal__footer">
                        <div className="c-btn-layout right">
                            <button className="c-btn">Перейти к оплате →</button>
                        </div>
                    </div>


                </div>





            </Modal>

            }


        <div className="action-layout">
            <div className="action-box">
                <div className="presto-sale__body">

                    <div className="action-label">Уникальное предложение!</div>

                    <h2 className="action-title">{props.title}</h2>

                    <div className="action-text">
                        {props.description}
                        {/* Акция действует только на самовынос из кафе в ТРЦ Макси. Заказ будет ждать вас через 30 минут */}
                    </div>



                    <div className="action-footer">
                        <button type="button" className="action-btn" id="pay" onClick={()=> setToggleModal(true)}>Купить онлайн</button>

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
                    {props.img 
                        ? <img src={props.img} alt={props.title}/>
                        : <div className="presto-sale-img__figure"></div>
                    }               
                    {/* <div className="presto-sale__composition-icon js-composition">i</div>
                    <div className="presto-sale__composition">
                        {props.description}
                    </div> */}
                    <div className="presto-sale-price">
                        <span className="presto-sale-price__new">{props.newPrice}</span>
                        <span className="presto-sale-price__old">{props.oldPrice}</span>
                    </div>
                </div>
            </div>
            <div className="action-step">
                <div className="action-step__item">
                    <div className="action-step-card">
                        <div className="action-step-card__text">
                            Выберите количество акционного блюда и кафе
                        </div>
                    </div>
                </div>
                <div className="action-step__item">
                    <div className="action-step-card">
                        <div className="action-step-card__text">
                            Оплатите заказ он-лайн на сайте
                        </div>
                    </div>
                </div>
                <div className="action-step__item">
                    <div className="action-step-card">
                        <div className="action-step-card__text">
                            Заберите ваш заказ в кафе через 30 минут
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default ActionHome;