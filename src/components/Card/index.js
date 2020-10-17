import React from 'react';

import { Container, Shoe, Description, Cards } from './styles';


function Card(props) {
  return (
    <Container>
        <h1 className={props.color}>PANTONE 7743C</h1>

        <Cards>
            <Shoe className={props.color}>
                <img className="logo" src={props.logo} alt="nike"/>
                <img className="shoe" src={props.shoe} alt="nike"/>
            </Shoe>

            <Description>
                <div className="title">
                    <h3>{props.brand}</h3>
                    
                    <h1>{props.title}</h1>
                </div>

                <p>{props.description}</p>

                <button className={props.color}>$220- ADD TO CART</button>
            </Description> 
        </Cards>
    </Container>
  );
}

export default Card;