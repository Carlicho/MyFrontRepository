import React from 'react'
import ProductCard from './ProductCard'
import styled from 'styled-components'



const ProductCards = () => {
  const {Product} = props


    const ProductCardsContainer = styled.div`

        `;

  return (



    
    <ProductCardsContainer>

    {Product.map((product)=>{
      ProductCard.name
      ProductCard.image
      ProductCard.price
    })

    </ProductCardsContainer>
  )
}

export default ProductCards