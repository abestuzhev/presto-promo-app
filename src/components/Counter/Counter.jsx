import React, {useState} from "react";
const Counter = ({limit, countHandler}) => {


    const [count, setCount] = useState(1);
    const [disabledIncrement, setDisabledIncrement] = useState(false);
    const [disabledDecrement, setDisabledDecrement] = useState(false);

    const validateNumber = (type, count) => {
        countHandler(count);
        if(type === "increment"){
            setCount(count);
            count  >= limit.max ? setDisabledIncrement(true) : setDisabledDecrement(false);
            // console.log("incrementCount", count );
        }else if(type === "decrement") {
            setCount(count);
            setDisabledIncrement(false)
            count  === limit.min ? setDisabledDecrement(true) : setDisabledIncrement(false);
            // console.log("decrementCount", count );
        }
    }

    return (
        <div className="c-counter">
            <button onClick={() => {
                validateNumber("decrement", count - 1);
                }} disabled={disabledDecrement} className="c-counter__btn">-</button>
            <span className="c-counter__number">{count}</span>
            <button onClick={() => {
                validateNumber("increment", count + 1);
                }} disabled={disabledIncrement} className="c-counter__btn">+</button>
        </div>
    )
}

export default Counter;