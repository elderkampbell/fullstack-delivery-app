import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ProductContext from '../context/ProductContext';
import getAllProducts from '../../services/product.services';

export default function ProductProvider({ children }) {
  const [useProducts, setProducts] = useState({
    products: [],
  });

  async function getProducts() {
    try {
      const products = await getAllProducts();
      setProducts({ ...products });

      return products;
    } catch (error) {
      console.log('Erros na busca de produtos');
    }
  }

  const context = useMemo(() => ({
    useProducts,
    setProducts,
    getProducts,
  }), [useProducts, setProducts]);

  return (
    <ProductContext.Provider value={ context }>
      { children }
    </ProductContext.Provider>
  );
}
ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};