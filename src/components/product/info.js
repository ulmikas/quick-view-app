import { h, Component } from 'preact';
// import style from './style.scss';

export default class ProductInfo extends Component {
  addToCart = () => {
    if (Ecwid) {
      Ecwid.Cart.addProduct({
        id: this.props.id,
        quantity: 1,
        callback: (success, product, cart) => {
          console.log(success);
          console.log(product.name);
        },
      });
    }
  }

  render(props) {
    console.log(props);
    return (
      <div class="qv-product__info qv-product-info">
        <div class="qv-product-info__sku">SKU: {props.sku}</div>
        {(props.inStock) ? <div class="qv-product-info__instok">In stock</div> : <div class="qv-product-info__outofstok">Out of stock</div>}
        <div class="qv-product-info__name">{props.name}</div>
        <div class="qv-product-info__price">{(!Ecwid) ? Ecwid.formatCurrency(props.price) : props.price}</div>
        {props.wholesalePrices ? <div class="qv-product-info__wholesale">{props.wholesalePrices[0].price}</div> : ''}
        {props.quantity}
        <div>
          <button class="qv-product__btn qv-product__btn--buy" onClick={this.addToCart}>BUY</button>
        </div>
      </div>
    );
  }
}
