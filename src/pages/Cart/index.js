import React from 'react';

import { Container, Footer } from './styles';
import airmax from "../../images/airmax.png"
import { FiTrash2 } from "react-icons/fi"


function Cart() {
  


  return (
    <Container>
      <table>
        <tr>
          <th></th>
          <th>Produto</th>
          <th>QTD</th>
          <th>SubTotal</th>
          <th></th>
        </tr>
        <tr>
          <td><img src={airmax} alt="nike"/></td>
          <td>Air Max Nike </td>
          <td>
            <input disabled placeholder="3" type="text"/>
          </td>
          <td>1000R$</td>
          <td><FiTrash2 /></td>
        </tr>
      </table>

      <Footer>
        <button>Finalizar Pedido</button>

        <div className="total">
          <small>Total</small>
          <h1>R$ 978,90 R$</h1>
        </div>
      </Footer>

    </Container>
  );
}

export default Cart;