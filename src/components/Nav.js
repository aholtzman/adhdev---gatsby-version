import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Bar = styled.div`
  width: 250px;
  height: 100%;
  background-color: #3f4040;
  padding: 30px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    padding-top: 10px;
    color: white;
    font-size: 25px;
  }

  h3 {
    color: white;
  }

  img {
    width: 150px;
    height: 150px;
  }
`

const Links = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: pink;
    line-height: 50px;
  }
`

const Nav = () => {
  return (
    <Bar>
      <img src={require('../images/logo.png')} />
      <h1>Adam Holtzman</h1>
      <h3>front end developer</h3>
      <Links>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <a href='http://www.adamholtzman.com'>Artwork</a>
        <Link to='contact'>Contact</Link>
      </Links>
    </Bar>
  )
}

export default Nav
