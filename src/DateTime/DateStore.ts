
import {EventEmitter} from 'events';

export default class DateStore extends EventEmitter {

	static $service = 'DateTime.DateStore';
	constructor() {
		super();
		setInterval(() => {
			this.emit('now', new Date());
		}, 1000);
	}
	
	onNow(callback: (now: Date) => void) {
		return this.on('now', callback);
	}
}
