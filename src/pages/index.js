import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    padding: 8px;
    border: thin solid dimgrey;
    width: 80%;

    @media (max-width: 1000px) {
      width: 60%;
      margin: 0;
    }
  }
`

const IndexPage = () => (
  <Container>
    <img src={require('../images/self.jpg')} />
    <h2>Adam David Holtzman</h2>
    <h3>Fine Art Photgraphy – Art Book Designer – Front End Developer </h3>
  </Container>
)

export default IndexPage
