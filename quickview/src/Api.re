let storeId = "7022058";

let token = "public_yNBvHgxcC35pr7bt1mQBLntdkUV98tXQ";

let url = productId =>
  "https://app.ecwid.com/api/v3/"
  ++ storeId
  ++ "/products/"
  ++ productId
  ++ "?token="
  ++ token
  ++ "&cleanUrls=true";

let parseProductJson = (json: Js.Json.t) : Product.product =>
  Json.Decode.{
    description: json |> field("description", string),
    enabled: json |> field("enabled", bool),
    id: json |> field("id", int),
    imageUrl: json |> field("imageUrl", string),
    inStock: json |> field("inStock", bool),
    name: json |> field("name", string),
    originalImageUrl: json |> field("originalImageUrl", string),
    price: json |> field("price", float),
    sku: json |> field("sku", string),
    url: json |> field("url", string),
  };

let parseProductsJson = json => Json.Decode.array(parseProductJson, json);

let fetchProduct = (productId) =>
  Js.Promise.(
    Axios.get(url(productId))
    |> then_(response => resolve(parseProductJson(response##data)))
  );

let fetchProducts = () =>
  Js.Promise.(
    Axios.get("http://localhost:3005/data")
    |> then_(response => resolve(parseProductsJson(response##data)))
  );

let fetchProductsIds = () : list(string) => [
  "49734739",
  "49734740",
  "49734741",
];

/* https://app.ecwid.com/api/v3/7022058/products/49734739?token=public_yNBvHgxcC35pr7bt1mQBLntdkUV98tXQ&cleanUrls=true */