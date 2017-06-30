import React from 'react';

const Dropdown = (props) => {
    const options = props.inputOptions.map((opt, index) => {
        return(
            <option
                key={index + 1}
                value={opt}>
                {opt}
            </option>
        );
    });

    return(
        <select
            id={props.inputName}
            name={props.inputName}
            onChange={props.inputChange}>
            <option
                key='0'
                value={props.inputDefaultText}>
                {props.inputDefaultText}
            </option>
            {options}
        </select>
    );
}

export default Dropdown;
