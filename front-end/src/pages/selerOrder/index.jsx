import React, { useContext } from 'react';
// import React, { useState, useEffect, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import OrderCard from '../../components/orderCard';
// import api from '../../services/api';
import UserContext from '../../store/context/UserContext';

function SellerOrder() {
  // const history = useHistory();
  // const seller = (history.location.pathname).includes('seller');

  // const [orders, setOrders] = useState([]);
  const { user } = useContext(UserContext);

  // useEffect(() => {
  //   async function getAllOrders() {
  //     // QUANDO CHEGAR NESSE REQUISITO AJUSTAR A ROTA COM O ID DINÂMICO
  //     const { data } = await api.get('/order/3');
  //     const newOrders = Object.values(data.orders);
  //     setOrders(newOrders);
  //   }
  //   getAllOrders();
  // }, []);

  return (
    <main>
      <nav>
        <div data-testid="customer_products__element-navbar-link-orders">
          PEDIDOS
        </div>
        <div data-testid="customer_products__element-navbar-user-full-name">
          { user.name }
        </div>
        <div data-testid="customer_products__element-navbar-link-logout">
          Sair
        </div>
      </nav>
      <section>
        {/* { orders.map((ord) => (
          <OrderCard
            key={ ord.id }
            id={ ord.id }
            status={ ord.status }
            saleDate={ ord.saleDate }
            totalPrice={ ord.totalPrice }
            address={ `${ord.deliveryAddress} - ${ord.deliveryNumber}` }
            seller={ seller }
          />
        )) } */}
      </section>
    </main>
  );
}

export default SellerOrder;
