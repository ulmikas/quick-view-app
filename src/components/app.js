import axios from 'axios';
import { h, Component } from 'preact';

import Product from './product';

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

    this.setState({
      current: '49734735',
      prev: this.getPrev('49734735'),
      next: this.getNext('49734735'),
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

  getProductDetails = () => {
    const sId = '7022058';
    const sToken = 'public_yNBvHgxcC35pr7bt1mQBLntdkUV98tXQ';
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
    e.preventDefault();
    if (e.target.classList.contains('quick-view-btn') || e.target.classList.contains('quick-view-nav')) {
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

  closePreview = () => {
    document.body.classList.remove('noscroll');
    this.setState({
      shown: false,
    });
  }

  render() {
    return (
      <div>
        {(this.state.shown)
          ?
            <div class={`quick-view quick-view--shown${(this.state.loading ? ' quick-view--loading' : '')}`}>
              <div class="quick-view__container">
                <a href="/close" class="quick-view-close" onClick={this.closePreview}>&times;</a>
                {(this.state.prev) ? <a href={this.state.prev} rel={this.state.prev} class="quick-view-nav quick-view-nav--prev" onClick={this.openPreview}><span>Prev</span></a> : null}
                <Product {...this.state.product} />
                {(this.state.next) ? <a href={this.state.next} rel={this.state.next} class="quick-view-nav quick-view-nav--next" onClick={this.openPreview}><span>Next</span></a> : null}
              </div>
            </div>
          :
            <div class={`quick-view${(this.state.loading ? ' quick-view--loading' : '')}`} />
        }
      </div>
    );
  }
}
