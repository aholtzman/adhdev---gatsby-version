import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import SocialBar from './SocialBar'

const Bar = styled.div`
  width: 250px;
  height: 100%;
  background-color: #3f4040;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    padding-top: 10px;
    color: white;
    font-size: 25px;
  }

  h3 {
    color: white;
  }
`

const Links = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: white;
    line-height: 50px;

    &:hover {
      opacity: .6;
    }
  }
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 80px;
`

const Nav = () => {
  return (
    <Bar>
      <Image src={require('../images/logo.png')} />
      <h1>Adam Holtzman</h1>
      <h3>front end developer</h3>
      <Links>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <a href='http://www.adamholtzman.com' target='_blank' rel="noopener noreferrer" >Artwork</a>
        <Link to='contact'>Contact</Link>
      </Links>
      <SocialBar />
    </Bar>
  )
}

export default Nav
