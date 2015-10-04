
import * as React from 'react';
import * as moment from 'moment';
import Component from '../React/Component';
import DateStore from '../DateTime/DateStore';

export default class WelcomePage extends Component<{}, {
	now?: Date;
}, {}> {

	private dateStore: DateStore;

	constructor(props, context) {
		super(props, context);
		this.dateStore = new DateStore;
		this.state = {};
	}

	componentWillMount() {
		this.dateStore.onNow((now: Date) => this.setState({ now: now }));
	}

	render() {
		return (
			<div>
				{moment(this.state.now).format('YYYY-MM-DD hh:mm:ss')}
			</div>
		);
	}
}
