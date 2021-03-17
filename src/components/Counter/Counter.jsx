import React, {useState} from "react";
const Counter = (props) => {
    const [count, setCount] = useState(1);
    const [disabled, setDisabled] = useState(false);
    console.log("count", count);

    const validateNumber = (count) => {
        (count)  >= 4 ? setDisabled(true) : setDisabled(false);
        console.log("after", count +1 );
    }

    // count == 5 - disabled
    

    return (
        <div className="c-counter">
            <button onClick={() => {                
                setCount(count - 1);   
                validateNumber(count);         
                }}  className="c-counter__btn">-</button>
            <span className="c-counter__number">{count}</span>
            <button onClick={() => {                
                setCount(count + 1);   
                validateNumber(count);
                }} disabled={disabled} className="c-counter__btn">+</button>
        </div>
    )
}

export default Counter;