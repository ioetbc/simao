import React from 'react'
import styled from 'styled-components'

const ProductPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  @media screen and (min-width: 540px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export const ProductPage = ({ children }) => {
  return <ProductPageContainer>{children}</ProductPageContainer>
}
