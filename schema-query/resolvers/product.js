export const resolver = /* GraphQL */ {
  salePrice: (product) => {
    if (product.disccount) {
      return (product.price - product.price * product.disccount).toFixed(2);
    }
    return product.price;
  },
};
