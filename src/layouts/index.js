import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import '../GlobalThemes'
import Nav from '../components/Nav'

const Container = styled.div`
  width: 80vw;
  height: 80vh;
  margin: auto;
  display: flex;
  margin-top: 60px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1500px) {
    width: 100vw;
    height: 100vh;
    margin: 0;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const Display = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  height: 100%;
  padding: 30px;
  background-color: white;
  overflow: scroll;
  display: flex;

  @media (max-width: 500px) {
    width: 100vw;
    height: 100%;
  }
`

const TemplateWrapper = ({ children }) => (
  <Container>
    <Helmet
      title="Adam David Holtzman Web & Book Design"
      meta={[
        { name: 'description', content: 'portfolio for front end react gatsby styled-components web developer adam holtzman' },
        { name: 'keywords', content: 'react javascript web developer book design, art artists' },
      ]}
    />
    <Nav />
    <Display>
      {children()}
    </Display>
  </Container>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
