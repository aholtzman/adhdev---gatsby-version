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
  justify-content: space-around;
  text-align: center;

  h1 {
    padding-top: 10px;
    color: white;
    font-size: 25px;
  }

  h3 {
    color: white;
  }

    h1 {
      padding: 0;
    }
    @media (max-width: 500px) {
      width: 100vw;
      height: 250px;
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
      color: lightgrey;
    }
  }

  @media (max-width: 500px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    a {
      padding: 7px;
    }
  }
`

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 80px;

  @media (max-width: 1500px) {
    padding-top: 10px;
  }

  @media (max-width: 500px) {
    margin: 0;
    width: 40px;
    height: 40px;
    padding-right: 10px;
  }
`

const Head = styled.div`

  @media (max-width: 500px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
`

const Nav = () => {
  return (
    <Bar>
      <div>
        <Head>
          <Link to='/'>
            <Image src={require('../images/logo.png')} />
          </Link>
          <h1>Adam Holtzman</h1>
        </Head>
          <h3>front end developer</h3>
      </div>
      <Links>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Web Projects</Link>
        <Link to='/books'>Book Design</Link>
        <a href='http://www.adamholtzman.com' target='_blank' rel="noopener noreferrer" >Artwork</a>
        <Link to='contact'>Contact</Link>
      </Links>
      <SocialBar />
    </Bar>
  )
}

export default Nav
