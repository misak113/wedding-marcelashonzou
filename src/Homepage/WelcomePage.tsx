
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
			<div className="welcome">
				<div className="info">
					Jestliže si někdo se svatebním darem hlavu láme,<br/>
					tak vězte, že už doma skoro všechno máme.<br/>
					A proto Vám malý tip můžeme dát,<br/>
					jelikož se budeme brát,<br/>
					potěší nás příspěvek v jakékoli výši,<br/>
					který nám rozpočet na domácnost zvýší.<br/>
					Děkujeme
				</div>
				<div className="wedding-date">
					6. 6. 2016<br/>
					Čertousy
				</div>
				<div className="time">
					{moment(this.state.now).format('YYYY-MM-DD hh:mm:ss')}
				</div>
			</div>
		);
	}
}
