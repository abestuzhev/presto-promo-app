import React, { useState } from "react";
import { Field } from "redux-form";

const Radio = (props) => {

    const [options, setOptions] = useState({
        
    });

    const setValue = (event) => {
        console.log(event.target.value);
      }

    if(props.options){
        const renderRadioButtons = (key, index) => {
            return (
                <div key={index}>
                    <label htmlFor={`${props.input.name}-${index}`}>
                        {/* <Field 
                            id={`${props.input.name}-${index}`}
                            name={props.input.name} 
                            value={key}
                            component="input"
                            type="radio" 
                            className="c-radio"
                        /> */}

                        <input 
                            id={`${props.input.name}-${index}`}
                            type="radio"
                            className="c-radio"
                            value={key}
                            checked={index === 0 ? true : false}
                            name={props.input.name} 
                            onChange={setValue}
                        />
                        {props.options[key]}
                    </label>
                </div>
            )
        }

        return (
            <div>
    
                {props.options && Object.keys(props.options).map(renderRadioButtons)}
    
            </div>
        );
    }
    return <div></div>   

    
}

export default Radio;