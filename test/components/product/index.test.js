import { h } from 'preact';
import { expect } from 'chai';

import Product from '../../../src/components/product';

describe('components/Product', () => {
  it('should show product by id', () => {
    const product = <Product product="Peach" />;
    expect(product).to.contain(<p>Peach</p>);
  });
});
