import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: auto;
  text-align: center;

  img {
    padding: 8px;
    border: thin solid dimgrey;
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
