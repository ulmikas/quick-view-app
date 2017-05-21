import { h, Component } from 'preact';
import style from './style.scss';

export default class Home extends Component {
	render(props, state) {
		return (
			<div class={style.qvProduct}>
				{props.id}
				<img alt="" src={props.imageUrl} />
				<div dangerouslySetInnerHTML={{ __html: props.description }} />
				{(props.enabled) ? 'Enabled' : 'Disabled'}
			</div>
		);
	}
}