import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  text-align: center;

  h3 {
    padding: 20px;
  }

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
    <h3>Front end web developer specializing in React, Gatsby & Styled-Components</h3>
  </Container>
)

export default IndexPage
