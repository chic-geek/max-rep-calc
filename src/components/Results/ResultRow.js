import React from 'react';
import InputGroup from '../Form/InputGroup';
// import DropdownGroup from '../Form/DropdownGroup';

class ResultRow extends React.Component {
    constructor(props) {
        super(props);
        this.renderResultOneRM = this.renderResultOneRM.bind(this);
        this.renderResultRow = this.renderResultRow.bind(this);
        this.state = {};
    }

    renderResultOneRM() {
        return(
            <tr>
                <th>One rep max</th>
                <td>{this.props.resultRowOneRepMax}kg</td>
            </tr>
        );
    }

    renderResultRow() {
        return(
            <tr>
                <th>
                    <InputGroup
                        inputName="rmPercentage"
                        inputType="number"
                        inputHasLabel="false"
                        inputClasses="input is-small"
                        inputChange={this.props.resultChange}
                        inputPlaceholder="Calculate %" />
                </th>
                <td>{this.props.resultPercentage}kg</td>
            </tr>
        );
    }

    render() {
        return(
            (this.props.resultRowType === 'oneRepMax') ?
                this.renderResultOneRM() :
                this.renderResultRow()
        );
    }
}

export default ResultRow;
