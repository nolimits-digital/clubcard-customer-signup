import React from 'react'

const InputWrapper = ({myPlaceholder, InputType, InputLabel, inputID, inputName, onChange}) => {
    return (
        <div className="input-wrapper">
            <label>{InputLabel}</label>
            <input type={InputType} placeholder={myPlaceholder} id={inputID} name={inputName} onChange = {(e) => onChange(e)} />
        </div>
    )
}

export default InputWrapper