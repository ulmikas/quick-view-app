import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

const Product = props => (
  <div className="qv-product">
    {props.id}
    <img alt="" src={props.imageUrl} />
  </div>
);

Product.propTypes = {
  id: PropTypes.number,
  imageUrl: PropTypes.string,
};

Product.defaultProps = {
  id: 0,
  imageUrl: '',
};

export default Product;
