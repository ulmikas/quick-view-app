import { h, Component } from 'preact';
import style from './style.scss';

export default class Product extends Component {
  render(props) {
    return (
      <div class={style.qvProduct}>
        {props.id}
        <p class={style.productName}>{props.name}</p>
        <img alt="" src={props.imageUrl} />
        <div dangerouslySetInnerHTML={{ __html: props.description }} />
        {(props.enabled) ? 'Enabled' : 'Disabled'}
      </div>
    );
  }
}
