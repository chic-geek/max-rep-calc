import React from 'react';
import Dropdown from './Dropdown';

const DropdownGroup = (props) => {
    return(
        <div className="field">
            <p className="control">
                <span className="select">
                    <Dropdown
                        inputName={props.inputName}
                        inputOptions={props.inputOptions}
                        inputChange={props.inputChange}
                        inputDefaultText={props.inputDefaultText} />
                </span>
            </p>
        </div>
    );
}

export default DropdownGroup;
