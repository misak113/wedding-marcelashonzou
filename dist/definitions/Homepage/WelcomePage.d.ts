import Component from '../React/Component';
export default class WelcomePage extends Component<{}, {
    now?: Date;
    rest?: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    };
}, {}> {
    private dateStore;
    constructor(props: any, context: any);
    componentWillMount(): void;
    render(): JSX.Element;
    private notYet();
    private getTargetMoment();
    private updateTime(now);
    private format(count, one, two, five);
}
