import React, { useState, useEffect } from "react"

import { Container, Cards } from './styles';
import Card from "../../components/Card"


import axios from "axios"

import airmax from "../../images/airmax.png"
import sakura from "../../images/sakura.png"
import yeezy from "../../images/yeezy.png"

import adidas from "../../images/adidas.svg"
import nike from "../../images/nike.svg"
import puma from "../../images/puma.svg"

function Home() {
  const [response, setResponse] = useState([])

  const images = [ airmax, sakura, yeezy ]
  const logo = [ nike, adidas, puma]


  useEffect(() => {
    async function getApi(){
      const { data } = await axios.get('http://localhost:3000/products')

      setResponse(data)
    }
    getApi()
  }, [])


  return (
      <Container>
          
          <Cards>
            {response.map(product => (
              <Card title={product.title} shoe={images[product.id]} 
              logo={logo[product.id]} color={product.color} 
              description={product.description} brand={product.brand}
              key={product.id} id={product.id} price={product.price}
              />
            ))}
          </Cards>

      </Container>
  );
}

export default Home;