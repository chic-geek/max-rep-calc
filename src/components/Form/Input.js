import React from 'react';

const Input = (props) => {
    return(
        <input
            className={props.inputClasses || 'input'}
            name={props.inputName}
            id={props.inputName}
            type={props.inputType}
            onChange={props.inputChange}
            placeholder={props.inputPlaceholder}
        />
    );
}

export default Input;
