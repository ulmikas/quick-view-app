[%bs.raw {|require('./product.css')|}];

type product = {
  description: string,
  enabled: bool,
  id: int,
  imageUrl: string,
  inStock: bool,
  name: string,
  originalImageUrl: string,
  price: float,
  sku: string,
  url: string,
};

let component = ReasonReact.statelessComponent("Product");

let str = ReasonReact.stringToElement;
let dangerousHtml: string => Js.t('a) = html => {"__html": html};

let make = (~product: product, _children) => {
  ...component,
  render: (_self) => 
    <div className="qv-product">
      <div className="qv-product__container">
        <img src=product.imageUrl />
        /* <div className="qv-product__gallery">
          <GalleryImages images={product.galleryImages} mainImage={this.props.imageUrl} />
        </div> */
        /* <ProductInfo {...props} /> */
      </div>
      <div
        className="qv-product__description qv-product-description"
      >
        /* ref={(description) => { this.description = description; }}
        <button onClick={this.showDescription} ref={(btnText) => { this.btnText = btnText; }}>
          Show Description
        </button> */
        <div className="qv-product-description__container">
          <div dangerouslySetInnerHTML=(dangerousHtml(product.description)) />
        </div>
      </div>
      <div className="qv-product__footer">
        <a className="qv-product__footer-link"
          href={product.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {str("See full details")}
        </a>
      </div>
    </div>
};
