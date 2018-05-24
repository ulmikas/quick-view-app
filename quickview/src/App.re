[%bs.raw {|require('./App.css')|}];

[@bs.module] external logo : string = "./logo.svg";

type state = {
  product: option(Product.product)
};

type action = 
  | ProductFetched(Product.product);

let fakeProduct: Product.product = {
  description: "fake product",
  enabled: true,
  id: 0,
  imageUrl: "https://ecwid-images.scdn4.secure.raxcdn.com/images.ecwid.com/images/7022058/464713331.jpg",
  inStock: true,
  name: "fake",
  originalImageUrl: "https://ecwid-images.scdn4.secure.raxcdn.com/images.ecwid.com/images/7022058/464713331.jpg",
  price: 30.0,
  sku: "0",
  url: "http://url",
};

let p = Api.fetchProduct("49734739");
Js.log("!!!!");
Js.log(p);

let component = ReasonReact.reducerComponent("App");

let make = (~message, _children) => {
  ...component,

  initialState: () => {
    product: None
  },

  reducer: (action, _state) =>
    switch action {
    | ProductFetched(product) => ReasonReact.Update({product: Some(product)})
    },

  didMount: (self) => {
    let handleLoadedProducts = product => self.send(ProductFetched(product));
    Api.fetchProduct("49734740")
    |> Js.Promise.then_(
         (product) => {
            handleLoadedProducts(product);
            Js.Promise.resolve()
         }
       )
    |> ignore;
  },

  render: (self) => {
    let productComponent =
      switch self.state.product {
      | Some(product) => <Product key=(string_of_int(product.id)) product />
      | None => ReasonReact.string("Loading")
      };
    (
      <div className="App">
        <h1>{ReasonReact.string(message)}</h1>
        <div> productComponent </div>
      </div>
    )
  }
};
