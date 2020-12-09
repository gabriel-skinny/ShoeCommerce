import React from 'react';
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';

import { Container, Dot } from './styles';
import { FiShoppingCart } from "react-icons/fi"

function Header() {
  const count = useSelector(state => state.count);
  
  return (
      <Container>
          <h1>ShoeComerce</h1>

          <ul>
              <Link to="/">Home</Link>
              <li>Product</li>
              <Link to="/cart">
                  <Dot>{count}</Dot>
                  Cart
                  <FiShoppingCart />
              </Link>
          </ul>
      </Container>
  );
}

export default Header;