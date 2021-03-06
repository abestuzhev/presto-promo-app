import React from "react";

class CheckboxGroup extends React.Component {
    checkboxGroup(){
        let {label, required, options, input, meta} = this.props;
        return options.map((option, index) => {

            return (
                <div className="c-checkbox" key={index}>
                    <label>
                        <input type="checkbox"
                               name={`${input.name}[${index}]`}
                               value={option.id}
                               checked={input.value.indexOf(option.id) !== -1}
                               onChange={event => {
                                   const newValue = [...input.value];
                                   if(event.target.checked){
                                       newValue.push(option.id);
                                   }else {
                                       newValue.splice(newValue.indexOf(option.id), 1)
                                   }

                                   return input.onChange(newValue);
                               }}
                        />
                        {option.name}
                    </label>
                </div>
            )
        })
    }
    // componentDidMount() {
    //     console.log("CheckboxGroup", this.props);
    //
    // }

    render(){
        return (
            <div>
                {this.checkboxGroup()}
            </div>
        )
    }
}

export default CheckboxGroup;