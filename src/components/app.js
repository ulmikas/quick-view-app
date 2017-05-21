import axios from 'axios';
import { h, Component } from 'preact';

import Product from './product';
import Navigation from './navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      current: '',
      prev: null,
      next: null,
      product: {},
      loading: false,
      shown: false,
    };
  }

  componentDidMount() {
    document.body.addEventListener('click', this.openPreview);
  }

  getProductDetails = () => {
    const sId = '7022058';
    const sToken = 'public_i3aiWjHuZs8SFDfSziFx5wC7TbtisrPj';
    return axios(`https://app.ecwid.com/api/v3/${sId}/products/${this.state.current}?token=${sToken}&cleanUrls=true`);
  }

  getPrev = (id) => {
    const index = this.state.products.indexOf(id) - 1;
    return (index < 0) ? null : this.state.products[index];
  }

  getNext = (id) => {
    const index = this.state.products.indexOf(id) + 1;
    return (index > this.state.products.length - 1) ? null : this.state.products[index];
  }

  openPreview = (e) => {
    if (e.target.classList.contains('quick-view-btn') || e.target.classList.contains('quick-view-nav')) {
      e.preventDefault();
      this.setState({
        current: e.target.rel,
        prev: this.getPrev(e.target.rel),
        next: this.getNext(e.target.rel),
        loading: true,
      });
      this.getProductDetails().then((res) => {
        document.body.classList.add('noscroll');
        this.setState({
          product: res.data,
          loading: false,
          shown: true,
        });
      });
    }
  }

  render() {
    return (
      <div class={`quick-view${(this.state.shown ? ' quick-view--shown' : '')}${(this.state.loading ? ' quick-view--loading' : '')}`}>
        {(this.state.shown)
          ?
            <div>
              {this.state.current}
              {(this.state.prev) ? <a href={this.state.prev} rel={this.state.prev} class="quick-view-nav prevProduct" onClick={this.openPreview}>Prev</a> : null}
              <Product {...this.state.product} />
              {(this.state.next) ? <a href={this.state.next} rel={this.state.next} class="quick-view-nav nextProduct" onClick={this.openPreview}>Next</a> : null}
            </div>
          : null}
      </div>
    );
  }
}
