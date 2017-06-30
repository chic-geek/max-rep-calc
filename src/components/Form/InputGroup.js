import React from 'react';
import Input from './Input.js';

class InputGroup extends React.Component {

    renderWithLabel() {
        return(
            <div>
                <label
                    htmlFor={this.props.inputName}
                    className="label"
                >
                    {this.props.inputLabel}
                </label>

                <p className="control">
                    <Input
                        inputName={this.props.inputName}
                        inputType={this.props.inputType}
                        inputClasses={this.props.inputClasses}
                        inputChange={this.props.inputChange}
                        inputPlaceholder={this.props.inputPlaceholder}
                    />
                </p>
            </div>
        );
    }

    renderWithoutLabel () {
        return(
            <p className="control">
                <Input
                    inputName={this.props.inputName}
                    inputType={this.props.inputType}
                    inputClasses={this.props.inputClasses}
                    inputChange={this.props.inputChange}
                    inputPlaceholder={this.props.inputPlaceholder}
                />
            </p>
        );
    }

    render() {
        return(
                (this.props.inputHasLabel === 'true') ?
                    this.renderWithLabel() :
                    this.renderWithoutLabel()
        );
    }
}

export default InputGroup;
