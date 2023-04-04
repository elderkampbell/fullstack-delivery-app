import React from 'react';
import PropTypes from 'prop-types';

function TbCustOrdDetHeader({ id, seller, saleDate, status }) {
  const testId = 'customer_order_details__element-order-details-label-';
  return (
    <thead>
      <tr>
        <th data-testid={ `${testId}order-id` }>
          { `PEDIDO ${id}` }
        </th>
        <th data-testid={ `${testId}seller-name` }>
          { `P. Vend: ${seller}` }
        </th>
        <th data-testid={ `${testId}order-date` }>
          { saleDate }
        </th>
        <th
          data-testid={ `${testId}delivery-status-${id}` }
        >
          { status }
        </th>
        <th data-testid="button-delivery-check">
          MARCAR COMO ENTREGUE
        </th>
      </tr>
      <tr>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
      </tr>
    </thead>
  );
}

TbCustOrdDetHeader.propTypes = {
  id: PropTypes.number,
  seller: PropTypes.string,
  saleDate: PropTypes.string,
  status: PropTypes.string,
}.isRequired;

export default TbCustOrdDetHeader;
