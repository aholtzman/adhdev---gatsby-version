import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-top: 100px;
`

const SocialImg = styled.img`
  width: 20px;
  height: 20px;
  padding: 10px;
`

const SocialBar = () => {
  return (
    <Container>
      <a href='#' >
        <SocialImg src={require('../images/githublogo.png')} />
      </a>
      <a href='#' >
        <SocialImg src={require('../images/linkedinlogo.png')} />
      </a>
      <a href='#' >
        <SocialImg src={require('../images/instagram.png')} />
      </a>
    </Container>
  )
}

export default SocialBar
