
import * as React from 'react';
import * as moment from 'moment';
import Component from '../React/Component';
import DateStore from '../DateTime/DateStore';

export default class WelcomePage extends Component<{}, {
	now?: Date;
	rest?: {
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	};
}, {}> {

	private dateStore: DateStore;

	constructor(props, context) {
		super(props, context);
		this.dateStore = new DateStore;
		this.state = {
			rest: {
				days: null,
				hours: null,
				minutes: null,
				seconds: null,
			}
		};
	}

	componentWillMount() {
		this.dateStore.onNow((now: Date) => this.updateTime(now));
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

				{this.notYet() ? <div className="rest-time">
					Zbývá&nbsp;
					{this.state.rest.days
						? < span className="important">{this.state.rest.days}&nbsp; {this.format(this.state.rest.days, 'den', 'dny', 'dní') }, &nbsp; </span>
						: null}
					
					{this.state.rest.hours
						? <span className="important">{this.state.rest.hours}&nbsp; {this.format(this.state.rest.hours, 'hodina', 'hodiny', 'hodin') }, &nbsp; </span>
						: null}
					{this.state.rest.minutes
						? <span>{ this.state.rest.minutes } &nbsp; {this.format(this.state.rest.minutes, 'minuta', 'minuty', 'minut') }, &nbsp; </span>
						: null}
					{this.state.rest.seconds
						? <span>{ this.state.rest.seconds } &nbsp; {this.format(this.state.rest.seconds, 'vteřina', 'vteřiny', 'vteřin') }&nbsp; </span>
						: null}
				</div> : <div className="rest-time bigger">Už jsou svoji :)</div>}
				<div className="wedding-date">
					6. 6. 2016<br/>
					Čertousy
				</div>
				<div className="time">
					{moment(this.state.now).format('YYYY-MM-DD hh:mm:ss')}
				</div>
				<div className="fb-comments" data-href="http://www.marcelashonzou.cz/" data-numposts="5"></div>
			</div>
		);
	}

	private notYet() {
		return moment(this.state.now).isBefore(this.getTargetMoment());
	}

	private getTargetMoment() {
		return moment('2016-06-06 11:15:00');
	}

	private updateTime(now: Date) {
		const nowMoment = moment(now);
		const days = this.getTargetMoment()
			.diff(nowMoment, 'days');
		const hours = this.getTargetMoment()
			.subtract(days, 'days')
			.diff(nowMoment, 'hours');
		const minutes = this.getTargetMoment()
			.subtract(days, 'days')
			.subtract(hours, 'hours')
			.diff(nowMoment, 'minutes');
		const seconds = this.getTargetMoment()
			.subtract(days, 'days')
			.subtract(hours, 'hours')
			.subtract(minutes, 'minutes')
			.diff(nowMoment, 'seconds');
		const rest = {
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
		this.setState({
			now: now,
			rest: rest
		});
	}

	private format(count: number, one: string, two: string, five: string) {
		switch (true) {
			case count === 1:
				return one;
			case count > 1 && count < 5:
				return two;
			default:
				return five;
		}
	}
}
