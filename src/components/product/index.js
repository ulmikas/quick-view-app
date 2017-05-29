import { h, Component } from 'preact';
// import style from './style.scss';
import GalleryImages from '../gallery';
import ProductInfo from './info';

export default class Product extends Component {
  showDescription = () => {
    this.description.classList.toggle('qv-product-description--expanded');
    this.btnText.innerText = (this.description.classList.contains('qv-product-description--expanded'))
      ? 'Hide description'
      : 'Show description';
  }

  render(props) {
    console.log(props);
    return (
      <div class="qv-product">
        <div class="qv-product__container">
          <div class="qv-product__gallery">
            <GalleryImages images={props.galleryImages} mainImage={this.props.imageUrl} />
          </div>
          <ProductInfo {...props} />
        </div>
        <div class="qv-product__description qv-product-description" ref={(description) => { this.description = description; }}>
          <button onClick={this.showDescription} ref={(btnText) => { this.btnText = btnText; }}>
            Show Description
          </button>
          <div class="qv-product-description__container">
            <div class="qv-product-description__content" dangerouslySetInnerHTML={{ __html: props.description }} />
          </div>
        </div>
        <div class="qv-product__footer">
          <a class="qv-product__footer-link" href={props.url} rel="noopener noreferrer" target="_blank">See full details</a>
        </div>
      </div>
    );
  }
}
