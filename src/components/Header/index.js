import React from 'react';
import { Link } from "react-router-dom"

import { Container } from './styles';
import { FiShoppingCart } from "react-icons/fi"

function Header() {
  return (
      <Container>
          <h1>ShoeComerce</h1>

          <ul>
              <Link to="/">Home</Link>
              <li>Product</li>
              <Link to="/cart">
                  Cart
                  <FiShoppingCart />
              </Link>
          </ul>
      </Container>
  );
}

export default Header;