import React, { useContext, useEffect, useState } from 'react';
import '../App.css';
import ProductContext from '../store/context/ProductContext';

function Cards() {
  const { getProducts } = useContext(ProductContext);

  const [useProducts, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProducts() {
      const result = await getProducts();
      setProducts(result);
    }
    getAllProducts();
  }, []);

  console.log('11111', useProducts);
  return (
    <div className="ProductCard">

      <p
        data-testid="customer_products__element-card-title-<id>"
        name="nome_product"
      >
        Titulo do produto
      </p>

      <img
        data-testid="customer_products__img-card-bg-image-<id>"
        name="image_product"
        src="http://shop.webstudio.adm.br/site/img/produtos/287734_1_g.jpg"
        alt="product"
        height="80%"
        width="80%"
      />

      <p
        data-testid="customer_products__element-card-price-<id>"
        name="preco"
      >
        Preço
      </p>

      <button
        data-testid="customer_products__button-card-rm-item-<id>"
        type="button"
        name="diminuir_quat"
        onClick={ () => {} }
      >
        -
      </button>

      <input
        data-testid="customer_products__input-card-quantity-<id>"
        type="number"
        name="quantidade"
      />

      <button
        data-testid="customer_products__button-card-add-item-<id>"
        type="button"
        name="acrescentar_quant"
        onClick={ () => {} }
      >
        +
      </button>
    </div>
  );
}

export default Cards;
