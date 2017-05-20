import axios from 'axios';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      current: '',
      shown: {},
      loading: false,
    };
  }

  componentDidMount() {
    console.log(this.state.products);
    document.body.addEventListener('click', this.openPreview);
  }

  getProductDetails = () => {
    // console.log('this is:', this);
    const sId = '7022058';
    const sToken = 'public_i3aiWjHuZs8SFDfSziFx5wC7TbtisrPj';
    return axios(`https://app.ecwid.com/api/v3/${sId}/products/${this.state.current}?token=${sToken}&cleanUrls=true`);
  }

  openPreview = (e) => {
    if (e.target.classList.contains('quick-view-btn')) {
      this.setState({ current: e.target.rel });
      this.getProductDetails().then((res) => { this.setState({ shown: res.data }); });
    }
  }

  render() {
    return (
      <div className="quick-view">
        <Product {...this.state.shown} />
      </div>
    );
  }
}

App.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string).isRequired,
};

App.defaultProps = {
  products: [],
};

export default App;
