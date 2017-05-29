import { h, Component } from 'preact';

export default class ProductOptions extends Component {
  render(props) {
    console.log('!!', props);
    return (
      <div class="qv-product__options">
        {Object.keys(props).map(k => <div>{props[k].type}, {props[k].name}, {props[k].required}</div>)}
      </div>
    );
  }
}


// type: "RADIO", name: "Color", choices: Array(3), defaultChoice: 2, required: false