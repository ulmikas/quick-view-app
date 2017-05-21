import { h, Component } from 'preact';
import style from './style.scss';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <a href="#" class="prevProduct">Prev</a>
        <a href="#" class="nextProduct">Next</a>
      </div>
    );
  }
}
