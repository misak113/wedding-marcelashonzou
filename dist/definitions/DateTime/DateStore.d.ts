import { EventEmitter } from 'events';
export default class DateStore extends EventEmitter {
    static $service: string;
    constructor();
    onNow(callback: (now: Date) => void): EventEmitter;
}
