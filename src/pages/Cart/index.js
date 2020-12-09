import React from 'react';

import { Container, Footer } from './styles';

import { FiTrash2 } from "react-icons/fi"
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/actions';

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);
  const total = useSelector(state => state.total);

  function handleRemove(id){
    dispatch(removeFromCart(id))
  }

  return (
    <Container>
      {products.map(product => (
        <div key={product.data.id}>
          <table>
            <tr>
              <th></th>
              <th>Produto</th>
              <th>QTD</th>
              <th>SubTotal</th>
              <th></th>
            </tr>
            <tr>
              <td><img src={product.data.shoe} alt="nike"/></td>
              <td>{product.data.title}</td>
              <td>
                <input disabled placeholder={product.amount} type="text"/>
              </td>
              <td>{(product.data.price * product.amount).toFixed(2)} R$</td>
              <td>
                <button onClick={() => handleRemove(product.data.id)}><FiTrash2 /></button>
              </td>
            </tr>
          </table>
        </div>
      ))}
      <Footer>
          <button>Finalizar Pedido</button>

          <div className="total">
            <small>Total</small>
            <h1>{total.toFixed(2)} R$</h1>
          </div>
      </Footer>
    </Container>
  );
}

export default Cart;