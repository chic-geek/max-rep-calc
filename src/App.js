import React from 'react';
import InputGroup from './components/Form/InputGroup';
import ResultRow from './components/Results/ResultRow';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

class App extends React.Component {
	constructor() {
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.calcOneRepMax = this.calcOneRepMax.bind(this);
		this.resetState = this.resetState.bind(this);

		this.defaultState = {
			numReps : 0,
			oneRepMax : 0,
			weightLifted : 0,
			rmPercentage : 0,
		}

		this.state = this.defaultState;
	}

	render() {
		return (
			<div>
				<Hero
					title="Calculator"
					subtitle="One Rep Max" />

				<div className="column is-8 is-offset-2">
					<form
						ref={(i) => this.form = i}
						onSubmit={this.handleSubmit}>

						<div className="field">
							<InputGroup
								inputName="weightLifted"
								inputHasLabel="true"
								inputLabel="Weight Lifted:"
								inputType="number"
								inputChange={this.handleChange} />
						</div>

						<div className="field">
							<InputGroup
								inputName="numReps"
								inputHasLabel="true"
								inputLabel="Number of reps:"
								inputType="number"
								inputChange={this.handleChange} />
						</div>

						<div className="field is-grouped">
							<p className="control">
								<button className="button is-info">Calculate</button>
							</p>

							<p className="control">
								<button className="button is-link" onClick={this.resetState}>Reset</button>
							</p>
						</div>
					</form>

					<hr />

					<div className="message">
						<div className="message-body">
							<div className="title is-3">Results</div>
							<table className="table is-bordered is-marginless">
								<tbody>
									<ResultRow
										resultRowType={'oneRepMax'}
										resultRowOneRepMax={this.state.oneRepMax} />

									<ResultRow
										resultChange={this.handleChange}
										resultPercentage={this.calcPercentage(this.state.rmPercentage)} />
								</tbody>
							</table>
						</div>
					</div>
					<Footer versionNum="1.0.0" />
				</div>
			</div>
		);
	}

	resetState() {
		this.setState({...this.defaultState});
		this.form.reset();
	}

	calcOneRepMax(weight, numReps) {
		return (numReps < 2) ? weight : Math.floor(weight * (1 + (numReps / 30)));
	}

	calcPercentage(percentage) {
		return Math.floor((this.state.oneRepMax / 100) * percentage);
	}

	handleChange(event) {
		const target = event.target;
		const value = (target.type === 'checkbox') ? target.checked : target.value;
		const name = target.name;
		this.setState({
			[name] : value,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			oneRepMax : this.calcOneRepMax(this.state.weightLifted, this.state.numReps),
		});
	}
}

export default App;
